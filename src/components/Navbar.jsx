import React, { useState } from 'react';
import Icon from "src/assets/bv-icon.svg?react";
import BrandName from "src/assets/bellevou-research-svg.svg?react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative w-full max-w-[1200px] mx-auto px-16 py-6 z-50">
      <nav className="flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-2 text-2xl font-bold tracking-tighter cursor-pointer z-50">
          {/* Logo Asterisk Icon */}
          <div className="bg-black text-white w-7 h-7 rounded-md flex items-center justify-center">
            <Icon width="20" height="16" viewBox="0 0 2048 1566" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </div>
            <BrandName width="45%" height="100%" /*viewBox="0 0 1440 612" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"*/ />
        </div>

        {/* Desktop Menu (Hidden on smaller screens) 
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-900">
          <a href="#" className="hover:text-gray-600 transition">Home</a>
          <a href="#about" className="hover:text-gray-600 transition">About</a>
          <a href="#salons" className="hover:text-gray-600 transition">Salon</a>
          <a href="#blog" className="hover:text-gray-600 transition">Blog</a>
        </div>*/}

        {/* Desktop CTA (Hidden on smaller screens) */}
        <div className="hidden md:block">
	<a href="#CTA" >
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Book a call
          </button>
	</a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        {/*<button 
          className="md:hidden flex flex-col justify-center items-end w-8 h-8 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close 'X' Icon 
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Two-line Hamburger Icon 
            <div className="space-y-1.5 w-6">
              <span className="block h-0.5 w-full bg-black rounded-full"></span>
              <span className="block h-0.5 w-4/5 ml-auto bg-black rounded-full"></span>
            </div>
          )}
        </button>*/}
      </nav>

      {/* Mobile Dropdown Overlay */}
      <div 
        className={`absolute top-full left-0 w-full bg-[#F4F2EC] px-8 pb-8 pt-4 flex flex-col space-y-5 transition-all duration-300 ease-in-out origin-top shadow-lg md:hidden z-40 ${
          isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <a href="#home" className="text-base font-medium text-gray-900 hover:text-gray-600 transition" onClick={closeMenu}>Home</a>
        <a href="#about" className="text-base font-medium text-gray-900 hover:text-gray-600 transition" onClick={closeMenu}>About</a>
        <a href="#salons" className="text-base font-medium text-gray-900 hover:text-gray-600 transition" onClick={closeMenu}>Salon</a>
        <a href="#blog" className="text-base font-medium text-gray-900 hover:text-gray-600 transition" onClick={closeMenu}>Blog</a>
       
	<div className="pt-4">
	 
	<a href="#CTA" >
          <button className="w-full bg-black text-white py-4 rounded-full text-base font-medium hover:bg-gray-800 transition">
            Book a call
          </button>
	</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;