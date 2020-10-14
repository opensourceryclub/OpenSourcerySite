import { graphql, useStaticQuery } from "gatsby"
import memoizeOne from "memoize-one"

export const useBrand: () => string = memoizeOne(
    function useBrand() {
        const {
            allFile: {
                edges: [
                    {
                        node: {
                            publicURL: badgeUrl
                        }
                    }
                ]
            }
        } = useStaticQuery(graphql`
        query BadgeQuery {
            allFile(filter: { name: { eq: "Badge" }}) {
                edges {
                    node {
                        publicURL
                    }
                }
            }
        }`)

        return badgeUrl

    })