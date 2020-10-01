import { useAsync } from "./useAsync";
import { throws } from "./util";

// curl "https://api.github.com/search/repositories?q=stars:>0+user:opensourceryclub&sort=stars&order=desc"
export type SortBy = "updated" | "forks" | "help-wanted-issues" | "stars";

/**
 * Establish Card type, character size
 * 
 * Rules implementation.
 */
enum CardType {
    Regular = "regular-card",
    Large   = "large-card"
};        
const cardType = {
    [CardType.Regular]     :{maxDisplayChar:75,maxChar:75},
    [CardType.Large]       :{maxDisplayChar:120,maxChar:120}
}
export type GithubReposProps = {
    sort?: SortBy;
    order?: "asc" | "desc";
    limit?: number;
    /**
     * Max number of results per page (max 100)
     */
    per_page?: number;
    /**
     * Search page number to get
     */
    page?: number;
    /**
     * Specifies the types of repositories you want returned. Can be one of all,
     * public, private, forks, sources, member, internal.
     * @default "all"
     */
    type?: string;
    filter?: (repo: Project) => boolean;
}
export interface Project {
    name: string;
    description: string;
    language: string | null;
    url: string;
    stars: number;
    watches: number;
    forks: number;
    cardType:CardType;
}

/**
 * Gets a bunch of repos from the Open Sourcery organization's GitHub org.
 *
 * @param sort How to sort the responses, set to GitHub.
 * @param limit Max number of projects to return. Must be between 0-100 inclusive.
 */
export const useGithubRepos = (props: GithubReposProps = {}) =>
    useAsync<Project[], Error>(getGithubRepos(props), false);

const defaults: Partial<GithubReposProps> = {
    sort: "stars",
    order: "desc"
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
                    forks_count: forks
                } = project;
<<<<<<< Updated upstream
                const card = cardStyle(description);
                return { name, cardType: card, description: processDesc(description, card), language, url, stars, watches, forks } as Project;
=======
                return { name, description, language, url, stars, watches, forks } as Project;
>>>>>>> Stashed changes
            })
            : throws(`Expected GitHub response to be an array of repos, got  a ${typeof res}`)
        )
        .then(projects => projects.filter(filter))
        // Sort projects by clout, get the top {limit} most baller repos
        // .then(projects => projects
        //     .sort((a, b) => (a.stars + a.watches) - (b.stars + b.watches))
        //     .slice(0, limit)
        // )


const cardStyle = (description:string)=>{
    return description.length>cardType[CardType.Regular].maxChar? CardType.Large: CardType.Regular;
}
const processDesc = (desc:string, card:CardType)=>{
    if(card === CardType.Large){
        if(desc.length>cardType[CardType.Large].maxDisplayChar){
            const str = desc.substr(0,cardType[CardType.Large].maxDisplayChar);
            return str.substr(0,str.lastIndexOf(" "))+"...";
        }
    }
    if(card === CardType.Regular){
        if(desc.length>cardType[CardType.Regular].maxDisplayChar){
            const str = desc.substr(0,cardType[CardType.Regular].maxDisplayChar);
            return str.substr(0,str.lastIndexOf(" "))+"...";
        }
    }
    return desc
}