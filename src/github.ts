const GITHUB_USERNAME = "seete001";

export type Repo = {
    id: number;
    name: string;
    topics: string[];
    created_at: string;
    description: string | null;
    html_url: string;
  };

export async function getRepos() : Promise<Repo[]>{
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);

    if(!response.ok){
        throw new Error("Failed to fetch Github Repositories");
    }

    const data: unknown = await response.json();

    if(!Array.isArray(data)){
        throw new Error("Invalid Github API response");
    }
    return data as Repo[];
}