'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, FileText, CheckCircle } from 'lucide-react';

const TermsAndConditions = () => {
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
            <FileText size={32} className="text-white mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Terms and Conditions</h1>
          </div>
          <p className="text-white/80 text-lg max-w-3xl">
            Please read these terms and conditions carefully before using our services. By accessing or using Debugger SoftTech's website and services, you agree to be bound by these terms.
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <div className="prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing or using the Debugger SoftTech website, enrolling in our courses, or using any of our services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions, you must not access or use our services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services Description</h2>
            <p className="text-gray-600 mb-6">
              Debugger SoftTech provides technology education services, including but not limited to software development courses, corporate training, placement assistance, and related educational content. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Registration and Account</h2>
            <p className="text-gray-600 mb-4">
              When you register for our courses or create an account on our website, you agree to:
            </p>
            
            <ul className="space-y-2 text-gray-600 mb-8 list-disc pl-5">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password confidential and secure</li>
              <li>Be responsible for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Course Enrollment and Payment</h2>
            <p className="text-gray-600 mb-4">
              When enrolling in our courses:
            </p>
            
            <ul className="space-y-2 text-gray-600 mb-8 list-disc pl-5">
              <li>Course fees must be paid in full before accessing course materials unless a payment plan has been specifically arranged</li>
              <li>All payments are processed securely through our authorized payment processors</li>
              <li>Course fees are non-refundable after the stated refund period (see Refund Policy below)</li>
              <li>We reserve the right to modify course prices at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Refund Policy</h2>
            <p className="text-gray-600 mb-6">
              Our refund policy is as follows:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>You may request a full refund within 7 days of enrollment if you have not accessed more than 20% of the course content.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>A partial refund of 50% may be issued between 8-14 days of enrollment if you have not accessed more than 30% of the course content.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>No refunds will be issued after 14 days of enrollment.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Refund requests must be submitted in writing to info@debuggersofttech.com.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-6">
              All content, materials, and resources provided through our services, including but not limited to course videos, presentations, code examples, assignments, and documentation, are owned by Debugger SoftTech and protected by intellectual property laws. You may not reproduce, distribute, modify, display, perform, or use our content without our express written permission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. User Conduct</h2>
            <p className="text-gray-600 mb-4">
              When using our services, you agree not to:
            </p>
            
            <ul className="space-y-2 text-gray-600 mb-8 list-disc pl-5">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Share your account credentials with others</li>
              <li>Distribute or share course materials with non-enrolled individuals</li>
              <li>Engage in any activity that could damage, disable, or impair our services</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Use our services for any unlawful or prohibited purpose</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Placement Assistance</h2>
            <p className="text-gray-600 mb-6">
              While we provide placement assistance as part of certain courses, we do not guarantee employment. Placement success depends on various factors, including your performance, skills, market conditions, and employer requirements. We will make reasonable efforts to assist you in your job search, but the final hiring decision rests with potential employers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, Debugger SoftTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Modifications to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting the updated terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Maharashtra, India.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns about these Terms and Conditions, please contact us at:
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

export default TermsAndConditions;