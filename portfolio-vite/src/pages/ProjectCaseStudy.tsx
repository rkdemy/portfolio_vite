import React, { useState, useRef, useEffect } from "react";
import styles from "./styling/Project.module.css";
import AnimateText from "../component/AnimateText";
import HighlightText from "../component/HighlightText";
import image from "../assets/portfolio_images/bg1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { BsArrowDownCircle } from "react-icons/bs";

const ProjectCaseStudy = ({
  header,
  headerSubtitle,
  tabNames,
  projectOverview,
  projectDetails,
  goalAndSolution,
  achievements,
  challenges,
  conclusionOverall,
  lessonsLearnt,
  areasOfImprovement,
}) => {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(achievements[0].title);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 870);
  const [sliderRef, setSliderRef] = useState(null);

  const iconStyle = {
    fontSize: "17px",
    verticalAlign: "middle",
    marginBottom: "3px",
    marginRight: "8px",
  };

  var settings = {
    infinite: false,
    arrows: false,
    lazyLoad: false,
    centerMode: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setTab(next);
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 870);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container_restrict}>
        <div className={styles.header}>
          <h1>{header}</h1>
          <p>{headerSubtitle}</p>

          <div className={styles.tabsContainer}>
            <ul className={styles.tabsList}>
              {isMobile ? (
                <>
                  <button
                    onClick={sliderRef?.slickPrev}
                    className={styles.prev}
                  >
                    <IoIosArrowBack />
                  </button>

                  <Slider ref={setSliderRef} {...settings}>
                    {tabNames?.map((x, index) => (
                      <li
                        key={index}
                        className={`${styles.list} ${
                          tab === index ? styles.selected : ""
                        }`}
                        onClick={() => setTab(index)}
                      >
                        <img src={x.image} alt="" />
                        {x.name}
                      </li>
                    ))}
                  </Slider>
                  <button
                    onClick={sliderRef?.slickNext}
                    className={styles.next}
                  >
                    <IoIosArrowForward />
                  </button>
                </>
              ) : (
                <>
                  {tabNames?.map((x, index) => (
                    <li
                      key={index}
                      className={`${tab === index ? styles.selected : ""}`}
                      onClick={() => setTab(index)}
                    >
                      <img src={x.image} alt="" />
                      {x.name}
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className={styles.header_image_container}>
            {tabNames?.map(
              (x, index) =>
                tab === index && (
                  <div className={styles.video_crop}>
                    <video
                      src={x.video}
                      key={x.name}
                      className={styles.video}
                      autoPlay
                      muted
                      controls
                      loop
                    />
                  </div>
                )
            )}
          </div>
        </div>

        <div className={styles.project_overview}>
          <div className={styles.project_overview_container}>
            <h2>Project Overview</h2>

            <div className={styles.project_details_container}>
              <div className={styles.overview_container}>
                <AnimateText>
                  {projectOverview?.map((x, index) => (
                    <span className={styles.overview} key={index}>
                      {x.animate ? (
                        <HighlightText>{x.content}</HighlightText>
                      ) : (
                        x.content
                      )}
                    </span>
                  ))}
                </AnimateText>
              </div>
              <AnimateText>
                <div className={styles.project_details}>
                  {projectDetails?.map((x, index) => {
                    return (
                      <div key={index} style={{ display: "flex" }}>
                        <div className={styles.span}>
                          <h3>{x.title}</h3>
                          {x.content.map((i, idx) => (
                            <p key={idx}>
                              {i.icon && (
                                <span style={iconStyle}>{i.icon}</span>
                              )}

                              {i.text}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AnimateText>
            </div>
          </div>
          <br />
        </div>
        <div className={styles.container_section_two}>
          <AnimateText>
            <div className={styles.square_container}>
              {goalAndSolution?.map((x, index) => {
                return (
                  <div className={styles.square_container_content} key={index}>
                    <p>{x.text}</p>
                  </div>
                );
              })}
            </div>
          </AnimateText>
        </div>
        <h2 className={styles.achievements_title}>Key Achievements</h2>
        <div className={styles.achievement_container}>
          <div className={styles.achievement_container_content}>
            <div className={styles.left_content}>
              {achievements?.map((x, index) => (
                <div
                  key={x.title}
                  onClick={() => setOpen(x.title)}
                  className={styles.achievements_tab}
                  style={
                    index % 2 === 0
                      ? {}
                      : {
                          borderTop: "1px solid grey",
                          borderBottom: "1px solid grey",
                        }
                  }
                >
                  <span>
                    <h4>{x.title}</h4>
                    <BsArrowDownCircle
                      className={
                        open === x.title ? styles.rotate : styles.normal
                      }
                    />
                  </span>

                  <p className={open === x.title ? styles.show : styles.hidden}>
                    {x.description}
                  </p>
                  <div className={styles.video_container}>
                    {open == x.title && isMobile && (
                      <div className={styles.video_crop}>
                        <video
                          src={x.image}
                          key={x.title}
                          className={styles.video}
                          autoPlay
                          muted
                          loop
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.right_content}>
              {achievements?.map(
                (x) =>
                  open === x.title &&
                  !isMobile && (
                    <div className={styles.video_crop}>
                      <video
                        src={x.image}
                        key={x.title}
                        className={styles.video}
                        autoPlay
                        muted
                        loop
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        <div className={styles.challenge_container}>
          <h2>Challenges</h2>

          <div className={styles.challenge_container__content}>
            {challenges?.map(
              (
                x: { icon: string; title: string; description: string },
                index: number
              ) => {
                return (
                  <div
                    className={styles.challenge_container__square}
                    key={index}
                  >
                    <AnimateText>
                      <div className={styles.icon}>{x.icon}</div>
                      <h4>{x.title}</h4>
                      <p>{x.description}</p>
                    </AnimateText>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <div className={styles.conclusion_container}>
        <div className={styles.conclusion_header}>
          <div>
            <h2>Conclusion & Reflection</h2>
            <p>
              This professional experience was my first experience into client
              services, involving tasks such as expectation management, regular
              communication via emails and Zoom meetings, and collaboration
              within a team. The collaborative nature of working together,
              discussing code, brainstorming ideas, and overcoming challenges as
              a group stood out as a significant reason for my enjoyment and
              reaffirmed my passion for the industry.
            </p>
          </div>
        </div>

        <div className={styles.carousel}>
          <div className={styles.carousel_contents}>
            <div className={styles.carousel_contents_container}>
              <div className={styles.noise_title}></div>
              <p className={styles.carousel_title}>Lessons Learnt</p>
            </div>

            {lessonsLearnt?.map((x, index) => {
              return (
                <div className={styles.carousel_contents_container} key={index}>
                  <div>
                    <div className={styles.icon}>{x.title}</div>
                    {x.content.map((i, idx) => (
                      <span className={styles.carousel_description} key={idx}>
                        {i.animate ? (
                          <HighlightText>{i.text}</HighlightText>
                        ) : (
                          i.text
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Carousel */}
          <div className={styles.carousel_contents}>
            <div className={styles.carousel_contents_container}>
              <div className={styles.noise_title}></div>
              <p className={styles.carousel_title}>Areas of Improvement</p>
            </div>

            {areasOfImprovement?.map((x, index) => {
              return (
                <div className={styles.carousel_contents_container} key={index}>
                  <div>
                    <p className={styles.carousel_description}>
                      <div className={styles.icon}>{x.title}</div>
                      {x.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.conclusion_header}>
          <div>
            <p>
              Overall, I thoroughly enjoyed this professional experience and
              wish it would have extended longer. I would like to express my
              thanks to all the members who were involved in this project. A
              sincere thanks to my supervisor, Peter, for his guidance, support,
              and expertise. I also extend this thanks to my clients, Diana, and
              Stephen, who provided the team with an opportunity to test our
              capabilities and expand our portfolio of knowledge. I sincerely
              enjoyed this collaborative journey and thankful for this valuable
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
