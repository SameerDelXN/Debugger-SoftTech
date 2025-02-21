// src/components/layout/Header.jsx
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Corporate Training', href: '/corporate-training' },
    { name: 'Placement', href: '/placement' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Debugger SoftTech Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone and CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:+918446344495" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">+91 8446344495</span>
            </a>
            <Link
              href="https://forms.gle/EsUZ9h1EixC1a18r8"
              target="_blank"
              className=" bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition-colors shadow-sm"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t mt-2">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a 
                  href="tel:+918446344495" 
                  className="flex items-center text-gray-700 hover:text-blue-600 py-2 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  <span className="font-medium">+91 8446344495</span>
                </a>
                <Link
                  href="https://forms.gle/EsUZ9h1EixC1a18r8"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors shadow-sm w-full mt-4 text-center block"
                >
                  Enroll Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;