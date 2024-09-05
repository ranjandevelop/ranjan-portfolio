import React from "react";

const Experience = () => {
  return (
    <div className="flex justify-center items-center h-[90%]">
      <div className="w-full">
        <div className="text text-white">
          <span className="text-md text-[#ccc] text-[13px]">1.5+ YEAR OF</span>
          <p className="text-[21px]">EXPERIENCE</p>
        </div>
        <div className="text-white mt-10 flex justify-between items-center">
          <span className="md:text-[31px] text-[21px] font-bold md:font-normal">
            Web Developer
          </span>
          <p className="text-right md:text-[10px] text-[.48em] flex justify-center items-center tracking-wider">
            <span>
              Marconix Sales Solution Pvt. Ltd. <br /> Jun 2024 - Present
            </span>
          </p>
        </div>
        <div className="text-white mt-10 flex justify-between items-center">
          <span className="md:text-[31px] text-[21px] font-bold md:font-normal line-through">
            Web Developer
          </span>
          <p className="text-right md:text-[10px] text-[.48em] flex justify-center items-center tracking-wider">
            <span>
              The Teachief Academy. <br /> Feb 2023 - Feb 2024
            </span>
          </p>
        </div>
        <div className="text-white mt-10 flex justify-between items-center">
          <span className="md:text-[31px] text-[21px] font-bold md:font-normal line-through">
            Full Stactk Intern
          </span>
          <p className="text-right md:text-[10px] text-[.48em] flex justify-center items-center tracking-wider">
            <span>
              ColorBracket Technologies LLP. <br /> Sept 2023 - Jan 2024
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
