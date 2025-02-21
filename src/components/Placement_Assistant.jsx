import React from 'react';

const PlacementAssistance = () => {
  return (
    <section className="bg-gray-100 py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Placement Assistance</h2>
        <p className="text-lg mb-8 text-gray-700">
          At [Your Training Center Name], we don’t just train; we help you build a career! Our dedicated placement support team works with top IT companies to connect our learners with the best job opportunities.
        </p>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Career Services Include:</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Resume Building & Interview Preparation</li>
            <li className="text-gray-700">Mock Interviews with Industry Experts</li>
            <li className="text-gray-700">Internship & Job Placement Support</li>
          </ul>
        </div>
        <p className="text-lg mb-6 text-gray-700">
          Join our training programs and take the first step towards your dream job!
        </p>
        <a
          href="/join-now" // Replace with your actual join now link
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block"
        >
          Join Now
        </a>
      </div>
    </section>
  );
};

export default PlacementAssistance;