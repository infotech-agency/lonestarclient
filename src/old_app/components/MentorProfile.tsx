// import React from 'react';
// import { 
//   Briefcase, 
//   Target, 
//   Award, 
//   Wrench, 
//   GraduationCap, 
//   Linkedin, 
//   Sparkles,
//   Star
// } from 'lucide-react';

// const MentorProfile = () => {
//   return (
//     <section className="w-full py-12 px-4 bg-[#EAF4FF] font-sans">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Header Section */}
//         <div className="flex items-center justify-center gap-4 mb-10">
//           <div className="h-[2px] w-16 md:w-32 bg-blue-400"></div>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1A3B8B]">
//             Meet Your Mentor
//           </h2>
//           <div className="h-[2px] w-16 md:w-32 bg-blue-400"></div>
//         </div>

//         {/* Main Card */}
//         <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row gap-10 relative overflow-hidden">
          
//           {/* Left Column: Image */}
//           <div className="w-full md:w-1/3 flex justify-center md:justify-start relative">
//             <div className="relative w-60 h-60 md:w-full md:h-70 rounded-2xl overflow-hidden border border-gray-100 shadow-md">
//               {/* Placeholder for Image - Replace src with your actual image */}
//               <img 
//                 src="/mentors/neeraj.jpg" 
//                 alt="Neeraj Sharma" 
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>
            
//             {/* Badge */}
//             <div className="absolute top-4 -left-2 md:-left-4 bg-[#4B3B9C] text-white px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border-2 border-white">
//               <Star size={14} className="text-yellow-400 fill-yellow-400" />
//               <span className="text-sm font-semibold">10+ Years</span>
//             </div>
//           </div>

//           {/* Right Column: Content */}
//           <div className="w-full md:w-2/3 flex flex-col gap-4">
            
//             {/* Tag */}
//             <div className="inline-block bg-blue-50 text-blue-700 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full w-max">
//               Mentor at Best Digital Marketing Course in Delhi for Job-Oriented Training
//             </div>

//             {/* Name & Designation */}
//             <div className="flex flex-wrap items-baseline gap-2">
//               <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3B8B]">
//                 Neeraj Sharma
//               </h2>
//               <span className="text-gray-600 font-medium text-sm md:text-base">
//                 (Digital Marketing Trainer - LONE STAR ACADEMY)
//               </span>
//             </div>

//             {/* Details List */}
//             <div className="flex flex-col gap-3 mt-2 text-gray-700 text-sm md:text-base leading-relaxed">
              
//               {/* Experience */}
//               <div className="flex items-start gap-3">
//                 <Briefcase className="text-amber-700 mt-0.5 shrink-0" size={18} />
//                 <p><span className="font-semibold text-gray-900">10+ Years of Experience</span> in Digital Marketing, SEO & Performance Marketing</p>
//               </div>

//               {/* Expertise */}
//               <div className="flex items-start gap-3">
//                 <Target className="text-red-500 mt-0.5 shrink-0" size={18} />
//                 <p>
//                   <span className="font-semibold text-gray-900">Expertise:</span> SEO (On-Page, Off-Page, Technical), SEM (Google Ads), SMM (Meta Ads), Content Marketing, Google Business Profile & Local SEO, Analytics (GA4) & AI Tools for Marketing
//                 </p>
//               </div>

//               {/* Past Roles */}
//               <div className="flex items-start gap-3">
//                 <Award className="text-green-600 mt-0.5 shrink-0" size={18} />
//                 <p>
//                   <span className="font-semibold text-gray-900">Past Roles:</span> Digital Marketing Strategist at Techmagnate & Digital Marketing Trainer at Unacademy.
//                 </p>
//               </div>

//               {/* Skills */}
//               <div className="flex items-start gap-3">
//                 <Wrench className="text-purple-500 mt-0.5 shrink-0" size={18} />
//                 <p>
//                   <span className="font-semibold text-gray-900">Skills:</span> SEO, Google Ads, Meta Ads, Local SEO, Email Marketing, Content Writing, WordPress, Google Analytics 4, Canva, ChatGPT & AI Marketing Tools
//                 </p>
//               </div>

