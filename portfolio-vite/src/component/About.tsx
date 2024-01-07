import styles from "./styling/About.module.css";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "0px" });

  return (
    <div className={styles.about}>
      <div
        className={styles.about_content}
        ref={ref}
        style={{
          transform: inView ? "none" : "translateY(50px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.5s ease",
        }}
      >
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
