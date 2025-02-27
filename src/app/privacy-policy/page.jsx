'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with subtle gradient overlay */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center mb-6">
            <Shield size={32} className="text-white mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-white/80 text-lg max-w-3xl">
            At Debugger SoftTech, we value your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <div className="prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information that you provide directly to us when you register for our courses,
              fill out a form, or communicate with us. This may include:
            </p>
            
            <ul className="space-y-2 text-gray-600 mb-8 list-disc pl-5">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Educational background and professional experience</li>
              <li>Payment information for course enrollments</li>
              <li>Feedback and survey responses</li>
              <li>Information about your interactions with our website and services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            
            <ul className="space-y-2 text-gray-600 mb-8 list-disc pl-5">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending administrative messages and communications</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Providing customer support and technical assistance</li>
              <li>Sending updates, marketing communications, and promotional materials</li>
              <li>Monitoring and analyzing trends, usage, and activities</li>
              <li>Personalizing and improving your experience</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to outside parties 
              except in the following circumstances:
            </p>
            
            <ul className="space-y-2 text-gray-600 mb-8 list-disc pl-5">
              <li>To our trusted service providers who assist us in operating our website and conducting our business</li>
              <li>To comply with legal requirements, enforce our policies, or protect our or others' rights</li>
              <li>In connection with a business transfer, such as a merger or acquisition</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information from 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the Internet or electronic storage is 100% secure, and we cannot 
              guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-600 mb-6">
              You have certain rights regarding your personal information:
            </p>
            
            <ul className="space-y-2 text-gray-600 mb-8 list-disc pl-5">
              <li>Access and update your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your data (subject to certain exceptions)</li>
              <li>Object to certain processing of your data</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to collect information about your browsing 
              activities and to improve your experience on our website. You can manage your cookie 
              preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              for other operational, legal, or regulatory reasons. We will notify you of any material 
              changes by posting the updated Privacy Policy on this page with a new effective date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700 font-medium">Debugger SoftTech</p>
              <p className="text-gray-600">Email: info@debuggersofttech.com</p>
              <p className="text-gray-600">Phone: +91 8446344495</p>
              <p className="text-gray-600">Address: New Mondha, Nanded - 431604, Maharashtra, India</p>
            </div>
          </div>
        </div>
        
        {/* Last updated section */}
        <div className="text-center text-gray-500 text-sm">
          <p>Last updated: February 27, 2025</p>
        </div>
      </div>
      
   
    </div>
  );
};

export default PrivacyPolicy;