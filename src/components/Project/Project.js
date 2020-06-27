import React from "react";
import styles from "./Project.module.css";
import img from "../../assets/skinvision.png";
import img1 from "../../assets/covid.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.h1tag}>Project</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.column}>
          <img className={styles.round} src={img} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.uni}>Tele-Dermatology App</h1>
          <p className={styles.para}>
            A machine learning model deveoped using Transfer learning and
            deployed on a mobile device using tensorflow lite. this application
            diagnonses skin diseases with an accuracy of over 80% and recommends
            products for its treatment.
          </p>
          <a href="https://github.com/shradhaiyer" className={styles.github}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.column}>
          <img className={styles.round} src={img1} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.uni}>Covid-19 Numbers Tracking</h1>
          <p className={styles.para}>
            A web-based covid tracker made using ReactJS. This project gives
            real time data of covid cases represented in graph charts and bar
            graphs.
          </p>
          <a href="https://github.com/shradhaiyer" className={styles.github}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default about;
