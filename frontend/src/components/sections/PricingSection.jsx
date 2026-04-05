import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const plans = [
  {
    name: 'Falcon',
    price: 269,
    duration: '30 days',
    perDay: '~$8.9',
    jobs: '780 jobs',
    description: 'Comprehensive job search with resume editing for each application.',
    clientDelegated: true,
    popular: false,
    features: [
      '780 jobs for 30 days',
      '30+ Applications a day',
      'Resume Editing for Each Application',
      'Cover Letter Customization',
      '1+ Guaranteed Interviews',
      'No Limit on Job titles or Categories',
    ],
    extraFeatures: [
      'Google Drive & WhatsApp Updates',
      'Submission Proofs for Every Application',
      'On-Demand Job Applications',
    ],
  },
  {
    name: 'Premium',
    price: 499,
    duration: '60 days',
    perDay: '~$8.9',
    jobs: '~1.5k jobs',
    description: 'The ultimate package for a comprehensive job search strategy.',
    popular: true,
    features: [
      '~1.5k jobs for 60 days',
      '30+ Applications a day',
      'Resume Editing for Each Application',
      'Cover Letter Customization',
      '2+ Guaranteed Interviews',
      'No Limit on Job titles or Categories',
      'Dedicated Human Application Expert',
    ],
    extraFeatures: [
      'Google Drive & WhatsApp Updates',
      'Submission Proofs for Every Application',
      'On-Demand Job Applications',
      'Priority Support',
    ],
  },
  {
    name: 'Premium Plus',
    price: 1399,
    duration: '120 days',
    perDay: '~$11.6',
    jobs: '~3.1k jobs',
    description: 'All-inclusive service with unlimited revisions.',
    popular: false,
    features: [
      'Everything in Premium and',
      '3120 jobs for 120 days',
      '30+ Applications a day',
      'Resume Editing for Each Application',
      'Cover Letter Customization',
      '10+ Guaranteed Interviews',
      'Access to 2k+ Jobnexa Recruiter Database',
      'Recruiter & Hiring Manager Outreach',
    ],
    extraFeatures: [
      'Google Drive & WhatsApp Updates',
      'Submission Proofs for Every Application',
      'On-Demand Job Applications',
      'Priority Support',
      'Personalized Website',
    ],
  },
];

const PricingSection = () => {
  const [expandedPlan, setExpandedPlan] = useState(null);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B3A4B] mb-3">
            Plans & Pricing
          </h2>
          <p className="text-gray-500">
            Simple, transparent pricing. Choose the plan that's right for your career journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular ? 'border-[#0D9488] shadow-md' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0D9488] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Client Delegated Badge */}
              {plan.clientDelegated && (
                <div className="mb-3">
                  <span className="text-[10px] bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full font-medium">
                    Client-Delegated
                  </span>
                </div>
              )}

              <h4 className="text-xl font-bold text-[#1B3A4B] mb-1">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-[#1B3A4B]">
                  ${plan.price}
                </span>
                <span className="text-sm text-gray-400">/ {plan.duration}</span>
              </div>
              <p className="text-xs text-gray-400 mb-1">{plan.perDay} per day</p>
              <p className="text-xs text-[#0D9488] font-medium mb-4">{plan.jobs}</p>

              <p className="text-xs text-gray-500 mb-4">{plan.description}</p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-2">
                    <Check size={14} className="text-[#0D9488] mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-600">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setExpandedPlan(expandedPlan === i ? null : i)}
                className="text-xs text-[#0D9488] font-medium flex items-center gap-1 mb-4 hover:underline"
              >
                {expandedPlan === i ? 'Hide' : 'See All'} Features
                {expandedPlan === i ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>

              {expandedPlan === i && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <ul className="space-y-1.5">
                    {plan.extraFeatures.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2">
                        <Check size={12} className="text-[#0D9488]" />
                        <span className="text-[11px] text-gray-500">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button className={`w-full py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                plan.popular
                  ? 'bg-[#0D9488] text-white hover:bg-[#0B7C72]'
                  : 'border-2 border-[#1B3A4B] text-[#1B3A4B] hover:bg-[#1B3A4B] hover:text-white'
              }`}>
                Subscribe
              </button>
            </div>
          ))}
        </div>

        {/* Help Text */}
        <div className="text-center mt-12 bg-[#F0F7FA] rounded-2xl p-8 max-w-2xl mx-auto">
          <h4 className="text-lg font-bold text-[#1B3A4B] mb-2">
            Still not sure which plan is right for you?
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            Our team is here to help you choose the perfect plan for your career goals.
          </p>
          <button className="bg-[#1B3A4B] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#15303D] transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
