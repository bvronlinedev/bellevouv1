import React from 'react';
import { motion } from 'framer-motion';
import salonImg from "@assets/images/salon-section.jpg";

const CaseStudies = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 } 
    }
  };

  return (
    <section className="py-12 sm:py-20 px-6 max-w-7xl mx-auto overflow-hidden" id="salons">
      {/* Case Study 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-6">
        <motion.div 
          className="lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <div className="text-sm text-center font-semibold tracking-widest uppercase text-gray-500 mb-4">For Salons</div>
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-6 tracking-tight"><span className="font-accent font-normal">Elevate</span> your<br/>salon offering</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Offer your clients more than just a service — deliver a signature experience. With <span className="text-gray-900 font-bold">
              Thermoforce<span className="text-red-600 tracking-[-0.09em]">[+]</span></span>, you get high-demand, premium treatment positioning, faster application with express results, and a maintenance system designed to keep clients coming back. Trusted across 200+ salons in 10 cities, with over 10,000 treatments performed in just 4 years. Partner with <span className="text-gray-900 font-bold">Bellevou Research</span> and bring next-generation hair transformation to your salon..
          </p>
          <div className="flex gap-12">
            <div>
              <div className="text-4xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-500 mt-1 font-medium">Treatments<br/>performed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-500 mt-1 font-medium">Salons across<br/>10 cities</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <img 
            src={salonImg}/*"https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800"*/ 
            alt="Model" 
            className="rounded-[2.5rem] shadow-2xl w-full object-cover"
          /> {/*h-[500px]*/}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;