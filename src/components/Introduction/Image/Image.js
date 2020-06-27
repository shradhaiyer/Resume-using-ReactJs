import myImg from "../../../assets/IMG_0707.JPG";
import React from "react";
import styles from "./Image.module.css";

const image = () => {
  return <img className={styles.img} src={myImg} alt="Shraddha" />;
};
export default image;
