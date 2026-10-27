import React from 'react';
import { 
  Briefcase, 
  Target, 
  Award, 
  Wrench, 
  GraduationCap, 
  Linkedin, 
  Sparkles,
  Star
} from 'lucide-react';

const MentorProfile = () => {
  return (
    <section className="w-full py-12 px-4 bg-[#EAF4FF] font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[2px] w-16 md:w-32 bg-blue-400"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3B8B]">
            Meet Your Mentor
          </h2>
          <div className="h-[2px] w-16 md:w-32 bg-blue-400"></div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row gap-10 relative overflow-hidden">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start relative">
            <div className="relative w-60 h-60 md:w-full md:h-70 rounded-2xl overflow-hidden border border-gray-100 shadow-md">
              {/* Placeholder for Image - Replace src with your actual image */}
              <img 
                src="/mentors/neeraj.jpg" 
                alt="Neeraj Sharma" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute top-4 -left-2 md:-left-4 bg-[#4B3B9C] text-white px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border-2 border-white">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold">10+ Years</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            
            {/* Tag */}
            <div className="inline-block bg-blue-50 text-blue-700 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full w-max">
              Mentor at Best Digital Marketing Course in Delhi for Job-Oriented Training
            </div>

            {/* Name & Designation */}
            <div className="flex flex-wrap items-baseline gap-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A3B8B]">
                Neeraj Sharma
              </h1>
              <span className="text-gray-600 font-medium text-sm md:text-base">
                (Digital Marketing Trainer - LONE STAR ACADEMY)
              </span>
            </div>

            {/* Details List */}
            <div className="flex flex-col gap-3 mt-2 text-gray-700 text-sm md:text-base leading-relaxed">
              
              {/* Experience */}
              <div className="flex items-start gap-3">
                <Briefcase className="text-amber-700 mt-0.5 shrink-0" size={18} />
                <p><span className="font-semibold text-gray-900">10+ Years of Experience</span> in Digital Marketing, SEO & Performance Marketing</p>
              </div>

              {/* Expertise */}
              <div className="flex items-start gap-3">
                <Target className="text-red-500 mt-0.5 shrink-0" size={18} />
                <p>
                  <span className="font-semibold text-gray-900">Expertise:</span> SEO (On-Page, Off-Page, Technical), SEM (Google Ads), SMM (Meta Ads), Content Marketing, Google Business Profile & Local SEO, Analytics (GA4) & AI Tools for Marketing
                </p>
              </div>

              {/* Past Roles */}
              <div className="flex items-start gap-3">
                <Award className="text-green-600 mt-0.5 shrink-0" size={18} />
                <p>
                  <span className="font-semibold text-gray-900">Past Roles:</span> Digital Marketing Strategist at Techmagnate & Digital Marketing Trainer at Unacademy.
                </p>
              </div>

              {/* Skills */}
              <div className="flex items-start gap-3">
                <Wrench className="text-purple-500 mt-0.5 shrink-0" size={18} />
                <p>
                  <span className="font-semibold text-gray-900">Skills:</span> SEO, Google Ads, Meta Ads, Local SEO, Email Marketing, Content Writing, WordPress, Google Analytics 4, Canva, ChatGPT & AI Marketing Tools
                </p>
              </div>

              {/* Specialization (Plain Text as per doc) */}
              <div className="pl-8">
                <p>
                  <span className="text-[#1A3B8B] font-semibold">Specialization:</span> Digital Marketing Strategy | SEO, SEM, SMM | Local SEO | AI Tools for Marketing
                </p>
              </div>

              {/* Qualification */}
              <div className="flex items-start gap-3 pl-0">
                <GraduationCap className="text-gray-500 mt-0.5 shrink-0" size={18} />
                <p>
                  <span className="font-semibold text-gray-900">Qualification:</span> B.Tech (Computer Science), Punab University Chandigarh.
                </p>
              </div>

            </div>

        
            {/* Footer Summary */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-start gap-2 text-gray-600 text-xs md:text-sm italic">
              <Sparkles className="text-yellow-500 shrink-0 mt-0.5" size={16} />
              <p>An engineering graduate turned digital marketing trainer, Neeraj combines a technical and analytical mindset with hands-on marketing experience. He trains students to run real campaigns, rank websites on Google and use AI tools to get job-ready.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorProfile;