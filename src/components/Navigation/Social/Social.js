import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Social.module.css";

export default function SocialFollow() {
  return (
    <div className={styles.social_container}>
      <a
        href="https://www.linkedin.com/in/shraddha-iyer-8b1526172/"
        className={styles.linkedin}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/shradhaiyer" className={styles.github}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/shraddhathyagarajan98"
        className={styles.facebook}
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/shraddhathyagarajan/"
        className={styles.instagram}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
