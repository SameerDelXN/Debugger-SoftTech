'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Courses', to: 'courses' },
    { name: 'About', to: 'about' },
    
    { name: 'Corporate Training', to: 'training' },
    { name: 'Placement', to: 'placement' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white py-0 shadow-md' 
          : 'bg-white py-0'
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Debugger SoftTech Logo"
              width={150}
              height={40}
              className="h-9 w-auto transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <div className="flex space-x-1 bg-gray-50 rounded-full p-1.5">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  className="px-5 py-2 text-sm font-medium rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </nav>

          {/* Contact & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href="tel:+918446344495"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-all"
            >
              <div className="p-2 rounded-full bg-gray-100 mr-2">
                <Phone size={16} className="text-blue-600" />
              </div>
              <span className="font-medium">+91 8446344495</span>
            </a>
            <Link
              href="https://forms.gle/EsUZ9h1EixC1a18r8"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-all duration-300 ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-6">
          <div className="mb-10 text-center">
            <Image
              src="/logo.png"
              alt="Debugger SoftTech Logo"
              width={180}
              height={45}
              className="h-12 w-auto mx-auto"
            />
          </div>
          
          <nav className="flex flex-col space-y-6 items-center">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                className="text-lg text-gray-800 hover:text-blue-600 font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>
          
          <div className="mt-12 flex flex-col items-center space-y-6">
            <a
              href="tel:+918446344495"
              className="flex items-center text-gray-800"
            >
              <div className="p-2 rounded-full bg-gray-100 mr-3">
                <Phone size={18} className="text-blue-600" />
              </div>
              <span className="font-medium">+91 8446344495</span>
            </a>
            <Link
              href="https://forms.gle/EsUZ9h1EixC1a18r8"
              target="_blank"
              className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full text-center w-48 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
          
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;