//               {/* Specialization (Plain Text as per doc) */}
//               <div className="pl-8">
//                 <p>
//                   <span className="text-[#1A3B8B] font-semibold">Specialization:</span> Digital Marketing Strategy | SEO, SEM, SMM | Local SEO | AI Tools for Marketing
//                 </p>
//               </div>

//               {/* Qualification */}
//               <div className="flex items-start gap-3 pl-0">
//                 <GraduationCap className="text-gray-500 mt-0.5 shrink-0" size={18} />
//                 <p>
//                   <span className="font-semibold text-gray-900">Qualification:</span> B.Tech (Computer Science), Punab University Chandigarh.
//                 </p>
//               </div>

//             </div>

        
//             {/* Footer Summary */}
//             <div className="mt-4 pt-4 border-t border-gray-100 flex items-start gap-2 text-gray-600 text-xs md:text-sm italic">
//               <Sparkles className="text-yellow-500 shrink-0 mt-0.5" size={16} />
//               <p>An engineering graduate turned digital marketing trainer, Neeraj combines a technical and analytical mindset with hands-on marketing experience. He trains students to run real campaigns, rank websites on Google and use AI tools to get job-ready.</p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MentorProfile;

import React from 'react';
import { Briefcase, Target, Award, Wrench, GraduationCap, Layers } from 'lucide-react';

const details = [
  {
    icon: Briefcase,
    label: 'Experience',
    value: '10+ years in Digital Marketing, SEO & Performance Marketing',
  },
  {
    icon: GraduationCap,
    label: 'Qualification',
    value: 'B.Tech (Computer Science), Panjab University, Chandigarh',
  },
  {
    icon: Award,
    label: 'Past Roles',
    value: 'Digital Marketing Strategist at Techmagnate; Digital Marketing Trainer at Unacademy',
  },
  {
    icon: Layers,
    label: 'Specialization',
    value: 'Digital Marketing Strategy, SEO, SEM, SMM, Local SEO, AI Tools for Marketing',
  },
  {
    icon: Target,
    label: 'Expertise',
    value:
      'SEO (On-Page, Off-Page, Technical), Google Ads, Meta Ads, Content Marketing, Google Business Profile & Local SEO, GA4',
  },
  {
    icon: Wrench,
    label: 'Skills',
    value:
      'Email Marketing, Content Writing, WordPress, Google Analytics 4, Canva, ChatGPT & AI Marketing Tools',
  },
];

const MentorProfile = () => {
  return (
    <section className="w-full py-10 px-4 bg-[#EAF4FF] font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 md:w-24 bg-blue-300"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A3B8B]">Meet Your Mentor</h2>
          <div className="h-px w-12 md:w-24 bg-blue-300"></div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Top bar: photo + identity */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 md:p-6 border-b border-slate-100">
            <img
              src="/mentors/neeraj.jpg"
              alt="Neeraj Sharma"
              className="w-28 h-28 md:w-32 md:h-32 rounded-lg object-cover object-top border border-slate-200 shrink-0"
            />

            <div className="flex flex-col gap-1.5 text-center sm:text-left">
              <p className="text-xs md:text-sm font-medium text-blue-700">
                Mentor at Best Digital Marketing Course in Delhi for Job-Oriented Training
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A3B8B] leading-tight">
                Neeraj Sharma
              </h3>
              <p className="text-sm text-slate-600">
                Digital Marketing Trainer, Lone Star Academy
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mt-1 max-w-2xl">
                An engineering graduate turned trainer, Neeraj pairs an analytical mindset with
                hands-on marketing work. He teaches students to run real campaigns, rank websites
                on Google and use AI tools to become job-ready.
              </p>
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {details.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className={`flex items-start gap-3 px-5 md:px-6 py-3.5 border-slate-100 border-b ${
                  i % 2 === 0 ? 'md:border-r' : ''
                } ${i >= details.length - 2 ? 'md:border-b-0' : ''} ${
                  i === details.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <div className="w-8 h-8 rounded-md bg-[#EAF4FF] text-[#1A3B8B] flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">{label}</p>
                  <p className="text-sm text-slate-600 leading-snug">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorProfile;