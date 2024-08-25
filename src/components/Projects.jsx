import projects from "../utils/projects";
import githubLogo from "../assets/github.svg";
import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles["projects-title"]}>Main Projects</h1>
      {projects.map((project) => (
        <div key={project.title} className={styles.project}>
          {
            <div className={styles["project-left"]}>
              <img src={project.image} alt="project" />
            </div>
          }
          <div className={styles["project-right"]}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <a href={project.github}>
                <img src={githubLogo} alt="github logo" />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <h4>Live Version!</h4>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
