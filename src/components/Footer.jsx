"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 p-5">
      {/* Curved Separator */}
    

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo-white.svg"
                alt="Debugger SoftTech Logo"
                width={180}
                height={40}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering careers through industry-focused IT training and placement support.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="group-hover:text-white transition-colors">Ravet, Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <a href="tel:+918446344495" className="group-hover:text-white transition-colors">
                  +91 8446344495
                </a>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <a href="mailto:debuggersofttech@outlook.com" className="group-hover:text-white transition-colors">
                  debuggersofttech@outlook.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Courses', 'Corporate Training', 'Placement Assistance', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="group flex items-center hover:text-white transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold relative">
              Our Courses
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400"></span>
            </h3>
            <ul className="space-y-3">
              {[
                ['software-dev', 'Software Development'],
                ['data-analysis', 'Data Analysis & AI'],
                ['business-analytics', 'Business Analytics'],
                ['devops', 'DevOps & Cloud Computing'],
                ['qa-testing', 'QA & Testing'],
                ['mobile-dev', 'Mobile Development']
              ].map(([slug, title]) => (
                <li key={slug}>
                  <Link 
                    href={`/courses#${slug}`} 
                    className="group flex items-center hover:text-white transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1" />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold relative">
              Stay Updated
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400"></span>
            </h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest course updates and tech industry news.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-400 px-4 py-1.5 rounded-md text-white transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              {[
                [Facebook, 'https://facebook.com'],
                [Twitter, 'https://twitter.com'],
                [Linkedin, 'https://linkedin.com'],
                [Instagram, 'https://instagram.com'],
                [Youtube, 'https://youtube.com']
              ].map(([Icon, url], index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
                  aria-label={Icon.name}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Debugger SoftTech. All Rights Reserved.
            </p>
            <div className="flex space-x-8">
              {['Privacy Policy', 'Terms & Conditions', 'Sitemap'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;