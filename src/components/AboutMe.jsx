import styles from "../styles/aboutMe.module.css";

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          laborum, a ratione dolor, omnis consequatur rem voluptatum officiis
          vel itaque perferendis, repudiandae totam libero quaerat dicta dolores
          optio earum quisquam. Dolor illum est et magnam, minima facere
          accusantium non laudantium temporibus saepe. Voluptatem cum sunt nisi
          aliquid, aperiam saepe hic perferendis ex soluta ipsa cumque
          voluptates ut commodi expedita minima?
        </p>
      </div>
    </section>
  );
}
