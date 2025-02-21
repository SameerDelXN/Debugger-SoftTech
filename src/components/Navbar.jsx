'use client';

import { useState, useEffect } from 'react';
import Link1 from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown, Globe, GraduationCap, BookOpen } from 'lucide-react';
import { Link } from 'react-scroll';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Courses', to: 'courses' }, // Removed the dropdown
    { name: 'Corporate Training', to: 'training' },
    { name: 'Placement', to: 'placement' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 shadow-lg py-2 backdrop-blur-lg'
          : 'bg-white/80 py-4 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link1 href="/" className="flex items-center relative z-10 group">
            <div className="overflow-hidden">
              <Image
                src="/images/logo.svg"
                alt="Debugger SoftTech Logo"
                width={180}
                height={40}
                className="h-10 w-auto transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
            </div>
          </Link1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  className={`px-4 py-2.5 rounded-lg text-gray-700 font-medium transition-all duration-300 cursor-pointer
                    ${hoverIndex === index ? 'bg-blue-50/50 scale-105' : ''}
                    hover:text-blue-600 hover:bg-blue-50 hover:scale-105`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Phone and CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+918446344495"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 group hover:scale-105"
            >
              <div className="p-2.5 rounded-lg bg-blue-50 mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                <Phone size={18} className="text-blue-600 group-hover:rotate-12 transition-transform" />
              </div>
              <span className="font-medium">+91 8446344495</span>
            </a>
            <Link1
  href="https://forms.gle/EsUZ9h1EixC1a18r8"
  target="_blank"
  className="w-full  block"
  onClick={() => setIsMenuOpen(false)}
>
  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium py-4 px-4 rounded-xl transition-all duration-300 shadow-md w-full text-center block">
    Enroll Now
  </span>
</Link1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={22} className="animate-fadeIn" />
            ) : (
              <Menu size={22} className="animate-fadeIn" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-x-0 bg-white/95 backdrop-blur-lg border-t shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                className="block py-3.5 px-3 text-gray-700 cursor-pointer hover:text-blue-600 font-medium border-b border-gray-100 rounded-lg hover:bg-blue-50/50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="tel:+918446344495"
                className="flex items-center text-gray-700 hover:text-blue-600 py-3.5 px-3 transition-all duration-300 rounded-lg hover:bg-blue-50/50 group"
              >
                <div className="p-2 rounded-lg bg-blue-50 mr-3 group-hover:bg-blue-100 transition-all duration-300">
                  <Phone size={18} className="text-blue-600 group-hover:rotate-12 transition-transform" />
                </div>
                <span className="font-medium">+91 8446344495</span>
              </a>
              <Link1
  href="https://forms.gle/EsUZ9h1EixC1a18r8"
  target="_blank"
  className="w-full mt-5 block"
  onClick={() => setIsMenuOpen(false)}
>
  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium py-4 px-4 rounded-xl transition-all duration-300 shadow-md w-full text-center block">
    Enroll Now
  </span>
</Link1>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header