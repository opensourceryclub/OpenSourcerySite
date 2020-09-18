import React from 'react';
import { ProjectCards } from './lib/ProjectCard';

export const Projects = () => {
    return(
        <div className="container text-center">
            <h1 className="title display-4">Projects</h1>
            <div className="row color-dark">
                <ProjectCards />
            </div>
            <a className="btn btn-lg btn-primary color-dark my-3" href="https://github.com/OpenSourceryClub" target="_blank" rel="noopener noreferrer"><span className="fab fa-github" /> All Projects</a>
        </div>
            
    );
}