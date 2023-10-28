import React from "react";
import styles from "./styling/ProjectPage.module.css";

const ProjectPage = () => {
  return (
    <div className={styles.container}>
      <h1>ChaseSpace</h1>
      <div className={styles.header_text_container}>
        <p className={styles.header_text}>
          A peer-to-peer marketplace connecting Buyers and Travelers for global
          personal shopping.
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
