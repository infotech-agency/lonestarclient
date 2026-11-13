

"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle, ChevronDown, Clock, IndianRupee, MessageCircle, Phone, X } from "lucide-react";
import { Navigation } from "../../old_app/components/Navigation";
import { Footer } from "../../old_app/components/Footer";
import FullWidthMap from "../../old_app/components/FullWidthMap";
import { PlacedStudents } from "../../old_app/components/PlacedStudents";
import TestimonialsSlider from "../../old_app/components/TestimonialSlider";
import CertificateSection from "../../old_app/components/ui/CertificateSection";
import MentorProfile from "../../old_app/components/MentorProfile";
import HomePlacementsSlider from "../../old_app/components/HomePlacementsSlider";

const courseTitle = "Digital Marketing Course in Delhi - Practical Training with Placement Assistance";
const sections = [
  {
    "title": "Build Job-Ready Skills with Our Digital Marketing Training in Delhi",
    "blocks": [
      "Lone Star Academy provides an industry-oriented digital marketing course in Delhi, ideal for students, freshers, working professionals, entrepreneurs and freelancers. The academy was established in the year 2013. It offers Practical Training, live projects, and career support.",
      "Digital marketing is a way to reach out to your customers via different channels. Through our course you will gain an introduction to digital marketing, including how to use search engines, social media, websites, email and online ads.",
      "Whether you want to kick-start your career, increase your career skills or market your own business, this course can help you."
    ]
  },
  {
    "title": "Why Choose Lone Star Academy as Your Digital Marketing Institute in Delhi?",
    "blocks": [
      "When choosing Digital Marketing Institute in Delhi, it is important to consider the course, Practical Training, expert trainers and career support.",
      "At Lone Star Academy, students learn through an application-based approach that connects marketing concepts with real business requirements.",
      "Benefits of this course include:",
      "- **Practical Training: **Understand digital marketing concepts through practical exercises and assignments.\n- **Live Projects:** Apply your knowledge to marketing activities and real-world scenarios.\n- **Expert Mentorship: **Learn from experienced trainers with industry knowledge.\n- **Updated Learning:** Explore current digital marketing practices, tools, and strategies.\n- **Career Preparation:** Receive resume-building guidance, interview preparation, and placement assistance.\n- **Flexible Learning:** Explore available classroom and online training options.",
      "Overall this makes Lone Star Academy the right choice for those wanting to find the best Digital Marketing Institute in Delhi."
    ]
  },
  {
    "title": "What Will You Learn in Our Digital Marketing Course?",
    "blocks": [
      "This course will give you knowledge of important digital marketing areas. This will teach you how businesses can reach their audiences and increase their online presence.",
      "**Search Engine Optimization (SEO):** Learn keyword research, on-page SEO, off-page SEO, technical SEO, website optimization, and local SEO to improve organic search visibility.",
      "**Google Ads and PPC Marketing:** Understand paid search campaigns, keyword targeting, bidding strategies, ad creation, conversion tracking, and campaign optimization.",
      "**Social Media Marketing:** Explore Facebook, Instagram, and LinkedIn marketing, content planning, audience engagement, and paid social campaigns.",
      "**Content Marketing:** Learn content strategy, blog writing, website content optimization, copywriting, and lead-focused content creation.",
      "**Website and WordPress Management:** Understand website structure, landing pages, WordPress basics, and user-friendly website optimization.",
      "**Email Marketing:** Explore email campaigns, audience segmentation, lead nurturing, and marketing automation.",
      "**Web Analytics:** Understand website traffic, user behaviour, conversion tracking, and campaign performance using analytics tools.",
      "**AI-Powered Marketing Tools:** Discover how AI tools can support content planning, research, marketing workflows, and productivity.",
      "This course teaches you about digital marketing concepts and how to apply them. Students will learn how to link individual marketing areas to business goals."
    ]
  },
  {
    "title": "Digital Marketing Course with Placement Assistance in Delhi",
    "blocks": [
      "It is important to ensure you are set up for your future career. Lone Star Academy can offer you support with your placements.",
      "We can help you create a resume, optimize your LinkedIn profile, practise interviews, improve your soft skills, refer you for jobs and help with placements.",
      "After completing the course you may have the opportunity to become a:",
      "- Digital Marketing Executive\n- SEO Executive\n- SEO Specialist\n- PPC Executive\n- Social Media Executive\n- Content Marketing Executive\n- Performance Marketing Executive",
      "While taking a Digital Marketing Course with Placements in Delhi can help you to understand the difference between theory and what is expected in the workplace, it ultimately depends on your skills, performance, eligibility and employers requirements. Placements cannot be guaranteed."
    ]
  },
  {
    "title": "Digital Marketing Offline Course - Learn Through Classroom Training",
    "blocks": [
      "This course allows you to interact directly with your trainers. This course is ideal for anyone looking for a face-to-face learning experience. Lone Star Academy can also offer you flexible online learning, depending on availability of batches.",
      "Our Digital Marketing Training Centre in Delhi is located at: B-1/1, 2nd Floor, Janakpuri, New Delhi – 110058",
      "Students from Janakpuri, Dwarka, Uttam Nagar, Tilak Nagar, Vikaspuri, Rajouri Garden, Hari Nagar and other areas in West Delhi can take advantage of our classroom learning. Those from Noida and Gurugram can also enquire."
    ]
  },
  {
    "title": "Digital Marketing Course Fees in Delhi",
    "blocks": [
      "The fees for this course will depend on the length of training, course content, type of learning and support.",
      "The information provided by Lone Star Academy states the course is 6 months long and costs ₹35,000. Students should contact the admissions team to confirm the most up to date fees, payment methods, batch times and what is included. We can also offer a free demo class."
    ]
  },
  {
    "title": "Who Can Join Our Digital Marketing Classes?",
    "blocks": [
      "Anyone can attend our Digital Marketing classes:",
      "- **Students and Freshers:** Build foundational skills and prepare for entry-level opportunities.\n- **Working Professionals:** Upgrade existing skills and explore digital career paths.\n- **Business Owners:** Learn online promotion, lead generation, and customer acquisition.\n- **Freelancers:** Develop marketing capabilities to manage client projects.\n- **Career Changers:** Gain practical knowledge to explore opportunities in a new industry.",
      "You do not need any advanced technical skills to get started with digital marketing. Basic computer and internet knowledge can be useful."
    ]
  },
  {
    "title": "Start Your Digital Marketing Career with Lone Star Academy",
    "blocks": [
      "To have a successful career in digital marketing you need to be continuously learning, applying your knowledge, using analytical skills and understanding the ever-changing online platforms.",
      "Lone Star Academy can help you improve your professional skills by providing structured training, practical tasks, live projects, expert mentoring and career support.",
      "If you would like to enroll into a Digital Marketing Course in Delhi, contact our admissions team to find out about the course content, availability of classroom learning, course fees and placement support. Take the next step to build your practical digital marketing skills with Lone Star Academy."
    ]
  }
];
const faqs = [
  {
    "question": "What is the duration of the digital marketing course at Lone Star Academy?",
    "answer": "The digital marketing course at Lone Star Academy has a duration of six months. This allows students to understand different digital marketing modules and develop practical skills through structured training."
  },
  {
    "question": "What are the digital marketing course fees in Delhi?",
    "answer": "Digital marketing course fees in Delhi vary depending on the institute, course duration, curriculum, and placement support. The published course fee at Lone Star Academy is ₹35,000 for its six-month programme."
  },
  {
    "question": "Does Lone Star Academy offer a digital marketing course with placement assistance?",
    "answer": "Yes, Lone Star Academy provides placement assistance to help eligible students prepare for employment opportunities. Support includes resume preparation, interview guidance, LinkedIn profile development, and job-related guidance."
  },
  {
    "question": "What topics are covered in the digital marketing course?",
    "answer": "The course covers important digital marketing subjects, including Search Engine Optimization (SEO), Google Ads, Pay-Per-Click (PPC), Social Media Marketing, Content Marketing, Email Marketing, WordPress, Website Optimization, Web Analytics, and AI-powered marketing tools."
  },
  {
    "question": "Can beginners join digital marketing classes in Delhi?",
    "answer": "Yes, beginners can enroll in digital marketing classes without prior professional experience. Students, fresh graduates, working professionals, entrepreneurs, and freelancers can learn digital marketing from the fundamentals."
  },
  {
    "question": "Does Lone Star Academy provide an offline digital marketing course in Delhi?",
    "answer": "Yes, students can enquire about classroom-based digital marketing training at Lone Star Academy's Janakpuri centre in New Delhi. Offline training provides opportunities for direct interaction with trainers and guided practical learning."
  },
  {
    "question": "Is digital marketing a good career option?",
    "answer": "Yes, digital marketing offers career opportunities across industries such as e-commerce, education, healthcare, IT, real estate, and hospitality. Skills in SEO, paid advertising, social media, analytics, and content marketing can help learners explore different professional roles."
  },
  {
    "question": "What job opportunities are available after completing a digital marketing course?",
    "answer": "After completing a digital marketing course, students can explore positions such as Digital Marketing Executive, SEO Executive, Social Media Manager, PPC Specialist, Content Marketing Executive, Performance Marketing Executive, and Digital Marketing Analyst."
  },
  {
    "question": "Do I need coding knowledge to learn digital marketing?",
    "answer": "No, coding knowledge is not compulsory for learning digital marketing. Most fundamental areas, including SEO, social media marketing, Google Ads, and content marketing, can be learned without programming skills. Basic website and technical knowledge can be helpful."
  },
  {
    "question": "Does Lone Star Academy offer a free demo class?",
    "answer": "Yes, Lone Star Academy offers a free demo class so prospective students can understand the teaching methodology and course structure before enrolling. Contact the admissions team to schedule your session."
  }
];

