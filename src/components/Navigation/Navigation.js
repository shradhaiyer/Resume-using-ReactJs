import React from "react";
import styles from "./Navigation.module.css";
import Logo from "../Navigation/Logo/Logo";
import Social from "../Navigation/Social/Social";
const nav = () => {
  return (
    <div className={styles.nav}>
      <Social />
    </div>
  );
};
export default nav;
