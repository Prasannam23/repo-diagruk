import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className=" p-4 flex justify-between items-center md:px-8">
      {/* Left Section - Company Name */}
      <div className="ml-4 md:ml-0">
        <Link href="/" className="text-2xl font-bold text-black">
          DIAGRUK
        </Link>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="hidden md:flex flex-grow justify-center space-x-8">
        <Link href="/" className="font-semibold text-gray-600 hover:text-purple-600">
          Home
        </Link>
        <Link href="/nabl-consultancy" className="font-semibold text-gray-600 hover:text-purple-600">
          NABL Consultancy
        </Link>
        <Link href="/Contact_US" className="font-semibold text-gray-600 hover:text-purple-600">
          Contact
        </Link>
        <Link href="/About_us" className="font-semibold text-gray-600 hover:text-purple-600">
          About_us
        </Link>
      </div>

      {/* Right Section - Sign Up Button */}
      <div className="mr-4 md:mr-0">
        <button className="neon bg-white text-purple-600 font-bold px-6 py-2 rounded-full border border-purple-600 text-sm">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
