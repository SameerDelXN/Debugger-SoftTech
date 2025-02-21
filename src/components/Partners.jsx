"use client";
import React from 'react';

const PlacementPartners = () => {
  // Replace with actual logo URLs
  const partnerLogos = [
    "/api/placeholder/150/80", // Example partner logo 1
    "/api/placeholder/150/80", // Example partner logo 2
    "/api/placeholder/150/80", // Example partner logo 3
    "/api/placeholder/150/80", // Example partner logo 4
    "/api/placeholder/150/80", // Example partner logo 5
    "/api/placeholder/150/80", // Example partner logo 6
    // Add more logos as needed
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Placement Partners
          </h2>
          <p className="text-lg text-gray-700">
            We're proud to collaborate with leading companies to provide exceptional career opportunities for our graduates.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-20 w-40 rounded-lg bg-white shadow-md">
              <img src={logo} alt={`Partner Logo ${index + 1}`} className="max-h-16 max-w-36 object-contain" />
            </div>
          ))}
        </div>

        {/* Placement Support Statement */}
        <div className="text-center">
          <p className="text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto">
            Our dedicated placement support team works tirelessly to connect you with top employers, offering personalized career guidance, resume workshops, and interview preparation to ensure your success in the job market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;