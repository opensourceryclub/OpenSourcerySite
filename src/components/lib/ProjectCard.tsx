import React, { FC, useEffect } from "react"
import { LabeledButton } from "./Button"
import { Project, useGithubRepos } from "../../hooks"
import "./_project-card.scss"
import { IconLabel } from "./Label"

export interface ProjectCardProps extends Project {
    id?: string
}

export interface ProjectCardsProps {
    projects?: ProjectCardProps[]
}
export interface ProjectProps {
    perPage?: number
    sort?: "updated" | "forks" | "help-wanted-issues" | "stars"
    order?: "asc" | "desc"
}

enum CardType {
    Regular = "regular-card"
}
const charLimits = {
    [CardType.Regular]: { maxChar: 75 }
}
export const ProjectCard: FC<ProjectCardProps> = ({
    id,
    name,
    description,
    url,
    stars,
    watches,
    forks
}) => (
    <div id={id} className="col-12 col-sm-6 col-xl-3 pb-4 project-card">
        <div className="card" style={{ height: "100%" }}>
            <div className="card-header">
                <h4 className="card-title"><a href={url}>{name}</a></h4>
                <span className="project-stats text-muted">
                    <IconLabel fillStyle="regular" icon="eye" text={watches.toString()} />
                    <IconLabel fillStyle="regular" icon="star" text={stars.toString()} />
                    <IconLabel fillStyle="solid" icon="code-branch" text={forks.toString()} />
                </span>
            </div>
            <div className="card-body">
                <div>
                    {/* <h6 className="card-subtitle mb-2 text-muted">{author}</h6> */}
                    <p className="card-text">{description}</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="">
                    <LabeledButton url={url} fillStyle="brand" icon="github" text="See Project" />
                </div>
            </div>
        </div>
    </div>
)
export const ProjectCards: FC<ProjectProps> = props => {

    const { execute, status, error, value: projects } = useGithubRepos({
        filter: repo => !!repo.description,
        ...props,
    })

    useEffect(() => {
        execute()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // !!! DO NOT INCLUDE EXECUTE IN THE DEPENDENCY ARRAY !!!

    switch (status) {

        // TODO handle error cases with an error boundary
        // TODO add a skeleton component to display while loading
        // NOTE: Fallthrough is intentional
        case "error":
            console.error(error)
        case "idle":
        case "loading": return <></>
        case "success": return <>
            {projects?.map((props, i) => {
                props.description = limitDescription(props.description)
                return <ProjectCard key={props.name} id={`project-card-${i}`} {...props} />
            })}
        </>
    }
}

const limitDescription = (description: string) => {
    if (description.length > charLimits[CardType.Regular].maxChar) {
        const str = description.substring(0, charLimits[CardType.Regular].maxChar)
        return str.substring(0, str.lastIndexOf(" ")) + "..."
    }
    return description
}
