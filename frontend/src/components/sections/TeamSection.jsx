import React from 'react';
import { ChevronRight } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A4B] mb-2">
              Your Personal Team for Landing the Job
            </h2>

            <h3 className="text-lg text-[#0D9488] font-medium mb-6">
              Real people. Role-specific resumes. Error-free applications
            </h3>

            <p className="text-gray-500 mb-6 leading-relaxed">
              A dedicated team customizes your resume for each role and submits every application manually.
            </p>

            {/* ONLY BUTTON FOR PRICING SCROLL */}
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-[#1B3A4B] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#15303D] transition"
            >
              View Plans and Pricing
              <ChevronRight size={16} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TeamSection;
