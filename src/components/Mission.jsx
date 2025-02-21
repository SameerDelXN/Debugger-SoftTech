"use client"
import React from 'react';
import { Target } from 'lucide-react';

const MissionStatement = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-8 transform hover:scale-110 transition-transform duration-300">
            <Target className="w-6 h-6" />
          </div>

          {/* Mission Statement */}
          <h2 className="text-4xl font-bold mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Mission
            </span>
          </h2>
          
          <div className="relative mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            At Debugger SoftTech, our mission is to bridge the gap between talent and opportunity in the tech industry. 
            We are committed to empowering individuals with cutting-edge technical skills, fostering innovation, and 
            building a community of exceptional tech professionals. Through industry-aligned training and personalized 
            mentorship, we aim to transform careers and contribute to the global digital transformation journey.
          </p>

          {/* Values Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Excellence', 'Innovation', 'Growth', 'Community'].map((value, index) => (
              <span
                key={index}
                className="px-6 py-2 rounded-full bg-white shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow duration-300"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;