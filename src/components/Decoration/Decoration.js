import React from "react";
import styles from "./Decoration.module.css";
import img from "../../assets/computers.png";
const decoration = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt="decoration" />
    </div>
  );
};
export default decoration;
