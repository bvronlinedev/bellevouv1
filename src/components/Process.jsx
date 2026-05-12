import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { num: '1', title: 'Discovery call', desc: 'We jump on a call to understand your brand and goals.' },
    { num: '2', title: 'Strategy & Plan', desc: 'We craft a custom short-form content strategy for you.' },
    { num: '3', title: 'Execute & Deliver', desc: 'We shoot, edit, and deliver the final assets ready to post.' }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Our Process</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">We like to keep <br/> things <span className="font-accent font-normal">nice</span> and simple</h2>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Animated connecting line */}
        <motion.div 
          className="hidden md:block absolute top-6 left-[16%] right-[16%] h-[2px] bg-gray-200 z-0 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        />
        
        {steps.map((step, idx) => (
          <motion.div 
            key={idx} 
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + (idx * 0.2) }} // Staggers the pop-in
          >
            <div className="w-14 h-14 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">
              {step.num}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-500 max-w-[250px] leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;