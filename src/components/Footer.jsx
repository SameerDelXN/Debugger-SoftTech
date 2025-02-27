"use client"
import React, { useState, useEffect } from 'react';
import Link1 from 'next/link';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Send, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };
  
  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800/95 to-gray-900 bg-pattern text-gray-300 pt-24 pb-16 px-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="md:col-span-4 space-y-6">
              <Link1 href="/" className="inline-block">
                <div className="relative overflow-hidden group">
                  <Image
                    src="/footer-logo.png"
                    alt="Debugger SoftTech Logo"
                    width={180}
                    height={40}
                    className="h-14 w-auto transition-all duration-500 group-hover:opacity-0"
                  />
                 
                </div>
              </Link1>
              <div className="h-px w-20 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <p className="text-gray-400 leading-relaxed text-base">
                Empowering careers through industry-focused IT training and placement support. Building tomorrow's tech leaders today.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start group hover:translate-x-1 transition-transform duration-300">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center mr-3">
                    <MapPin size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </span>
                  <span className="group-hover:text-white transition-colors mt-1">Ravet, Pune, Maharashtra, India</span>
                </li>
                <li className="flex items-center group hover:translate-x-1 transition-transform duration-300">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center mr-3">
                    <Phone size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </span>
                  <a href="tel:+918446344495" className="group-hover:text-white transition-colors">
                    +91 8446344495
                  </a>
                </li>
                <li className="flex items-center group hover:translate-x-1 transition-transform duration-300">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center mr-3">
                    <Mail size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </span>
                  <a href="mailto:info@debuggersofttech.com" className="group-hover:text-white transition-colors truncate">
                  info@debuggersofttech.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Section */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Quick Links */}
                <div className="space-y-6">
                  <h3 className="text-white text-lg font-semibold relative inline-block">
                    Quick Links
                    <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
                  </h3>
                  <ul className="space-y-3">
                    {['Home', 'About Us', 'Courses', 'Corporate Training', 'Placement Assistance', 'Contact Us'].map((item) => (
                      <li key={item} className="transform transition-transform duration-300 hover:translate-x-2">
                        <Link1
                          href={`/`} 
                          className="group flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                          <span className="inline-block w-6 overflow-hidden relative mr-1">
                            <span className="absolute transform transition-transform duration-300 group-hover:translate-x-6">
                              <ArrowRight size={14} className="text-blue-400" />
                            </span>
                            <span className="absolute transform -translate-x-6 transition-transform duration-300 group-hover:translate-x-0">
                              <ArrowRight size={14} className="text-blue-400" />
                            </span>
                          </span>
                          {item}
                        </Link1>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Courses */}
                <div className="space-y-6">
                  <h3 className="text-white text-lg font-semibold relative inline-block">
                    Our Courses
                    <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      ['software-dev', 'Software Development'],
                      ['data-analysis', 'Data Analysis & AI'],
                      ['business-analytics', 'Business Analytics'],
                      ['devops', 'DevOps & Cloud'],
                      ['qa-testing', 'QA & Testing'],
                      ['mobile-dev', 'Mobile Development']
                    ].map(([slug, title]) => (
                      <li key={slug} className="transform transition-transform duration-300 hover:translate-x-2">
                        <Link
                         
                          to='courses'
                          smooth={true} 
                          className="group flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                          <span className="inline-block w-6 overflow-hidden relative mr-1">
                            <span className="absolute transform transition-transform duration-300 group-hover:translate-x-6">
                              <ArrowRight size={14} className="text-blue-400" />
                            </span>
                            <span className="absolute transform -translate-x-6 transition-transform duration-300 group-hover:translate-x-0">
                              <ArrowRight size={14} className="text-blue-400" />
                            </span>
                          </span>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="space-y-6">
                  <h3 className="text-white text-lg font-semibold relative inline-block">
                    Stay Updated
                    <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
                  </h3>
                  <p className="text-gray-400">
                    Get the latest updates on courses, industry insights, and special offers.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full bg-gray-800/50 border border-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 group-hover:border-blue-400/50"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 p-2 rounded-md text-white transition-colors"
                        aria-label="Subscribe"
                      >
                        <Send size={18} className="transform -rotate-45" />
                      </button>
                    </div>
                  </form>
                  
                  <h4 className="text-white text-sm font-medium mt-2">Follow Us</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      [Facebook, 'https://facebook.com', 'Facebook'],
                      [Twitter, 'https://twitter.com', 'Twitter'],
                      [Linkedin, 'https://linkedin.com', 'LinkedIn'],
                      [Instagram, 'https://instagram.com', 'Instagram'],
                      [Youtube, 'https://youtube.com', 'YouTube']
                    ].map(([Icon, url, name], index) => (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group overflow-hidden"
                        aria-label={name}
                      >
                        <span className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative flex items-center justify-center bg-gray-800 p-2.5 rounded-lg text-gray-400 group-hover:bg-opacity-10 group-hover:text-white transition-all duration-300">
                          <Icon size={18} />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll to top button */}
          {showScrollTop && (
            <button 
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full text-white shadow-lg transform transition-transform hover:scale-110 z-50"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="text-sm text-gray-400">
                &copy; {currentYear} <span className="text-white font-medium">Debugger SoftTech</span>. All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {[
                {
                  itemName : "Privacy Policy",
                  itemUrl:"privacy-policy"
                },
                {
                  itemName : "Terms & Conditions",
                  itemUrl : "terms-and-conditions"
                }
              ].map((item) => (
                <Link1
                  key={item.itemName}
                  href={item.itemUrl}
                  className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                >
                  <span>{item.itemName}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// "use client"
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const currentYear = new Date().getFullYear();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle newsletter subscription
//     setEmail('');
//   };
  
//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 p-5">
//       {/* Curved Separator */}
    

//       {/* Main Footer */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Company Info */}
//           <div className="space-y-6">
//             <Link href="/" className="inline-block group">
//               <Image
//                 src="/images/logo-white.svg"
//                 alt="Debugger SoftTech Logo"
//                 width={180}
//                 height={40}
//                 className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
//               />
//             </Link>
//             <p className="text-gray-400 leading-relaxed">
//               Empowering careers through industry-focused IT training and placement support.
//             </p>
//             <ul className="space-y-4">
//               <li className="flex items-start group">
//                 <MapPin size={18} className="mt-1 mr-3 flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors" />
//                 <span className="group-hover:text-white transition-colors">Ravet, Pune, Maharashtra, India</span>
//               </li>
//               <li className="flex items-center group">
//                 <Phone size={18} className="mr-3 flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors" />
//                 <a href="tel:+918446344495" className="group-hover:text-white transition-colors">
//                   +91 8446344495
//                 </a>
//               </li>
//               <li className="flex items-center group">
//                 <Mail size={18} className="mr-3 flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors" />
//                 <a href="mailto:debuggersofttech@outlook.com" className="group-hover:text-white transition-colors">
//                   debuggersofttech@outlook.com
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-6">
//             <h3 className="text-white text-lg font-semibold relative">
//               Quick Links
//               <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400"></span>
//             </h3>
//             <ul className="space-y-3">
//               {['Home', 'About Us', 'Courses', 'Corporate Training', 'Placement Assistance', 'Contact Us'].map((item) => (
//                 <li key={item}>
//                   <Link 
//                     href={`/${item.toLowerCase().replace(' ', '-')}`} 
//                     className="group flex items-center hover:text-white transition-colors"
//                   >
//                     <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1" />
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Courses */}
//           <div className="space-y-6">
//             <h3 className="text-white text-lg font-semibold relative">
//               Our Courses
//               <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400"></span>
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 ['software-dev', 'Software Development'],
//                 ['data-analysis', 'Data Analysis & AI'],
//                 ['business-analytics', 'Business Analytics'],
//                 ['devops', 'DevOps & Cloud Computing'],
//                 ['qa-testing', 'QA & Testing'],
//                 ['mobile-dev', 'Mobile Development']
//               ].map(([slug, title]) => (
//                 <li key={slug}>
//                   <Link 
//                     href={`/courses#${slug}`} 
//                     className="group flex items-center hover:text-white transition-colors"
//                   >
//                     <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1" />
//                     {title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="space-y-6">
//             <h3 className="text-white text-lg font-semibold relative">
//               Stay Updated
//               <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400"></span>
//             </h3>
//             <p className="text-gray-400">
//               Subscribe to our newsletter for the latest course updates and tech industry news.
//             </p>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="relative">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Your email address"
//                   className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-400 px-4 py-1.5 rounded-md text-white transition-colors"
//                 >
//                   Join
//                 </button>
//               </div>
//             </form>
//             <div className="flex space-x-4">
//               {[
//                 [Facebook, 'https://facebook.com'],
//                 [Twitter, 'https://twitter.com'],
//                 [Linkedin, 'https://linkedin.com'],
//                 [Instagram, 'https://instagram.com'],
//                 [Youtube, 'https://youtube.com']
//               ].map(([Icon, url], index) => (
//                 <a
//                   key={index}
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800/50 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
//                   aria-label={Icon.name}
//                 >
//                   <Icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-sm text-gray-400">
//               &copy; {currentYear} Debugger SoftTech. All Rights Reserved.
//             </p>
//             <div className="flex space-x-8">
//               {['Privacy Policy', 'Terms & Conditions', 'Sitemap'].map((item) => (
//                 <Link
//                   key={item}
//                   href={`/${item.toLowerCase().replace(' ', '-')}`}
//                   className="text-sm text-gray-400 hover:text-white transition-colors"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;