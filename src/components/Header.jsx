// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      id="header"
      className="text-white sticky top-0 left-0 z-50 h-[60px] flex justify-between items-center px-[120px]"
    >
      <div>
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="flex justify-between gap-x-4 items-center capitalize text-[18px] font-light">
        <ul><Link to="/home">Home</Link></ul>
        <ul><Link to="/home">About</Link></ul>
        <ul><Link to="/home">Service</Link></ul>
        <ul><Link to="/home">Unique</Link></ul>
        <ul><Link to="/home">Feature</Link></ul>
        <ul><Link to="/home">Review</Link></ul>
        <ul><Link to="/home">Faq</Link></ul>
        <select className="cursor-pointer bg-transparent border-0 outline-0 py-1 px-3">
          <option value="" hidden>Pages</option>
          <option className="text-black">Generics</option>
          <option className="text-black">Element</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
