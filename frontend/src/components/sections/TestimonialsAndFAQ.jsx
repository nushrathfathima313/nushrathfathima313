import React, { useState } from 'react';
import { testimonials, faqs } from '../../data/mockData';
import { ChevronDown, MessageSquare } from 'lucide-react';

const TestimonialsAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const whatsappNumber = '447825296249';

  const handleWhatsAppClick = () => {
    const message = "Hi! I want help with job applications and getting interview calls.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

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
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1B3A4B]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
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

      {/* ✅ SINGLE CTA SECTION */}
      <section className="py-20 bg-[#1B3A4B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Getting Interview Calls?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Stop wasting time applying randomly. Let us apply for you and get real interview opportunities.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-green-600 transition-colors flex items-center gap-2 justify-center mx-auto"
          >
            Chat on WhatsApp
            <MessageSquare size={16} />
          </button>
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
                  { label: 'Contact', href: '#' },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
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

            <div>
              <h5 className="text-white text-sm font-semibold mb-3">Support</h5>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-gray-400 text-xs hover:text-white transition-colors"
                  >
                    WhatsApp Us
                  </button>
                </li>
                <li className="text-gray-400 text-xs">Terms of Service</li>
                <li className="text-gray-400 text-xs">Privacy Policy</li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 text-xs hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 mt-8 pt-6 text-center">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Jobnexa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default TestimonialsAndFAQ;
