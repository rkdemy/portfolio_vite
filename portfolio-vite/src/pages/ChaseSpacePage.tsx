import ProjectCaseStudy from "./ProjectCaseStudy";

import EscrowIcon from "../assets/chasespace_page/icons/feedback.png";
import CrudIcon from "../assets/chasespace_page/icons/writing.png";
import AuthIcon from "../assets/chasespace_page/icons/talking.png";
import MessageIcon from "../assets/chasespace_page/icons/smartphone.png";
import AccountIcon from "../assets/chasespace_page/icons/information.png";

import EscrowOverviewIcon from "../assets/chasespace_page/icons/escrow.png";
import { SiExpo, SiPostgresql } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandFirebase } from "react-icons/tb";
import { AiOutlineGoogle } from "react-icons/ai";

import UserReviewVideo from "../assets/chasespace_page/UserReview.mp4";
import AuthVideo from "../assets/chasespace_page/Authentication.mp4";
import EscrowVideo from "../assets/chasespace_page/Escrow.mp4";
import messageVideo from "../assets/chasespace_page/message s10.mp4";
import OrderVideo from "../assets/chasespace_page/Order.mp4";
import TripVideo from "../assets/chasespace_page/Trip.mp4";
import ResetVideo from "../assets/chasespace_page/Reset.mp4";

