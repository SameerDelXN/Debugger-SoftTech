'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown, Globe, GraduationCap, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Courses', 
      href: '/courses',
      dropdown: [
        { name: 'Software Development', href: '/courses/software-development', icon: <BookOpen className="group-hover:rotate-12 transition-transform" size={18} /> },
        { name: 'Data Analysis & AI', href: '/courses/data-analysis', icon: <Globe className="group-hover:rotate-12 transition-transform" size={18} /> },
        { name: 'DevOps & Cloud', href: '/courses/devops', icon: <GraduationCap className="group-hover:rotate-12 transition-transform" size={18} /> },
      ]
    },
    { name: 'Corporate Training', href: '/corporate-training' },
    { name: 'Placement', href: '/placement' },
    { name: 'Contact', href: '/contact' },
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
          <Link href="/" className="flex items-center relative z-10 group">
            <div className="overflow-hidden">
              <Image
                src="/images/logo.svg"
                alt="Debugger SoftTech Logo"
                width={180}
                height={40}
                className="h-10 w-auto transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center px-4 py-2.5 rounded-lg text-gray-700 font-medium transition-all duration-300 
                        ${activeDropdown === index ? 'text-blue-600 bg-blue-50' : ''}
                        ${hoverIndex === index ? 'bg-blue-50/50 scale-105' : ''}
                        hover:text-blue-600 hover:bg-blue-50 hover:scale-105`}
                      onClick={(e) => handleDropdownToggle(e, index)}
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`ml-1.5 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100/50 py-2 z-20 backdrop-blur-lg animate-fadeIn">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-300 first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-blue-500 mr-3 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                              {dropItem.icon}
                            </span>
                            <span className="font-medium">{dropItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2.5 rounded-lg text-gray-700 font-medium transition-all duration-300
                      ${hoverIndex === index ? 'bg-blue-50/50 scale-105' : ''}
                      hover:text-blue-600 hover:bg-blue-50 hover:scale-105`}
                  >
                    {item.name}
                  </Link>
                )}
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
            <Link
              href="https://forms.gle/EsUZ9h1EixC1a18r8"
              target="_blank"
              className="relative inline-flex group overflow-hidden rounded-xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="relative px-6 py-2.5 transition-all duration-300 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 group-hover:text-white font-medium">
                  Enroll Now
                </span>
              </span>
            </Link>
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
            {navItems.map((item, index) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="border-b border-gray-100 pb-1">
                    <button
                      onClick={(e) => handleDropdownToggle(e, index)}
                      className="flex items-center justify-between w-full py-3.5 px-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50/50 transition-all duration-300"
                    >
                      {item.name}
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeDropdown === index ? 'max-h-96 py-2' : 'max-h-0'
                    }`}>
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="flex items-center ml-4 py-3 px-3 text-gray-600 hover:text-blue-600 border-l-2 border-gray-100 hover:border-blue-400 transition-all duration-300 group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-blue-500 mr-3 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-all duration-300">
                            {dropItem.icon}
                          </span>
                          <span className="font-medium">{dropItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3.5 px-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100 rounded-lg hover:bg-blue-50/50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
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
              <Link
                href="https://forms.gle/EsUZ9h1EixC1a18r8"
                target="_blank"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium py-4 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg w-full mt-5 text-center block"
                onClick={() => setIsMenuOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;



// // src/components/layout/Header.jsx
// "use client"
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Phone, Menu, X, ChevronDown, Globe, GraduationCap, BookOpen } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // Navigation items with dropdown support
//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { 
//       name: 'Courses', 
//       href: '/courses',
//       dropdown: [
//         { name: 'Software Development', href: '/courses/software-development', icon: <BookOpen size={16} /> },
//         { name: 'Data Analysis & AI', href: '/courses/data-analysis', icon: <Globe size={16} /> },
//         { name: 'DevOps & Cloud', href: '/courses/devops', icon: <GraduationCap size={16} /> },
//       ]
//     },
//     { name: 'Corporate Training', href: '/corporate-training' },
//     { name: 'Placement', href: '/placement' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   // Handle scroll effect for sticky header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = () => setActiveDropdown(null);
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   // Toggle dropdown menu
//   const handleDropdownToggle = (e, index) => {
//     e.stopPropagation();
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled 
//         ? 'bg-white shadow-md py-2 backdrop-blur-md' 
//         : 'bg-white/90 py-4 backdrop-blur-sm'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center relative z-10 group">
//             <div className="overflow-hidden">
//               <Image
//                 src="/images/logo.svg"
//                 alt="Debugger SoftTech Logo"
//                 width={180}
//                 height={40}
//                 className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-1">
//             {navItems.map((item, index) => (
//               <div key={item.name} className="relative group">
//                 {item.dropdown ? (
//                   <>
//                     <button
//                       className={`flex items-center px-4 py-2 rounded-md text-gray-700 font-medium transition-colors group-hover:text-blue-600 group-hover:bg-blue-50 ${
//                         activeDropdown === index ? 'text-blue-600 bg-blue-50' : ''
//                       }`}
//                       onClick={(e) => handleDropdownToggle(e, index)}
//                     >
//                       {item.name}
//                       <ChevronDown 
//                         size={16} 
//                         className={`ml-1.5 transition-transform duration-200 ${
//                           activeDropdown === index ? 'rotate-180' : ''
//                         }`} 
//                       />
//                     </button>
//                     {activeDropdown === index && (
//                       <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-20">
//                         {item.dropdown.map((dropItem) => (
//                           <Link
//                             key={dropItem.name}
//                             href={dropItem.href}
//                             className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                             onClick={() => setActiveDropdown(null)}
//                           >
//                             <span className="text-blue-500 mr-2">{dropItem.icon}</span>
//                             {dropItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className="px-4 py-2 rounded-md text-gray-700 font-medium transition-colors hover:text-blue-600 hover:bg-blue-50"
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Phone and CTA - Desktop */}
//           <div className="hidden lg:flex items-center space-x-5">
//             <a 
//               href="tel:+918446344495" 
//               className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               <div className="p-2 rounded-full bg-blue-50 mr-2">
//                 <Phone size={16} className="text-blue-600" />
//               </div>
//               <span className="font-medium">+91 8446344495</span>
//             </a>
//             <Link
//               href="https://forms.gle/EsUZ9h1EixC1a18r8"
//               target="_blank"
//               className="relative inline-flex group overflow-hidden rounded-full p-0.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
//             >
//               <span className="relative px-6 py-2.5 transition-all duration-300 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
//                 <span className="relative text-blue-600 font-medium group-hover:text-white">Enroll Now</span>
//               </span>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation - Slide Down Animation */}
//       <div 
//         className={`lg:hidden fixed inset-x-0 bg-white border-t shadow-md transition-all duration-300 overflow-hidden ${
//           isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <div className="container mx-auto px-4 py-4">
//           <nav className="flex flex-col space-y-1">
//             {navItems.map((item, index) => (
//               <div key={item.name}>
//                 {item.dropdown ? (
//                   <div className="border-b border-gray-100 pb-1">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setActiveDropdown(activeDropdown === index ? null : index);
//                       }}
//                       className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:text-blue-600 font-medium"
//                     >
//                       {item.name}
//                       <ChevronDown 
//                         size={16} 
//                         className={`transition-transform duration-200 ${
//                           activeDropdown === index ? 'rotate-180' : ''
//                         }`} 
//                       />
//                     </button>
//                     <div className={`overflow-hidden transition-all duration-300 ${
//                       activeDropdown === index ? 'max-h-96 py-2' : 'max-h-0'
//                     }`}>
//                       {item.dropdown.map((dropItem) => (
//                         <Link
//                           key={dropItem.name}
//                           href={dropItem.href}
//                           className="flex items-center ml-4 py-2.5 pl-2 text-gray-600 hover:text-blue-600 border-l-2 border-gray-100 hover:border-blue-400"
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           <span className="text-blue-500 mr-2">{dropItem.icon}</span>
//                           {dropItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className="block py-3 px-2 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//             <div className="pt-4">
//               <a 
//                 href="tel:+918446344495" 
//                 className="flex items-center text-gray-700 hover:text-blue-600 py-3 px-2 transition-colors"
//               >
//                 <div className="p-1.5 rounded-full bg-blue-50 mr-3">
//                   <Phone size={16} className="text-blue-600" />
//                 </div>
//                 <span className="font-medium">+91 8446344495</span>
//               </a>
//               <Link
//                 href="https://forms.gle/EsUZ9h1EixC1a18r8"
//                 target="_blank"
//                 className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3.5 px-4 rounded-md transition-all shadow-md w-full mt-5 text-center block"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Enroll Now
//               </Link>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



