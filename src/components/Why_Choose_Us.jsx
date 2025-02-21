"use client"
import React from 'react';
import { Users, Code, Award, Briefcase, Monitor } from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expert Instructors with Industry Experience",
      description: "Learn from seasoned professionals with years of real-world experience in leading tech companies. Our instructors bring practical insights and industry best practices to the classroom.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Hands-On Training with Real-World Projects",
      description: "Build your portfolio with industry-relevant projects. Get practical experience working on real challenges that employers are looking for.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Globally Recognized Certifications",
      description: "Earn certificates that are valued by top employers worldwide. Our certifications are designed to validate your skills and boost your career prospects.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Briefcase,
      title: "Placement Assistance & Career Support",
      description: "Get comprehensive career support including resume building, interview preparation, and direct connections with hiring partners.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Monitor,
      title: "Flexible Learning Modes: Online & Classroom",
      description: "Choose between interactive online sessions or traditional classroom learning. Study at your own pace with flexible scheduling options.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Debugger SoftTech
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what sets us apart and why thousands of students trust us for their IT career advancement
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Card Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              ></div>

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${benefit.color} mb-6`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/10 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSeSwUA12hBh5ts5X7BtIRatXqJYS0iu8ZzD41wMtw4H3ZpvFA/viewform"} className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Start Your Journey
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;