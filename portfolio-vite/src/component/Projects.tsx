import styles from "./styling/Projects.module.css";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import AnimateText from "./animation/AnimateText";

const Portfolio = () => {
  const ref = useRef();
  const secondRef = useRef();
  const isInView = useInView(ref, { once: true });
  const secondIsInView = useInView(secondRef, { once: true });

  return (
    <>
      <section className={styles.section}>
        {/* <AnimateText text="Featured Works" /> */}
        <h1>Featured Works</h1>
        <article className={styles.article}>
          <aside
            className={styles.aside}
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              filter: isInView ? "blur(0px)" : "blur(5px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <video width="600" className={styles.image} loop muted>
              <source
                src="https://res.cloudinary.com/dx4eg13eu/video/upload/v1688703116/disneyclone_x5c2kv.mp4"
                type="video/mp4"
                muted
              />
            </video>
          </aside>
          <figure
            className={styles.figure}
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              filter: isInView ? "blur(0px)" : "blur(5px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <h3>
              <span>2023</span> Windows 98 Themed: Disney Clone
            </h3>
            <p>
              The goal with this project was to gain more styling experience as
              I previously only focused on logic code (APIs, State Management,
              Event handlers, etc). I found styling to be an enjoyable yet
              difficult challenge especially when it came to responsive design.
              <br />
              <br />
              It was also my first time using a relational database like
              Postgres.
            </p>
            <span className={styles.tech}>React</span>
            <span className={styles.tech}>Postgres</span>
            <span className={styles.tech}>Express</span>
          </figure>
        </article>
        <article className={styles.article}>
          <aside
            className={styles.aside}
            ref={secondRef}
            style={{
              transform: secondIsInView ? "none" : "translateX(-200px)",
              filter: isInView ? "blur(0px)" : "blur(5px)",
              opacity: secondIsInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <video width="600" className={styles.image} loop muted>
              <source
                src="https://res.cloudinary.com/dx4eg13eu/video/upload/v1688703116/disneyclone_x5c2kv.mp4"
                type="video/mp4"
                muted
              />
            </video>
          </aside>
          <figure
            className={styles.figure}
            ref={secondRef}
            style={{
              transform: secondIsInView ? "none" : "translateX(200px)",
              filter: isInView ? "blur(0px)" : "blur(5px)",
              opacity: secondIsInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <h3>
              <span>2023</span> E-commerce Store
            </h3>
            <p>
              Building this website marked a significant milestone for me as a
              developer. Prior to this project, I completed small but focused
              projects to gain confidence with React. While I did follow a Udemy
              course by John Smilga for styling, I took the initiative to
              independently code the majority of the logic. This project served
              as a stepping stone before tackling personal projects and provided
              important lessons in programming practices and new perspectives on
              coding.
              <br />
              <br />I also implemented Auth-0 and Stripe myself for more
              experience.
            </p>
            <span className={styles.tech}>React</span>
            <span className={styles.tech}>Styled-Components</span>
            <span className={styles.tech}>Auth-0</span>
            <span className={styles.tech}>Stripe</span>
          </figure>
        </article>
      </section>
    </>
  );
};

export default Portfolio;
