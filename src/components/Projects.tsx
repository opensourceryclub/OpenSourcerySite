import React, { FC } from "react"
import { ProjectCards } from "./lib/ProjectCard"
import "../assets/stylesheets/index.scss"

export const Projects: FC = () => {
    return (
        <main>
            {/* <Banner /> */}
            <section id="projects" className="page-section">
                <div className="container text-center" style={{ marginTop: "107px", marginBottom: 0 }} >
                    <h1 className="title display-4">Projects</h1>
                    <div className="row color-dark">
                        <ProjectCards />
                    </div>
                    <a className="btn btn-lg btn-primary color-dark my-3" href="https://github.com/OpenSourceryClub" target="_blank" rel="noopener noreferrer"><span className="fab fa-github" /> All Projects</a>
                </div>
            </section>
        </main>
    )
}

const Banner = () => (
    <div className="jumbotron jumbotron-fluid bg-dark" style={{ marginTop: "57px", marginBottom: 0 }} role="banner">
        <div className="container text-center">
            <img src="assets/images/Badge.png" alt="Open Sourcery Logo" width="25%" height="25%" />
            <h1 id="main-title" className="title color-primary">Open Sourcery</h1>
            <hr className="my-4" />
        </div>
    </div>
)
