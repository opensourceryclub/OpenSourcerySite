import { graphql, useStaticQuery } from "gatsby"
import memoize from "memoize-one"

export interface OpenSourceryImage {
    extension: string
    dir: string
    publicURL: string
    name: string
}

/**
 * Gets all static images stored in the `static/` directory. This hook looks for
 * images during compile time, so images added to `static/` after compilation
 * will not be included.
 *
 * @todo implement a `useDynamicImages` hook, if needed.
 *
 * @see Gatsby's {@link https://www.gatsbyjs.com/docs/use-static-query/ useStaticQuery} hook
 */
export const useImages: () => OpenSourceryImage = memoize(function useImages() {

    /* The function passed to memoize is not an anonymous or lambda function
     * in order to preserve the function name inside of error stack traces. */
    const {
        allFile: { edges }
    } = useStaticQuery(graphql`
        query ImageQuery {
            allFile(
                filter: {sourceInstanceName: {eq: "static"},
                extension: {in: ["png", "ico", "jpg"]}}
            ) {
                edges {
                    node {
                        extension
                        dir
                        publicURL
                        name
                    }
                }
            }
        }`)

    return edges.map(
        ({ node }: { "node": OpenSourceryImage }) => ({ ...node })
    )
})
