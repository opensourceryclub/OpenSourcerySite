import React from 'react';
import { LabeledButtonProps, LabeledButton } from './lib/Button';
import "../assets/stylesheets/index.scss";
import { Projects } from './Projects';

export const Main = () => {
    const socials: LabeledButtonProps[] = [
        {
            text: "Discord",
            url: "https://github.com/react-bootstrap/react-bootstrap/blob/master/src/AbstractNav.tsx",
            fillStyle: "brand",
            icon: "discord",
        },
        {
            text: "GroupMe",
            url: "https://groupme.com/join_group/49800573/ziPXHEva",
            fillStyle: "solid",
            icon: "star" // TODO replace this with GroupMe icon
        },
        {
            text: "Email",
            url: "mailto:opensourceryumd@gmail.com",
            icon: "envelope",
        }
    ];

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
                                    {activities.map(props => <Activity key={props.title} {...props} />)}
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
                            {socials.map(btn => <LabeledButton key={btn.text} {...btn} />)}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

const Banner = () => (
    <div className="jumbotron jumbotron-fluid bg-dark" style={{ marginTop: '57px', marginBottom: 0 }} role="banner">
        <div className="container text-center">
            <img src="assets/images/Badge.png" alt="Open Sourcery Logo" width="25%" height="25%" />
            <h1 id="main-title" className="title color-primary">Open Sourcery</h1>
            <p className="lead my-3 color-primary">Wednesdays, 6:30pm-8pm in the <a className="hover-light" href="https://sandbox.iribe.umd.edu/" style={{ textDecoration: 'underline' }}>Sandbox</a></p>
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
