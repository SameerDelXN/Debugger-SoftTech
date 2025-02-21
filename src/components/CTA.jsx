import React from 'react';
import { ArrowRight, BookOpen, PhoneCall } from 'lucide-react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white"></div>
      </div>
      
      <div className="container relative mx-auto px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-indigo-100 bg-indigo-800/30 rounded-full">
            Transform Your Career
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Start Your Learning Journey Today!
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto">
            Unlock your potential and expand your knowledge with industry-relevant skills. 
            Take the first step towards a brighter future with expert-led training.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group flex items-center justify-center bg-white hover:bg-indigo-50 text-indigo-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <BookOpen size={20} className="mr-2" />
              <Link href="https://forms.gle/EsUZ9h1EixC1a18r8">Enroll Now</Link>
              <ArrowRight size={18} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>
            
           
          </div>
          
          {/* <div className="mt-12 flex flex-col sm:flex-row items-center justify-center">
            <div className="flex -space-x-2 mr-4 mb-4 sm:mb-0">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-indigo-${i+3}00 flex items-center justify-center text-white text-xs font-bold`}>
                  {i}K+
                </div>
              ))}
            </div>
            <p className="text-indigo-100">
              <span className="font-bold">10,000+ students</span> have already enrolled in our courses
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;


// import React from 'react';

// const CallToAction = () => {
//   return (
//     <section className="bg-gradient-to-r from-blue-200 to-indigo-200 py-16 text-center">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-6 text-gray-800">Start your learning journey today!</h2>
//         <p className="text-lg mb-8 text-gray-700">
//           Unlock your potential and expand your knowledge. Take the first step towards a brighter future.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
//             Enroll Now
//           </button>
//           <button className="border border-blue-600 hover:bg-blue-100 text-blue-600 font-bold py-3 px-8 rounded-lg">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;