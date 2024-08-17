import styles from "../styles/skills.module.css";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import javascriptLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node.svg";
import expressLogo from "../assets/express.svg";
import postgresqlLogo from "../assets/postgresql.svg";
import prismaLogo from "../assets/prisma.svg";
import apiLogo from "../assets/api.svg";
import gitLogo from "../assets/git.svg";
import jestLogo from "../assets/jest.svg";
import viteLogo from "../assets/vite.svg";
import vscodeLogo from "../assets/vscode.svg";
import webstormLogo from "../assets/webstorm.svg";

export default function Skills() {
  return (
    <section className={styles["skills"]}>
      <h1 className={styles["skills-title"]}>Skills</h1>
      <div className={styles["skills-list"]}>
        <h3>Core Front-End Development Skills</h3>
        <div className={styles["skills-list-items"]}>
          <img src={htmlLogo} alt="html logo" />
          <img src={cssLogo} alt="css logo" />
          <img src={javascriptLogo} alt="javascript logo" />
          <img src={reactLogo} alt="react logo" />
        </div>
      </div>

      <div className={styles["skills-list"]}>
        <h3>Back-End and Full-Stack Development Skills</h3>
        <div className={styles["skills-list-items"]}>
          <img src={nodeLogo} alt="node logo" />
          <img src={expressLogo} alt="express logo" />
          <img src={postgresqlLogo} alt="postgresql logo" />
          <img src={prismaLogo} alt="prisma orm logo" />
          <img src={apiLogo} alt="api logo" />
        </div>
      </div>

      <div className={styles["skills-list"]}>
        <h3>Development Tools</h3>
        <div className={styles["skills-list-items"]}>
          <img src={gitLogo} alt="git logo" />
          <img src={jestLogo} alt="jest logo" />
          <img src={viteLogo} alt="vite logo" />
          <img src={vscodeLogo} alt="visual studio code logo" />
          <img src={webstormLogo} alt="webstorm logo" />
        </div>
      </div>
    </section>
  );
}
