import React, { useState } from 'react';
import { pricingPlans, currencySymbols } from '../../data/mockData';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const PricingSection = () => {
  const [isCustomResume, setIsCustomResume] = useState(true);
  const [currency, setCurrency] = useState('USD');
  const [expandedPlan, setExpandedPlan] = useState(null);

  const plans = isCustomResume ? pricingPlans.customResume : pricingPlans.noCustomResume;
  const sym = currencySymbols[currency];

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

        {/* Toggle Custom Resume */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button
              onClick={() => setIsCustomResume(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isCustomResume ? 'bg-white text-[#1B3A4B] shadow-sm' : 'text-gray-500'
              }`}
            >
              Custom Resume
            </button>
            <button
              onClick={() => setIsCustomResume(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isCustomResume ? 'bg-white text-[#1B3A4B] shadow-sm' : 'text-gray-500'
              }`}
            >
              No Custom Resume
            </button>
          </div>
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center gap-2 mb-10">
          {['USD', 'CAD', 'AUD', 'INR'].map((cur) => (
            <button
              key={cur}
              onClick={() => setCurrency(cur)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                currency === cur
                  ? 'bg-[#1B3A4B] text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cur === 'USD' ? '🇺🇸' : cur === 'CAD' ? '🇨🇦' : cur === 'AUD' ? '🇦🇺' : '🇮🇳'} {cur}
            </button>
          ))}
        </div>

        {/* Plan Type Label */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-[#1B3A4B]">
            {isCustomResume ? 'Custom Resume Plans' : 'No Custom Resume Plans'}
          </h3>
          {plans.some(p => p.clientDelegated) && (
            <p className="text-xs text-gray-400 mt-1">Client-Delegated Jobs Required — You send job links. We handle the rest.</p>
          )}
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
              {plan.gradOffer && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Grad Offer
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
                  {sym}{plan.price[currency]}
                </span>
                <span className="text-sm text-gray-400">/ {plan.duration}</span>
              </div>
              <p className="text-xs text-gray-400 mb-1">{plan.perDay[currency]} per day</p>
              <p className="text-xs text-[#0D9488] font-medium mb-4">{plan.jobs}</p>

              <p className="text-xs text-gray-500 mb-4">
                {i === 0 && isCustomResume ? 'Comprehensive job search with resume editing for each application.' :
                 i === 1 && isCustomResume ? 'The ultimate package for a comprehensive job search strategy.' :
                 i === 2 && isCustomResume ? 'All-inclusive service with unlimited revisions.' :
                 i === 0 && !isCustomResume ? 'Perfect for getting started with your job search journey.' :
                 i === 1 && !isCustomResume ? 'Great value with 999 jobs for 100 days.' :
                 'Ideal for those who are actively applying.'}
              </p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-2">
                    <Check size={14} className="text-[#0D9488] mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-600">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setExpandedPlan(expandedPlan === `${isCustomResume}-${i}` ? null : `${isCustomResume}-${i}`)}
                className="text-xs text-[#0D9488] font-medium flex items-center gap-1 mb-4 hover:underline"
              >
                {expandedPlan === `${isCustomResume}-${i}` ? 'Hide' : 'See All'} Features
                {expandedPlan === `${isCustomResume}-${i}` ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>

              {expandedPlan === `${isCustomResume}-${i}` && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <ul className="space-y-1.5">
                    {['Jobnexa\'s Personalised Dashboard', 'Dedicated Human Application Expert', 'Interview Prep & Learning Center', 'WhatsApp/Slack Channel Support'].map((f, fi) => (
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
