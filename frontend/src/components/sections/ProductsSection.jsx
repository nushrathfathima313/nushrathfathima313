import React, { useRef, useState } from 'react';
import { productFeatures, appliedJobs, resumes, submissions, responses, recruiters } from '../../data/mockData';
import { ChevronLeft, ChevronRight, FileText, Eye, Download, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const productVisuals = [
  // Applied Jobs
  (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 min-w-[340px]">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-[#1B3A4B] text-sm">Applied Jobs</h4>
        <span className="text-[10px] text-gray-400">Date View</span>
      </div>
      {[
        { company: 'Google', title: 'Program Manager', date: 'Dec 17, 2025', desc: 'A problem isn\'t truly solved until it\'s solved for all.' },
        { company: 'Microsoft', title: 'Software Engineer, Azure', date: 'Dec 16, 2025', desc: 'The Knowledge and Information Partnerships team...' },
      ].map((job, i) => (
        <div key={i} className="p-3 rounded-lg border border-gray-100 mb-2 last:mb-0">
          <div className="flex items-start gap-2">
            <img src={`https://www.${job.company.toLowerCase()}.com/favicon.ico`} alt={job.company} className="w-5 h-5 mt-0.5" />
            <div className="flex-1">
              <h5 className="text-xs font-semibold text-gray-800">{job.title}</h5>
              <p className="text-[10px] text-gray-400 mt-0.5">{job.date} • <span className="text-green-500">Active</span></p>
              <p className="text-[10px] text-gray-500 mt-1">{job.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  // Resume Access
  (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 min-w-[340px]">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-[#1B3A4B] text-sm">Resume Access</h4>
        <span className="text-[10px] text-gray-400">All Resumes</span>
      </div>
      {[
        { name: 'Resume_SoftwareDev_Google.pdf', date: 'Oct 16, 2025' },
        { name: 'CV_ProductManager_Amazon.pdf', date: 'Oct 16, 2025' },
      ].map((r, i) => (
        <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 mb-2 last:mb-0">
          <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
            <FileText size={14} className="text-red-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-800 truncate">{r.name}</p>
            <p className="text-[10px] text-gray-400">{r.date}</p>
          </div>
          <div className="flex gap-1">
            <button className="p-1 hover:bg-gray-200 rounded"><Eye size={12} className="text-gray-400" /></button>
            <button className="p-1 hover:bg-gray-200 rounded"><Download size={12} className="text-gray-400" /></button>
          </div>
        </div>
      ))}
    </div>
  ),
  // Submissions
  (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 min-w-[340px]">
      <h4 className="font-semibold text-[#1B3A4B] text-sm mb-3">View Submissions</h4>
      <table className="w-full">
        <thead>
          <tr className="text-[10px] text-gray-400 uppercase">
            <th className="text-left pb-2">File Name</th>
            <th className="text-left pb-2">Date</th>
            <th className="text-right pb-2">View</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Google_SWE_Proof.pdf', date: 'Nov 27' },
            { name: 'Amazon_PM_Proof.docx', date: 'Nov 24' },
            { name: 'Microsoft_DA_Confirm.png', date: 'Nov 20' },
            { name: 'Meta_UX_Submit.pdf', date: 'Nov 18' },
          ].map((s, i) => (
            <tr key={i} className="border-t border-gray-50">
              <td className="py-2 text-xs text-gray-700">{s.name}</td>
              <td className="py-2 text-xs text-gray-400">{s.date}</td>
              <td className="py-2 text-right">
                <button className="p-1 hover:bg-gray-100 rounded"><Eye size={12} className="text-gray-400" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  // Responses
  (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 min-w-[340px]">
      <h4 className="font-semibold text-[#1B3A4B] text-sm mb-3">Access Responses</h4>
      <table className="w-full">
        <thead>
          <tr className="text-[10px] text-gray-400 uppercase">
            <th className="text-left pb-2">Company</th>
            <th className="text-left pb-2">Response</th>
            <th className="text-left pb-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {[
            { company: 'Google', response: 'Phone', date: 'Nov 27', color: 'blue' },
            { company: 'Amazon', response: 'Interview', date: 'Nov 27', color: 'green' },
            { company: 'Microsoft', response: 'Assessment', date: 'Nov 27', color: 'yellow' },
            { company: 'Meta', response: 'Phone', date: 'Nov 19', color: 'blue' },
          ].map((r, i) => (
            <tr key={i} className="border-t border-gray-50">
              <td className="py-2">
                <div className="flex items-center gap-2">
                  <img src={`https://www.${r.company.toLowerCase()}.com/favicon.ico`} alt={r.company} className="w-4 h-4" />
                  <span className="text-xs text-gray-700">{r.company}</span>
                </div>
              </td>
              <td className="py-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  r.color === 'green' ? 'bg-green-50 text-green-600' :
                  r.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  'bg-yellow-50 text-yellow-600'
                }`}>{r.response}</span>
              </td>
              <td className="py-2 text-xs text-gray-400">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  // Recruiter Outreach
  (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 min-w-[340px]">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-[#1B3A4B] text-sm">Recruiter Outreach</h4>
        <span className="text-[10px] bg-[#0D9488]/10 text-[#0D9488] px-2 py-0.5 rounded-full font-medium">5,000+ Recruiters</span>
      </div>
      {[
        { initials: 'JD', name: 'John Davidson', role: 'Sr. Recruiter @ Google', email: 'john.d@google.com' },
        { initials: 'SM', name: 'Sarah Miller', role: 'Tech Recruiter @ Amazon', email: 'sarah.m@amazon.com' },
        { initials: 'MK', name: 'Mike Kim', role: 'Hiring Manager @ Meta', email: 'mike.k@meta.com' },
      ].map((rec, i) => (
        <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors mb-1">
          <div className="w-8 h-8 bg-[#1B3A4B] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
            {rec.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-800">{rec.name}</p>
            <p className="text-[10px] text-gray-400">{rec.role}</p>
          </div>
          <button className="flex items-center gap-1 text-[10px] text-[#0D9488] hover:text-[#0B7C72] font-medium">
            <Mail size={12} /> Email
          </button>
        </div>
      ))}
    </div>
  ),
  // Delegate Jobs
  (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 min-w-[340px]">
      <h4 className="font-semibold text-[#1B3A4B] text-sm mb-3">Delegate Jobs</h4>
      {[
        { company: 'Google', title: 'Software Engineer L4', location: 'Mountain View, CA', status: 'In Progress', color: 'blue' },
        { company: 'Microsoft', title: 'Product Manager II', location: 'Seattle, WA', status: 'Applied', color: 'green' },
        { company: 'Amazon', title: 'Data Scientist', location: 'New York, NY', status: 'Pending', color: 'yellow' },
      ].map((job, i) => (
        <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100 mb-2 last:mb-0">
          <img src={`https://www.${job.company.toLowerCase()}.com/favicon.ico`} alt={job.company} className="w-5 h-5" />
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-800">{job.title}</p>
            <p className="text-[10px] text-gray-400">{job.company} • {job.location}</p>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
            job.color === 'green' ? 'bg-green-50 text-green-600' :
            job.color === 'blue' ? 'bg-blue-50 text-blue-600' :
            'bg-yellow-50 text-yellow-600'
          }`}>{job.status}</span>
        </div>
      ))}
    </div>
  ),
];

const ProductsSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 720;
    const newIndex = direction === 'left'
      ? Math.max(0, activeIndex - 1)
      : Math.min(productFeatures.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    el.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Arrows */}
        <div className="flex items-center justify-between mb-8">
          <div></div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30"
              disabled={activeIndex === 0}
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30"
              disabled={activeIndex === productFeatures.length - 1}
            >
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-8" style={{ width: 'max-content' }}>
            {productFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex gap-8 items-start"
                style={{ width: '700px', flexShrink: 0 }}
              >
                {/* Visual Card */}
                <div className="flex-shrink-0">
                  {productVisuals[index]}
                </div>

                {/* Description */}
                <div className="flex flex-col justify-center py-4 max-w-[300px]">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                    <img
                      src={`https://firststepjob.com/image${index + 1}.png`}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A4B] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{feature.description}</p>
                  <button className="text-sm text-[#0D9488] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    View more <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {productFeatures.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                scrollRef.current?.scrollTo({ left: i * 720, behavior: 'smooth' });
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === activeIndex ? 'bg-[#0D9488] w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
