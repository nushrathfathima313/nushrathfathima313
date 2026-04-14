import React from 'react';
import Navbar from '../sections/Navbar';
import { Target, Users, CheckCircle, Heart, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-[#F0F7FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B3A4B] mb-4">
            About <span className="text-[#0D9488]">Jobnexa</span>
          </h1>
          <p className="text-lg text-gray-500">
            Building Futures. Connecting Careers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Intro */}
            <div className="bg-[#F0F7FA] rounded-2xl p-8 md:p-10">
              <p className="text-lg text-[#1B3A4B] leading-relaxed font-medium">
                At Jobnexa, we help job seekers simplify and accelerate their job search.
              </p>
            </div>

            {/* Content Blocks */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Target size={20} className="text-[#0D9488]" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We understand that applying to multiple jobs daily can be time-consuming and overwhelming. That's why our team handles the entire application process for you — manually and strategically.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Users size={20} className="text-[#0D9488]" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We apply to relevant job opportunities based on your profile, ensuring consistency and quality in every application. Our goal is to increase your visibility to recruiters and help you never miss an opportunity.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle size={20} className="text-[#0D9488]" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Jobnexa is built on a simple idea: consistent effort leads to better results. By taking care of the application process, we allow you to focus on what truly matters — preparing for interviews and advancing your career.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart size={20} className="text-[#0D9488]" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to delivering a reliable, human-driven service that supports your job search every day.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-[#1B3A4B] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to simplify your job search?
            </h3>
            <p className="text-gray-300 mb-6">
              Let our team handle the applications while you focus on landing the role.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#pricing"
                className="inline-flex items-center gap-2 bg-[#0D9488] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#0B7C72] transition-colors"
              >
                View Plans <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/919494286653?text=Hi%20Jobnexa%20I%E2%80%99d%20like%20more%20information%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#15303D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Jobnexa. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default AboutUs;
