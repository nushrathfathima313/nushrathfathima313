import React from 'react';
import { whyFeatures } from '../../data/mockData';
import { LayoutDashboard, FileText, Zap, DollarSign, GraduationCap, Headphones, CheckCircle, Clock, Shield, ChevronRight } from 'lucide-react';

const featureIcons = [
  <LayoutDashboard size={20} />,
  <FileText size={20} />,
  <Zap size={20} />,
  <DollarSign size={20} />,
  <GraduationCap size={20} />,
  <Headphones size={20} />,
];

const WhySection = () => {
  return (
    <section id="why-jobnexa" className="py-20 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B3A4B]">
            Why Jobnexa?
          </h2>
        </div>

        <div className="space-y-16">
          {whyFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center text-[#0D9488]">
                    {featureIcons[index]}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1B3A4B] mb-1">
                  {feature.title}
                </h3>
                {feature.titleAccent && (
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0D9488] mb-3">
                    {feature.titleAccent}
                  </h3>
                )}
                {feature.subtitle && (
                  <p className="text-[#0D9488] font-medium mb-4">{feature.subtitle}</p>
                )}
                {feature.description && (
                  <p className="text-gray-500 leading-relaxed mb-4">{feature.description}</p>
                )}
                {feature.subDescription && (
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{feature.subDescription}</p>
                )}
                {feature.highlight && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-[#0D9488] rounded-full"></div>
                    <span className="text-sm font-medium text-[#1B3A4B]">{feature.highlight}</span>
                  </div>
                )}
                {feature.features && (
                  <div className="space-y-4">
                    {feature.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0D9488]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i === 0 ? <Clock size={12} className="text-[#0D9488]" /> :
                           i === 1 ? <Shield size={12} className="text-[#0D9488]" /> :
                           <CheckCircle size={12} className="text-[#0D9488]" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#1B3A4B]">{f.title}</h4>
                          <p className="text-xs text-gray-400">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Visual Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <WhyFeatureVisual index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyFeatureVisual = ({ index }) => {
  const visuals = [
    // Personalized Dashboard Visual
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
      <h4 className="text-sm font-bold text-[#1B3A4B] mb-3">Applied Jobs (3)</h4>
      {['Senior UI/UX Designer - Acme Corp', 'Product Manager - TechSolutions', 'Frontend Developer - InnovateX'].map((job, i) => (
        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
          <span className="text-xs text-gray-600">{job}</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${i === 1 ? 'bg-yellow-50 text-yellow-600' : 'bg-blue-50 text-blue-600'}`}>
            {i === 1 ? 'Under Review' : 'Pending'}
          </span>
        </div>
      ))}
      <div className="mt-4">
        <h4 className="text-sm font-bold text-[#1B3A4B] mb-2">Responses (3)</h4>
        {[{ c: 'Amazon', r: 'Interview', color: 'green' }, { c: 'Google', r: 'Call', color: 'blue' }, { c: 'Microsoft', r: 'Task', color: 'yellow' }].map((item, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <span className="text-xs text-gray-600">{item.c}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full bg-${item.color}-50 text-${item.color}-600`}>{item.r}</span>
          </div>
        ))}
      </div>
    </div>,
    // Custom Resume Visual
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img src="https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&h=400&fit=crop" alt="Resume workspace" className="w-full h-72 object-cover" />
    </div>,
    // On-Demand Visual
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
      <div className="space-y-3">
        {[{ c: 'Google', t: 'Software Engineer L4', l: 'Mountain View, CA', s: 'In Progress', color: 'blue' },
          { c: 'Microsoft', t: 'Product Manager II', l: 'Seattle, WA', s: 'Applied', color: 'green' },
          { c: 'Amazon', t: 'Data Scientist', l: 'New York, NY', s: 'Pending', color: 'yellow' }].map((job, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
            <img src={`https://www.${job.c.toLowerCase()}.com/favicon.ico`} alt={job.c} className="w-6 h-6" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-800">{job.t}</p>
              <p className="text-[10px] text-gray-400">{job.c} • {job.l}</p>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full bg-${job.color}-50 text-${job.color}-600 font-medium`}>{job.s}</span>
          </div>
        ))}
      </div>
    </div>,
    // No Percentage Visual
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img src="https://images.pexels.com/photos/7581115/pexels-photo-7581115.jpeg?w=600&h=400&fit=crop" alt="Professional" className="w-full h-72 object-cover" />
    </div>,
    // Portfolio Visual
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-medium bg-[#0D9488]/10 text-[#0D9488] px-2 py-1 rounded">Learning Path: Full Stack</span>
      </div>
      <div className="flex gap-2 mb-4">
        {['R', 'JS', 'N'].map((t, i) => (
          <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
            i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-yellow-500' : 'bg-green-500'
          }`}>{t}</div>
        ))}
      </div>
      <div className="bg-gray-50 rounded-xl p-4 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-gray-700">Live Interview</span>
        </div>
        <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
        <p className="text-[10px] text-gray-400 text-center">Mock session in progress...</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-xs text-gray-500">Portfolio Online</span>
      </div>
    </div>,
    // Dedicated Support Visual
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
      <div className="bg-[#0D9488]/5 rounded-lg p-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-[10px] font-bold text-[#0D9488]">ACTIVE TICKET #2049</span>
          <span className="text-[10px] text-gray-400 ml-auto">Just now</span>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-[8px]">SA</div>
          <div>
            <p className="text-xs font-semibold text-gray-800">Support Agent</p>
            <p className="text-[10px] text-gray-500">I've updated your resume review status. Check your WhatsApp group for the link!</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-700">Ticket #402</span>
          <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full">Resolved</span>
        </div>
        <p className="text-[10px] text-gray-500">Profile Review</p>
        <p className="text-[10px] text-gray-400 mt-1">Status: Complete • Updated: 2m ago</p>
      </div>
    </div>,
  ];
  return visuals[index] || null;
};

export default WhySection;
