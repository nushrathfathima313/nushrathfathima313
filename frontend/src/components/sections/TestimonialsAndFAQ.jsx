import React, { useState } from 'react';
import { testimonials, faqs } from '../../data/mockData';
import { ChevronDown, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';

const TestimonialsAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* Testimonials Section */}
      <section className="py-20 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A4B]">
              Trusted by growing careers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <MessageSquare size={24} className="text-[#0D9488]/30 mb-4" />
                <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1B3A4B] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {t.role.charAt(0)}{t.role.split(' ')[1]?.charAt(0) || ''}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1B3A4B]">{t.role}</p>
                    <p className="text-xs text-gray-400">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A4B] mb-2">
              Still got questions?
            </h2>
            <p className="text-gray-500">We might have answers</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-medium text-[#1B3A4B] pr-4">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1B3A4B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Stop waiting for opportunities to come to you. Take the first step with Jobnexa and actively shape your career path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0D9488] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#0B7C72] transition-colors flex items-center gap-2 justify-center">
              Get Started Now
              <ArrowRight size={16} />
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2 justify-center">
              WhatsApp Us
              <MessageSquare size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#15303D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-2">Jobnexa</h4>
              <p className="text-gray-400 text-xs">Building Futures. Connecting Careers.</p>
              <p className="text-gray-400 text-xs mt-2">Your career journey starts here</p>
            </div>
            <div>
              <h5 className="text-white text-sm font-semibold mb-3">Company</h5>
              <ul className="space-y-2">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'How It Works', href: '#how-it-works' },
                  { label: 'Pricing', href: '#pricing' },
                  { label: 'Contact', href: 'mailto:sales@jobnexa.com' },
                ].map((link, i) => (
                  <li key={i}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-gray-400 text-xs hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 text-xs hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white text-sm font-semibold mb-3">Support</h5>
              <ul className="space-y-2">
                {[
                  { label: 'WhatsApp Us', href: 'https://wa.me/919494286653?text=Hi%20Jobnexa%20I%E2%80%99d%20like%20more%20information%20about%20your%20services' },
                  { label: 'Terms of Service', href: '#' },
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'FAQ', href: '#faq' },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={(e) => {
                        if (link.href.startsWith('#') && link.href !== '#') {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 text-xs hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-center">
            <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Jobnexa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default TestimonialsAndFAQ;
