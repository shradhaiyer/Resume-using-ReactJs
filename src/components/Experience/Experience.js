import React from "react";
import styles from "./Experience.module.css";
import img1 from "../../assets/cloud.png";
import img from "../../assets/micropro.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.h1tag}>Work Experience</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.column}>
          <img className={styles.round} src={img} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.uni}>Technical Intern- Micropro</h1>
          <ul className={styles.para}>
            <li>Was part of the front end development team.</li>
            <li>Helped in developing th UI of a hospital managemnet system.</li>
            <li>System's UI was developed using Java</li>
          </ul>
          <h2 className={styles.purple}>December 2019- January 2020</h2>
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.column}>
          <img className={styles.round} src={img1} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.uni}>Technical Intern- Cloud Counselage</h1>
          <ul className={styles.para}>
            <li>Part of the machine learning team at Cloud counselage.</li>
            <li>Currently undergoing training.</li>
            <li>
              Learned ML algorithms such as CNN, SVM, PCA, Random Forest Tree
            </li>
          </ul>
          <h2 className={styles.purple}>April 2020- Ongoing</h2>
        </div>
      </div>
    </div>
  );
};
export default about;
