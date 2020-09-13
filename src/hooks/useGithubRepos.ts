import memoizeOne from "memoize-one";
import { useAsync } from "./useAsync";
import { throws } from "./util";

const OPSRC_URL = "https://api.github.com/orgs/opensourceryclub";

export type SortBy = "updated" | "created" | "pushed" | "full_name";
export interface Project {
    name: string;
    description: string;
    language: string | null;
    url: string;
    stars: number;
    watches: number;
}

const getGithubRepos = (sort: SortBy = "updated", limit = 50) =>
    () =>
        // Limit is intentionally not included as a query parameter
        fetch(`${OPSRC_URL}/repos?sort=${sort}`)

            // Parse the response body
            .then(res => res.json())

            // Extract relevant project data from each project
            .then(res => res instanceof Array
                ? res.map(project => {
                    const {
                        name,
                        description,
                        language,
                        html_url,
                        stargazers_count,
                        watchers_count
                    } = project;
                    return {
                        name,
                        description,
                        language,
                        url: html_url,
                        stars: stargazers_count,
                        watches: watchers_count,
                    } as Project;
                })
                : throws(`Expected GitHub response to be an array of repos, got a ${typeof res}`)
            )

            // Sort projects by clout, get the top {limit} most baller repos
            .then(projects => projects
                .sort((a, b) => (a.stars + a.watches) - (b.stars + b.watches))
                .slice(0, limit)
            )

/**
 * Gets a bunch of repos from the Open Sourcery organization's GitHub org.
 *
 * @param sort How to sort the responses, set to GitHub.
 * @param limit Max number of projects to return. Must be between 0-100 inclusive.
 */
export const useGithubRepos = (sort: SortBy = "updated", limit = 50) => {
    return useAsync<Project[], Error>(getGithubRepos(sort, limit), false);
}
