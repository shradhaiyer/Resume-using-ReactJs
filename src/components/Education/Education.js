import React from "react";
import styles from "./Education.module.css";
import img from "../../assets/sies.png";
const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.h1tag}>EDUCATION</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.column}>
          <img className={styles.round} src={img} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.uni}>SIES Graduate School of Technology</h1>
          <h3>Bachelor of Engineering, Computer Engineering</h3>
          <h3 className={styles.purple}>CGPA- 8.62/10</h3>
        </div>
      </div>
    </div>
  );
};
export default about;
