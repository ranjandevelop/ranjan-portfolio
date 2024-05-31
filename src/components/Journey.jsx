import React from "react";

import { Chrono } from "react-chrono";

const Journey = () => {
  const items = [
    {
      title: "July, 2022",
      cardTitle: "Bachelors of Computer Application",
      cardSubtitle:
        "Raniganj Institute of  Information Technology | Raniganj, West Bengal",
      cardDetailedText:
        "In 2022 i graduated with a degree in Computer Applications, achieving a commendable CGPA of 9.23. My passion for programming is reflected in my proficiency with languages such as C, C++, Java, and Python, Javscript. Eager to expand my skill set, I pursued web development alongside my college studies. This led me to create numerous projects and gain practical experience by working as a freelancer. My enthusiasm for learning and dedication to my craft have been key drivers of my academic and professional accomplishments.",
    },
    {
      title: "Sep, 2022 to Jan, 2023",
      cardTitle: "Internship as a Full Stack Developer",
      cardSubtitle: "ColorBracket Technologies LLP | Durgapur, West Bengal",
      cardDetailedText:
        "I worked on the front-end development of a web application. I implemented APIs to connect the application to the back-end and built the user interface using ANGULAR.",
    },
    {
      title: "Feb, 2023 to Feb 2024",
      cardTitle: "Worked as a Web Developer",
      cardSubtitle: "The Teachief Academy | Kolkata, West Bengal",
      cardDetailedText:
        "I've created more than seven WordPress Websites. From development to deployment. I managed the entire process independently. Along with the company website, I worked on websites that listed properties, were technical, offered tours and travels. I also worked closely with the design team to ensure that the application was visually appealing and easy to use. I gained a strong understanding of front-end development.",
    },
  ];
  return (
    <div className="p-9">
      <h4 className="text-center text-4xl m-4">Work Experince</h4>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        className=""
        disableToolbar="TRUE"
      />
    </div>
  );
};

export default Journey;
Journey;
