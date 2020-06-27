import React from "react";
import styles from "./Skills.module.css";

const skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.h1tag}>SKILLS</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.card1}>
          <h3 className={styles.header11}>Front End Development</h3>
          <p>The thought of bring code to life brings me happiness!</p>
          <h4 className={styles.lang}> Language I speak:</h4>
          <ul className={styles.list}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className={styles.card2}>
          <div>
            <h3 className={styles.header11}>Programming Languages</h3>
            <p>The thought of bring code to life brings me happiness!</p>
            <h4 className={styles.lang}> Language I speak:</h4>
            <ul className={styles.list}>
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default skills;
