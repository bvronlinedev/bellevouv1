import React from 'react';
import Qrcode from "src/assets/qrcode-svg.svg?react";

const CTA = () => {
  return (
    <div id="CTA" className="pt-12 sm:pt-24 pb-8 px-8 max-w-7xl mx-auto">
      {/* CTA Card */}
      <div className="bg-white rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between mb-24 shadow-sm relative overflow-hidden">
        <div className="lg:w-1/2 z-10">
		<div className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Get started</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready for hair <br/> that <span className="font-accent font-normal">finally listens?</span>.
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Whether you're a client looking for a trusted salon or a professional ready to upgrade your services - <br /><br /><span className="text-gray-900 font-bold">We are here to guide you.</span>
          </p>
	<a href="https://wa.me/917796611000?text=Hi!%20I%27m%20interested%20to%20know%20more%20about%20your%20product." target="_blank">
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition">
            Get in touch
          </button>
	</a>
        </div>
        <div className="max-lg:hidden lg:w-1/2 mt-12 lg:mt-0 flex justify-center z-10">
          {/* Abstract representation of a phone/app from the design */}
         {/* <div className="w-[200px] h-[400px] bg-[#F4F2EC] rounded-[2.5rem] border-8 border-white shadow-xl rotate-12 flex items-center justify-center p-4">
            <div className="w-full h-full bg-gradient-to-br from-orange-100 to-rose-100 rounded-2xl opacity-50"></div>
          </div>*/}
            <Qrcode /*width="20" height="16" viewBox="0 0 2048 1566" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"*/ />

        </div>

      </div>
	</div>
);
};
export default CTA;

      {/* Actual Footer Links 
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-300 pt-8">
        <div className="mb-8 md:mb-0">
          <div className="text-2xl font-bold tracking-tighter mb-2">Bellevou Research</div>
          {/*<p className="text-sm text-gray-500">Short form done right.</p>
        </div>
        
        <div className="flex gap-16 text-sm">
          <div className="flex flex-col space-y-3">
            <span className="font-bold text-gray-900">Navigation</span>
            <a href="#services" className="text-gray-500 hover:text-black">Services</a>
            <a href="#work" className="text-gray-500 hover:text-black">Work</a>
            <a href="#about" className="text-gray-500 hover:text-black">About</a>
          </div>
          <div className="flex flex-col space-y-3">
            <span className="font-bold text-gray-900">Socials</span>
            <a href="#" className="text-gray-500 hover:text-black">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-black">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-black">LinkedIn</a>
          </div>
        </div>
      </div>*/}
    
  


