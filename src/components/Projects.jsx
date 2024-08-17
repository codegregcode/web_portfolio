import projectsData from '../data/projectsData';
import '../styles/Projects.css';

function Projects() {
  return (
    <>
      {projectsData.map((project) => (
        <div className="project-card" key={project.name} role="article">
          <img src={project.img_src} />
          <h4 data-testid={`project-name-${project.name}`}>{project.name}</h4>
          <p data-testid={`project-description-${project.name}`}>
            {project.description}
          </p>
          <div className="project-card-links">
            <a href={project.github_link} target="_blank">
              <div className="github-project" />
            </a>
            <a href={project.deploy_link} target="_blank">
              <div className="internet-project" />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
