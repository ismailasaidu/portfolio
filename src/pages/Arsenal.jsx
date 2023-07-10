import React from "react";

const Arsenal = () => {
  const icons = [
    {
      imgSrc: "/figma.png",
    },
    {
      imgSrc: "/slack.png",
    },
    {
      imgSrc: "github.png",
    },
    {
      imgSrc: "/sketch.png",
    },
    {
      imgSrc: "/adobe.png",
    },
    {
      imgSrc: "/blender.png",
    },
    {
      imgSrc: "/google.png",
    },
    {
      imgSrc: "/trellor.png",
    },
    {
      imgSrc: "/illustrator.png",
    },
  ];
  return (
    <div className="px-14 sm:py-[100px] sm:px-[10px] md:py-[100px]">
      <div className="mr-[100px] sm:mr-0 ">
        <div>
          <h1 className="text-[80px] font-semibold text-white justify-center sm:text-[24px] md:text-[50px]">
            Arsenal
          </h1>
          <p className="text-[16px] text-justify text-darktext sm:text-left sm:pt-[10px]">
            As a UX Designer, I take great pride in the arsenal of tools and
            technologies that I use to deliver exceptional work. <br></br>I have
            carefully curated a collection of tools that enable me to design,
            create, and collaborate with ease.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-[40px] sm:grid-cols-3  mt-[80px]  ">
          {icons.map((item, index) => (
            <img
              src={item.imgSrc}
              className="w-[70px] h-[70px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arsenal;
