import React from 'react';
import { ChevronRight, Award, Clock, Brain } from 'lucide-react';

const StopApplyingSection = () => {
  return (
    <section className="py-20 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A4B] mb-2">
            Stop Applying. Start Preparing.
          </h2>
          <h3 className="text-lg text-[#0D9488] font-medium mb-4">
            Time Saved means Time to Upskill
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            With 3–5 hours reclaimed from your day, focus on what actually gets you hired. Access curated learning paths, 
            solve coding challenges, and build confidence with AI-driven mock interviews.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 text-[#0D9488] font-medium text-sm hover:text-[#0B7C72] transition-colors">
            Explore Interview Prep Center
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Chaotic / Stop Applying */}
          <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">😞</span>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Chaotic /</h4>
                  <h4 className="text-lg font-bold text-red-500">Stop Applying</h4>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1674156423391-a65ab2a435de?w=500&h=280&fit=crop"
                alt="Stressed person"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <div className="bg-red-50 rounded-lg p-3 mb-3">
                <span className="text-red-500 font-bold text-sm">REJECTED</span>
                <p className="text-xs text-gray-500 mt-1">100+ Applications</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Endless scrolling', 'Random applying', 'No tracking'].map((t, i) => (
                  <span key={i} className="text-[10px] bg-red-50 text-red-400 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Start Preparing */}
          <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-[#0D9488]/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D9488]/5 rounded-bl-full"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="text-lg font-bold text-[#0D9488]">Start Preparing</h4>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1629905679177-4c4e2623654f?w=500&h=280&fit=crop"
                alt="Developer coding"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <div className="bg-green-50 rounded-lg p-3 mb-3">
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-green-600" />
                  <span className="text-green-600 font-bold text-sm">Status: Hired</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Build confidence with AI-driven mock interviews.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-[#0D9488]/10 text-[#0D9488] px-2 py-1 rounded-full flex items-center gap-1">
                  <Clock size={10} /> Time Efficient
                </span>
                <span className="text-[10px] bg-[#0D9488]/10 text-[#0D9488] px-2 py-1 rounded-full flex items-center gap-1">
                  <Brain size={10} /> Smart Feedback
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Arrow */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 font-medium">Time Saved = Time to Upskill</p>
          <p className="text-xs text-gray-400 mt-1">Focus on what gets you hired.</p>
        </div>
      </div>
    </section>
  );
};

export default StopApplyingSection;
