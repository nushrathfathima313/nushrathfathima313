import React from 'react';
import { Briefcase, FileCheck, PenTool, ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-[#F0F7FA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <CheckCircle size={14} />
              Trusted by 5,000+ Job Seekers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1B3A4B] mb-6 leading-[1.1]">
              Quality Applications,{' '}
              <span className="text-[#0D9488]">More Interviews</span>
            </h1>

            <p className="text-lg text-gray-500 mb-4 leading-relaxed">
              We manually apply to jobs on your behalf — tailoring every resume & cover letter for each role.
            </p>

            <p className="text-sm text-gray-400 mb-8">
              More quality applications = More interviews = Closer to the job.
            </p>

            {/* Key highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: FileCheck, text: 'Tailored Resume for Each Role' },
                { icon: PenTool, text: 'Custom Cover Letters' },
                { icon: Briefcase, text: '30+ Applications Daily' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                  <item.icon size={14} className="text-[#0D9488]" />
                  <span className="text-xs font-medium text-[#1B3A4B]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                onClick={(e) => { e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-[#1B3A4B] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#15303D] transition-colors duration-200"
              >
                Get Started Now
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/919494286653?text=Hi%20Jobnexa%20I%E2%80%99d%20like%20more%20information%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#1B3A4B] text-[#1B3A4B] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#1B3A4B] hover:text-white transition-colors duration-200"
              >
                Book a Free Call
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=top"
                alt="Professional career success"
                className="w-full h-[480px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A4B]/40 to-transparent"></div>
            </div>

            {/* Floating Stats Card - Top Right */}
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
                  <p className="text-[10px] text-gray-400">Jobs Landed Since 2024</p>
                </div>
              </div>
            </div>

            {/* Floating Badge - Mid Right */}
            <div className="absolute top-1/2 -right-6 bg-[#0D9488] text-white rounded-full px-4 py-2 shadow-lg text-xs font-semibold animate-float">
              Guaranteed Interviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
