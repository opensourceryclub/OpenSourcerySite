import React, { useEffect } from "react";
import { Button } from "./Button";
import { useGithubRepos, Project } from "../../hooks";
import memoizeOne from "memoize-one";

export interface ProjectCardProps extends Project {
    id?: string;
}

export interface ProjectCardsProps {
    projects?: ProjectCardProps[];
}

export const ProjectCard = ({
    id,
    name,
    // author,
    description,
    url
}: ProjectCardProps) => (
        <div id={id} className="col-12 col-sm-6 col-lg-3 pb-4">
            <div className="card" style={{ height: '100%' }}>
                <div className="card-body">
                    <div>
                        <h5 className="card-title">{name}</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">{author}</h6> */}
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="mt-2">
                        <Button url={url} icon={"fab fa-github"} text="See Project" />
                    </div>
                </div>
            </div>
        </div>
    );

export const ProjectCards = () => {
    const { execute, status, error, value: projects } = useGithubRepos();

    useEffect(() => {
        execute()
    }, []);

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
