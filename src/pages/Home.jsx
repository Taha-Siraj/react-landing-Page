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
          <button className="rounded-3xl px-7 text-[15px] hover:bg-transparent hover:text-white hover:border border-yellow-50 text-black py-2 bg-white">
            BUY NOW
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className='min-h-screen lg:flex justify-center items-center gap-x-10 px-5 py-16'>
        <div className='lg:w-1/2 flex flex-col justify-center items-start gap-y-6'>
          <p className='text-xl font-thin text-blue-500'>Brand new app to blow your mind</p>
          <h1 className='text-2xl md:text-4xl font-extrabold'>We’ve made a life that will change you</h1>
          <p className='text-lg text-black'>We are here to listen from you deliver excellence</p>
          <p className='text-sm text-slate-400 font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className='bg-[#222222] hover:bg-transparent border border-[#222222] hover:text-[#222222] font-thin text-white uppercase text-[15px] py-2 px-7 rounded-full'>
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
          <p className='mt-2 text-sm font-thin text-slate-400 capitalize'>Who are in extremely love with eco friendly system.</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-[1200px]'>
          {/* Left Column */}
          <div className='flex flex-col gap-y-10'>
            <div className='flex flex-col gap-y-2'>
              <span className='text-blue-600 text-2xl'><FaRegPaperPlane /></span>
              <h1 className='text-2xl font-semibold capitalize'>High Performance</h1>
              <p className='font-thin text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <span className='text-blue-600 text-2xl'><IoMdSettings /></span>
              <h1 className='text-2xl font-semibold capitalize'>Top Technology</h1>
              <p className='font-thin text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          {/* Image */}
          <div className='w-full md:w-[600px]'>
            <img src="/images/c1.png" alt="Course" className='w-full h-auto object-contain' />
          </div>

          {/* Right Column */}
          <div className='flex flex-col gap-y-10'>
            <div className='flex flex-col gap-y-2'>
              <span className='text-blue-600 text-2xl'><BsFillBuildingsFill /></span>
              <h1 className='text-2xl font-semibold capitalize'>Certified Learning</h1>
              <p className='font-thin text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <span className='text-blue-600 text-2xl'><FaBlenderPhone /></span>
              <h1 className='text-2xl font-semibold capitalize'>Hands-on Projects</h1>
              <p className='font-thin text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
