import React from "react";
import ParticlesComponent from "./Particles";
import Skills from "./Skills";
import ProfileInfo from "./ProfileInfo";
import Projects from "./Projects";
import LinkedInImg from "../assets/linkedin.svg";
import InstaImg from "../assets/instagram.png";
import View from "../assets/view.png";
import Download from "../assets/file.png";
import Gmail from "../assets/gmail.png";
import Github from "../assets/github.png";
import Experience from "./Experience";
import Resume from "../assets/ranjanKumarPrasad.pdf";

const Hero = () => {
  return (
    <section id="hero_section" className="bg-[#000000]  cursor-pointer">
      <ParticlesComponent id="particles" className="" />
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 h-[100vh]">
        <div className="bento">
          <div className="box" id="profile-info">
            <ProfileInfo />
          </div>
          <div
            className="box flex items-center justify-center"
            id="linkedinLogo"
          >
            <a href="https://www.linkedin.com/in/ranjankprasad/">
              <img
                src={LinkedInImg}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
            </a>
          </div>
          <div className="box flex justify-between items-center" id="skills">
            <Skills />
          </div>
          <div className="box md:overflow-hidden" id="projects">
            <Projects />
          </div>
          <div
            className="box flex justify-center items-center flex-col"
            id="githubLogo"
          >
            <div className="text-white">ReactJS/Javasript</div>
            <div className="relative group inline-block p-4 w-[100%]">
              <a href="https://harry-potter-db-dusky.vercel.app/">
                <div className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 14"
                    height="25"
                    width="25"
                  >
                    <path
                      fill="#FFA000"
                      d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z"
                    ></path>
                    <path
                      fill="#FFCA28"
                      d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z"
                    ></path>
                  </svg>
                  <p>Harry Potter Fandom</p>
                </div>
              </a>
            </div>
            {/* <a href="">
              <button class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
                Github
              </button>
            </a> */}
          </div>
          <div className="box flex justify-evenly items-center" id="resume">
            <a href={Resume}>
              <img
                src={View}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
            </a>
            <a href={Resume} href="https://github.com/ranjandevelop">
              <img
                src={Github}
                alt=""
                style={{
                  height: "100px",
                  width: "100px",
                  color: "#fff",
                }}
              />
            </a>
          </div>
          <div className="box" id="experience">
            <Experience />
          </div>
          <div className="box flex justify-center items-center" id="emailLogo">
            <a target="_blank" href="mailto:ranjanprasad745@gmail.com">
              <img
                src={Gmail}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
            </a>
          </div>
          <div className="box flex justify-center items-center" id="instaLogo">
            <a target="_blank" href="https://instagram.com/ranjan21_">
              <img
                src={InstaImg}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
