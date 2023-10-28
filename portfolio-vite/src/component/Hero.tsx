import React from "react";
import styles from "./styling/Hero.module.css";
import paint2 from "../assets/hero_section/paint.jpg";
import paintblur from "../assets/hero_section/paintblur.png";
import paint1 from "../assets/hero_section/paint2Compressed.jpg";
import Switch from "./Switch";
import { TbArrowMoveRight } from "react-icons/tb";
const Hero = () => {
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.hero_container__content}>
          <div className={styles.hero_name}>
            <div className={styles.hero_2}>
              <h1>R</h1>
              <Switch />
              <h1>Y FRONT</h1>
            </div>
            <div className={styles.hero_3}>
              <h1>END</h1>
              <div className={styles.image_container}>
                <img
                  src={paint2}
                  placeholder="blur"
                  alt="An abstract painting"
                />
              </div>
            </div>
            <div className={styles.hero_4}>
              <div>
                <img
                  src={paint1}
                  placeholder="blur"
                  alt="An abstract painting"
                />
              </div>
              <h1>DEVELOPER</h1>
            </div>
          </div>
        </div>
        <div>
          <ul className={styles.hero_links}>
            <li>
              <a href="#portfolio" className={styles.underline}>
                <aside className={styles.arrow}>
                  <TbArrowMoveRight />
                </aside>
                my projects
              </a>
            </li>
            <li>
              <a href="#about" className={styles.underline}>
                <aside className={styles.arrow}>
                  <TbArrowMoveRight />
                </aside>
                about me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
