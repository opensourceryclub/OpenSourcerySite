import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useBrand } from "../../hooks/useBrand"

export interface BannerProps {

    /**
     * The title to display on the banner. This is put inside an `<h1>` tag.
     */
    title: string
    subtitle?: string | React.ReactElement
    button?: React.ReactElement
}

export const Banner: FC<BannerProps> = ({ title, subtitle, button }) => {
    const badgeUrl = useBrand()

    return (
        <div className="jumbotron jumbotron-fluid bg-dark" style={{ marginTop: "57px", marginBottom: 0 }} role="banner">
            <div className="container text-center">
                <img src={badgeUrl} alt="Open Sourcery Logo" width="25%" height="25%" />
                <h1 id="main-title" className="title color-primary">{title}</h1>
                {subtitle && <p className="lead my-3 color-primary">{subtitle}</p>}
                <hr className="my-4" />
                {button}
            </div>
        </div>
    )
}
