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
    { icon: Users, count: 100, label: "Students Trained", suffix: "+", color: "from-blue-500 to-blue-600" },
    { icon: Building, count: 10, label: "Hiring Partners", suffix: "+", color: "from-purple-500 to-purple-600" },
    { icon: Award, count: 95, label: "Success Rate", suffix: "%", color: "from-green-500 to-green-600" },
    { icon: Star, count: 15, label: "Industry Expert Trainers", suffix: "+", color: "from-orange-500 to-orange-600" }
  ];

  const partners = ["partner1.svg", "partner2.svg", "partner3.png", "partner4.jpg"];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Impact</span> in Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Driving success through quality education and industry partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`}></div>
              <div className="text-center">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  <AnimatedCounter end={stat.count} />{stat.suffix}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Trusted by Leading Companies</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="w-52 h-20 flex items-center justify-center bg-blue-100 rounded-lg p-3 ">
                <Image src={`/partner/${partner}`} width={120} height={60} alt={`Partner ${index + 1}`} className='w-full h-full object-contain' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
