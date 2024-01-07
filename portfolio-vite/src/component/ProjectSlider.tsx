import { useState } from "react";
import styles from "./styling/Portfolio.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSlider = ({ title, description, tech, image }) => {
  const [sliderRef, setSliderRef] = useState(null);

  var settings = {
    infinite: true,
    dots: false,
    arrows: false,
    lazyLoad: true,
    centerMode: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className={styles.left_container}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className={styles.techSpan}>
          {tech?.map((item: string, index) => (
            <li className={styles.tech_container} key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className={styles.button_site}>
          <button>
            <a href="www.google.com">Github</a>
          </button>
          <button>
            <a href="www.google.com">Live Site</a>
          </button>
        </div>
      </div>
      <div className={styles.right_container}>
        <div className={styles.carousel}>
          {/*@ts-ignore*/}
          <Slider ref={setSliderRef} {...settings}>
            {image.map((x, index) => (
              <img src={x.image} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProjectSlider;
