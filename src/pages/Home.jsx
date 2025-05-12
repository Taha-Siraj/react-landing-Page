// Home.jsx
import React, { useEffect } from 'react';
import Header from '../components/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';
import { FaRegPaperPlane } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaBlenderPhone } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { RiProfileLine } from "react-icons/ri";
import { TfiSupport } from "react-icons/tfi";
import { FaRocket } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";
const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '#header',
      { backgroundColor: 'transparent' },
      {
        backgroundColor: 'black',
        scrollTrigger: {
          trigger: '#main',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div id="main" className="min-h-screen text-white">
        <Header />
        <div className="flex flex-col items-center py-16 gap-y-4 text-center px-4">
          <p className="text-lg sm:text-2xl md:text-xl">Now you can feel the Heat</p>
          <h1 className="text-3xl sm:text-6xl font-extrabold">Smart New Future</h1>
          <button className="rounded-3xl px-7 text-[15px] hover:bg-transparent hover:text-white hover:border border-yellow-50 text-black py-2 bg-white font-semibold">
            BUY NOW
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className='min-h-screen md:flex justify-between items-center gap-x-10 px-20 py-16'>
        <div className='lg:w-1/2 flex flex-col justify-center items-start gap-y-6'>
          <p className='text-xl font-thin text-blue-500'>Brand new app to blow your mind</p>
          <h1 className='text-2xl md:text-4xl font-extrabold'>We’ve made a life that will change you</h1>
          <p className='text-lg text-black'>We are here to listen from you deliver excellence</p>
          <p className='text-sm text-[#777777] font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className='bg-[#222222]  hover:bg-transparent border border-[#222222] hover:text-[#222222] font-semibold text-white uppercase text-[15px] py-2 px-7 rounded-full'>
            Get Started now
          </button>
        </div>

        <div className="lg:w-1/2 w-full mt-10">
          <div className="relative w-full">
            <div className="video-top absolute inset-0 z-10"></div>
            <img className="w-full h-auto object-cover" src="/images/video-bg.png" alt="Video Background" />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className='min-h-screen flex justify-center items-center flex-col mt-10 px-5'>
        <div className="text-center mb-10">
          <h1 className='text-3xl md:text-4xl font-semibold capitalize'>Top Courses That are open for Students</h1>
          <p className='mt-2 text-sm font-thin text-[#777777] capitalize'>Who are in extremely love with eco friendly system.</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-[1200px]'>
          {/* Left Column */}
          <div className='flex flex-col gap-y-10'>
            <div className='flex flex-col gap-y-2'>
              <span className='text-blue-600 text-2xl'><FaRegPaperPlane /></span>
              <h1 className='text-2xl font-semibold capitalize'>High Performance</h1>
              <p className='font-thin text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <span className='text-blue-600 text-2xl'><IoMdSettings /></span>
              <h1 className='text-2xl font-semibold capitalize'>Top Technology</h1>
              <p className='font-thin text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          {/* Image */}
          <div className='w-full md:w-[600px]'>
            <img src="/images/c1.png" alt="Course" className='w-full h-auto inset-0' />
          </div>

          {/* Right Column */}
          <div className='flex flex-col gap-y-10'>
            <div className='flex flex-col gap-y-2'>
              <span className='text-blue-600 text-2xl'><BsFillBuildingsFill /></span>
              <h1 className='text-2xl font-semibold capitalize'>Certified Learning</h1>
              <p className='font-thin text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <span className='text-blue-600 text-2xl'><FaBlenderPhone /></span>
              <h1 className='text-2xl font-semibold capitalize'>Hands-on Projects</h1>
              <p className='font-thin text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen gap-y-10 flex flex-col items-center md:flex-row  w-full py-10'>
        <div className='w-full'>
          <img src="./images/about-img.jpg" alt="" className='w-full' />
        </div>
        <div className='flex flex-col justify-center items-start gap-y-6 px-10 w-full'>
          <h1 className='text-2xl capitalize font-semibold' >Globally Connected by Large Network</h1>
          <p className='text-[#777777]  font-semibold'>We are here to listen from you deliver exellence</p>
          <p className='text-[#939393] font-thin text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
          <button className='btncolor uppercase rounded-full px-4 py-1 font-semibold hover:bg-transparent text-white hover:text-[#235EE7] active:scale-90 hover:border border-[#235EE7]'> Get details</button>
        </div>
      </div>

      <div className='h-screen'>
        <div className='flex flex-col justify-center items-center gap-y-5'>
          <h1 className='text-3xl font-extrabold capitalize' >Some Features that Made us Unique</h1>
          <p className='text-[15px] text-[#777777] capitalize'>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className='flex flex-col justify-between items-center md:flex-row py-10 px-20 flex-wrap gap-y-6'>
          <div className='boxHover cursor-pointer h-[228px] w-[389px] py-6 flex justify-start items-start flex-col  px-7 gap-y-6 bg-[#F9F9FF] ' >
            <h1 className='flex gap-x-3 text-xl font-extrabold '><span className='text-3xl'><CiUser/> </span>   Expert Technicians</h1>
            <p className='font-normal text-[#777777]' >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          <div className='boxHover cursor-pointer h-[228px] w-[389px] py-6 flex justify-start items-start flex-col  px-7 gap-y-6 bg-[#F9F9FF] ' >
            <h1 className='flex gap-x-3 text-xl font-extrabold '><span className='text-3xl'><RiProfileLine/> </span> Professional Service</h1>
            <p className='font-normal text-[#777777]' >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          <div className='boxHover cursor-pointer h-[228px] w-[389px] py-6 flex justify-start items-start flex-col  px-7 gap-y-6 bg-[#F9F9FF] ' >
            <h1 className='flex gap-x-3 text-xl font-extrabold '><span className='text-3xl'><TfiSupport/> </span>   Great Support</h1>
            <p className='font-normal text-[#777777]' >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          <div className='boxHover cursor-pointer h-[228px] w-[389px] py-6 flex justify-start items-start flex-col  px-7 gap-y-6 bg-[#F9F9FF] ' >
            <h1 className='flex gap-x-3 text-xl font-extrabold '><span className='text-3xl'><FaRocket/> </span>Technical Skills</h1>
            <p className='font-normal text-[#777777]' >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          <div className='boxHover cursor-pointer h-[228px] w-[389px] py-6 flex justify-start items-start flex-col  px-7 gap-y-6 bg-[#F9F9FF] ' >
            <h1 className='flex gap-x-3 text-xl font-extrabold '><span className='text-3xl'><IoDiamondOutline/> </span>Highly Recomended</h1>
            <p className='font-normal text-[#777777]' >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          <div className='boxHover cursor-pointer h-[228px] w-[389px] py-6 flex justify-start items-start flex-col  px-7 gap-y-6 bg-[#F9F9FF] ' >
            <h1 className='flex gap-x-3 text-xl font-extrabold '><span className='text-3xl'><FaRegCommentDots/> </span>Positive Reviews</h1>
            <p className='font-normal text-[#777777]' >Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Home;
