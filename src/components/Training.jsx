"use client";
import React from 'react';

const CorporateTrainingHighlight = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6 relative inline-block">
            Corporate Training
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Elevate your team's potential with tailored corporate training programs designed to drive innovation and growth in today's dynamic business landscape.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative w-full h-80 lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-105">
            <img
              src="/api/placeholder/600/400" // Replace with actual image URL
              alt="Corporate Training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
          </div>

          {/* Text Section */}
          <div className="space-y-8">
            <h3 className="text-4xl font-semibold text-gray-800 relative inline-block">
              What We Offer
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Customized Programs:</strong> Tailored training to align with your specific organizational goals and industry demands.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Practical Learning:</strong> Engaging, hands-on sessions with real-world projects and case studies for immediate application.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Expert Instructors:</strong> Learn from seasoned industry professionals with deep domain expertise.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Flexible Delivery:</strong> Choose from online, on-site, or blended learning formats to suit your team's needs.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Ongoing Support:</strong> Comprehensive post-training support to ensure successful implementation and lasting impact.
                </p>
              </li>
            </ul>
            <a
              href="/corporate-training" // Update with actual link
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Explore Our Programs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTrainingHighlight;