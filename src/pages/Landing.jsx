import React from 'react'
import { useState, useEffect } from 'react';
const Landing = () => {

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

      
  return (
    <div className="px-14 py-[14px]  text-white sm:px-[10px]  sm:py-[40%] md:py-[100px] ">
        <div className='py-[10px]  sm:overflow-scroll dark:text-black dark:bg-white sm:text-center'>
            <h1 className='text-[90px] font-semibold tracking-wider sm:text-[24px] md:text-[50px] md:text-center xl:text-[60px]'>{greeting}</h1>
            <p className='sm:pt-[20px]  '>My name is Abdull - Welcome to Teddie’s UX. Below are some tips to get you started on this website</p>
        </div>
        <div className='flex  h-contain sm:h-[300px]  mt-[70px] sm:mt-[70px] '>
            <div className='border-l px-[20px] border-r w-[370px]  py-[40px]  sm:flex sm:items-center sm:justify-center'>
                <p className='sm:hidden'>Use keyboard shortcuts 1 - 7 to navigate <br></br>between pages. Try press 2, 3, 4, then 1 to <br></br>come back here.<br></br><br></br><br></br><br></br>I enjoy meeting random people and help<br></br> where I can. My open calendar is here</p>
                <p className='hidden sm:block sm:text-[16px] sm:text-center'> I enjoy meeting random people and help<br></br> where I can. My open calendar is here</p>
            </div>
            <div className='border-r px-[20px] py-[40px] w-[370px] sm:flex sm:items-center sm:justify-center'>
                <p className='sm:hidden'>Don’t know me yet? My Name’s Abdull, and<br></br> I’m a UX Designer based in Kaduna, Nigeria.<br></br><br></br><br></br><br></br><br></br>Don’t know me yet? My Name’s Abdull, and<br></br> I’m a UX Designer based in Kaduna, Nigeria.</p>
                <p className='hidden sm:block sm:text-[16px] sm:text-center '>Don’t know me yet? My Name’s Abdull, and<br></br> I’m a UX Designer based in Kaduna, Nigeria.</p>
            </div>
          
        </div>
    </div>
  )
}

export default Landing