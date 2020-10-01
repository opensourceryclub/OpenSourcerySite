import React from 'react';
import { ProjectCards } from './lib/ProjectCard';
import "../assets/stylesheets/projects.scss";

export const Projects = () => {
    return (
        <main>        
                <section id="projects" className="page-section" >
                <div style={{ marginTop: '57px', marginBottom: 0 }}></div>
                <div className="jumbotron jumbotron-fluid bg-dark text-center">
                    <h1 className="title display-4">Projects</h1>
                    <div className="row color-dark">
                        <ProjectCards />
                    </div>
                    <a className="btn btn-lg btn-primary color-dark my-3" target="_blank" rel="noopener noreferrer"><span className="fab" /> Load More</a>
                </div>
            </section>
        </main>
    );
}