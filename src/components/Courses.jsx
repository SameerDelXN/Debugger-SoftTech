"use client"
import React from 'react';
import { Code, Database, ChartBar, Cloud, TestTube, Smartphone, Layers,Cpu,Gamepad } from 'lucide-react';

const CourseCategories = () => {
  const categories = [
    {
      icon: Code,
      name: "Software Development",
      description: "Master popular programming languages and frameworks. Build full-stack applications with modern technologies.",
      color: "from-blue-500 to-blue-600",
      link: "/courses/software-development"
    },
    {
      icon: Database,
      name: "Data Analysis & AI",
      description: "Learn data analytics, machine learning, and artificial intelligence. Transform data into actionable insights.",
      color: "from-purple-500 to-purple-600",
      link: "/courses/data-analysis"
    },
    {
      icon: ChartBar,
      name: "Business Analytics",
      description: "Master data visualization, statistical analysis, and business intelligence tools for informed decision making.",
      color: "from-green-500 to-green-600",
      link: "/courses/business-analytics"
    },
    {
      icon: Cloud,
      name: "DevOps & Cloud Computing",
      description: "Deploy and manage applications using cloud platforms. Master DevOps tools and practices.",
      color: "from-orange-500 to-orange-600",
      link: "/courses/devops"
    },
    {
      icon: TestTube,
      name: "QA & Testing",
      description: "Learn software testing methodologies, automation tools, and quality assurance best practices.",
      color: "from-red-500 to-red-600",
      link: "/courses/qa-testing"
    },
    {
      icon: Smartphone,
      name: "Mobile Development",
      description: "Build native and cross-platform mobile applications for iOS and Android platforms.",
      color: "from-pink-500 to-pink-600",
      link: "/courses/mobile-development"
    },
    {
      icon: Layers,
      name: "UI/UX Design",
      description: "Create engaging user interfaces and seamless user experiences with modern design tools.",
      color: "from-teal-500 to-teal-600",
      link: "/courses/ui-ux-design"
    },
    {
      icon: Cpu,
      name: "System Programming",
      description: "Master system-level programming with Rust and Golang.",
      color: "from-red-600 to-red-700",
      link: "/courses/system-programming"
    },
    {
      icon: Gamepad,
      name: "Game Development",
      description: "Build immersive games using Unity 3D (C#) or Unreal Engine (C++).",
      color: "from-red-500 to-red-600",
      link: "/courses/game-development"
    }
    
  ];

  return (
    <section className="py-20 bg-white" name="courses">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Courses
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our wide range of professional courses designed to help you master the latest technologies
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative">
                {/* Icon Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10 rounded-full w-16 h-16 transition-all duration-300 group-hover:scale-110`}></div>
                {/* Icon */}
                <div className={`relative z-10 inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} text-white mb-6`}>
                  <category.icon className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {category.description}
              </p>

              {/* <a 
                href={category.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
              >
                Learn More
                <svg 
                  className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a> */}
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center">
          <a 
            href="/courses"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View All Courses
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default CourseCategories;