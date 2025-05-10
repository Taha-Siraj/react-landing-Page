// Home.jsx
import React, { useEffect } from 'react';
import Header from '../components/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';

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
      <div id="main" className="min-h-screen text-white">
      <Header />
        <div className="flex flex-col items-center py-16 gap-y-4">
          <p className="text-[20px] sm:text-2xl md:text-xl">Now you can feel the Heat</p>
          <h1 className="text-[30px] sm:text-7xl w-full text-center  font-extrabold">Smart New Future</h1>
          <button className="rounded-3xl px-7 text-[15px] hover:bg-transparent hover:text-white hover:border border-yellow-50 text-black py-2 bg-white">
            BUY NOW
          </button>
        </div>
      </div>

      <div className='h-screen flex justify-center items-center px-20 gap-x-4'>
       <div className='flex flex-col justify-center items-start gap-y-6'>
         <p className='text-xl font-thin text-blue-500 '>Brand new app to blow your mind</p>
        <h1 className='text-5xl font-extrabold text-wrap'>We’ve made a life that will change you</h1>
        <p className='text-xl font-normal text-black'>We are here to listen from you deliver exellence</p>
        <p className='text-[16px] text-wrap text-start capitalize font-thin text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <button className='bg-[#222222] hover:bg-transparent border border-[#222222] hover:text-[#222222] font-thin text-white uppercase text-[15px] py-1 px-7 rounded-full'>Get Started now</button>
       </div>
       <div>
        <img  className='h-[310px] w-[800px]' src="./public/images/video-bg.png" alt="" />
       </div>
      </div>
    </div>
  );
};

export default Home;
