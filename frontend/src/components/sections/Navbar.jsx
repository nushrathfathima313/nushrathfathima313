import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navLinks, LOGO_URL } from '../../data/mockData';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const whatsappNumber = '447825296249';

  const handleWhatsAppClick = () => {
    setMobileOpen(false);
    const message = "Hi! I want to improve my resume and get interview calls. Can you guide me?";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 shrink-0">
              <img
                src={LOGO_URL}
                alt="WahResume"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-gray-600 hover:text-[#1B3A4B] transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* WhatsApp Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle size={18} />
                Chat Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left text-sm font-medium text-gray-600 hover:text-[#1B3A4B] py-2"
                >
                  {link.label}
                </button>
              ))}

              {/* WhatsApp Button Mobile */}
              <div className="pt-3 border-t border-gray-100">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 text-sm font-medium text-white bg-green-500 px-4 py-3 rounded-full"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </button>
              </div>

            </div>
          </div>
        )}
      </nav>

      {/* 🔥 Floating WhatsApp Button */}
      <a
        href="https://wa.me/447825296249?text=Hi! I want to improve my resume and get interview calls."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
};

export default Navbar;
