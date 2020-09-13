import React from 'react';
import { ButtonProps, Button } from './lib/Button';
import { ProjectCardProps, ProjectCards } from './lib/ProjectCard';

export const Main = () => {
    const socials: ButtonProps[] = [
        {
            text: "Discord",
            url: "https://github.com/react-bootstrap/react-bootstrap/blob/master/src/AbstractNav.tsx",
            icon: ["fab", "fa-discord"]
        },
        {
            text: "GroupMe",
            url: "https://groupme.com/join_group/49800573/ziPXHEva",
            // icon: ["todo"]
        },
        {
            text: "Email",
            url: "mailto:opensourceryumd@gmail.com",
            icon: ["fa", "fa-envelope"],
        }
    ];

    // const projects: ProjectCardProps[] = [
    //     {
    //         title: "LSTM Stock Predictor",
    //         author: "Eric Robertson",
    //         description: "Uses machine learning via tensorflow to predict stock prices.",
    //         repoUrl: "https://github.com/opensourceryclub/LSTM-Stock-Predictor",
    //     },
    //     {
    //         name: "SwarmAI",
    //         // author: "Emery Bacon",
    //         description: "Particle swarm optimization visualization in Processing.",
    //         url: "https://github.com/opensourceryclub/SwarmAI",
    //     },
    //     {
    //         title: "Raytrace Renderer",
    //         author: "Donald Isaac",
    //         description: "A rendering engine using raytracing and phong shading in Java.",
    //         repoUrl: "https://github.com/DonIsaac/Raytrace-Renderer",
    //     },
    //     {
    //         title: "Architekt",
    //         author: "Donald Isaac",
    //         description: "A static site generator inspired by Rail's ActionView and powered by Handlebars",
    //         repoUrl: "https://github.com/opensourceryclub/Architekt"
    //     },
    // ];

    const activities = [
        {
            title: "Workshops",
            icon: "fas fa-chalkboard-teacher",
            description: "Members lead educational workshops on topics they are knowledgeable and passionate about. We host workshops bi-weekly and at bigger events such as hackathons."
        },
        {
            title: "Projects",
            icon: "fas fa-desktop",
            description: "We support members leading projects by providing them with resources and community support, and help other members find and join a project they are passionate about."
        },
        {
            title: "Code Days",
            icon: "fas fa-code",
            description: "In the future, we plan on hosting weekend-long hackathons and day-long code days. Some will be member-only, but most will be open to the public free of charge."
        }
    ]
    return (
        <main>
            <Banner />
            <section id="about" className="page-section">
                <div id="section-about-us" className="container">
                    <h1 className="title display-4">About Us</h1>
                    <div className="row mb-4 justify-content-center">
                        <h3 className="subtitle text-center">Who Are We</h3>
                        <div className="col-12">
                            <p>
                                Open Sourcery is a software engineering and web development
                                club at the University of Maryland. We aim to promote and
                                teach software development, enable member projects, and
                                lower the barrier of entry to programming.
                            </p>
                        </div>
                    </div>
                    <div className="row mb-4 justify-content-center">
                        <h3 className="subtitle text-center">What We Do</h3>
                        <div className="col-12">
                            <div className="container-fluid">
                                <div className="row">
                                    {activities.map(props => <Activity {...props} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 justify-content-center">
                        <h3 className="subtitle text-center">Get Connected</h3>
                        <div className="col-12 text-center mb-4">
                            <p>
                                Interested in getting involved? Come join our community!
                            </p>
                        </div>
                        <div className="col-12 text-center">
                            {socials.map(btn => <Button {...btn} />)}
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" className="page-section">
                <div className="container text-center">
                    <h1 className="title display-4">Projects</h1>
                    <div className="row color-dark">
                        <ProjectCards />
                    </div>
                    <a className="btn btn-lg btn-primary color-dark my-3" href="https://github.com/OpenSourceryClub" target="_blank" rel="noopener noreferrer"><span className="fab fa-github" /> All Projects</a>
                </div>
            </section>
        </main>
    );
}

const Banner = () => (
    <div className="jumbotron jumbotron-fluid bg-dark" style={{ marginTop: '57px', marginBottom: 0 }}>
        <div className="container text-center">
            <img src="assets/images/Badge.png" alt="Open Sourcery Logo" width="25%" height="25%" />
            <h1 id="main-title" className="title color-primary">Open Sourcery</h1>
            <p className="lead my-3 color-primary">Wednesdays, 6:30pm-8pm in the <a className="hover-light" href="https://sandbox.cs.umd.edu/" style={{ textDecoration: 'underline' }}>Sandbox</a></p>
            <hr className="my-4" />
            <a className="btn btn-primary btn-lg color-dark" href="https://terplink.umd.edu/organization/open-sourcery">
                <i className="fas fa-user-plus" /> Join Us
            </a>
        </div>
    </div>
);

const Activity = ({ title = "", description = "", icon = "" }) => (
    <div className="col-12 col-md-4 justify-center">
        {icon && <span className="about-icon"><i className={icon} /></span>}
        <h4 className="title">{title}</h4>
        <hr />
        <p>{description}</p>
    </div>
);
