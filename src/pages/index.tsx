import React, { FC } from "react"
import { ProjectCards } from "../components/lib/ProjectCard"
import "../assets/stylesheets/index.scss"
import { LabeledButton, LabeledButtonProps } from "../components/lib/Button"
import Layout from "../components/layout/Layout"
import { Column, Section, SectionRow } from "../components/layout/Grid"
import { Banner } from "../components/layout/Banner"

const Main: FC = () => (
    <Layout>
        <main>
            <Banner
                title="Open Sourcery"
                subtitle={<>Wednesdays, 6:30pm-8pm in the <a className="hover-light" href="https://sandbox.iribe.umd.edu/" style={{ textDecoration: "underline" }}>Sandbox</a></>}
                button={
                    <LabeledButton
                        url="https://terplink.umd.edu/organization/open-sourcery"
                        classes={[ "btn-lg", "color-dark" ]}
                        fillStyle="solid"
                        icon="user-plus"
                        text="Join Us"
                    />
                }
            />
            <Section title="About Us">
                <SectionRow title="Who We Are">
                    <Column width={12}>
                        <p>
                            Open Sourcery is a software engineering and web development
                            club at the University of Maryland. We aim to promote and
                            teach software development, enable member projects, and
                            lower the barrier of entry to programming.
                        </p>
                    </Column>
                </SectionRow>
                <SectionRow title="What We Do">
                    <Column width={12}>
                        <div className="container-fluid">
                            <div className="row">
                                {activities.map(props => <Activity key={props.title} {...props} />)}
                            </div>
                        </div>
                    </Column>
                </SectionRow>
                <SectionRow title="Get Connected">
                    <Column width={12} classes={[ "mb-4", "text-center" ]}>
                        <p>
                            Interested in getting involved? Come join our community!
                        </p>
                    </Column>
                    <Column width={12} classes={[ "text-center" ]}>
                        {socials.map(btn => <LabeledButton key={btn.text} {...btn} />)}
                    </Column>
                </SectionRow>
            </Section>
            <Section title="Projects">
                <div className="row color-dark">
                    <ProjectCards perPage={4}/>
                </div>
                <LabeledButton
                    url="https://github.com/OpenSourceryClub"
                    classes={[ "btn-lg", "color-dark", "my-3" ]}
                    fillStyle="brand"
                    icon="github"
                    text="All Projects"
                />
            </Section>
        </main>
    </Layout>
)

const Activity = ({ title = "", description = "", icon = "" }) => (
    <Column
        classes={[ "justify-center" ]}
        width={{
            xsm: 12,
            md:  4
        }}
    >
        {icon && <span className="about-icon"><i className={icon} /></span>}
        <h4 className="title">{title}</h4>
        <hr />
        <p>{description}</p>
    </Column>
)

const socials: LabeledButtonProps[] = [
    {
        text:      "Discord",
        url:       "https://github.com/react-bootstrap/react-bootstrap/blob/master/src/AbstractNav.tsx",
        fillStyle: "brand",
        icon:      "discord",
    },
    {
        text:      "GroupMe",
        url:       "https://groupme.com/join_group/49800573/ziPXHEva",
        fillStyle: "solid",
        icon:      "icon-groupme",
        fa:        false,
    },
    {
        text: "Email",
        url:  "mailto:opensourceryumd@gmail.com",
        icon: "envelope",
    }
]

const activities = [
    {
        title:       "Workshops",
        icon:        "fas fa-chalkboard-teacher",
        description: "Members lead educational workshops on topics they are knowledgeable and passionate about. We host workshops bi-weekly and at bigger events such as hackathons."
    },
    {
        title:       "Projects",
        icon:        "fas fa-desktop",
        description: "We support members leading projects by providing them with resources and community support, and help other members find and join a project they are passionate about."
    },
    {
        title:       "Code Days",
        icon:        "fas fa-code",
        description: "In the future, we plan on hosting weekend-long hackathons and day-long code days. Some will be member-only, but most will be open to the public free of charge."
    }
]

export default Main
