import React, { FC, PropsWithChildren, ReactElement } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Nav } from "./Nav"
import { Footer } from "./Footer"

export type LayoutProps  = PropsWithChildren<{
    pageTitle?: string
    data: {
        title: string
        description: string
        meta: Record<string, string[] | string>
    }
}>;

export default (props: Omit<LayoutProps, "data">): ReactElement<StaticQuery> =>
    <StaticQuery
        query={graphql`
query {
    site {
        siteMetadata {
            title
            description
            meta {
                keywords,
                author,
                contributors
            }
        }
    }
}
`
        }
        render={
            data => <Layout {...{ ...props, data: data.site.siteMetadata }} />
        }
    />

const Layout: FC<LayoutProps> = ({
    children,
    pageTitle,
    data: {
        title,
        description,
        meta = {}
    }
}) =>
    <>
        <Helmet defer={false}>
            <title>
                {title + (pageTitle ? "-" + pageTitle : "")}
            </title>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                crossOrigin="anonymous"
            />
            <meta name="description" content={description} />
            {
                Object.keys(meta).map(name =>
                    meta[name] instanceof Array
                        ? (meta[name] as string[]).map(content =>
                            <meta name={name} content={content} key={`${name}-${content}`} />
                        )
                        : <meta name={name} content={(meta[name] as string) ?? ""} key={`${name}-${meta[name]}`} />
                )
            }
        </Helmet>
        <Nav />
        {children}
        <Footer />
    </>
