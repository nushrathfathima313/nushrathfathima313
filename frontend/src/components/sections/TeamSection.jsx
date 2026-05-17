import React from 'react';
import { ChevronRight } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A4B] mb-2">
              Your Personal Team for Landing the Job
            </h2>

            <h3 className="text-lg md:text-xl text-[#0D9488] font-medium mb-6">
              Real people. Role-specific resumes. Error-free applications
            </h3>

            <p className="text-gray-500 mb-6 leading-relaxed">
              A dedicated team customizes your resume for each role and submits every application manually. 
              This human-led process ensures accurate information, role relevance, and zero auto-fill errors 
              so every application represents you at your best.
            </p>

            {/* ✅ ONLY CHANGE HERE */}
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-[#1B3A4B] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#15303D] transition-colors duration-200"
            >
              View Plans and Pricing
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Right Visual */}
          <div className="relative">

            {/* Team Role Tags */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {['Job Collector', 'Ops Manager', 'CS Manager', 'Resume Expert'].map((role, i) => (
                <span key={i} className="bg-[#F0F7FA] text-[#1B3A4B] text-xs font-medium px-3 py-1.5 rounded-full border border-[#1B3A4B]/10">
                  {role}
                </span>
              ))}
            </div>

            {/* Team Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8">
                <img
                  src="https://images.pexels.com/photos/7581115/pexels-photo-7581115.jpeg?w=400&h=300&fit=crop"
                  alt="Professional workspace"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&h=250&fit=crop"
                  alt="Professional working"
                  className="w-full h-72 object-cover object-center"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
