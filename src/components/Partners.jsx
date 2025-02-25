'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PlacementPartners = () => {
  const partnerLogos = [
    "/partner/partner1.svg",
    "/partner/partner2.svg",
    "/partner/partner3.png",
    "/partner/partner4.jpg",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Placement Partners
          </h2>
          <p className="text-lg text-gray-700">
            We're proud to collaborate with leading companies to provide exceptional career opportunities for our graduates.
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-10"
        >
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center h-20 w-52 rounded-lg bg-blue-100 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
            >
              <img src={logo} alt={`Partner Logo ${index + 1}`} className="max-h-16 max-w-36 object-contain" />
            </motion.div>
          ))}
        </motion.div>

        {/* Placement Support Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto">
            Our dedicated placement support team works tirelessly to connect you with top employers, offering personalized career guidance, resume workshops, and interview preparation to ensure your success in the job market.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementPartners;
