import React, { useEffect, useState } from 'react';
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
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Fotter from '../components/Fotter';

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are your templates responsive?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      question: "Does it have all the plugins as mentioned?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      question: "Can I use these themes for my client?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      question: "Are your templates responsive?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

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
    <div className="font-sans min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div id="main" className="min-h-screen text-white">
        <Header />
        <div className="flex flex-col items-center justify-center py-12 gap-y-6 text-center px-4 sm:px-6 md:px-8 lg:px-12">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">Now you can feel the Heat</p>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold">Smart New Future</h1>
          <button className="rounded-3xl px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-white text-black font-semibold hover:bg-transparent hover:text-white hover:border border-yellow-50 transition">
            BUY NOW
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-y-4 sm:gap-y-6">
            <p className="text-sm sm:text-base md:text-lg font-thin text-blue-500">Brand new app to blow your mind</p>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">We’ve made a life that will change you</h1>
            <p className="text-sm sm:text-base text-black">We are here to listen from you deliver excellence</p>
            <p className="text-xs sm:text-sm text-gray-600 font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className="bg-gray-800 hover:bg-transparent border border-gray-800 hover:text-gray-800 font-semibold text-white uppercase text-xs sm:text-sm py-2 px-4 sm:px-6 rounded-full transition">
              Get Started now
            </button>
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <div className="relative w-full aspect-w-16 aspect-h-9">
              <div className="video-top absolute inset-0 z-10"></div>
              <img className="w-full h-full object-cover rounded-lg" src="/images/video-bg.png" alt="Video Background" />
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-50 flex flex-col items-center">
        <div className="text-center mb-8 max-w-3xl">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold capitalize">Top Courses That are open for Students</h1>
          <p className="mt-2 text-xs sm:text-sm font-thin text-gray-600 capitalize">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="flex flex-col sm:flex-row  justify-center items-center gap-6 w-full max-w-6xl">
          <div className="flex flex-col gap-y-6 w-full sm:w-1/2 md:w-1/3">
            <div className="flex flex-col gap-y-3">
              <span className="text-blue-600 text-lg sm:text-xl"><FaRegPaperPlane /></span>
              <h1 className="text-base sm:text-2xl   font-semibold capitalize">High Performance</h1>
              <p className="text-xs sm:text-sm font-thin text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="text-blue-600 text-lg sm:text-xl"><IoMdSettings /></span>
              <h1 className="text-base sm:text-2xl font-semibold capitalize">Top Technology</h1>
              <p className="text-xs sm:text-sm font-thin text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3">
            <img src="/images/c1.png" alt="Course" className="w-full h-auto rounded-lg object-cover" />
          </div>
          <div className="flex flex-col gap-y-6 w-full sm:w-1/2 md:w-1/3">
            <div className="flex flex-col gap-y-3">
              <span className="text-blue-600 text-lg sm:text-xl"><BsFillBuildingsFill /></span>
              <h1 className="text-base sm:text-2xl font-semibold capitalize">Certified Learning</h1>
              <p className="text-xs sm:text-sm font-thin text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="text-blue-600 text-lg sm:text-xl"><FaBlenderPhone /></span>
              <h1 className="text-base sm:text-2xl font-semibold capitalize">Hands-on Projects</h1>
              <p className="text-xs sm:text-sm font-thin text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Network Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          <div className="w-full lg:w-1/2">
            <img src="./images/about-img.jpg" alt="Network" className="w-full h-auto rounded-lg object-cover" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-y-4 sm:gap-y-6">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold capitalize">Globally Connected by Large Network</h1>
            <p className="text-sm sm:text-base font-semibold text-gray-600">We are here to listen from you deliver excellence</p>
            <p className="text-xs sm:text-sm font-thin text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className="bg-blue-600 text-white uppercase rounded-full px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold hover:bg-transparent hover:text-blue-600 hover:border border-blue-600 transition">
              Get details
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-50">
        <div className="flex flex-col justify-center items-center gap-y-4 sm:gap-y-6 mb-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold capitalize">Some Features that Made us Unique</h1>
          <p className="text-xs sm:text-sm text-gray-600 capitalize">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            { icon: <CiUser />, title: "Expert Technicians" },
            { icon: <RiProfileLine />, title: "Professional Service" },
            { icon: <TfiSupport />, title: "Great Support" },
            { icon: <FaRocket />, title: "Technical Skills" },
            { icon: <IoDiamondOutline />, title: "Highly Recommended" },
            { icon: <FaRegCommentDots />, title: "Positive Reviews" },
          ].map((feature, index) => (
            <div key={index} className="boxHover cursor-pointer w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] p-4 sm:p-6 flex flex-col justify-start items-start gap-y-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
              <h1 className="flex gap-x-2 sm:gap-x-3 text-base sm:text-lg font-extrabold">
                <span className="text-lg sm:text-xl">{feature.icon}</span> {feature.title}
              </h1>
              <p className="text-xs sm:text-sm font-normal text-gray-600">Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-900">
        <div className="flex flex-col justify-center items-center gap-y-4 sm:gap-y-6 mb-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold">Some Features that Made us Unique</h1>
          <p className="text-xs sm:text-sm text-gray-400 capitalize font-light">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
          {['u1.jpg', 'u2.jpg', 'u3.jpg', 'u4.jpg'].map((img, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] bg-white rounded-xl flex flex-col justify-center items-center gap-y-3 sm:gap-y-4 p-4 sm:p-6 card">
              <img src={`./images/${img}`} alt="Product" className="w-20 sm:w-24 h-20 sm:h-24 object-contain" />
              <h1 className="text-base sm:text-lg text-center font-semibold">Apple Watch White</h1>
              <p className="text-base sm:text-lg font-semibold text-blue-600">£399.00</p>
              <button className="active:scale-90 bg-gray-800 text-white rounded-full px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold uppercase hover:bg-gray-700 transition">Pre Order</button>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col justify-center items-center py-8 gap-y-4 sm:gap-y-6">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">Some Features that Made us Unique</h1>
            <p className="text-xs sm:text-sm font-light text-[#222222]">Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4 sm:gap-6">
            {[
              { revUser: 'Cody Hines', review: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker." },
              { revUser: 'Chad Herrera', review: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker." },
              { revUser: 'Andre Gonzalez', review: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker." },
              { revUser: 'Jon Banks', review: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker." },
              { revUser: 'Landon Houston', review: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker." },
              { revUser: 'Nelle Wade', review: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker." }
            ].map((item, index) => (
              <div key={index} className="h-48 sm:h-52 w-full sm:w-72 md:w-80 bg-[#F9F9FF] rounded-md flex flex-col justify-center items-center text-center px-4 py-3 gap-y-3 sm:gap-y-4 reviews">
                <h1 className="text-base sm:text-lg font-semibold">{item.revUser}</h1>
                <p className="text-xs sm:text-sm">{item.review}</p>
                <span className="flex text-[#FFA500] text-xs sm:text-sm">
                  <FaStar /> <FaStar /> <FaStar /> <FaRegStar /> <FaRegStar />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-center items-center flex-col gap-y-4 py-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-semibold">Frequently Asked Questions</h1>
          <p className="text-xs sm:text-sm text-gray-400 capitalize font-light">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="flex py-8 px-4 sm:px-6 items-start flex-col gap-y-3 w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full flex gap-y-2 flex-col text-start"
              onClick={() => toggleFaq(index)}
            >
              <span className="flex justify-between items-center text-white capitalize text-sm sm:text-base md:text-lg h-12 w-full cursor-pointer bg-gray-800 rounded-md px-4 faq-option">
                {faq.question}
                <span className="text-lg">{openIndex === index ? '-' : '+'}</span>
              </span>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-xs sm:text-sm text-gray-600 capitalize font-light px-4 py-2 bg-gray-100 rounded-md">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Fotter />
    </div>
  );
};

export default Home;