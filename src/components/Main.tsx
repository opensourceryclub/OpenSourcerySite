import React, { Component } from 'react';

export const Main = () => (
    <main>
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
                                <div className="col-12 col-md-4 justify-center">
                                    <span className="about-icon"><i className="fas fa-chalkboard-teacher" /></span>
                                    <h4 className="title">Workshops</h4>
                                    <hr />
                                    <p>
                                        Members lead educational workshops on topics they
                                        are knowledgeable and passionate about. We host
                                        workshops bi-weekly and at bigger events such as
                                        hackathons.
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 justify-center">
                                    <span className="about-icon"><i className="fas fa-desktop" /></span>
                                    <h4 className="title">Projects</h4>
                                    <hr />
                                    <p>
                                        We support members leading projects by providing them
                                        with resources and community support, and help other
                                        members find and join a project they are passionate
                                        about.
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 justify-center">
                                    <span className="about-icon"><i className="fas fa-code" /></span>
                                    <h4 className="title">Code Days</h4>
                                    <hr />
                                    <p>
                                        In the future, we plan on hosting weekend-long hackathons
                                        and day-long code days. Some will be member-only,
                                        but most will be open to the public free of charge.
                                    </p>
                                </div>
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
                        <a href="https://groupme.com/join_group/49800573/ziPXHEva" className="btn btn-primary" target="_blank" rel="noopener noreferrer" >
                            <img src="assets/images/Groupme.png" width="16px" height="16px" alt="GroupMe" />
                            GroupMe
                        </a>
                        <a href="https://discord.gg/BdfcMRk" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <span className="fab fa-discord" /> Discord
                        </a>
                        <a href="mailto:opensourceryumd@gmail.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            <span className="fa fa-envelope" /> Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section id="projects" className="page-section">
            <div className="container text-center">
                <h1 className="title display-4">Projects</h1>
                <div className="row color-dark">
                    <div id="project-card-1" className="col-12 col-sm-6 col-lg-3 pb-4">
                        <div className="card" style={{ height: '100%' }}>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title">LSTM Stock Predictor</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Eric Robertson</h6>
                                    <p className="card-text">Uses machine learning via tensorflow to predict stock prices.</p>
                                </div>
                                <div className="mt-2">
                                    <a href="https://github.com/opensourceryclub/LSTM-Stock-Predictor" className="card-link hover-dark"><span className="fab fa-github" /> See Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="project-card-2" className="col-12 col-sm-6 col-lg-3 pb-4">
                        <div className="card" style={{ height: '100%' }}>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title">SwarmAI</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Emery Bacon</h6>
                                    <p className="card-text">Particle swarm optimization visualization in Processing.</p>
                                </div>
                                <div className="mt-2">
                                    <a href="https://github.com/opensourceryclub/SwarmAI" className="card-link hover-dark"><span className="fab fa-github" /> See Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="project-card-3" className="col-12 col-sm-6 col-lg-3 pb-4">
                        <div className="card" style={{ height: '100%' }}>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title">Architekt</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Donald Isaac</h6>
                                    <p className="card-text">A static site generator inspired by Rail's ActionView and powered by Handlebars</p>
                                </div>
                                <div className="mt-2">
                                    <a href="https://github.com/opensourceryclub/Architekt" className="card-link hover-dark"><span className="fab fa-github" /> See Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="project-card-4" className="col-12 col-sm-6 col-lg-3 pb-4">
                        <div className="card" style={{ height: '100%' }}>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title">Raytrace Renderer</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Donald Isaac</h6>
                                    <p className="card-text">A rendering engine using raytracing and phong shading in Java.</p>
                                </div>
                                <div className="mt-2">
                                    <a href="https://github.com/DonIsaac/Raytrace-Renderer" className="card-link hover-dark"><span className="fab fa-github" /> See Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="btn btn-lg btn-primary color-dark my-3" href="https://github.com/OpenSourceryClub" target="_blank" rel="noopener noreferrer"><span className="fab fa-github" /> All Projects</a>
            </div>
        </section>
    </main>
);
