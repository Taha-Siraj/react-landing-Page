// Home.jsx
import React, { useEffect } from 'react';
import Header from '../components/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css'; // Make sure this is imported

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
          <p className="text-2xl">Now you can feel the Heat</p>
          <h1 className="text-7xl font-extrabold">Smart New Future</h1>
          <button className="rounded-3xl px-7 text-[15px] hover:bg-transparent hover:text-white hover:border border-yellow-50 text-black py-2 bg-white">
            BUY NOW
          </button>
        </div>
      </div>

      <div className="h-[300vh] bg-red-950 text-white text-center text-3xl pt-20">
        Scroll down and see the header color go black 🖤
      </div>
    </div>
  );
};

export default Home;
