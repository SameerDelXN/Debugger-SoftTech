"use client"
import React from 'react';
import { ChevronRight, Rocket, Users, Award } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center phone:p-5" name="home">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
       
      </div>

      {/* Animated shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <span className="text-blue-400 mr-2">🚀</span>
            <span className="text-gray-200">Transform Your Career with Industry-Leading Training</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up delay-100">
            Empowering Your Future with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Cutting-Edge IT Skills!
            </span>
          </h1>

          {/* Value proposition */}
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            Launch your tech career with industry-aligned training, expert mentorship, and guaranteed placement assistance. Join thousands of successful professionals who transformed their careers with us.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up delay-300">
            <a 
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Enroll Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <Link to='courses' smooth={true} className="cursor-pointer inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium backdrop-blur-sm transition-all duration-300">
              Explore Courses
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-400">
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <Rocket className="text-blue-400 w-8 h-8" />
              <div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-gray-400">Placement Rate</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <Users className="text-purple-400 w-8 h-8" />
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-gray-400">Students Trained</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <Award className="text-green-400 w-8 h-8" />
              <div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-gray-400">Industry Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Model Image */}
      <div className="absolute top-0 right-24  h-full w-1/3 hidden lg:block">
        <img 
          src="/3dModel.png" 
          alt="3D Model Representation" 
          className="w-full h-full object-contain"
        />
      </div>

    
     
    </div>
  );
};

export default Hero;
