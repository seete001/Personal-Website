import { getRepos } from "../github";
import { useState, useEffect } from "react";

function Projects() {
    
    const [repos, setRepos] = useState([]);

    useEffect(() => {
      getRepos().then((data) =>setRepos(data)).catch((error) => console.error(error));
    }, []);

    
    return (
      <section>
        <h2>Projects</h2>
        
        {repos.filter((repo) => repo.topics?.includes("production")).map((repo) => (
          <article key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || ""}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">On Git</a>
          </article>
        ))}
      </section>
    );
  }
  
  export default Projects;