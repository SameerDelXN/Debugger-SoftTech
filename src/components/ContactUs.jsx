'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [activeForm, setActiveForm] = useState('message'); // 'message' or 'query'
  
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Visit Us",
      value: "Ravet, Pune",
      link: "https://www.google.com/maps/place/Ravet,+Pune,+Maharashtra,+India/@18.6653245,73.7431368,14z/data=!3m1!4b1!4m6!3m5!1s0x3bc9e36566085555:0x89e2733989c4509!8m2!3d18.6653263!4d73.760646!16s%2Fm%2F040n99j?entry=ttu",
      color: "from-rose-400 to-red-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Call Us",
      value: "8446344495",
      link: "tel:8446344495",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email Us",
      value: "debuggersofttech@outlook.com",
      link: "mailto:debuggersofttech@outlook.com",
      color: "from-blue-400 to-indigo-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "Debuggersofttech.com",
      link: "https://debuggersofttech.com",
      color: "from-purple-400 to-violet-600",
    },
  ];


  const quickQueries = [
    "Course Information",
    "Admission Process",
    "Fee Structure",
    "Placement Assistance"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" name="contact">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold mb-4 block">Get in Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions or need guidance? We're here to help you navigate your journey in technology education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.label}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    target={info.link.startsWith('http') ? "_blank" : undefined}
                    rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form / Quick Queries */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveForm('message')}
                className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
                  activeForm === 'message' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <MessageCircle className="w-5 h-5 inline mr-2" />
                Send Message
              </button>
              <button
                onClick={() => setActiveForm('query')}
                className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
                  activeForm === 'query' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Clock className="w-5 h-5 inline mr-2" />
                Quick Query
              </button>
            </div>

            {activeForm === 'message' ? (
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                {quickQueries.map((query, index) => (
                  <a
                    key={index}
                    href={`mailto:debuggersofttech@outlook.com?subject=${encodeURIComponent(query)}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{query}</span>
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Let's build a brighter future together with the power of technology!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;



// "use client"
// import React from 'react';
// import { MapPin, Phone, Mail, Globe } from 'lucide-react';

// const ContactUs = () => {
//   return (
//     <section className="bg-white py-12 text-center">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
//         <p className="text-lg mb-8 text-gray-700">
//           Have questions or need guidance? Reach out to us!
//         </p>
//         <div className="mb-8">
//           <div className="flex items-center justify-center mb-4">
//             <MapPin className="mr-2 text-gray-600" />
//             <p className="text-gray-700">Ravet, Pune</p>
//           </div>
//           <div className="flex items-center justify-center mb-4">
//             <Phone className="mr-2 text-gray-600" />
//             <p className="text-gray-700">8446344495</p>
//           </div>
//           <div className="flex items-center justify-center mb-4">
//             <Mail className="mr-2 text-gray-600" />
//             <p className="text-gray-700">debuggersofttech@outlook.com</p>
//           </div>
//           <div className="flex items-center justify-center">
//             <Globe className="mr-2 text-gray-600" />
//             <a
//               href="https://debuggersofttech.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:underline"
//             >
//               Debuggersofttech.com
//             </a>
//           </div>
//         </div>
//         <p className="text-lg mb-6 text-gray-700">
//           Let’s build a brighter future together with the power of technology!
//         </p>
//         <a
//           href="mailto:debuggersofttech@outlook.com" // Opens default email client
//           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block"
//         >
//           Contact Us Now
//         </a>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;