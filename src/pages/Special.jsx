import React from "react";
// import expereience from "../Assets/experience.png";

const card =[{
  imgSrc:"/experience.png",
  P1:"User Experience Design",
  P2:"Create user ccentered products which revolve around accessibility and inclusivity"
},
{
  imgSrc:"/vector.png",
  P1:"Vector Illustrations",
  P2:"Create art using vector illustration software like Adobe Illustrator."
},
{
  imgSrc:"/interaction.png",
  P1:"Interaction Design",
  P2:"Design interactive products and services."
},
{
  imgSrc:"/color.png",
  P1:"Color Theory",
  P2:"Create more harmonious designs, and effectively communicate with users."
},
{
  imgSrc:"/user.png",
  P1:"User Research",
  P2:"Proficiency in user research. "
},
{
  imgSrc:"/prototype.png",
  P1:"Prototyping",
  P2:"Create intuitive prototypes that are user friendly and easy to use."
}]

const Special = () => {
  return (
    <div className="px-14 text-white sm:py-[100px] md:py-[100px] pb-[50px] sm:px-[5px] ">
      <div className="text-[80px] font-semibold ">
        <h1 className="sm:text-[23px] md:text-[60px]">Special Skills</h1>
      </div>
      <p className="text-darktext">
        As a UX Designer, I have developed a range of special skills that have
        enabled me to excel in my field.<br></br> These skills include attention
        to detail, problem-solving ability, creativity, strong communication
        skills,<br></br> etc..{" "}
      </p>
      <div className="mt-[60px] sm:justify-center   grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-[50px]  ">
        {
          card.map((item, index)=>(
            <div className=" w-[100%] sm:w-[100%] h-[100%] md:w-[100%] sm:h-[100%] bg-darkGrey  rounded-xl p-[15px] sm:p-[10px] flex flex-col gap-[10px]">
          <img src={item.imgSrc} className="w-[24px]  rounded-full h-[24px]" />
          <p className="text-white text-[14px]">{item.P1}</p>
          <p className="text-black text-[13px] sm:text-left ">
          {item.P2}
          </p>
        </div>
          ))
        }
        
      </div>
    </div>
  );
};

export default Special;
