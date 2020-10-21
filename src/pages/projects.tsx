import React, { FC } from "react"
import Layout from "../components/layout/Layout"
import { ProjectCards } from "../components/lib/ProjectCard"
import "../assets/stylesheets/index.scss"
import { Banner } from "../components/layout/Banner"
import { LabeledButton } from "../components/lib/Button"

const Projects: FC = () => (
    <Layout>
        <main>
            <Banner
                title="Projects"
                button={
                    <LabeledButton
                        url="https://github.com/OpenSourceryClub"
                        classes={[ "btn-lg", "color-dark" ]}
                        fillStyle="brand"
                        icon="github"
                        text="All Projects"
                    />
                }
            />
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

export default Projects
