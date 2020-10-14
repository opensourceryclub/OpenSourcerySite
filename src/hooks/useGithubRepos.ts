import { AsyncHookPayload, useAsync } from "./useAsync"
import { throws } from "./util"

// curl "https://api.github.com/search/repositories?q=stars:>0+user:opensourceryclub&sort=stars&order=desc"
export type SortBy = "updated" | "forks" | "help-wanted-issues" | "stars";

export type GithubReposProps = {
    sort?: SortBy
    order?: "asc" | "desc"

    /**
     * Max number of results per page (max 100)
     */
    per_page?: number

    /**
     * Search page number to get
     */
    page?: number

    /**
     * Specifies the types of repositories you want returned. Can be one of all,
     * public, private, forks, sources, member, internal.
     * @default "all"
     */
    type?: string
    filter?: (repo: Project) => boolean
}
export interface Project {
    name: string
    description: string
    language: string | null
    url: string
    stars: number
    watches: number
    forks: number
}

/**
 * Gets a bunch of repos from the Open Sourcery organization's GitHub org.
 *
 * @param props Query settings, etc. to send to Github
 *
 * @see GithubReposProps for what each property in the object argument does
 */
export const useGithubRepos = (props: GithubReposProps = {}): AsyncHookPayload<Project[], Error> =>
    useAsync<Project[], Error>(getGithubRepos(props), false)

export const defaults: Partial<GithubReposProps> = {
    sort:     "stars",
    order:    "desc",
    // eslint-disable-next-line @typescript-eslint/camelcase
    per_page: 4
}

/**
 *
 * @param props
 *
 * @see {@link https://docs.github.com/en/rest/reference/search#search-repositories GitHub REST API Docs - Search Repos}
 */
const getGithubRepos = ({
    filter = x => true,
    ...params
}: GithubReposProps) => () =>
// Limit is intentionally not included as a query parameter
    fetch(
        "https://api.github.com/search/repositories?" +
            "q=stars:>0+user:opensourceryclub&" + // All repos belonging to OpSrc with more than 0 stars
            new URLSearchParams({ ...defaults, ...params } as Record<string, string>).toString()
    )

    // Parse the response body
        .then(res => res.json())
        .then(({ items }) => items)

    // Extract relevant project data from each project
        .then(res => res instanceof Array
            ? res.map(project => {
                // Stars/watches is messed up B/C github made bad API updates
                // https://github.community/t/api-is-very-confusing-by-listing-stars-count-for-watchers-count-on-all-repos/13817
                const {
                    name,
                    description,
                    language,
                    html_url: url,
                    stargazers_count: stars,
                    // TODO Sometimes this isn't appearing. Don't know if its a
                    // bug on our end, or if there just aren't any watches
                    subscribers_count: watches = 0,
                    forks_count: forks,
                } = project

                return { name, description, language, url, stars, watches, forks } as Project
            })
            : throws(`Expected GitHub response to be an array of repos, got a ${typeof res}`)
        )
        .then(projects => projects.filter(filter))
        // Sort projects by clout, get the top {limit} most baller repos
        // .then(projects => projects
        //     .sort((a, b) => (a.stars + a.watches) - (b.stars + b.watches))
        //     .slice(0, limit)
        // )
