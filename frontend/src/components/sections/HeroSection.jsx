import React from 'react';
import { ChevronRight, Briefcase, FileCheck, PenTool } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-[#F0F7FA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B3A4B] mb-6 leading-tight">
            Quality Applications, <br className="hidden md:block" />More Interviews
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-4">
            We manually apply to jobs on your behalf — tailoring every resume & cover letter
          </p>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-10">
            More quality applications = More interviews = Closer to the job. Join 5K+ job seekers who landed their dream roles.
          </p>

          {/* Key highlights */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { icon: FileCheck, text: 'Tailored Resume for Each Role' },
              { icon: PenTool, text: 'Custom Cover Letters' },
              { icon: Briefcase, text: '30+ Applications Daily' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm border border-gray-100">
                <item.icon size={16} className="text-[#0D9488]" />
                <span className="text-sm font-medium text-[#1B3A4B]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
