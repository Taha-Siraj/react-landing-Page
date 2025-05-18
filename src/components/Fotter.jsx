import React from 'react';
import { FaLongArrowAltRight, FaFacebookF, FaTwitter, FaBehance } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';

const Fotter = () => {
  return (
    <div className="bg-[#04091E] py-10 px-6">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-10 justify-between items-center text-white">
        
        {/* About Us */}
        <div className="flex flex-col items-center md:items-start gap-y-3 text-center md:text-left max-w-md">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <p className="text-[#777777] text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
          <p className="text-[#777777] text-[16px]">All Rights Reserved</p>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center gap-y-4 w-full max-w-md">
          <h1 className="text-2xl font-semibold">Newsletter</h1>
          <p className="text-[#777777] text-[16px]">Stay updated with our latest</p>
          <div className="relative w-full max-w-sm">
            <input
              required
              type="email"
              placeholder="Enter Email"
              className="w-full py-2 pr-12 pl-4 border-0 outline-none text-[16px] border-[#032656] bg-[#191919] text-white rounded"
            />
            <button
              type="submit"
              className="absolute top-1/2 -translate-y-1/2 right-0 text-white text-xl px-2 py-[10px] emailbtn"
            >
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center gap-y-3">
          <h1 className="text-2xl font-semibold">Follow Us</h1>
          <p className="text-[#777777] text-[16px]">Let us be social</p>
          <span className="flex justify-center items-center gap-x-5 text-xl">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-600 cursor-pointer" />
            <CiGlobe className="hover:text-blue-600 cursor-pointer" />
            <FaBehance className="hover:text-blue-600 cursor-pointer" />
          </span>
        </div>

      </div>
    </div>
  );
};

export default Fotter;
