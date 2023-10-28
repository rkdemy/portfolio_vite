import { useState, useEffect } from "react";
import styles from "./styling/Navbar.module.css";
import ParallaxText from "./ParallaxText";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", changeColor);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
      <nav
        className={
          color
            ? `${styles.hero_nav_links} ${styles.hero_nav_links_glass}`
            : styles.hero_nav_links
        }
      >
        <div className={styles.hero_nav_logo}>
          <ul>
            <li>Roy</li>

            <li className={styles.slide_animation}>
              <div className={styles.marquee}>
                <ParallaxText baseVelocity={2}>
                  &nbsp;AVAILABLE FOR WORK •
                </ParallaxText>
              </div>
            </li>
            <li>
              <button className={styles.button}>
                <span className={styles.span_mother}>
                  <span>C</span>
                  <span>O</span>
                  <span>N</span>
                  <span>T</span>
                  <span>A</span>
                  <span>C</span>
                  <span>T</span>
                </span>
                <span className={styles.span_mother2}>
                  <span>C</span>
                  <span>O</span>
                  <span>N</span>
                  <span>T</span>
                  <span>A</span>
                  <span>C</span>
                  <span>T</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
