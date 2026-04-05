import React, { useEffect, useRef } from 'react';
import { stats, universityLogos, companyLogos } from '../../data/mockData';

const LogoMarquee = ({ logos, direction = 'left', speed = 30 }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId;
    let pos = 0;
    const totalWidth = el.scrollWidth / 2;
    
    const animate = () => {
      pos += direction === 'left' ? 0.5 : -0.5;
      if (direction === 'left' && pos >= totalWidth) pos = 0;
      if (direction === 'right' && pos <= -totalWidth) pos = 0;
      el.style.transform = `translateX(${direction === 'left' ? -pos : pos}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [direction]);

  return (
    <div className="overflow-hidden">
      <div ref={scrollRef} className="flex items-center gap-12 whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <img key={i} src={logo} alt="Logo" className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 shrink-0" />
        ))}
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A4B] mb-3">
            Not just Promises, Real Results
          </h2>
          <p className="text-gray-500">
            Our approach has delivered tangible results for job seekers across industries.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl hover:bg-[#F0F7FA] transition-colors duration-300">
              <p className="text-3xl md:text-4xl font-bold text-[#0D9488] mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* University Logos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1B3A4B] mb-2">
              Trusted by students from
            </h3>
            <p className="text-gray-400">Top universities across the nation</p>
          </div>
          <LogoMarquee logos={universityLogos} direction="left" />
        </div>

        {/* Company Logos */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1B3A4B] mb-2">
              Placed at companies like
            </h3>
            <p className="text-gray-400">Join professionals at leading organizations</p>
          </div>
          <LogoMarquee logos={companyLogos} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
