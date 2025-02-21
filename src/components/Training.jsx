'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Play } from 'lucide-react';

const CorporateTrainingHighlight = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Customized Programs",
      description: "Tailored training to align with your specific organizational goals and industry demands.",
      icon: <Check className="h-5 w-5" />
    },
    {
      title: "Practical Learning",
      description: "Engaging, hands-on sessions with real-world projects and case studies for immediate application.",
      icon: <Check className="h-5 w-5" />
    },
    {
      title: "Expert Instructors",
      description: "Learn from seasoned industry professionals with deep domain expertise.",
      icon: <Check className="h-5 w-5" />
    },
    {
      title: "Flexible Delivery",
      description: "Choose from online, on-site, or blended learning formats to suit your team's needs.",
      icon: <Check className="h-5 w-5" />
    },
    {
      title: "Ongoing Support",
      description: "Comprehensive post-training support to ensure successful implementation and lasting impact.",
      icon: <Check className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold mb-4 block">Transform Your Team</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Corporate Training
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevate your team's potential with tailored corporate training programs designed to drive innovation and growth in today's dynamic business landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/api/placeholder/600/400"
                alt="Corporate Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                  <Play className="h-5 w-5" />
                  <span>Watch Overview</span>
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-4xl font-bold text-gray-800">
              What We Offer
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 mt-4 rounded-full" />
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div 
                    className={`bg-white rounded-xl p-6 transition-all duration-300 cursor-pointer flex items-start gap-4 border border-gray-100 ${
                      hoveredCard === index ? 'shadow-xl translate-x-2' : 'shadow-md'
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <span className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-3 rounded-full flex-shrink-0">
                      {feature.icon}
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/corporate-training"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                Explore Our Programs
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTrainingHighlight;


// "use client";
// import React from 'react';

// const CorporateTrainingHighlight = () => {
//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-6 lg:px-12">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6 relative inline-block">
//             Corporate Training
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
//           </h2>
//           <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             Elevate your team's potential with tailored corporate training programs designed to drive innovation and growth in today's dynamic business landscape.
//           </p>
//         </div>

//         {/* Content Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Image Section */}
//           <div className="relative w-full h-80 lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-105">
//             <img
//               src="/api/placeholder/600/400" // Replace with actual image URL
//               alt="Corporate Training"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
//           </div>

//           {/* Text Section */}
//           <div className="space-y-8">
//             <h3 className="text-4xl font-semibold text-gray-800 relative inline-block">
//               What We Offer
//               <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
//             </h3>
//             <ul className="space-y-6">
//               <li className="flex items-start gap-4">
//                 <span className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </span>
//                 <p className="text-gray-700 leading-relaxed">
//                   <strong>Customized Programs:</strong> Tailored training to align with your specific organizational goals and industry demands.
//                 </p>
//               </li>
//               <li className="flex items-start gap-4">
//                 <span className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </span>
//                 <p className="text-gray-700 leading-relaxed">
//                   <strong>Practical Learning:</strong> Engaging, hands-on sessions with real-world projects and case studies for immediate application.
//                 </p>
//               </li>
//               <li className="flex items-start gap-4">
//                 <span className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </span>
//                 <p className="text-gray-700 leading-relaxed">
//                   <strong>Expert Instructors:</strong> Learn from seasoned industry professionals with deep domain expertise.
//                 </p>
//               </li>
//               <li className="flex items-start gap-4">
//                 <span className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </span>
//                 <p className="text-gray-700 leading-relaxed">
//                   <strong>Flexible Delivery:</strong> Choose from online, on-site, or blended learning formats to suit your team's needs.
//                 </p>
//               </li>
//               <li className="flex items-start gap-4">
//                 <span className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </span>
//                 <p className="text-gray-700 leading-relaxed">
//                   <strong>Ongoing Support:</strong> Comprehensive post-training support to ensure successful implementation and lasting impact.
//                 </p>
//               </li>
//             </ul>
//             <a
//               href="/corporate-training" // Update with actual link
//               className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
//             >
//               Explore Our Programs
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CorporateTrainingHighlight;