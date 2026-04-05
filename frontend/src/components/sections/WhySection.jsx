import React from 'react';
import { FileText, PenTool, MessageCircle, DollarSign, Users, Clock, CheckCircle, Shield, ChevronRight, FolderOpen, Send } from 'lucide-react';

const whyFeatures = [
  {
    icon: <FileText size={20} />,
    title: 'Manually Tailored Resumes',
    titleAccent: 'For Every Single Application',
    description: 'No templates, no auto-fill. Our team manually edits and tailors your resume for each specific job role — highlighting the right skills, keywords, and experience that match the job description.',
    highlight: 'Every resume is crafted by a real person, not a bot.',
  },
  {
    icon: <PenTool size={20} />,
    title: 'Custom Cover Letters',
    titleAccent: 'That Actually Get Read',
    description: 'We write personalized cover letters for each application — addressing the company, the role, and why you\'re the right fit. No generic templates. Every letter is unique and compelling.',
    highlight: 'Handwritten cover letters for every job application.',
  },
  {
    icon: <Send size={20} />,
    title: 'On-Demand Job Applications',
    subtitle: 'See a role you like? Consider it applied.',
    features: [
      { title: 'Fast Processing', desc: 'Applications submitted within 15 minutes of your request.', icon: Clock },
      { title: 'Expert Review', desc: 'Every link is checked by a human expert before applying.', icon: Shield },
    ],
  },
  {
    icon: <DollarSign size={20} />,
    title: 'No Percentage Games',
    subtitle: 'Simple pricing. Zero surprises.',
    description: 'Choose a plan and pay once. No commissions. No salary cuts after placement. No hidden fees. Everything is clear, upfront, and transparent from day one.',
  },
  {
    icon: <FolderOpen size={20} />,
    title: 'Google Drive +',
    titleAccent: 'WhatsApp Updates',
    description: 'All your application details, tailored resumes, cover letters, and submission proofs are organized in a shared Google Drive folder. Get real-time updates, status reports, and quick communication through a dedicated WhatsApp group.',
    highlight: 'Everything accessible via Google Drive & WhatsApp — no logins needed.',
  },
  {
    icon: <Users size={20} />,
    title: 'Dedicated Support:',
    titleAccent: 'WhatsApp + Ticketing',
    description: 'Get a dedicated WhatsApp group for quick updates, questions, and direct communication with your application team. Plus a ticketing system for tracking requests, issues, and follow-ups throughout your journey.',
  },
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
                    {feature.icon}
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
                          <f.icon size={12} className="text-[#0D9488]" />
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
    // Tailored Resumes Visual
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
      <h4 className="text-sm font-bold text-[#1B3A4B] mb-3">Resumes Tailored Per Role</h4>
      {[
        { role: 'Software Engineer - Google', file: 'Resume_SWE_Google.pdf', match: '95% Match' },
        { role: 'Product Manager - Amazon', file: 'Resume_PM_Amazon.pdf', match: '92% Match' },
        { role: 'Data Analyst - Microsoft', file: 'Resume_DA_Microsoft.pdf', match: '89% Match' },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
          <div>
            <p className="text-xs font-medium text-gray-700">{item.role}</p>
            <p className="text-[10px] text-gray-400">{item.file}</p>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-medium">{item.match}</span>
        </div>
      ))}
    </div>,

    // Cover Letter Visual
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <PenTool size={16} className="text-[#0D9488]" />
        <h4 className="text-sm font-bold text-[#1B3A4B]">Cover Letter Preview</h4>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 text-xs text-gray-600 leading-relaxed space-y-2">
        <p className="font-medium text-gray-800">Dear Hiring Manager at Google,</p>
        <p>I am excited to apply for the Software Engineer position. With 3+ years of experience in full-stack development and a passion for building scalable systems...</p>
        <p className="text-gray-400 italic">...tailored specifically to the role requirements...</p>
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-gray-200">
          <CheckCircle size={12} className="text-green-500" />
          <span className="text-[10px] text-green-600 font-medium">Customized for each application</span>
        </div>
      </div>
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
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
              job.color === 'green' ? 'bg-green-50 text-green-600' :
              job.color === 'blue' ? 'bg-blue-50 text-blue-600' :
              'bg-yellow-50 text-yellow-600'
            }`}>{job.s}</span>
          </div>
        ))}
      </div>
    </div>,

    // No Percentage Visual
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
      <h4 className="text-sm font-bold text-[#1B3A4B] mb-4">Transparent Pricing</h4>
      <div className="space-y-3">
        {[
          { label: 'Commission on salary', value: '0%', good: true },
          { label: 'Hidden fees', value: 'None', good: true },
          { label: 'Salary cuts after placement', value: 'Never', good: true },
          { label: 'Pay once, get full service', value: 'Yes', good: true },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-green-50/50">
            <span className="text-xs text-gray-600">{item.label}</span>
            <span className="text-xs font-bold text-green-600">{item.value}</span>
          </div>
        ))}
      </div>
    </div>,

    // Google Drive + WhatsApp Visual
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="bg-[#F0F7FA] rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <FolderOpen size={14} className="text-[#0D9488]" />
            <span className="text-xs font-bold text-[#1B3A4B]">Shared Google Drive</span>
          </div>
          <div className="space-y-2">
            {['Tailored_Resumes/', 'Cover_Letters/', 'Submission_Proofs/', 'Application_Tracker.xlsx'].map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] text-gray-500 bg-white rounded px-2 py-1.5">
                <FileText size={10} className="text-gray-400" />
                {f}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle size={14} className="text-green-600" />
            <span className="text-xs font-bold text-gray-800">WhatsApp Group</span>
          </div>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-2 text-[10px] text-gray-600">
              <span className="font-medium text-green-600">Jobnexa Team:</span> Applied to 12 jobs today! Check Drive for proofs.
            </div>
            <div className="bg-white rounded-lg p-2 text-[10px] text-gray-600">
              <span className="font-medium text-green-600">Jobnexa Team:</span> Google responded — phone screen scheduled!
            </div>
          </div>
        </div>
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
            <p className="text-[10px] text-gray-500">Resume updated and uploaded to your Drive folder. 8 new applications submitted today!</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-700">Ticket #402</span>
          <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full">Resolved</span>
        </div>
        <p className="text-[10px] text-gray-500">Cover Letter Review</p>
        <p className="text-[10px] text-gray-400 mt-1">Status: Complete • Updated: 2m ago</p>
      </div>
    </div>,
  ];
  return visuals[index] || null;
};

export default WhySection;
