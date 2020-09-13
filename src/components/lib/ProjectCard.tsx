import React from "react";
import { Button } from "./Button";

export interface ProjectCardProps {
    id?: string;
    title: string;
    author: string;
    description: string;
    repoUrl: string;
}

export interface ProjectCardsProps {
    projects?: ProjectCardProps[];
}

export const ProjectCard = ({
    id,
    title,
    author,
    description,
    repoUrl
}: ProjectCardProps) => (
        <div id={id} className="col-12 col-sm-6 col-lg-3 pb-4">
            <div className="card" style={{ height: '100%' }}>
                <div className="card-body">
                    <div>
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="mt-2">
                        <Button url={repoUrl} icon={"fab fa-github"} text="See Project" />
                    </div>
                </div>
            </div>
        </div>
    );

export const ProjectCards = ({ projects = [] }: ProjectCardsProps) =>
    <>
        {projects.map(props => <ProjectCard key={props.title} {...props} />)}
    </>
