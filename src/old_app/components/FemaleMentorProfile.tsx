import React from 'react';
import { 
  Briefcase, 
  Target, 
  GraduationCap, 
  Linkedin, 
  Sparkles,
  Star
} from 'lucide-react';

const FemaleMentorProfile = () => {
  return (
    <section className="w-full py-12 px-4 bg-[#EAF4FF] font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[2px] w-16 md:w-32 bg-blue-400"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3B8B] text-center">
            Meet Your Mentor
          </h2>
          <div className="h-[2px] w-16 md:w-32 bg-blue-400"></div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row gap-10 relative overflow-hidden">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start relative">
            <div className="relative w-64 h-72 md:w-full md:h-80 rounded-2xl overflow-hidden border border-gray-100 shadow-md">
              {/* Placeholder for Image - Replace with Prabha Sharma's actual photo */}
              <img 
                src="/mentors/prabha.jpeg" 
                alt="Prabha Sharma" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute top-4 -left-2 md:-left-4 bg-[#4B3B9C] text-white px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border-2 border-white">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold">15+ Years</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            
            {/* Tag */}
            <div className="inline-block bg-blue-50 text-blue-700 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full w-max">
              Data Scientist | Mentor, Data Analytics with Gen AI | Lonestar Academy, Janakpuri
            </div>

            {/* Name & Designation */}
            <div className="flex flex-wrap items-baseline gap-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A3B8B]">
                Prabha Sharma
              </h1>
              <span className="text-gray-600 font-medium text-sm md:text-base">
                (Data Scientist & Mentor)
              </span>
            </div>

            {/* Details List */}
            <div className="flex flex-col gap-4 mt-2 text-gray-700 text-sm md:text-base leading-relaxed">
              
              {/* Experience */}
              <div className="flex items-start gap-3">
                <Briefcase className="text-amber-700 mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Experience:</p>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Mentor, Lonestar Academy, Janakpuri (present): Data Analytics with Gen AI</li>
                    <li>Instructor, Unacademy: Data science and analytics</li>
                    <li>Instructor, Udemy: Data science and analytics</li>
                    <li>15+ years of teaching, mentoring and industry-focused training</li>
                  </ul>
                </div>
              </div>

              {/* Areas of Expertise */}
              <div className="flex items-start gap-3">
                <Target className="text-red-500 mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Areas of Expertise:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-disc pl-4 text-sm">
                    <li>Data Analytics and Business Intelligence</li>
                    <li>Data Science and Machine Learning</li>
                    <li>Generative AI and Prompt Engineering</li>
                    <li>Statistics and Data Visualization</li>
                    <li>Career guidance and interview preparation for data roles</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3">
                <GraduationCap className="text-gray-500 mt-0.5 shrink-0" size={18} />
                <p>
                  <span className="font-semibold text-gray-900">Education:</span> B.E. in Computer Engineering, Panjab University, Chandigarh
                </p>
              </div>

            </div>

           

            {/* Footer Summary (About) */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-start gap-3 text-gray-600 text-sm leading-relaxed bg-gray-50/50 p-4 rounded-xl">
              <Sparkles className="text-yellow-500 shrink-0 mt-1" size={18} />
              <div>
                <p className="mb-2"><strong className="text-gray-800">About:</strong> Prabha Sharma is a computer engineer from Panjab University, Chandigarh, and a data scientist with over 15 years of teaching experience.</p>
                <p>Her teaching style is simple and practical: concepts are explained in plain language, followed by hands-on practice on real datasets, so that students understand not only how a tool works but also why and when to use it.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FemaleMentorProfile;