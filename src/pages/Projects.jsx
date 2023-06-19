import React from "react";
import grey from "../Assets/greysoft.png";

const Projects = () => {
  return (
    <div className="px-14  text-white  h-[100%] sm:pt-[100px] sm:px-[10px] md:py-[100px]">
      <div>
        <h1 className="text-[80px] font-semibold  justify-center sm:text-[44px] md:text-[60px]">Projects</h1>
        <p className="text-[16px] text-justify text-darktext">
          Since mid-2021, I have had the opportunity to work on several exciting
          projects that have allowed me to <br></br>develop my skills and explore new
          areas of interest. Each project has presented its unique set of<br></br>
          challenges, and I am proud of what I have been able to accomplish.
          Through these projects, I have <br></br>developed a deep appreciation for
          empathy, user experience, product copywriting, wire-framing and a lot<br></br>
          more and I am excited to continue my journey of growth and learning in
          the years to come."
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-[60px] mt-[50px]">
          <div>
            {" "}
            <h1 className="text-darktext">2021 - Now</h1>
          </div>
          <div>
            <img src={grey} className="w-[80%]" />
          </div>
        </div>
        <div className="flex gap-[60px] mt-[50px]">
          <div>
            {" "}
            <h1 className="text-darktext">2021 - Now</h1>
          </div>
          <div>
            <img src={grey} className="w-[80%]"  />
          </div>
        </div>
        <div className="flex gap-[60px] mt-[50px]">
          <div>
            {" "}
            <h1 className="text-darktext">2021 - Now</h1>
          </div>
          <div>
            <img src={grey}  className="w-[80%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
