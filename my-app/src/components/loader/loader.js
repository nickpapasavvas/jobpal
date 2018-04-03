import React from "react";
import styles from "./loader.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.rect1} />
    <div className={styles.rect2} />
    <div className={styles.rect3} />
    <div className={styles.rect4} />
    <div className={styles.rect5} />
  </div>
);

Loader.displayName = "Loader";

export default Loader;
