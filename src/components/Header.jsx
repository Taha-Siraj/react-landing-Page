import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Header = () => {

  const [isShow , setIsShow] = useState(false);
  console.log(isShow)
  return (
   <>
    <header
      id="header"
      className={`text-white  sticky top-0 left-0 h-[60px] flex justify-between items-center px-[20px] lg:px-[100px]`}
     >
      <div>
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="hidden lg:flex justify-between gap-x-4 items-center capitalize text-[20px] font-light list-none">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/home">About</Link></li>
        <li><Link to="/home">Service</Link></li>
        <li><Link to="/home">Unique</Link></li>
        <li><Link to="/home">Feature</Link></li>
        <li><Link to="/home">Review</Link></li>
        <li><Link to="/home">Faq</Link></li>
        <select className="cursor-pointer bg-transparent border-0 outline-0 py-1 px-3">
          <option value="" hidden>Pages</option>
          <option className="text-black">Generics</option>
          <option className="text-black">Element</option>
        </select>
      </div>
        <span onClick={() => setIsShow(prev => !prev)} className='text-3xl lg:hidden cursor-pointer'>{isShow ? null : <IoMenu/>}</span>
    </header>
    {(isShow )? 
    <div onClick={() => setIsShow(false)} className='lg:hidden h-[100vh] z-[100] w-[100%] BGlayer fixed top-0 left-0 '> 
    <span className='absolute z-[100] text-4xl right-0 py-4 px-4 cursor-pointer' onClick={() => setIsShow(false)}><IoMdClose/></span>
      <div onClick={(e) =>e.stopPropagation()} className='lg:hidden w-[25%] z-[-100]  bgleft h-[100vh] scroll-hidden flex justify-start px-5 items-start py-6 text-2xl'>
      <div className='flex flex-col '>
        <ul className='flex font-extrabold text-xl  flex-col  gap-y-4 py-4'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/home">About</Link></li>
        <li><Link to="/home">Service</Link></li>
        <li><Link to="/home">Unique</Link></li>
        <li><Link to="/home">Feature</Link></li>
        <li><Link to="/home">Review</Link></li>
        <li><Link to="/home">Faq</Link></li>
        <select className="cursor-pointer bg-transparent border-0 outline-0">
          <option value="" hidden>Pages</option>
          <option className="text-black">Generics</option>
          <option className="text-black">Element</option>
        </select>
        </ul>
        
      </div>
    </div>
    </div>: null}
   </>
  );
};

export default Header;
