import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <div className={styles["header-left"]}>
        <h3>André Barros</h3>
      </div>
      <nav className={styles["header-right"]}>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}
