import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <section id={"contact"} className={styles["contact"]}>
      <h1 className={styles["contact-title"]}>Contact</h1>
      <div className={styles["contact-div"]}>
        <div>
          <h3>andrebarros7201@gmail.com</h3>
          <p>
            <a href="mailto:andrebarros7201@gmail.com">Send mail</a>
          </p>
        </div>
        <div>
          <h3>+351 939 677 580</h3>
        </div>
      </div>
    </section>
  );
}
