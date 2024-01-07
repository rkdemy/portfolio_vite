import React, { useState } from "react";
import styles from "./styling/Portfolio.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//ChaseSpace
import ChaseSpaceScreenshot from "../assets/portfolio_images/chasespace1.svg";

//Disney
import DisneyLogin from "../assets/portfolio_images/Disney/login.svg";
import DisneyHome from "../assets/portfolio_images/Disney/home.svg";
import DisneySearch from "../assets/portfolio_images/Disney/search.svg";
import DisneyShow from "../assets/portfolio_images/Disney/show.svg";

//Ikea
import IkeaProduct from "../assets/portfolio_images/Ikea/product_page.svg";
import IkeaCart from "../assets/portfolio_images/Ikea/cart.svg";
import IkeaItem from "../assets/portfolio_images/Ikea/item.svg";
import IkeaHome from "../assets/portfolio_images/Ikea/home_page.svg";

import ProjectSlider from "./ProjectSlider.jsx";

const chasespaceTech = [
  "React-Native",
  "Expo Go",
  "JavaScript (Node.js/Express)",
  "Firebase",
  "PostgreSQL",
  "Escrow API",
  "Google Locations API",
];

const ikeaTech = [
  "React",
  "JavaScript (Node.js/Express)",
  "Styled-Components",
  "Auth-0",
  "Stripe",
];

const disneyTech = [
  "React",
  "JavaScript (Node.js/Express)",
  "PostgreSQL",
  "TMDB API",
];

const notikeadescription =
  "An ecommerce shop made loosely following a tutorial project from a Udemy course by John Smilga completed during my early days of learning React. It served as a crucial milestone before moving onto personal projects.";

const disneydescription =
  "After the ecommerce website I wanted to challenge myself by recreating Disney without looking at tutorials on Youtube or Github. My main goal was to gain more styling experience as I previously focused on logic code (APIs, State Management, Event handlers, etc). I found styling to be an enjoyable yet difficult challenge especially when it came to responsive design. It was also my first time using PostgreSQL or any rdbms. Prior to this I had used firebase.";

const ikeaImage = [
  { image: IkeaHome },
  { image: IkeaProduct },
  { image: IkeaItem },
  { image: IkeaCart },
];

const disneyImage = [
  { image: DisneyLogin },
  { image: DisneyHome },
  { image: DisneySearch },
  { image: DisneyShow },
];

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h4>PROJECTS |</h4>
          <h4>
            No. of Projects
            <div className={styles.project_number}>3</div>
          </h4>
        </div>

        <ul>
          <li className={styles.first_project}>
            <div className={styles.left_container}>
              <h3>ChaseSpace</h3>
              <p>
                A peer-to-peer marketplace to facilitate global personal
                shopping by connecting Buyers with Travelers, akin to Grabr,
                Airtasker and Fiverr.
              </p>
              <ul className={styles.techSpan}>
                {chasespaceTech.map((item) => (
                  <li className={styles.tech_container}>{item}</li>
                ))}
              </ul>
              <div className={styles.button_site}>
                <button>
                  <a href="/chasespace">Learn more...</a>
                </button>
              </div>
            </div>
            <div className={styles.right_container}>
              <img src={ChaseSpaceScreenshot} alt="" />
            </div>
          </li>
          <li className={styles.second_project}>
            <ProjectSlider
              title="Not Ikea"
              description={notikeadescription}
              tech={ikeaTech}
              image={ikeaImage}
            />
          </li>
          <li className={styles.last_project}>
            <ProjectSlider
              title="Disney Clone"
              description={disneydescription}
              tech={disneyTech}
              image={disneyImage}
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