function exactText(text: string): ReactNode {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>
      : part
  );
}

function ContentBlock({ text }: { text: string }) {
  if (text.startsWith("- ")) {
    return <ul className="grid gap-4 sm:grid-cols-2">{text.split("\n").map((line, i) => (
      <li key={i} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <CheckCircle size={20} className="mt-1 shrink-0 text-green-600" />
        <span className="leading-7 text-slate-700">{exactText(line.replace(/^- /, ""))}</span>
      </li>
    ))}</ul>;
  }
  return <p className="whitespace-pre-line leading-8 text-slate-600">{exactText(text)}</p>;
}

function EnquiryForm({ id, dark = false }: { id: string; dark?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = `*New Course Enquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Course:* ${courseTitle}\n*Page:* ${window.location.href}`;
    window.open(`https://wa.me/919711709644?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }
  const inputClass = `w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300 ${dark ? "border-white/50 bg-white/10 text-white placeholder:text-white/60" : "border-slate-300 bg-white text-slate-900"}`;
  return <form onSubmit={handleSubmit} className="space-y-4">
    <div><label htmlFor={`${id}-name`} className="mb-2 block text-sm font-medium">Full Name</label>
      <input id={`${id}-name`} name="name" autoComplete="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your full name" className={inputClass} required />
    </div>
    <div><label htmlFor={`${id}-phone`} className="mb-2 block text-sm font-medium">Phone Number</label>
      <input id={`${id}-phone`} type="tel" name="phone" autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter your phone number" className={inputClass} required />
    </div>
    <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-600 px-5 py-3.5 font-semibold text-white hover:bg-orange-700">Submit Enquiry <ArrowRight size={18} /></button>
    <div className="flex gap-3">
      <a href="tel:9711709644" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-50 px-3 py-3 text-sm font-semibold text-orange-600"><Phone size={16} />Call</a>
      <a href="https://wa.me/919711709644" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center rounded-xl bg-green-600 px-3 py-3 text-sm font-semibold text-white">WhatsApp</a>
    </div>
  </form>;
}

const schemas = [
  // Schema 1: Breadcrumb
  {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.lonestaracademy.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Digital Marketing Course in Delhi",
        item: "https://www.lonestaracademy.in/best-online-digital-marketing-courses-delhi/",
      },
    ],
  },

  // Schema 2: Product
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Digital Marketing Course in Delhi - Practical Training with Placement Assistance",
    image: "https://www.lonestaracademy.in/Digitalmarketing.jpg",
    description:
      "Lone Star Academy provides an industry-oriented digital marketing course in Delhi, ideal for students, freshers, working professionals, entrepreneurs and freelancers. The academy was established in the year 2013. It offers Practical Training, live projects, and career support.",
    brand: {
      "@type": "Brand",
      name: "Loan Star Academy",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "26",
    },
  },

  // Schema 3: FAQ
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showMobileForm, setShowMobileForm] = useState(false);
  return <>
  {schemas.map((schema, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  ))}
    <Navigation />
    <main className="bg-white pb-24 lg:pb-0">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-14 text-white md:py-20">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider">Lone Star Academy</span>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">{courseTitle}</h1>
            <div className="mb-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3"><Clock size={18} />6 Months</span>
              <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3"><IndianRupee size={18} />35,000</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:9711709644" className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-orange-600"><Phone size={18} />Call Now</a>
              <a href="https://wa.me/919711709644" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 font-semibold"><MessageCircle size={18} />WhatsApp Now</a>
            </div>
          </motion.div>
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-2xl">
            <img src="/Digitalmarketing.jpg" alt={courseTitle} className="h-[260px] w-full rounded-[22px] object-cover sm:h-[360px] lg:h-[460px]" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="min-w-0 space-y-8">
              {sections.map(section => <section key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="mb-5 text-2xl font-bold text-slate-900">{section.title}</h2>
                <div className="space-y-5">{section.blocks.map((block, i) => <ContentBlock key={i} text={block} />)}</div>
              </section>)}
              <section className="rounded-3xl border border-slate-200 p-6 shadow-sm md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently Asked Questions About Digital Marketing Course in Delhi</h2>
                <div className="space-y-4">{faqs.map((faq, index) => <div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200">
                  <h3><button id={`faq-question-${index}`} type="button" aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50">
                    {faq.question}<ChevronDown size={20} className={`shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                  </button></h3>
                  <div id={`faq-answer-${index}`} aria-labelledby={`faq-question-${index}`} hidden={openFaq !== index} className="border-t border-slate-200 bg-slate-50 px-5 py-4"><p className="leading-7 text-slate-600">{faq.answer}</p></div>
                </div>)}</div>
              </section>
            </div>
            <aside className="hidden min-w-0 lg:block">
              <div id="enquiry-form" className="sticky top-[156px] rounded-[28px] bg-gradient-to-r from-blue-900 to-blue-800 p-7 text-white shadow-2xl">
                <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Enquiry Form</span>
                <h2 className="mb-6 mt-3 text-2xl font-bold">Course Enquiry</h2>
                <EnquiryForm id="desktop" dark />
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CertificateSection /><MentorProfile />
      {/* <PlacedStudents /> */}
      <HomePlacementsSlider/>
      <TestimonialsSlider />
      <FullWidthMap />
      <Footer />
    </main>
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white p-3 shadow-lg lg:hidden">
      <div className="flex gap-3">
        <a href="tel:9711709644" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white"><Phone size={18} />Call Now</a>
        <button onClick={() => setShowMobileForm(true)} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 font-semibold text-white"><MessageCircle size={18} />Enquiry</button>
      </div>
    </div>
    {showMobileForm && <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 lg:hidden" onClick={() => setShowMobileForm(false)}>
      <div role="dialog" aria-modal="true" aria-labelledby="mobile-enquiry-title" className="max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white p-5 text-slate-900 shadow-2xl" onClick={e => e.stopPropagation()} onKeyDown={e => { if (e.key === "Escape") setShowMobileForm(false); }}>
        <div className="mb-6 flex items-center justify-between"><h2 id="mobile-enquiry-title" className="text-xl font-bold">Course Enquiry</h2><button type="button" aria-label="Close enquiry form" onClick={() => setShowMobileForm(false)} className="rounded-full p-2"><X size={24} /></button></div>
        <EnquiryForm id="mobile" />
      </div>
    </div>}
  </>;
}
