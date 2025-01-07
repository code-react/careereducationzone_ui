import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={`container ${styles.container1}`}>
        <h1>About us</h1>
        <div className={styles.breadcrumb}>
          <span>Home</span>
          <span className={styles.separator}>//</span>
          <span>About us</span>
        </div>
      </div>
    </div>
  );
}
