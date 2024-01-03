import styles from "../App.module.css";
import Hero from "../component/Hero";
import About from "../component/About";
import Contact from "../component/Contact";
import Skills from "../component/Skills";
import Portfolio from "../component/Portfolio";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-500px" });

  return (
    <>
      <div className={styles.noise}></div>
      <section>
        <Hero />
      </section>

      <section className={styles.portfolio} id="portfolio">
        <Portfolio />
      </section>

      <section className={styles.about} id="about">
        <About />
      </section>

      <section
        className={styles.skills}
        id="skills"
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transition: "all 0.6s ease",
        }}
      >
        <Skills />
      </section>

      <section className={styles.contact} id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
