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
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={htmlLogo} alt="HTML logo" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={cssLogo} alt="CSS logo" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={javascriptLogo} alt="JavaScript logo" />
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={reactLogo} alt="React logo" />
          </a>
        </div>
      </div>

      <div className={styles["skills-list"]}>
        <h3>Back-End and Full-Stack Development Skills</h3>
        <div className={styles["skills-list-items"]}>
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={nodeLogo} alt="node logo" />
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={expressLogo} alt="express logo" />
          </a>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={postgresqlLogo} alt="postgresql logo" />
          </a>
          <a
            href="https://www.prisma.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={prismaLogo} alt="prisma orm logo" />
          </a>
          <a
            href="https://restfulapi.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={apiLogo} alt="API logo" />
          </a>
        </div>
      </div>

      <div className={styles["skills-list"]}>
        <h3>Development Tools</h3>
        <div className={styles["skills-list-items"]}>
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitLogo} alt="git logo" />
          </a>
          <a
            href="https://jestjs.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={jestLogo} alt="jest logo" />
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={viteLogo} alt="vite logo" />
          </a>
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vscodeLogo} alt="visual studio code logo" />
          </a>
          <a
            href="https://www.jetbrains.com/webstorm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={webstormLogo} alt="webstorm logo" />
          </a>
        </div>
      </div>
    </section>
  );
}
