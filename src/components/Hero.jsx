import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import heroImg from "@assets/images/hero-section.png";

const Hero = () => {
  // Animation configuration for a smooth, high-end Framer feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each element animating in
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Smooth ease-out curve
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 } 
    },
  };

  return (
    <section className="px-8 pt-12 pb-12 sm:pb-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 min-h-[85vh]">
      
      {/* Left Content Column */}
      <motion.div 
        className="md:w-1/2 space-y-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Social Media Pill */}
        {/*<motion.div variants={itemVariants} className="inline-flex items-center gap-4 bg-gray-200/50 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700">*/}
          {/* Using simple text placeholders for icons to keep it dependency-free, swap with SVGs later */}
          {/*<span className="font-bold text-sm cursor-pointer hover:text-black transition">𝕏</span>
          <span className="font-bold text-sm cursor-pointer hover:text-black transition">P</span>
          <span className="font-bold text-sm cursor-pointer hover:text-black transition">Ig</span>
          <span className="font-bold text-sm cursor-pointer hover:text-black transition">In</span>
          <span className="font-bold text-sm cursor-pointer hover:text-black transition">Fb</span>*/}
        {/*</motion.div>*/}

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-gray-900">
          Hair That Behaves Like You Have Always Wanted -<br /> <span className="font-accent font-normal tracking-normal">Effortless, Fluid, Unstoppable</span>
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p variants={itemVariants} className="text-xl text-gray-500 max-w-md leading-relaxed font-medium">
        <span className="font-bold tracking-normal text-gray-900">Thermoforce<span className="text-red-600 tracking-[-0.09em]">[+]</span> <span className="text-xl text-gray-500 max-w-md leading-relaxed font-medium">by </span>Bellevou Research</span> is not just a treatment.<br />It's a transformation engineered at the molecular level.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
		<a href="#CTA" >
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 hover:bg-gray-800 transition-all duration-300 shadow-lg">
            Get in touch
          </button>
	</a>
        </motion.div>
      </motion.div>
      
      {/* Right Video/Story Column */}
{/* Right Video/Story Column */}
      <motion.div 
        className="md:w-1/2 relative w-full flex justify-end"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        {/*<StoryPlayer />*/}
	 <img 
            src={heroImg}/*"https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800"*/ 
            alt="Model" 
            className="rounded-[2.5rem] shadow-2xl w-full h-[600px] object-cover"
          />
      </motion.div>
    </section>
  );
};

const StoryPlayer = () => {
  // The exact three videos extracted from the Framer source code
  const videos = [
    "https://framerusercontent.com/assets/9BKR8n5yij6np4F4fhXpbwixLWI.mp4",
    "https://framerusercontent.com/assets/0oniLdlZhN2RUR1zCzsqMbMHfQ8.mp4",
    "https://framerusercontent.com/assets/TR9SXrUqMBTLyfoDFBPUh4qvHfE.mp4"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // Auto-play the new video whenever the index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first story
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div 
      className="relative w-full max-w-sm rounded-[16px] overflow-hidden bg-white flex flex-col justify-end select-none group"
      style={{ 
        height: '650px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.10)' 
      }}
    >
      {/* Top Gradient Overlay for Text Legibility */}
      <div className="absolute top-0 left-0 w-full h-[88px] z-10 pointer-events-none bg-gradient-to-b from-black/55 via-black/20 to-transparent" />

      {/* Interactive Click Zones (Left 40% = Prev, Right 40% = Next) */}
      <div className="absolute inset-0 z-30 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div 
          className="w-[40%] h-full cursor-pointer" 
          onClick={handlePrev}
          aria-label="Previous Story"
        />
        <div 
          className="w-[40%] h-full cursor-pointer flex items-center justify-end pr-6" 
          onClick={handleNext}
          aria-label="Next Story"
        >
          {/* Next Arrow Icon */}
          <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 12L30 24L18 36" />
            </svg>
          </div>
        </div>
      </div>

      {/* Story Progress Bars */}
      <div className="absolute top-0 left-0 w-full px-3 pt-4 z-20 pointer-events-none">
        <div className="flex gap-1">
          {videos.map((_, index) => (
            <div key={index} className="flex-1 h-[3px] bg-white/30 rounded-full overflow-hidden relative">
              <div 
                className={`absolute left-0 top-0 h-full bg-white transition-all duration-300 ${
                  index < currentIndex ? 'w-full' : index === currentIndex ? 'w-full' : 'w-0'
                }`}
                // Note: For a true 1:1, this active bar would scale based on video currentTime, 
                // but snapping to full is the standard fallback for basic React implementation.
              />
            </div>
          ))}
        </div>
      </div>

      {/* User Info */}
      <div className="absolute top-9 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          <img 
            src="https://framerusercontent.com/images/Ze2Z3GdVZQYVGrkE4Px3n4CTSL8.jpg" 
            alt="Avatar" 
            className="w-5 h-5 rounded-full object-cover shadow-sm"
          />
          <span className="text-white font-semibold text-[12px] tracking-[-0.01em] leading-none drop-shadow-md">
            jessicasu
          </span>
          <span className="text-white/80 font-normal text-[12px] tracking-[-0.01em] leading-none drop-shadow-md">
            3h
          </span>
        </div>
      </div>

      {/* The Actual Video Element */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black pointer-events-none">
        <video 
          ref={videoRef}
          src={videos[currentIndex]}
          autoPlay 
          muted 
          playsInline 
          onEnded={handleNext} // Auto-advance when video finishes
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
export default Hero;