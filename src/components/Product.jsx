import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  // Animation variants consistent with your Services and Process components
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        className="bg-white rounded-3xl max-w-[600px] shadow-[0px_0.602187px_3.01094px_rgba(0,0,0,0),0px_2.28853px_11.4427px_rgba(0,0,0,0.01),0px_10px_50px_rgba(0,0,0,0.03) py-15 px-8 max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Label - matches your "Our Process" style */}
        <motion.div 
          variants={fadeUp}
          className="text-sm font-semibold hidden tracking-widest uppercase text-gray-500 mb-8"
        >
          Our Mission
        </motion.div>

        {/* Main Mission Statement */}
        <motion.h2 
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-gray-900"
        >
          One treatment. <br /*className="hidden md:block" */ /> 
          Lasting <span className="font-accent font-normal italic">transformation</span>
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p 
          variants={fadeUp}
          className="mt-12 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Tired of battling frizz, unpredictable texture, and treatments that fade too soon? <br /><br />

<span className="font-bold tracking-normal text-gray-900">Thermoforce<span className="text-red-600 tracking-[-0.09em]">[+]</span> Protein Express Treatment</span> delivers disciplined, glass-like hair with nanotechnology precision — performed exclusively by professionals, for results that don't just look beautiful… they last.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Mission;