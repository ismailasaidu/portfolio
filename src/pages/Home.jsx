import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import woman from "../Assets/womanTwo.png";
import { BsArrowRightSquare, BsArrowLeftSquareFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { RiMenu4Fill } from "react-icons/ri";
import "./Scrollbar.css";

const Home = ({ children }) => {
  const [theme, settheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  document.addEventListener("keydown", (e) => {
    const activeElement = document.activeElement;
    const isInputField =
      activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA";

    if (!isInputField) {
      if (e.key === "1") {
        window.location.assign("/");
      } else if (e.key === "2") {
        window.location.assign("/about");
      } else if (e.key === "3") {
        window.location.assign("/projects");
      } else if (e.key === "4") {
        window.location.assign("/special skills");
      } else if (e.key === "5") {
        window.location.assign("/vouchers");
      } else if (e.key === "6") {
        window.location.assign("/reading list");
      } else if (e.key === "7") {
        window.location.assign("/arsenal");
      } else if (e.key === "8") {
        window.location.assign("/contact");
      }
    }
  });

  const handleThemeSwitch = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  const menus = [
    { name: "Home", link: "/", icon: "/home.png", number: "1" },
    { name: "About", link: "/about", icon: "/about.png", number: "2" },
    { name: "Projects", link: "/projects", icon: "/Projects.png", number: "3" },
    {
      name: "Special Skills",
      link: "/special skills",
      icon: "/Special.png",
      number: "4",
    },
    { name: "Vouchers", link: "/vouchers", icon: "/Vouchers.png", number: "5" },
    {
      name: "Reading List",
      link: "/reading list",
      icon: "/Reading.png",
      number: "6",
    },
    { name: "Arsenal", link: "/arsenal", icon: "/Arsenal.png", number: "7" },
    { name: "Contact", link: "/contact", icon: "/Contact.png", number: "8" },
  ];
  const [open, setopen] = useState(true);
  const [show, setshow] = useState(true);
  return (
    <section className="flex px-[20px] sm:px-0 bg-container md:px-0  h-[100%] sm:fixed  relative ">
      <div
        className={`${
          open ? "sm:hidden" : "sm:block"
        } duration-300  bg-container relative ${
          show ? " sm:w-[65%]" : "sm:w-[20%]"
        } sm:border-r sm:bg-dark sm:mt-0   sm:border-r-grey text-white md:overflow-y-scroll my-[20px]  sm:overflow-hidden flex flex-col h-[100%]  md:gap-[20px] items-center  ${
          !open ? "md:top-0" : "md:top-[-100%]"
        } md:duration-500 md:ease-in   gap-[50px] sm:gap-0 sm:justify-between md:absolute   md:z-100  md:py-[100px] md:mt-0 md:bg-black    md:w-[100vw]  sm:h-contain sm:z-[100]   sm:px-[25px] sm:py-[50px]   sm:flex   sm:flex-col  sm:fixed  sm:overflow-hidden `}>
        {/* <div className='border hidden rounded absolute  sm:block right-0 '>12</div> */}

        <div className="">
          <BsArrowRightSquare
            size={30}
            className={`${show ? "right-[10px]" : "left-[15px]"} ${
              show ? "rotate-180" : ""
            } hidden sm:block absolute`}
            onClick={() => setshow(!show)}
          />
          {/* <img src={woman}/> */}

          <h1 className="font-GV font-bold text-white  ml-[-25px] flex justify-center pt-[40px]  text-[40px]  sm:hidden">
            Teddie's UX
          </h1>
        </div>
        <BsArrowLeftSquareFill
          size={20}
          className={`sm:${
            !show ? "block" : "hidden"
          } duration-300 text-white hidden sm:block sm:absolute top-[120px] right-[-2px] sm:z-[100]`}
          onClick={() => setopen(!open)}
        />

        <div className="  px-[30px] mt-[-20px] md:mt-[20px] gap-[30px]  sm:w-[180px]   md:ml-0 md:px-0 md:items-center   ml-[10px] sm:ml-0 flex  flex-col it sm:gap-[30px]  sm:px-0">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`grid grid-cols-3  outline-none   ${
                open ? "md:hover:bg-darkGrey" : ""
              }  px-[20px]  rounded-md ml-[-10px]  ${
                show ? "sm:ml-[-30px]" : "sm:ml-[30px]"
              }  items-center `}
              onClick={() => setopen(!open)}>
              <div className="">
                <img
                  src={menu?.icon}
                  className=" dark:bg-black md:hidden sm:block   w-[15px]  ml-[5px]  h-[15px]"
                  alt=""
                />
              </div>

              <h2
                className={`${
                  show ? "sm:block" : "sm:hidden"
                } font-St text-[14px] ml-[-20px] overflow-hidden md:ml-0 sm:ml-[-20%]  md:text-center ${
                  show ? "sm:text-left" : ""
                } text-left w-[100px]`}>
                {menu?.name}
              </h2>
              <div className="ml-[25px] flex justify-center bg-darkGrey w-[17px] md:hidden    h-[17px] sm:hidden">
                <h2 className="text-[12px]">{menu?.number}</h2>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <div className={`${show ? "sm:hidden" : "sm:block"} `}>
            <AiFillSetting
              size={25}
              className=" hidden sm:block "
              onClick={() => setshow(!show)}
            />
          </div>

          <div
            className={`sm:${
              show ? "block" : "hidden"
            } flex  justify-center sm:w-[200px] sm:mt-0     md:mt-[40px] mt-[-20px]`}>
            <button
              className="bg-grey w-[100px] sm:w-[50%] outline-none sm:text-[12px] h-[40px] rounded-l-lg "
              // onClick={handleThemeSwitch}
            >
              Dark
            </button>
            <button className="bg-darkGrey  outline-none  w-[100px] sm:w-[50%] sm:text-[12px]  h-[40px] rounded-r-lg ">
              Light
            </button>
          </div>
        </div>
      </div>
      <div className=" my-div bg-view m-[20px] sm:m-0 md:m-0 w-[100%] overflow-y-scroll sm:fixed   rounded-lg sm:rounded-none md:rounded-none h-[90vh] sm:px-[20px] md:h-[100vh] sm:h-[100vh] mt-[40px] md:mt-0  ">
        <div
          className={`${
            open ? "sm:block" : "sm:hidden"
          } sm:fixed md:fixed md:w-[100%]  sm:z-[30px] md:border-b-white md:border-b sm:border-none sm:w-[100%] bg-view md:h-[90px] sm:h-[70px] sm:pt-[18px]`}>
          <RiMenu4Fill
            size={30}
            className="  text-white hidden md:block sm:block md:ml-[5%] md:mt-[5%]   "
            onClick={() => setopen(!open)}
          />
        </div>

        <div>{children}</div>

        {/* <p>lorem5</p> */}
      </div>
    </section>
  );
};

export default Home;
