"use client"
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      image: "/api/placeholder/400/400",
      course: "Full Stack Development",
      company: "Microsoft",
      position: "Senior Software Engineer",
      quote: "The hands-on training and mentorship at Debugger SoftTech transformed my career. The practical projects and industry exposure helped me land my dream job at Microsoft.",
    },
    {
      name: "Rahul Patel",
      image: "/api/placeholder/400/400",
      course: "Data Science & AI",
      company: "Amazon",
      position: "Data Scientist",
      quote: "The comprehensive curriculum and expert guidance gave me the confidence to transition into data science. The placement support was exceptional in helping me secure my role at Amazon.",
    },
    {
      name: "Ananya Singh",
      image: "/api/placeholder/400/400",
      course: "Cloud Computing & DevOps",
      company: "Google",
      position: "Cloud Solutions Architect",
      quote: "The real-world projects and industry-aligned training were invaluable. Debugger SoftTech's focused approach helped me achieve my goal of working at Google.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Success{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Stories
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our alumni who transformed their careers through our training programs
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Image Column */}
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform -rotate-6"></div>
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="relative rounded-2xl object-cover w-full h-full transform transition-transform duration-500"
                />
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                  </p>
                  <p className="text-gray-500">
                    Course: {testimonials[currentIndex].course}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;