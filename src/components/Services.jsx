import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Instant Transformation",
      desc: "Walk out of the salon with visibly smoother, stronger, humidity-resistant hair that stays consistent - not temporary.",
      icon: "📸"
    },
    {
      title: "Repair Meets Discipline",
      desc: "Infused with advanced protein restructuring, Thermoforce[+] doesn't just coat your hair - it rebuilds it from within for healthier movement and shine",
      icon: "📱"
    },
    {
      title: "Luxury Results That Endure",
      desc: "Paired with Thermoforce[+] Care Shampoo & Mask, your results stay salon-fresh for longer.",
      icon: "📣"
    }
  ];

  // Container variant handles the stagger timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Item variant handles the individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center overflow-hidden" id="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of section is visible
      >
        <motion.div variants={cardVariants} className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
          Our Product
        </motion.div>
        <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
          How does TF<span className="text-red-600 tracking-[-0.1em]">[+]</span> <br /> <span className="font-accent font-normal">help</span> your hair
        </motion.h2>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, idx) => (
          <motion.div 
            key={idx} 
            variants={cardVariants}
            className="bg-white p-8 rounded-3xl text-left shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;