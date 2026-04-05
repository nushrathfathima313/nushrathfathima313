import React from 'react';
import { CheckCircle, Target, TrendingUp, Briefcase, FileCheck, Send } from 'lucide-react';

const StopApplyingSection = () => {
  return (
    <section className="py-20 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A4B] mb-2">
            Mass Applications. Maximum Quality.
          </h2>
          <h3 className="text-lg text-[#0D9488] font-medium mb-4">
            More quality applications = More interviews = Closer to the job
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Stop wasting hours on random applications. We handle the volume while maintaining quality — 
            every resume tailored, every cover letter customized, every application submitted manually.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without Jobnexa */}
          <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                  <Target size={20} className="text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Without Jobnexa</h4>
                  <p className="text-xs text-gray-400">The struggle is real</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { text: 'Hours spent on each application', icon: '⏳' },
                  { text: 'Generic resumes sent to every company', icon: '📄' },
                  { text: 'No cover letter customization', icon: '❌' },
                  { text: 'Low response rate from employers', icon: '📉' },
                  { text: 'Inconsistent follow-ups', icon: '😓' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-red-50/50">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-sm text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-red-50 rounded-lg p-4 text-center">
                <p className="text-red-500 font-bold text-lg">~2% Response Rate</p>
                <p className="text-xs text-gray-500 mt-1">Average for self-applied candidates</p>
              </div>
            </div>
          </div>

          {/* With Jobnexa */}
          <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-[#0D9488]/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D9488]/5 rounded-bl-full"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center">
                  <TrendingUp size={20} className="text-[#0D9488]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0D9488]">With Jobnexa</h4>
                  <p className="text-xs text-gray-400">Quality at scale</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { text: 'Resume tailored for each job role', icon: FileCheck },
                  { text: 'Cover letter customized per company', icon: FileCheck },
                  { text: 'Every application submitted manually', icon: Send },
                  { text: '30+ quality applications daily', icon: Briefcase },
                  { text: 'Updates shared via WhatsApp & Drive', icon: CheckCircle },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#0D9488]/5">
                    <div className="w-6 h-6 bg-[#0D9488]/10 rounded-full flex items-center justify-center">
                      <item.icon size={12} className="text-[#0D9488]" />
                    </div>
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-green-50 rounded-lg p-4 text-center">
                <p className="text-green-600 font-bold text-lg">3x Higher Interview Rate</p>
                <p className="text-xs text-gray-500 mt-1">Proven results with quality applications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Equation */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-sm border border-gray-100">
            <span className="text-sm font-semibold text-[#1B3A4B]">Quality Applications</span>
            <span className="text-[#0D9488] font-bold">=</span>
            <span className="text-sm font-semibold text-[#1B3A4B]">More Interviews</span>
            <span className="text-[#0D9488] font-bold">=</span>
            <span className="text-sm font-semibold text-[#0D9488]">Closer to the Job</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StopApplyingSection;
