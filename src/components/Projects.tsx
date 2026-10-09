import { getRepos , type Repo} from "../github";
import { useState, useEffect } from "react";

function Projects() {
    
    const [repos, setRepos] = useState<Repo []>([]);

    useEffect(() => {
      getRepos()
        .then(setRepos)
        .catch((error: unknown) => console.error("Failed to load repos:", error));
    }, []);

    
    return (
      <section>
        <h2>Projects</h2>

        {repos
          .filter((repo) => repo.topics?.includes("production"))
          .map((repo) => (
          <article key={repo.id}>
            <h3>{repo.name}</h3>
            <p className="date">
              {new Date(repo.created_at).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
              })}
            </p>
            <p>{repo.description ?? ""}</p>
            <a href={repo.html_url} 
               target="_blank" 
               rel="noopener noreferrer">On Git</a>
          </article>
        ))}
      </section>
    );
  }
  
  export default Projects;