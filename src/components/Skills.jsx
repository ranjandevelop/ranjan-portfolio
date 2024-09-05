import React from "react";
import CssImg from "../assets/css-3.png";
import HtmlImg from "../assets/html-5.png";
import ReactImg from "../assets/physics.png";
import WordpressImg from "../assets/wordpress.png";

const Skills = () => {
  return (
    <>
      <div className="content">
        <div className="benefits">
          <div className="basic-marquee basic-marquee-1">
            <a className="social-media-link" href="">
              <img
                src={HtmlImg}
                alt=""
                style={{ height: "90px", width: "90px" }}
              />
            </a>
            <a className="social-media-link" href="">
              <img
                src={CssImg}
                alt=""
                style={{ height: "90px", width: "90px" }}
              />
            </a>
            <a className="social-media-link" href="">
              <img
                src={ReactImg}
                alt=""
                style={{ height: "90px", width: "90px" }}
              />
            </a>
            <a className="social-media-link" href="">
              <img
                src={WordpressImg}
                alt=""
                style={{ height: "90px", width: "90px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
