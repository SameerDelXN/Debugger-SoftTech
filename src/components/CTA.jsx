import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue-200 to-indigo-200 py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Start your learning journey today!</h2>
        <p className="text-lg mb-8 text-gray-700">
          Unlock your potential and expand your knowledge. Take the first step towards a brighter future.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
            Enroll Now
          </button>
          <button className="border border-blue-600 hover:bg-blue-100 text-blue-600 font-bold py-3 px-8 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;