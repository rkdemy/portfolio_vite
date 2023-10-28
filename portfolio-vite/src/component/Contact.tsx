import React, { useRef } from "react";
import styles from "./styling/Contact.module.css";
import ParallaxText from "./ParallaxText.tsx";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <section>
        <h4>Get in touch and let's collaborate.</h4>
      </section>
      <section>
        <div className={styles.marquee}>
          <ParallaxText baseVelocity={2}>
            GET IN TOUCH - LET'S TALK -&nbsp;
          </ParallaxText>
        </div>
      </section>
      <section>
        <h4 className={styles.email}>roykdemy@gmail.com</h4>
      </section>
      <section>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/roy-kim-0428b7276/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <span className={styles.span_mother}>
                  <span>L</span>
                  <span>I</span>
                  <span>N</span>
                  <span>K</span>
                  <span>E</span>
                  <span>D</span>
                  <span>I</span>
                  <span>N</span>
                </span>
                <span className={styles.span_mother2}>
                  <span>L</span>
                  <span>I</span>
                  <span>N</span>
                  <span>K</span>
                  <span>E</span>
                  <span>D</span>
                  <span>I</span>
                  <span>N</span>
                </span>
              </button>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rkdemy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <span className={styles.span_mother}>
                  <span>G</span>
                  <span>I</span>
                  <span>T</span>
                  <span>H</span>
                  <span>U</span>
                  <span>B</span>
                </span>
                <span className={styles.span_mother2}>
                  <span>G</span>
                  <span>I</span>
                  <span>T</span>
                  <span>H</span>
                  <span>U</span>
                  <span>B</span>
                </span>
              </button>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