const ChaseSpacePage = () => {
  const tabNames = [
    { image: AuthIcon, name: "Authentication", video: AuthVideo },
    { image: CrudIcon, name: "Order CRUD", video: OrderVideo },
    { image: CrudIcon, name: "Trip CRUD", video: TripVideo },
    { image: MessageIcon, name: "Real-Time Message", video: messageVideo },
    { image: EscrowIcon, name: "Escrow API", video: EscrowVideo },
    { image: AccountIcon, name: "Reset Password", video: ResetVideo },
    { image: AccountIcon, name: "User Reviews", video: UserReviewVideo },
  ];

  const projectOverview = [
    { content: "This", animate: false },
    { content: " 'Professional Experience' ", animate: true },
    {
      content: "was a capstone unit at university where our team of four was",
      animate: false,
    },
    {
      content: " assigned a client. ",
      animate: true,
    },
    {
      content: "ChaseSpace asked us to",
      animate: false,
    },
    {
      content: " develop the core functionality ",
      animate: true,
    },
    {
      content:
        "of their mobile application before handing it off to a second development team.",
      animate: false,
    },
  ];

  const projectDetails = [
    {
      title: "Client",
      content: [{ text: "ChaseSpace" }],
    },
    {
      title: "Year",
      content: [{ text: "July - September" }],
    },
    {
      title: "The Team",
      content: [{ text: "4 Junior Developers" }, { text: "1 Supervisor" }],
    },
    {
      title: "Tech Stack",
      content: [
        { icon: <SiExpo />, text: "Expo Go" },
        { icon: <FaReact />, text: "React-Native" },
        { icon: <FaNodeJs />, text: "Node.JS/Express" },
        { icon: <TbBrandFirebase />, text: "Firebase" },
        { icon: <SiPostgresql />, text: "PostgreSQL" },
        {
          icon: (
            <img
              src={EscrowOverviewIcon}
              alt=""
              style={{ marginRight: "0px" }}
            />
          ),
          text: "Escrow API",
        },
        { icon: <AiOutlineGoogle />, text: "Google Locations API" },
      ],
    },

    {
      title: "My Role",
      content: [{ text: "Junior Full-Stack Developer" }],
    },
  ];

  const goalAndSolution = [
    {
      text: "The Goal was to build a solid foundation for the application, setting the stage for future development and fine-tuning. It also allowed us to showcase our abilities in core feature implementation and teamwork, all while working within a real-world project.",
    },
    {
      text: "The Solution was to develop a mobile app with a team of 4. As a team we successfully implemented user roles (Buyers and Travelers), authentication, integrated Escrow API, CRUD functionality for Travellers and Buyers, Real-time private messaging, reviews, user profiles.",
    },
  ];

  const achievements = [
    {
      image: AuthVideo,
      title: "Authentication",
      description:
        "Implemented the core authentication process, covering user registration and login functionalities, ensuring the privacy and integrity of user accounts.",
    },
    {
      image: messageVideo,
      title: "Real-Time Messages",
      description:
        "Implemented real-time messaging to enhance user interactions and communication within the platform. After discussing with our supervisor and client we agreed that using Firebase Real-time database was the best course of action for a startup rather than integrating a WebSocket and hosting it from scratch.",
    },
    {
      image: TripVideo,
      title: "Traveler CRUD",
      description:
        "Developed essential CRUD (Create, Read, Update, Delete) functionality for Trips, and added a section to see available orders associated with the trip.",
    },
    {
      image: EscrowVideo,
      title: "Escrow API",
      description:
        "Integrated the Escrow API to facilitate secure transactions between buyers and travelers, providing built-in payment protection and trust for users.",
    },
    {
      image: TripVideo,
      title: "Google Locations API",
      description:
        "Integrated the Google Locations API in the Trip details to improve user experience and streamline the creation process.",
    },
  ];

  const challenges = [
    {
      icon: "💬💡👩‍💻",
      title: "Leadership",
      description:
        "The role of project leader presented a unique challenge, requiring a balance across various project aspects. Managing client communication involved managing expectations, project timelines and gaining feedback. In supporting the team, I helped with tasks such as fixing bugs to providing code/git support, ensuring both the team's progress and my personal deadlines were met. The initial research phase also provided a clear vision of the app's functionality, enabling me to guide the team.",
    },
    {
      icon: "🐍📂",
      title: "Adapting to existing database",
      description:
        "Inheriting a Django and Python backend with limited documentation from the previous team presented a challenge. Navigating their source code, deciphering the database structure, and understanding the use of each table required comprehensive analysis and adaptation.",
    },
    {
      icon: "📬💬",
      title: "Real-time messaging",
      description:
        "Implementing real-time messaging per the client's request was a complex task. I researched whether to build this feature from scratch or use a third-party service like Firebase Real-time Database, opting for the latter due to cost-effectiveness for a startup. Implementing additional features like an unread badge, displaying the latest message, and enabling image uploads added further complexity.",
    },
    {
      icon: "💳🔄",
      title: "Escrow API",
      description:
        "Integrating the Escrow API presented the most significant challenge. With limited community support, forums, or resources, I relied heavily on the API's documentation. It took three days of trial and error to identify the correct code snippet and successfully implement the integration.",
    },
  ];

  const lessonsLearnt = [
    {
      title: "💬🤝 Leadership",
      content: [
        {
          text: "Navigating responsibilities regarding leadership hinged on",
          animate: false,
        },
        {
          text: " fostering transparent and knowledgeable communication with clients ",
          animate: true,
        },
        {
          text: "who trusted our expertise and cultivating an environment characterized by",
          animate: false,
        },
        {
          text: " compassion, understanding, and adaptability when interacting with team members. ",
          animate: true,
        },
      ],
    },
    {
      title: "👩‍💻🤔 Implementing Code Reviews",
      content: [
        { text: "As the project leader, I realize we", animate: false },
        {
          text: " missed the chance to implement regular code reviews",
          animate: true,
        },
        {
          text: ", which should have been done considering the teams inexperience with the React framework.",
          animate: false,
        },
        {
          text: " We were proud of our achievements ",
          animate: true,
        },
        {
          text: "especially with our scope within a 3 month time-span. In retrospect I'm",
          animate: false,
        },
        {
          text: " disappointed in the missed opportunities for small but impactful improvements. ",
          animate: true,
        },
        {
          text: "If we had spent more time focusing on little details I believe it would have resulted in a better product.",
          animate: false,
        },
      ],
    },
    {
      title: "🧑‍💻📚 Comments are not Documentation",
      content: [
        {
          text: "Throughout our project, we diligently included comments in our code and even created separate documentation covering various aspects such as UI design, database schema, installation guides and more. However, during this process, a significant realization dawned upon me – comments alone don't constitute comprehensive documentation.",
          animate: false,
        },
        {
          text: " If code requires comments for clarification, perhaps the code itself could be more human-readable from the outset.",
          animate: true,
        },
      ],
    },
    {
      title: "🧑‍💻📚 Version Control | Git",
      content: [
        {
          text: "As part of a collaborative effort, we utilized Git as our preferred version control system. We consistently committed, pushed, and pulled changes. While Git wasn't entirely familiar to me at the outset, by the project's completion, I became comfortable with its commands especially because we experienced many merging problems.",
          animate: false,
        },
      ],
    },
    {
      title: "🧑‍💻📚 Self-Reliance",
      content: [
        {
          text: "During the integration of the Escrow API it highlighted my reliance on third-party forums. This experience underscored the",
          animate: false,
        },
        {
          text: " importance of self-reliance ",
          animate: true,
        },
        {
          text: "and understanding APIs through official documentation, especially in the absence of an experienced community.",
          animate: false,
        },
      ],
    },
    {
      title: "📋📅 Task-Allocation",
      content: [
        {
          text: "Reflecting on task allocation, I now recognize",
          animate: false,
        },
        {
          text: " the need for more comprehensive role assignments. ",
          animate: true,
        },
        {
          text: "For example, allocating team members to research areas like UX would have laid the groundwork for well-informed design decisions.",
          animate: false,
        },
      ],
    },
    {
      title: "📱💡 Mobile UI",
      content: [
        {
          text: "Spending a significant time building the frontend for the phone, gave me",
          animate: false,
        },
        {
          text: " more experience regarding mobile design considerations. ",
          animate: true,
        },
        {
          text: "This would inevitably influence my choices when it comes to responsive design.",
          animate: false,
        },
      ],
    },
  ];

  const areasOfImprovement = [
    {
      title: "🖌️📱 UI Improvements",
      content:
        "Consider giving the application's UI a general facelift, focusing on improving button design and the general style of the app.",
    },
    {
      title: "🗂️🔄 Simplify File Structures",
      content:
        "An unexpected result of multiple developers working on the same project was different file structures. Although I made an effort during handoff to simplify the structure and also find repeated code and made it reusable I believe there was more to be done. Potential improvements would be to simplify the file structure by reducing the number of folders and directories, making it organized and easier to navigate.",
    },
    {
      title: "📬💬🔄 Duplicate Message Groups",
      content:
        "A complete oversight on my part was the ability for users to create duplicate group chats with the same user. Thankfully, it is an easy fix and simply needs to stop the same user id being repeated.",
    },
  ];

  const conclusionOverall = {
    title: "Conclusion & Reflection",
    content:
      "This professional experience was my first experience into client services, involving tasks such as expectation management, regular communication via emails and Zoom meetings, and collaboration within a team stood out as a significant reason for my enjoyment and reaffirmed my passion for the industry.",
  };

  return (
    <ProjectCaseStudy
      header="ChaseSpace"
      headerSubtitle="A peer-to-peer marketplace connecting Buyers and Travelers for global personal shopping."
      tabNames={tabNames}
      projectOverview={projectOverview}
      projectDetails={projectDetails}
      goalAndSolution={goalAndSolution}
      achievements={achievements}
      challenges={challenges}
      conclusionOverall={conclusionOverall}
      lessonsLearnt={lessonsLearnt}
      areasOfImprovement={areasOfImprovement}
    />
  );
};

export default ChaseSpacePage;
