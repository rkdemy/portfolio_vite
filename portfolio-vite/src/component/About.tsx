import React from "react";
import styles from "./styling/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_content}>
        <h4>About Me</h4>
        <h2>
          I'm a front-end web developer. My goal? To build stunning websites
          that are both aesthetically pleasing and functional, all the while
          surrounded by awesome people.
        </h2>
      </div>
    </div>
  );
};

export default About;
