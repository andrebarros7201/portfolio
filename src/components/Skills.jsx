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
import typescriptLogo from "../assets/typescript.svg";
import dockerLogo from "../assets/docker.svg";
import dotnetLogo from "../assets/dotnet.svg";
import scssLogo from "../assets/scss.svg";

export default function Skills() {
  return (
    <section id="skills" className={styles["skills"]}>
      <h1 className={styles["skills-title"]}>Skills</h1>
      <div className={styles["skills-list"]}>
        <h3>Core Front-End Development Skills</h3>
        <div className={styles["skills-list-items"]}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={htmlLogo}
              alt="HTML logo"
              className={styles["skills-logo-html"]}
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={cssLogo}
              alt="CSS logo"
              className={styles["skills-logo-css"]}
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={javascriptLogo}
              alt="JavaScript logo"
              className={styles["skills-logo-javascript"]}
            />
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={reactLogo}
              alt="React logo"
              className={styles["skills-logo-react"]}
            />
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
            <img
              src={nodeLogo}
              alt="Node.js logo"
              className={styles["skills-logo-node"]}
            />
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={expressLogo}
              alt="Express.js logo"
              className={styles["skills-logo-express"]}
            />
          </a>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={postgresqlLogo}
              alt="PostgreSQL logo"
              className={styles["skills-logo-postgresql"]}
            />
          </a>
          <a
            href="https://www.prisma.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={prismaLogo}
              alt="Prisma ORM logo"
              className={styles["skills-logo-prisma"]}
            />
          </a>
          <a
            href="https://restfulapi.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={apiLogo}
              alt="API logo"
              className={styles["skills-logo-api"]}
            />
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
            <img
              src={gitLogo}
              alt="Git logo"
              className={styles["skills-logo-git"]}
            />
          </a>
          <a
            href="https://jestjs.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={jestLogo}
              alt="Jest logo"
              className={styles["skills-logo-jest"]}
            />
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={viteLogo}
              alt="Vite logo"
              className={styles["skills-logo-vite"]}
            />
          </a>
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={vscodeLogo}
              alt="Visual Studio Code logo"
              className={styles["skills-logo-vscode"]}
            />
          </a>
          <a
            href="https://www.jetbrains.com/webstorm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={webstormLogo}
              alt="WebStorm logo"
              className={styles["skills-logo-webstorm"]}
            />
          </a>
        </div>
      </div>
      <div className={styles["skills-list"]}>
        <h3>I want to learn</h3>
        <div className={styles["skills-list-items"]}>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={typescriptLogo}
              alt="TypeScript logo"
              className={styles["skills-logo-typescript"]}
            />
          </a>
          <a
            href="https://dotnet.microsoft.com/en-us/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={dotnetLogo}
              alt="DotNet logo"
              className={styles["skills-logo-dotnet"]}
            />
          </a>
          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={dockerLogo}
              alt="Docker logo"
              className={styles["skills-logo-docker"]}
            />
          </a>
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={scssLogo}
              alt="SCSS logo"
              className={styles["skills-logo-scss"]}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
