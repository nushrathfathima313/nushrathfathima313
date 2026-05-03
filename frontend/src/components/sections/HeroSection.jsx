import React from 'react';
import { Briefcase, FileCheck, PenTool, ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-[#F0F7FA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <CheckCircle size={14} />
              Trusted by 5,000+ Job Seekers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1B3A4B] mb-6 leading-[1.1]">
              Stop Applying Blindly.{' '}
              <span className="text-[#0D9488]">Start Getting Interview Calls.</span>
            </h1>

            <p className="text-lg text-gray-500 mb-4 leading-relaxed">
              We apply to jobs on your behalf with smart targeting, optimized resumes, and role-specific strategies.
            </p>

            <p className="text-sm text-gray-400 mb-8">
              Better applications → More interviews → Faster job offers.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: FileCheck, text: 'Tailored Resume for Each Role' },
                { icon: PenTool, text: 'Custom Cover Letters' },
                { icon: Briefcase, text: 'Strategic Job Applications' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                  <item.icon size={14} className="text-[#0D9488]" />
                  <span className="text-xs font-medium text-[#1B3A4B]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* ✅ SINGLE CTA */}
            <div>
              <a
                href="https://wa.me/447825296249?text=Hi! I want help with job applications and getting interview calls."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Interview Calls
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=top"
                alt="Career success"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A4B]/40 to-transparent"></div>
            </div>

            {/* Floating Card - Top Right */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle size={18} className="text-green-500" />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#1B3A4B]">3x</p>
                  <p className="text-[10px] text-gray-400">Higher Interview Rate</p>
                </div>
              </div>
            </div>

            {/* Floating Card - Bottom Left */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0D9488]/10 rounded-full flex items-center justify-center">
                  <Briefcase size={18} className="text-[#0D9488]" />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#1B3A4B]">350+</p>
                  <p className="text-[10px] text-gray-400">Interviews Generated</p>
                </div>
              </div>
            </div>

            {/* ✅ SAFE BADGE */}
            <div className="absolute top-1/2 -right-6 bg-[#0D9488] text-white rounded-full px-4 py-2 shadow-lg text-xs font-semibold animate-float">
              Higher Interview Chances
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
