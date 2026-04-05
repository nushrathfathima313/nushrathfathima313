import React from 'react';
import { appliedJobs, resumes, submissions, responses, recruiters } from '../../data/mockData';
import { FileText, Download, Eye, ExternalLink, Mail, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-[#F0F7FA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B3A4B] mb-4 leading-tight">
            One Login One Dashboard
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Everything about your job search, in one place
          </p>
          <p className="text-sm text-gray-400 mt-3 max-w-xl mx-auto">
            Track job applications, resumes, interviews, status updates and learning center in one centralized dashboard.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 bg-[#1B3A4B] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#15303D] transition-colors duration-200">
            Explore Dashboard
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dashboard Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Resume Access Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#1B3A4B] text-sm">Resume Access</h3>
              <span className="text-xs text-gray-400">All Resumes</span>
            </div>
            <div className="space-y-3">
              {resumes.map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
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
          </div>

          {/* View Submissions Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-[#1B3A4B] text-sm mb-4">View Submissions</h3>
            <table className="w-full">
              <thead>
                <tr className="text-[10px] text-gray-400 uppercase">
                  <th className="text-left pb-2">File Name</th>
                  <th className="text-left pb-2">Date</th>
                  <th className="text-right pb-2">View</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s, i) => (
                  <tr key={i} className="border-t border-gray-50">
                    <td className="py-2 text-xs text-gray-700">{s.name}</td>
                    <td className="py-2 text-xs text-gray-400">{s.date}</td>
                    <td className="py-2 text-right">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye size={12} className="text-gray-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Access Responses Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-[#1B3A4B] text-sm mb-4">Access Responses</h3>
            <table className="w-full">
              <thead>
                <tr className="text-[10px] text-gray-400 uppercase">
                  <th className="text-left pb-2">Company</th>
                  <th className="text-left pb-2">Response</th>
                  <th className="text-left pb-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {responses.map((r, i) => (
                  <tr key={i} className="border-t border-gray-50">
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <img src={r.favicon} alt={r.company} className="w-4 h-4" />
                        <span className="text-xs text-gray-700">{r.company}</span>
                      </div>
                    </td>
                    <td className="py-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        r.response === 'Interview' ? 'bg-green-50 text-green-600' :
                        r.response === 'Phone' ? 'bg-blue-50 text-blue-600' :
                        'bg-yellow-50 text-yellow-600'
                      }`}>{r.response}</span>
                    </td>
                    <td className="py-2 text-xs text-gray-400">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recruiter Outreach Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#1B3A4B] text-sm">Recruiter Outreach</h3>
              <span className="text-[10px] bg-[#0D9488]/10 text-[#0D9488] px-2 py-0.5 rounded-full font-medium">5,000+ Recruiters</span>
            </div>
            <div className="space-y-3">
              {recruiters.map((rec, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
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
          </div>

          {/* Applied Jobs Card - spans 2 cols */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300 md:col-span-2 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#1B3A4B] text-sm">Applied Jobs</h3>
              <div className="flex gap-2 text-[10px] text-gray-400">
                <span>Date View</span>
                <span>Company View</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {appliedJobs.map((job, i) => (
                <div key={i} className="p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="flex items-start gap-3">
                    <img src={job.favicon} alt={job.company} className="w-6 h-6 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-800">{job.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-gray-400">{job.date}</span>
                        <span className="text-[10px] text-green-500 font-medium">{job.status}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-2 line-clamp-2">{job.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button className="text-[10px] text-[#0D9488] font-medium hover:underline flex items-center gap-1">
                          Job Post <ExternalLink size={10} />
                        </button>
                        <button className="text-[10px] text-gray-400 hover:text-gray-600">More...</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
