'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Briefcase, Award, ArrowRight, CheckCircle } from 'lucide-react';

const PlacementAssistance = () => {
  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resume Building",
      description: "Professional resume crafting with industry-standard formatting and content optimization",
      features: ["ATS-friendly formats", "Keyword optimization", "Portfolio integration"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Interview Preparation",
      description: "Comprehensive interview training with industry experts and real-world scenarios",
      features: ["Technical mock interviews", "HR round preparation", "Salary negotiation tips"]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Job Placement",
      description: "End-to-end support for securing your dream position in top IT companies",
      features: ["Company-specific preparation", "Direct placement assistance", "Post-placement support"]
    }
  ];

  const stats = [
    { value: "95%", label: "Placement Rate" },
    { value: "500+", label: "Hiring Partners" },
    { value: "50K+", label: "Average Package" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" name="placement">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold mb-4 block">Career Launch Program</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Placement Assistance
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just train; we transform careers! Our dedicated placement team works with industry leaders 
            to connect you with exceptional opportunities that align with your career goals.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Career?</h3>
            <p className="text-lg mb-8 opacity-90">
              Join our training programs and take the first step towards your dream career in tech!
            </p>
            <a
              href="/join-now"
              className="group inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementAssistance;



// import React from 'react';

// const PlacementAssistance = () => {
//   return (
//     <section className="bg-gray-100 py-12 text-center">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">Placement Assistance</h2>
//         <p className="text-lg mb-8 text-gray-700">
//           At [Your Training Center Name], we don’t just train; we help you build a career! Our dedicated placement support team works with top IT companies to connect our learners with the best job opportunities.
//         </p>
//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Career Services Include:</h3>
//           <ul className="space-y-2">
//             <li className="text-gray-700">Resume Building & Interview Preparation</li>
//             <li className="text-gray-700">Mock Interviews with Industry Experts</li>
//             <li className="text-gray-700">Internship & Job Placement Support</li>
//           </ul>
//         </div>
//         <p className="text-lg mb-6 text-gray-700">
//           Join our training programs and take the first step towards your dream job!
//         </p>
//         <a
//           href="/join-now" // Replace with your actual join now link
//           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block"
//         >
//           Join Now
//         </a>
//       </div>
//     </section>
//   );
// };

// export default PlacementAssistance;