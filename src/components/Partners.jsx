'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Trophy, TrendingUp } from 'lucide-react';

const PlacementPartners = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const stats = [
    { icon: <Building2 className="h-6 w-6" />, value: '500+', label: 'Partner Companies' },
    { icon: <Users className="h-6 w-6" />, value: '95%', label: 'Placement Rate' },
    { icon: <Trophy className="h-6 w-6" />, value: '50+', label: 'Fortune 500 Partners' },
    { icon: <TrendingUp className="h-6 w-6" />, value: '40LPA', label: 'Highest Package' },
  ];

  const partnerLogos = [
    "/api/placeholder/150/80",
    "/api/placeholder/150/80",
    "/api/placeholder/150/80",
    "/api/placeholder/150/80",
    "/api/placeholder/150/80",
    "/api/placeholder/150/80",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold mb-4 block">Career Excellence</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Placement Partners
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry leaders to provide exceptional career opportunities, 
            ensuring our graduates step into roles that match their aspirations and potential.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-blue-600 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo Carousel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative group ${
                  hoveredLogo === index ? 'z-10' : 'z-0'
                }`}
                onMouseEnter={() => setHoveredLogo(index)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <div className="relative bg-white rounded-xl p-6 shadow-md transition-all duration-300 
                  hover:shadow-xl hover:scale-110 cursor-pointer backdrop-blur-sm">
                  <img 
                    src={logo} 
                    alt={`Partner Logo ${index + 1}`} 
                    className="w-full h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Placement Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Comprehensive Placement Support</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Career Guidance</h4>
              <p className="text-white/80">Personalized mentoring and industry insights to shape your career path</p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Interview Preparation</h4>
              <p className="text-white/80">Mock interviews and technical preparation with industry experts</p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Resume Building</h4>
              <p className="text-white/80">Professional resume crafting and portfolio development workshops</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementPartners;



// "use client";
// import React from 'react';

// const PlacementPartners = () => {
//   // Replace with actual logo URLs
//   const partnerLogos = [
//     "/api/placeholder/150/80", // Example partner logo 1
//     "/api/placeholder/150/80", // Example partner logo 2
//     "/api/placeholder/150/80", // Example partner logo 3
//     "/api/placeholder/150/80", // Example partner logo 4
//     "/api/placeholder/150/80", // Example partner logo 5
//     "/api/placeholder/150/80", // Example partner logo 6
//     // Add more logos as needed
//   ];

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//             Our Placement Partners
//           </h2>
//           <p className="text-lg text-gray-700">
//             We're proud to collaborate with leading companies to provide exceptional career opportunities for our graduates.
//           </p>
//         </div>

//         {/* Logo Carousel */}
//         <div className="flex flex-wrap justify-center gap-8 mb-10">
//           {partnerLogos.map((logo, index) => (
//             <div key={index} className="flex items-center justify-center h-20 w-40 rounded-lg bg-white shadow-md">
//               <img src={logo} alt={`Partner Logo ${index + 1}`} className="max-h-16 max-w-36 object-contain" />
//             </div>
//           ))}
//         </div>

//         {/* Placement Support Statement */}
//         <div className="text-center">
//           <p className="text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto">
//             Our dedicated placement support team works tirelessly to connect you with top employers, offering personalized career guidance, resume workshops, and interview preparation to ensure your success in the job market.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlacementPartners;