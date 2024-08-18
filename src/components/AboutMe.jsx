import styles from "../styles/aboutMe.module.css";
import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";

export default function AboutMe() {
  return (
    <section className={styles["about-me"]}>
      <h1 id="about-me" className={styles["about-me-title"]}>
        About Me
      </h1>
      <div className={styles["about-me-left"]}>
        <p>Placeholder for an image</p>
      </div>
      <div className={styles["about-me-right"]}>
        <div className={styles["about-me-right-text"]}>
          <p>
            I am a Front-End Developer passionate about creating engaging and
            functional digital experiences. With a strong foundation in HTML,
            CSS, JavaScript, and React, I have hands-on experience gained
            through internships and personal projects, where I developed
            responsive web applications focused on usability and user
            experience.
          </p>
          <p>
            I am always looking for new opportunities to apply my skills in
            challenging projects, where I can contribute to creating digital
            products that positively impact users&apos; lives.
          </p>
        </div>
        <div className={styles["about-me-right-links"]}>
          <a
            href="https://github.com/andrebarros7201"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt="github logo"
              className={styles["skills-logo-github"]}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andr%C3%A9-barros-8698a1185/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="linkedin logo"
              className={styles["skills-logo-linkedin"]}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
