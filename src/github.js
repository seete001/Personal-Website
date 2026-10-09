const GITHUB_USERNAME = "seete001";

export async function getRepos(){
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);

    if(!response.ok){
        throw new Error("Failed to fetch Github Repositories");
    }

    return response.json();
}