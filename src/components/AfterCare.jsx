import React from 'react';
import Icon from "@assets/bv-icon.svg?react";
import { motion } from 'framer-motion';

const AfterCare = () => {
  const bulletItems = [
    { text: "Extend the life of your treatment" },
    { text: "Preserve smoothness and shine" },
    { text: "Protect against daily damage and buildup" }
  ];

  // Animation variants based on your established 'fade up' style
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-16 py-0 px-6 max-w-[600px] mx-auto"
      >
	{/* New Heading Section */}
        <div className="space-y-4 text-center">
          <motion.div 
            variants={itemVariants}
            className="text-sm font-semibold tracking-widest uppercase text-gray-500"
          >
            After Care
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-4xl font-bold tracking-tight text-gray-900 leading-[1.1]"
          >
	Maintain the <br /><span className="font-accent font-normal">perfection</span>
          </motion.h2>
        </div>
        {/* Introductory Text */}
        <div className="space-y-8 text-center">
          <motion.p variants={itemVariants} className="text-xl font-bold tracking-tight text-gray-900">
            Your results deserve protection.
          </motion.p>
          <motion.p variants={itemVariants} className="text-xl text-gray-500 leading-relaxed font-medium">
            
            The secret to long lasting transformation isn't just the treatment - <span className="font-semibold text-gray-900">it's what you do after.</span>
          </motion.p>
	<motion.p variants={itemVariants} className="text-xl text-gray-500 leading-relaxed font-medium">
            <span className="text-gray-900 font-bold">
              Thermoforce<span className="text-red-600 tracking-[-0.09em]">[+]</span> Care System
            </span> is specifically formulated to:
          </motion.p>
        </div>

        {/* Styled Bullet List */}
        <ul className="space-y-6">
          {bulletItems.map((item, idx) => (
            <motion.li 
              key={idx} 
              variants={itemVariants}
              className="flex items-start gap-4 group"
            >
              {/* Custom Marker matching your Navbar.jsx Logo style */}
              <div className="mt-1 flex-shrink-0 bg-black text-white w-6 h-6 rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Icon width="16" height="12" viewBox="0 0 2048 1566" fill="none" stroke="currentColor" strokeWidth="3" />
                  {/*<path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"/>
                </svg>*/}
              </div>
              
              <span className="text-lg text-gray-600 leading-snug">
                {item.text} <span className="text-gray-900 font-bold tracking-tight">{item.bold}</span>
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Closing Statement */}
        <motion.p 
          variants={itemVariants}
          className="pt-4 text-lg font-semibold text-gray-900 border-t border-gray-100 italic"
        >
          Because using regular products? That's where most treatments fail.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AfterCare;