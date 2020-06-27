import React, { useEffect, useState } from "react";
import styles from "./SayHello.module.css";
const sayhello = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1tag}>Say Hello! </h1>
      <h2 className={styles.h1tag}>I'll Get back to you soon!</h2>
      <div>
        <form>
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" />
          </div>

          <div>
            <label>Email Id</label>
            <input type="text" />
          </div>
          <div>
            <label>Do you wanna say something?</label>
            <input type="text" />
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default sayhello;
