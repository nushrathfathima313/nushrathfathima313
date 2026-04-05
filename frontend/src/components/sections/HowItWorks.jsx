import React from 'react';
import { howItWorks } from '../../data/mockData';
import { Phone, UserPlus, Send, Trophy } from 'lucide-react';

const stepIcons = [
  <Phone size={20} />,
  <UserPlus size={20} />,
  <Send size={20} />,
  <Trophy size={20} />,
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-sm font-medium text-[#0D9488] tracking-wider uppercase mb-2">Roadmap to Success</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B3A4B] mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A seamless, personalized process designed to land your dream job faster.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12">
          {['Talk', 'Sign Up', 'Apply', 'Succeed'].map((tab, i) => (
            <button
              key={i}
              className="text-sm font-medium text-gray-400 hover:text-[#0D9488] transition-colors pb-2 border-b-2 border-transparent hover:border-[#0D9488]"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0D9488]/20 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300">
                    {stepIcons[i]}
                  </div>
                  <span className="text-3xl font-bold text-gray-100 group-hover:text-[#0D9488]/20 transition-colors duration-300">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1B3A4B] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
