import React, { FC } from "react"
import Layout from "../components/layout/Layout"
import { ProjectCards } from "../components/lib/ProjectCard"
import "../assets/stylesheets/index.scss"

const Projects: FC = () => (
    <Layout>
        <main>
            <Banner />
            <section id="projects" className="page-section">
                <div className="container text-center" style={{ marginTop: "107px", marginBottom: 0 }} >
                    <div className="row color-dark">
                        <ProjectCards perPage={20} sort={"forks"} order={"desc"} />
                    </div>
                    <a className="btn btn-lg btn-primary color-dark my-3" href="https://github.com/OpenSourceryClub" target="_blank" rel="noopener noreferrer"><span className="fab fa-github" /> All Projects</a>
                </div>
            </section>
        </main>
    </Layout>
)


const Banner = () => (
    <div className="jumbotron jumbotron-fluid bg-dark" style={{ marginTop: "57px", marginBottom: 0 }} role="banner">
        <div className="container text-center">
            <img src="assets/images/Badge.png" alt="Open Sourcery Logo" width="25%" height="25%" />
            <h1 id="main-title" className="title color-primary">Projects</h1>
            <hr className="my-4" />
            <a className="btn btn-lg btn-primary color-dark my-3" href="https://github.com/OpenSourceryClub" target="_blank" rel="noopener noreferrer"><span className="fab fa-github" /> All Projects</a>

        </div>
    </div>
)

export default Projects
