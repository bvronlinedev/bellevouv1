import React from 'react';

const FAQ = () => {
  const faqs = [
    "What platforms do you specialize in?",
    "Do you shoot the content or just edit?",
    "How long does it take to see results?",
    "What is your pricing structure?"
  ];

  return (
    <section className="py-24 px-8 max-w-3xl mx-auto" id="faq">
      <div className="bg-white p-12 rounded-[2.5rem] shadow-sm">
        <h2 className="text-3xl font-bold mb-8">Frequently <br/> Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((q, idx) => (
            <div key={idx} className="flex justify-between items-center p-5 bg-[#F4F2EC] rounded-2xl cursor-pointer hover:bg-gray-200 transition">
              <span className="font-medium">{q}</span>
              <span className="text-xl font-bold">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;