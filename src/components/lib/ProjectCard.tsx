import React, { useEffect } from "react";
import { LabeledButton } from "./Button";
import { useGithubRepos, Project } from "../../hooks";
import "./_project-card.scss";
import { IconLabel } from "./Label";

export interface ProjectCardProps extends Project {
    id?: string;
}

export interface ProjectCardsProps {
    projects?: ProjectCardProps[];
}

export const ProjectCard = ({
    id,
    name,
    description,
    url,
    stars,
    watches,
    forks
}: ProjectCardProps) => (
        <div id={id} className="col-12 col-sm-6 col-xl-3 pb-4 project-card">
            <div className="card" style={{ height: '100%' }}>
                <div className="card-header">
                    <h4 className="card-title"><a href={url}>{name}</a></h4>
                    <span className="project-stats text-muted">
                        <IconLabel fillStyle="regular" icon="eye" text={watches.toString()} />
                        <IconLabel fillStyle="regular" icon="star" text={stars.toString()} />
                        <IconLabel fillStyle="solid" icon="code-branch" text={forks.toString()} />
                    </span>
                </div>
                <div className="card-body">
                    <div>
                        {/* <h6 className="card-subtitle mb-2 text-muted">{author}</h6> */}
                        <p className="card-text">{description}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="">
                        <LabeledButton url={url} fillStyle="brand" icon="github" text="See Project" />
                    </div>
                </div>
            </div>
        </div>
    );

export const ProjectCards = () => {
    const { execute, status, error, value: projects } = useGithubRepos({
        per_page: 4,
        filter: repo => !!repo.description
    });

    useEffect(() => {
        execute()
    }, []); // !!! DO NOT INCLUDE EXECUTE IN THE DEPENDENCY ARRAY !!!

    switch (status) {

        // TODO handle error cases with an error boundary
        // TODO add a skeleton component to display while loading
        // NOTE: Fallthrough is intentional
        case "error":
            console.error(error)
        case "idle":
        case "loading":
            return <></>;
        case "success":
            return <>
                {projects?.map((props, i) =>
                    <ProjectCard key={props.name} id={`project-card-${i}`} {...props} />
                )}
            </>
    }
}
