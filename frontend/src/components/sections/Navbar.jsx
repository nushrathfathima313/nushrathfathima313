import React, { useState, useEffect } from 'react';
import { navLinks, LOGO_URL } from '../../data/mockData';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img src={LOGO_URL} alt="Jobnexa" className="h-12 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-[#1B3A4B] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button className="text-sm font-medium text-white bg-[#0D9488] hover:bg-[#0B7C72] px-4 py-2 rounded-full transition-colors duration-200 flex items-center gap-1">
              Resume Builder
              <span className="text-[10px] bg-white text-[#0D9488] px-1.5 py-0.5 rounded-full font-bold ml-1">New</span>
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-sm font-medium text-[#1B3A4B] hover:text-[#0D9488] px-4 py-2 border border-gray-200 rounded-full transition-colors duration-200">
              Sign In
            </button>
            <button className="text-sm font-medium text-white bg-[#1B3A4B] hover:bg-[#15303D] px-5 py-2 rounded-full transition-colors duration-200">
              Book a Call
            </button>
          </div>

          {/* Mobile Hamburger */}
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
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-sm font-medium text-gray-600 hover:text-[#1B3A4B] py-2"
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-3 pt-3 border-t border-gray-100">
              <button className="flex-1 text-sm font-medium text-[#1B3A4B] px-4 py-2 border border-gray-200 rounded-full">
                Sign In
              </button>
              <button className="flex-1 text-sm font-medium text-white bg-[#1B3A4B] px-4 py-2 rounded-full">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
