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
  
        <article>
          <h3>TCP Echo Server</h3>
          <p className="date">2026</p>
  
          <p>
            Somple TCP Server which echos what you send to. The Point was
            learning Network Concepts.
          </p>
        </article>
  
        <article>
          <h3>Personal Website</h3>
          <p className="date">2025</p>
  
          <p>
            Worked on website using JavaScript, HTML, and CSS.
          </p>
        </article>
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