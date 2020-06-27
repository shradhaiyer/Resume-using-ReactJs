import React from "react";
import styles from "./Introduction.module.css";
import img from "../../assets/girl.png";
import Image from "../Introduction/Image/Image";
const intro = () => {
  return (
    <div className={styles.back}>
      <div className={styles.img}>
        <img src={img} alt="illustration" />
      </div>
      <div className={styles.header}>
        <h1 className={styles.h1tag}>Hi there, Shraddha Here!</h1>
      </div>
    </div>
  );
};
export default intro;
