"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Users, Building, Award, Star } from 'lucide-react';
import Image from 'next/image';
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endCount = end;
    const startCount = countRef.current;

    const animateCount = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.floor(startCount + (endCount - startCount) * easeOutQuart);
      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, isVisible]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

const StatisticsSection = () => {
  const stats = [
    {
      icon: Users,
      count: 10000,
      label: "Students Trained",
      suffix: "+",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building,
      count: 150,
      label: "Hiring Partners",
      suffix: "+",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      count: 95,
      label: "Success Rate",
      suffix: "%",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Star,
      count: 50,
      label: "Industry Expert Trainers",
      suffix: "+",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Impact
            </span>
            {' '}in Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Driving success through quality education and industry partnerships
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`}></div>
              
              <div className="text-center">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6" />
                </div>

                {/* Counter */}
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  <AnimatedCounter end={stat.count} />
                  {stat.suffix}
                </div>

                {/* Label */}
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/10 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Trusted by Leading Companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8  ">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <Image
                    src={`/partner/partner${index}.svg`}
                    width={100}
                    height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;