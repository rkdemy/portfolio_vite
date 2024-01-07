import styles from "./styling/Skills.module.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 100,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        {children.map((text, index) => (
          <span key={index} className={styles.optionName}>
            {text}
          </span>
        ))}
        {children.map((text, index) => (
          <span key={index} className={styles.optionName}>
            {text}
          </span>
        ))}
        {children.map((text, index) => (
          <span key={index} className={styles.optionName}>
            {text}
          </span>
        ))}
        {children.map((text, index) => (
          <span key={index} className={styles.optionName}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const options = [
  { name: "React" },
  { name: "JavaScript" },
  { name: "Vite" },
  { name: "styled-components" },
  { name: "Github" },
  { name: "Figma" },
  { name: "Nextjs" },
];

export default function Skills() {
  const optionNames = options.map((x) => x.name);
  return (
    <section className={styles.parallax_container}>
      <ParallaxText baseVelocity={2}>{optionNames}</ParallaxText>
      <ParallaxText baseVelocity={3}>{optionNames}</ParallaxText>
      <ParallaxText baseVelocity={4}>{optionNames}</ParallaxText>
    </section>
  );
}
