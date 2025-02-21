"use client"
import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="bg-white py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <p className="text-lg mb-8 text-gray-700">
          Have questions or need guidance? Reach out to us!
        </p>
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="mr-2 text-gray-600" />
            <p className="text-gray-700">Ravet, Pune</p>
          </div>
          <div className="flex items-center justify-center mb-4">
            <Phone className="mr-2 text-gray-600" />
            <p className="text-gray-700">8446344495</p>
          </div>
          <div className="flex items-center justify-center mb-4">
            <Mail className="mr-2 text-gray-600" />
            <p className="text-gray-700">debuggersofttech@outlook.com</p>
          </div>
          <div className="flex items-center justify-center">
            <Globe className="mr-2 text-gray-600" />
            <a
              href="https://debuggersofttech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Debuggersofttech.com
            </a>
          </div>
        </div>
        <p className="text-lg mb-6 text-gray-700">
          Let’s build a brighter future together with the power of technology!
        </p>
        <a
          href="mailto:debuggersofttech@outlook.com" // Opens default email client
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
};

export default ContactUs;