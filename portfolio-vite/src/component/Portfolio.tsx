import React from "react";
import styles from "./styling/Portfolio.module.css";
import DisneyScreenShot from "../assets/portfolio_images/disney.png";
import NotIkeaScreenshot from "../assets/portfolio_images/notikea2.png";
import ChaseSpaceScreenshot from "../assets/portfolio_images/chasespace.png";
import ChaseSpaceScreenshot2 from "../assets/portfolio_images/chasespace1.png";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h4>NOTEWORTHY PROJECTS</h4>
          <h4>
            Projects made
            <div className={styles.project_number}>3</div>
          </h4>
        </div>

        <ul>
          <li className={styles.first_project}>
            <a href="/chasespace">
              <div className={styles.project_container}>
                <h3>
                  ChaseSpace <span>2023</span>
                </h3>
                <img
                  src={ChaseSpaceScreenshot}
                  alt=""
                  className={styles.chasespace_image}
                />
              </div>

              <div className={styles.tech_container}>
                <h5 className={styles.tech}>React-Native</h5>
                <h5 className={styles.tech}>Node.js/Express</h5>
                <h5 className={styles.tech}>Firebase</h5>
                <h5 className={styles.tech}>PostgreSQL</h5>
                <h5 className={styles.tech}>Escrow API</h5>
                <h5 className={styles.tech}>Google Locations API</h5>
              </div>
              <p>View Project</p>
            </a>
          </li>
          <li className={styles.second_project}>
            <a href="/notikea">
              <div className={styles.project_container}>
                <h3>
                  NOT IKEA <span>2023</span>
                </h3>
                <img src={NotIkeaScreenshot} alt="" className={styles.image} />
              </div>
              <div className={styles.tech_container}>
                <h5 className={styles.tech}>React</h5>
                <h5 className={styles.tech}>Styled-Components</h5>
                <h5 className={styles.tech}>Auth-0</h5>
                <h5 className={styles.tech}>Stripe</h5>
              </div>
              <p>View Project</p>
            </a>
          </li>
          <li className={styles.last_project}>
            <a href="">
              <div className={styles.project_container}>
                <img src={DisneyScreenShot} alt="" className={styles.image} />
                <h3>
                  Disney Clone <span>2023</span>
                </h3>
              </div>
              <div className={styles.tech_container}>
                <h5 className={styles.tech}>React</h5>
                <h5 className={styles.tech}>PostgreSQL</h5>
                <h5 className={styles.tech}>TMDB API</h5>
              </div>
              <p>View Project</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
