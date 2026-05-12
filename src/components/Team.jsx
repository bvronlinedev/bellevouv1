import React from 'react';

const Team = () => {
  const team = [
    { name: 'Sarah Jenkins', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
    { name: 'Marcus Chen', role: 'Lead Editor', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Elena Rodriguez', role: 'Strategy Head', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto text-center" id="about">
      <div className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Our Team</div>
      <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Meet the team <br/> behind your <span className="font-accent font-normal">success</span>.</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="text-left">
            <img 
              src={member.img} 
              alt={member.name} 
              className="rounded-3xl w-full h-[400px] object-cover mb-6 shadow-sm"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;