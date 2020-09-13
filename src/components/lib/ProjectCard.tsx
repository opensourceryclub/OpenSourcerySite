import React from "react";

export interface ProjectCardProps {
    id?: string;
    title: string;
    author: string;
    description: string;
    url: string;
}

export interface ProjectCardsProps {
   cards?: ProjectCardProps[];
}

export const ProjectCard = ({
    id,
    title,
    author,
    description,
    url
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
                        <a href={url} className="card-link hover-dark"><span className="fab fa-github" /> See Project</a>
                    </div>
                </div>
            </div>
        </div>
    );

export const ProjectCards = ({ cards = [] }: ProjectCardsProps) =>
    cards.map(props => <ProjectCard key={props.title} {...props} />);
