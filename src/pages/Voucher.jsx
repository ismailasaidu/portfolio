import React from "react";
// import quote from "/quote.png"
const Voucher = () => {
  return (
    <div className="px-14 text-white py-[30px]  h-[100%] md:py-[100px] sm:px-[10px]">
      <div>
        <h1 className="text-[80px] font-semibold  justify-center sm:text-[23px] ">Vouchers</h1>
        <p className="text-darktext sm:text-left">
          As a UX Designer, I have been fortunate enough to receive several
          vouchers over the years that have<br></br> allowed me to enhance my
          skills and broaden my horizons. These vouchers have been a valuable
          <br></br> investment in my professional development, and have enabled
          me to take courses, attend conferences,<br></br> and participate in
          other learning opportunities that I might not have otherwise been able
          to access.
        </p>
      </div>
      <div className=" mt-[60px]  ">
        <div className="flex flex-col gap-[10px] sm:gap-[20px] ">
          <div>
            <img src="/quote.png" className="w-[20px]" />
          </div>

          <div className="flex flex-row gap-[10px] pl-[40px] sm:pl-[20px]">
            <div>
              <img src="/emoji.png" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-darktext">An Excellent Designer</h1>
              <p className="font-bold">
                I worked with <span className="text-darktext">Abdull</span> on a
                project last year, he is an{" "}
                <span className="text-darktext">excellent designer</span>
                <br></br>
                with a{" "}
                <span className="text-darktext">great eye for detail</span> ; I
                strongly recommend him.
              </p>
              <div className="flex flex-row font-bold  sm:text-[10px] text-[14px] gap-[30px]">
                <p>Osa Okadigbo</p>
                <p className="text-darktext">Founder - GetBridge</p>
              </div>
            </div>
          </div>
          <div className="  relative">
            <img src="/quote.png" className="w-[20px] absolute right-[300px]  sm:right-0  md:right-0" />
          </div>
        </div>
      </div>
      <div className=" mt-[60px] ">
        <div className="flex flex-col gap-[10px] sm:gap-[20px] ">
          <div>
            <img src="/quote.png" className="w-[20px]" />
          </div>

          <div className="flex flex-row gap-[10px] pl-[40px] sm:pl-[20px]">
            <div>
              <img src="/emoji.png" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-darktext">An Excellent Designer</h1>
              <p className="font-bold">
                I’d like to <span className="text-darktext">express</span> my
                appreciation for the{" "}
                <span className="text-darktext">time and effort</span> you have
                put <br></br>
                into our project. Your{" "}
                <span className="text-darktext">
                  creativity, attention to detail, and professionalism
                </span>{" "}
                <br></br>
                have not gone unnoticed, and we would like to offer you this
                voucher <br></br>
                as a token of our gratitude.
              </p>
              <div className="flex flex-row  sm:text-[10px] font-bold text-[14px] gap-[30px]">
                <p>Osa Okadigbo</p>
                <p className="text-darktext">Founder - GetBridge</p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <img src="/quote.png" className="w-[20px] absolute right-[300px]   sm:right-0 md:right-0 md:z-[-20px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