// // src/components/layout/Header.jsx
// "use client"
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Phone, Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Navigation items
//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Courses', href: '/courses' },
//     { name: 'Corporate Training', href: '/corporate-training' },
//     { name: 'Placement', href: '/placement' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   // Handle scroll effect for sticky header
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/images/logo.svg"
//               alt="Debugger SoftTech Logo"
//               width={180}
//               height={40}
//               className="h-10 w-auto"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Phone and CTA - Desktop */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <a 
//               href="tel:+918446344495" 
//               className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               <Phone size={18} className="mr-2" />
//               <span className="font-medium">+91 8446344495</span>
//             </a>
//             <Link
//               href="https://forms.gle/EsUZ9h1EixC1a18r8"
//               target="_blank"
//               className=" bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition-colors shadow-sm"
//             >
//               Enroll Now
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-gray-700 focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-white border-t mt-2">
//           <div className="container mx-auto px-4 py-4">
//             <nav className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="pt-4 border-t">
//                 <a 
//                   href="tel:+918446344495" 
//                   className="flex items-center text-gray-700 hover:text-blue-600 py-2 transition-colors"
//                 >
//                   <Phone size={18} className="mr-2" />
//                   <span className="font-medium">+91 8446344495</span>
//                 </a>
//                 <Link
//                   href="https://forms.gle/EsUZ9h1EixC1a18r8"
//                   target="_blank"
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors shadow-sm w-full mt-4 text-center block"
//                 >
//                   Enroll Now
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;