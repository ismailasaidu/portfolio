import React, { useRef } from "react";
import { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
// import Email from "../Component/Email";

import emailjs from "@emailjs/browser";

const Contact = () => {

  const currentTime = new Date().getHours();
  let greeting;

  if (currentTime >= 0 && currentTime < 12) {
    greeting = 'Good morning';
  } else if (currentTime >= 12 && currentTime < 17) {
    greeting = 'Good afternoon';
  } else if (currentTime >= 17 && currentTime < 20) {
    greeting = 'Good evening';
  } else {
    greeting = 'Good night';
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mq1cn8p",
        "template_owtlx4i",
        form.current,
        "RC8qKdZn6MBrl6e_2"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          setshow(false)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [copy, setcopy] = useState("teddiesux@gmail.com");
  const handleCopy = () => {
    navigator.clipboard.writeText(copy);
    alert("copied");

  };
  const [show, setshow] = useState(false);

  let menuRef=useRef()
 
  useEffect(() => {
    let handler = (e) => {
  if (!form.current.contains(e.target)) {
    setshow(false);
    console.log(form.current)
  }
   
      
    };
  
 
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  
  });

  const navigate = useNavigate();

  const navigateToWhatsApp = () => {
    const phoneNumber = encodeURIComponent('2349095461427');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    window.open(whatsappUrl, '_blank');
  };

  
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log("hello")
  };

  return (
    <div  className="px-14  h-[100%] sm:pt-[60px]  md:py-[100px]   sm:px-[10px] text-white ">
      <div className="py-[10px] sm:pt-[100px] sm:overflow-scroll  dark:text-black dark:bg-white sm:text-center">
        <h1 className="text-[90px] font-semibold tracking-wider sm:text-[24px] md:text-[50px]">
          {greeting}
        </h1>
        <p className="sm:pt-[20px] ">
          My name is Abdull - Welcome to Teddie’s UX. Below are some tips to get
          you started on this website
        </p>
      </div>
      <div className="flex  h-[280px]  mt-[100px] sm:mt-[70px] ">
        <div className="border-l px-[20px] border-r w-[370px]  py-[40px]">
          <p className="sm:hidden">
            Use keyboard shortcuts 1 - 7 to navigate <br></br>between pages. Try
            press 2, 3, 4, then 1 to <br></br>come back here.<br></br>
            <br></br>
            <br></br>
            <br></br>I enjoy meeting random people and help<br></br> where I
            can. My open calendar is here
          </p>
          <p className="hidden sm:block">
            {" "}
            I enjoy meeting random people and help<br></br> where I can. My open
            calendar is here
          </p>
        </div>
        <div className="border-r px-[20px] py-[40px] w-[370px]">
          <p className="sm:hidden">
            Don’t know me yet? My Name’s Abdull, and<br></br> I’m a UX Designer
            based in Kaduna, Nigeria.<br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>Don’t know me yet? My Name’s Abdull, and<br></br> I’m a UX
            Designer based in Kaduna, Nigeria.
          </p>
          <p className="hidden sm:block">
            Don’t know me yet? My Name’s Abdull, and<br></br> I’m a UX Designer
            based in Kaduna, Nigeria.
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center mt-[-570px] md:mt-[-350px] sm:mt-[-600px] ml-[-180px] md:ml-0 sm:ml-0 ">
        <form
          ref={form}
         
          
          onSubmit={sendEmail}
          className={`${
            !show ? "top-[-100%]" : "top-[30vh]"
          } absolute flex flex-col h-[50%]  sm:h-[50%] md:h-[70%] md:text-[12px] text-[12px] border-darktext border rounded-lg p-[20px] text-darktext bg-dark w-[30%] md:w-[50%] sm:w-[80%] justify-between`}>
          <input
            id="FullName"
            type="Name"
            name="user_name"
            placeholder="Name"
            className=" h-[10%] border-[2px]   px-[20px] outline-none  sm:w-[100%]"
            defaultValue={formValues.fullname}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="user_email"
            className="h-[10%] px-[20px] w-[100%] outline-none "
          />
          <input
            type="textarea"
            placeholder="Text"
            name="message"
            className="h-[35%] px-[20px] pt-[-50px] w-[100%] outline-none "
          />
          <input
            className="bg-white h-[8%] w-[100%] font-bold "
            type="submit"
            value="Send"
          />
        </form>

        <div className="w-[580px]   h-[430px] sm:h-contain flex flex-col gap-[30px] text-white  rounded-xl top-[140px] bg-grey px-14 sm:px-[20px] py-[20px] ">
          <div>
            <h1 className="font-bold text-[24px]">Contact</h1>
          </div>
          <div className="flex justify-between  items-start border-b pb-[30px]">
            <div>
              <h1 className="font-bold">Email</h1>
              {/* <p className="text-[14px] font-light text-darkGrey ">
                teddiesux@gmail.com
              </p> */}
              <div>
                <input
                  type="email"
                  className="text-[14px] outline-none font-light text-darkGrey bg-grey  "
                  value={copy}
                />
              </div>
            </div>
            <div className="flex flex-row items-center ">
              <button
                className="border flex rounded-l-lg sm:rounded items-center  sm:w-[80px] text-[14px] sm:text-[10px] sm:ml-[-50px] gap-[10px] flex-row p-[5px]"
                onClick={() => setshow(!show)}>
                <img src="/write.png" className="w-[14px] h-[14px]" />
                Compose
              </button>
              <button className="border flex  items-center sm:hidden rounded-r-lg text-[14px] gap-[10px] flex-row p-[5px]">
                <img
                  src="/copy.png"
                  className="w-[14px] h-[14px]"
                  onClick={handleCopy}
                />
                Copy
              </button>
            </div>
          </div>

          <div className="flex justify-between border-b pb-[30px]">
            <div>
              <h1 className="font-bold">Book A Session</h1>
              <p className="text-[14px] font-light text-darkGrey ">
                teddiesux@gmail.com
              </p>
            </div>
            <div>
              <button className="border w-[80px] rounded-lg sm:w-[80px] sm:text-[10px] text-[14px] gap-[10px] p-[5px]" onClick={navigateToWhatsApp}>
                Book
              </button>
            </div>
          </div>
          <div className="flex justify-between border-b   sm:items-start items-center pb-[30px]">
            <div>
              <h1 className="font-bold">Stay In Touch</h1>
              <p className="text-[14px] sm:hidden font-light text-darkGrey ">
                I’m most active on Twitter
              </p>
              <div className="sm:flex hidden sm:block flex-row gap-[5px] ">
                <img src="/twitter.png" className="object-contain " alt="" />
                <img src="/linkedin.png" className="object-contain" />
              </div>
            </div>
            <div className="flex flex-row gap-[5px] sm:hidden">
              <img src="/twitter.png" className="object-contain" alt="" onClick={()=>{window.open("https://www.Twitter.com/teddiesux")}}/>
              <img src="/linkedin.png" className="object-contain" onClick={()=>{window.open("https://www.linkedin.com/in/abdullahi-saidu-2a5749224")}} />
            </div>
            <div className="">
            <a href="/abdul.pdf" download="teddiescv">
              <button className="border flex rounded-lg items-center sm:text-[10px] text-[14px] gap-[10px] flex-row p-[5px]">
         
                <img src="/download.png" className="w-[14px]  h-[14px]" />
            
               
                Download CV
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
