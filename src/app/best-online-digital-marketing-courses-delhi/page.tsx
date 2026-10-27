"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronDown,
  X,
  MessageCircle,
  Users,
  Star,
  Clock,
  IndianRupee,
} from "lucide-react";
import axios from "axios";
import { Navigation } from "../../old_app/components/Navigation";
import { Footer } from "../../old_app/components/Footer";
import { BASE_URL } from "../../../utils/baseUrl";
import FullWidthMap from "../../old_app/components/FullWidthMap";
import { PlacedStudents } from "../../old_app/components/PlacedStudents";
import TestimonialsSlider from "../../old_app/components/TestimonialSlider";
import CertificateSection from "../../old_app/components/ui/CertificateSection";
import MentorProfile from "../../old_app/components/MentorProfile";

interface Course {
  _id: string;
  slug?: string;
  name: string;
  price: string;
  description: string;
  image: string | null;
}

/* ===================== HARDCODED CONTENT ===================== */

const SLUG = "best-online-digital-marketing-courses-delhi";

const course = {
  name: "Best Online Digital Marketing Courses & Digital Marketing Course in Delhi",
  image: "/Digitalmarketing.jpg",
};

const about = `If you are looking for the best online digital marketing courses, digital marketing course in delhi then you are already on the right path to a high growth industry. At Lone Star Academy, we have created a future-focused curriculum that integrates real-world skills, industry standard tools and placement assist to empower you succeed in today’s competitive digital landscape.

Digital is Not the Future, It’s the Present! Whether you’re a student, job seeker, entrepreneur, or working professional, getting enrolled in a digital marketing course can open up avenues in a multitude of industries. As Delhi is turning out to be a centre for digital jobs, the best digital marketing course in delhi is a significant choice and that is exactly what we.`;

type Section = {
  title: string;
  before?: string;
  tableHeader?: string;
  table?: { label: string; value: string }[];
  pointsTitle?: string;
  points?: string[];
  steps?: { title: string; text: string }[];
  after?: string;
};

const sections: Section[] = [
  {
    title: "Why Choose Us for Digital Marketing at Lone Star Academy?",
    before:
      "At Lone Star Academy, we do more than teach - we train, mentor, and equip you for success in the real world. Our programs are tailored to meet the growing demand for skilled professionals through online digital marketing courses and classroom training in Delhi.",
    pointsTitle: "What Makes Us Different?",
    points: [
      "Industry-relevant curriculum based on current trends",
      "Live Project Training",
      "Expert Mentors from Top Agencies",
      "Certifications to enhance your credibility",
      "Specialized support for the online digital marketing course with placement",
    ],
    after:
      "When you sign up for our advanced digital marketing course, you’re not just absorbing ideas, you’re building a career.",
  },
  {
    title: "Top online Digital Marketing Courses, Digital Marketing Course in Delhi",
    before:
      "Best online digital marketing courses mean choosing a course that effectively balances theory and execution. The courses at Lone Star Academy are designed to let you have the best of both worlds.",
    pointsTitle: "Course Highlights:",
    points: [
      "SEO (Search Engine Optimization)",
      "Google Ads & PPC Campaigns",
      "Social Media Marketing (SMM)",
      "Content Marketing & Strategy",
      "Email Marketing Automation",
      "Affiliate Marketing",
      "Analyzing the Web & Web Data Tracking",
      "AI Tools in Digital Marketing",
    ],
    after:
      "Our digital marketing course in India is designed to make you a master of basics as well as a pro.",
  },
  {
    title: "Full Digital Marketing Training in Delhi with Placement",
    before:
      "Employment is one of the major worries that students have after the training. Hence, we provide a digital marketing course in delhi with placement to make your transition from education to job easy.",
    pointsTitle: "Placement Assistance Consists Of:",
    points: [
      "Resume building sessions",
      "Interview coaching",
      "Expert mock interviews",
      "Access to Hiring Partner Companies",
      "Intern opportunities",
    ],
    after:
      "Our digital marketing course with placement will help you not only to learn, but also to get hired.",
  },
  {
    title: "Who Needs To Join This Course?",
    before:
      "Our high-quality online digital marketing courses are suitable for:",
    points: [
      "Students Looking to get Start a Career",
      "Graduates seeking job-ready skills",
      "Business owners looking to grow their business",
      "Freelancers wanting to scale income",
      "Professionals Looking to Switch Career",
    ],
    after:
      "You do not need any technical knowledge. Our digital marketing training in New Delhi begins from the basics and ends at the advanced techniques.",
  },
  {
    title: "Syllabus of Advanced Digital Marketing Course",
    before:
      "Our advanced level digital marketing course curriculum is designed to cover everything essential for digital growth.",
    points: [
      "1. Search Engine Optimization (SEO): Learn How To Rank Websites On Google With On-Page and Off-Page Strategies.",
      "2. Pay-Per-Click Advertising (PPC): Become an expert at paid campaigns on Google Ads and get the most from your ad spend.",
      "3. Social Media Marketing (SMM): Design campaigns and manage them across channels such as Instagram, Facebook, LinkedIn etc.",
      "4. Content Marketing: Learn why content is the key to engagement and conversions.",
      "5. Analytics & Reporting: Monitor performance Activity Using Monitoring Tool such as Google Analytics.",
    ],
    after:
      "Indeed, this is what makes our program at the ‘top-rated digital marketing course’ in the present market!",
  },
  {
    title: "Advantages of Enrolling at Lone Star Academy",
    before:
      "When you enroll in a Digital Marketing Course in Delhi at Lone Star Academy you get:",
    points: [
      "Hands-on project experience",
      "Access to learning materials for lifetime",
      "Flexible Learning Options (Online + Offline)",
      "Certification recognized in the industry",
      "Reasonable fee structure",
    ],
    after:
      "Our digital marketing course online are tailor-made to suit your busy schedule and your pocket as well.",
  },
  {
    title: "Why Choose Digital Marketing as a Careeroption",
    before: `Demand has been soaring for digital marketers in india. Budgets are being reallocated to the web, and the demand for talented individuals is high.

Upon completing a course in digital marketing in india, you can consider following roles like:`,
    points: [
      "SEO Specialist",
      "Social Media Manager",
      "PPC Expert",
      "Content Strategist",
      "Digital Marketing Manager",
    ],
    after:
      "With the right training from Lone Star Academy, you can secure a high-paying role in this dynamic field.",
  },
  {
    title: "Learn from the Industry Experts with Flexible Options",
    before: `The trainers at Lone Star Academy are not just teacher-they are active working professionals. This help to keep our best online digital marketing courses up-to-date and useful.

You’ll learn strategies employers are really looking for, get real case studies, and learn how to actually execute campaigns.

We know every learner is unique. That’s why we offer:`,
    points: [
      "Classroom training in Delhi",
      "Live online sessions",
      "Recorded lectures for revision",
    ],
    after:
      "Our digital marketing training in Delhi is designed to provide you with flexibility and quality at the same time.",
  },
  {
    title: "Certifications You’ll Get and Real-World Projects with Hands-on Exposure",
    before: `After successful completion of our digital marketing advanced course, you’ll be awarded with
Lone Star Academy Certification and This certifications enhance your profile and enable you to get noticed by recruiters.

A lot of theory-based courses away from this type of practical learning is focused in our digital marketing course in delhi with placement.

You’ll work on:`,
    points: [
      "Live business websites",
      "Ad campaign creation",
      "SEO audits",
      "Social media strategies",
    ],
    after:
      "This expertise is what makes us the best digital marketing course in delhi.",
  },
];

const faqs = [
  {
    question: "1. Is digital marketing a good career in India?",
    answer:
      "Yes, a digital marketing course in india will allow you to work in high demand job in every sector.",
  },
  {
    question: "2. Do digital marketing courses guarantee placement?",
    answer:
      "Several institutes provide placement assistance. Lone Star Academy you can find a digital marketing course in delhi with placement facility.",
  },
  {
    question: "3. Can I study digital marketing online?",
    answer:
      "Absolutely! Online digital marketing courses offer students the benefit of flexible learning from any location and the opportunity to acquire the same skills as traditional classroom training.",
  },
  {
    question: "4. What is covered in an advanced digital marketing course?",
    answer:
      "The advanced digital marketing course content includes PPC, SEO, social media marketing, analytics and many more.",
  },
  {
    question: "5. How long is the digital marketing course?",
    answer:
      "The duration of most of the digital marketing courses in India are 3 to 6 months according to the depth and level of the course.",
  },
  {
    question: "6. What is the fee for a digital marketing course in Delhi?",
    answer:
      "The fee for a digital marketing course in delhi varies depending on the institute, course level, and duration, but most quality programs offer flexible payment options.",
  },
  {
    question: "7. Do I need any prior knowledge to join a digital marketing course?",
    answer:
      "No, Beginners can also enroll in a digital marketing course in new delhi and learn from scratch.",
  },
  {
    question: "8. Can I get a job after completing a digital marketing course?",
    answer:
      "Yes, with the right training and practical experience, you can secure roles through a digital marketing course with placement or internships.",
  },
];

const journey = {
  title: "Enroll Now - Begin Your Digital Journey",
  desc: "If you want to pursue a career in digital marketing, the time to do so is now. Join Lone Star Academy and avail the best online digital marketing courses, digital marketing course in delhi to learn the skills which employers want. Don’t just learn, transform your future with our digital marketing course with placement that really works.",
};

// Doc me is course ka schema nahi diya gaya, isliye empty. Schema aaye to yahan add kar dena.
const schemas: object[] = [];

/* ===================== PAGE ===================== */

export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showMobileForm, setShowMobileForm] = useState(false);
  const [allCourses, setAllCourses] = useState<Course[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/api/courses`);
        setAllCourses(response.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your enquiry has been submitted successfully.");
    setFormData({ name: "", phone: "" });
    setShowMobileForm(false);
  };

  const otherCourses = (allCourses || []).filter((c) => {
    const s = c.slug || c.name.toLowerCase().replace(/\s+/g, "-");
    return s !== SLUG;
  });

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <Navigation />

      <main className="bg-white">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-14 text-white md:py-20">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="container mx-auto px-4">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10"
              >
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-100 backdrop-blur-md">
                  <Sparkles size={14} />
                  Lone Star Academy
                </span>

                <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
                  {course.name}
                </h1>

                   <div className="mb-8 flex flex-wrap gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-cyan-300" />
                      <span className="text-sm">10,000+ Students</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Star size={18} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">4.9 Rating</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className=" text-yellow-400" />
                      <span className="text-sm">6 Months</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <IndianRupee size={18} className=" text-yellow-400" />
                      <span className="text-sm">3500</span>
                    </div>
                  </div>


                </div>

                <div className="mb-4" />

                <a
                  href="tel:9711709644"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-semibold text-orange-500 transition bg-white hover:text-slate-900"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919711709644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#20BD5A] hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  WhatsApp Now
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative z-10"
              >
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="h-[260px] w-full rounded-[22px] object-cover sm:h-[360px] lg:h-[460px]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile Fixed Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
          <div className="flex items-center gap-3 p-3">
            <a
              href="tel:9711709644"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-green-700"
            >
              <Phone size={18} />
              Call Now
            </a>
            <button
              onClick={() => setShowMobileForm(true)}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-orange-700"
            >
              <MessageCircle size={18} />
              Enquiry
            </button>
          </div>
        </div>

        {/* Mobile Enquiry Form Modal */}
        {showMobileForm && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-md rounded-t-3xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-200 p-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Course Enquiry</h3>
                  <p className="text-sm text-slate-500">Fill details to get more info</p>
                </div>
                <button
                  onClick={() => setShowMobileForm(false)}
                  className="rounded-full p-2 transition hover:bg-slate-100"
                >
                  <X size={24} className="text-slate-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-700"
                >
                  Submit Enquiry <ArrowRight size={18} />
                </button>

                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200"></div>
                  <span className="text-xs font-medium text-slate-400">OR</span>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="tel:9711709644"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919711709644"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* MAIN CONTENT SECTION */}
        <section className="py-12 md:py-16 pb-20 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
              <div className="min-w-0 space-y-8">
                {/* ABOUT SECTION */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <p className="leading-8 whitespace-pre-line text-slate-600">{about}</p>
                </div>

                {/* CONTENT SECTIONS */}
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
                  >
                    <h2 className="mb-4 text-2xl font-bold text-slate-900">
                      {section.title}
                    </h2>

                    {section.before && (
                      <p className="leading-8 whitespace-pre-line text-slate-600">
                        {section.before}
                      </p>
                    )}

                    {section.table && (
                      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="w-full text-left text-sm md:text-base">
                          <thead className="bg-slate-50 text-slate-900">
                            <tr>
                              <th className="px-4 py-3 font-semibold">{section.tableHeader || "Feature"}</th>
                              <th className="px-4 py-3 font-semibold">Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.map((row) => (
                              <tr key={row.label} className="border-t border-slate-200">
                                <td className="px-4 py-3 font-medium text-slate-800">{row.label}</td>
                                <td className="px-4 py-3 text-slate-600">{row.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.pointsTitle && (
                      <h3 className="mt-8 text-xl font-semibold text-slate-900">
                        {section.pointsTitle}
                      </h3>
                    )}

                    {section.points && (
                      <div
                        className={`${
                          section.pointsTitle ? "mt-4" : "mt-6"
                        } grid gap-4 sm:grid-cols-2`}
                      >
                        {section.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                          >
                            <CheckCircle
                              size={20}
                              className="mt-0.5 shrink-0 text-green-500"
                            />
                            <span className="font-medium text-slate-700">{point}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.steps && (
                      <div className="mt-6 space-y-6">
                        {section.steps.map((step) => (
                          <div key={step.title}>
                            <h3 className="mb-2 text-lg font-semibold text-slate-900">
                              {step.title}
                            </h3>
                            <p className="leading-8 text-slate-600">{step.text}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.after && (
                      <p
                        className={`leading-8 whitespace-pre-line text-slate-600 ${
                          section.points || section.table || section.steps ? "mt-6" : "mt-4"
                        }`}
                      >
                        {section.after}
                      </p>
                    )}
                  </motion.div>
                ))}

                {/* CTA / JOURNEY */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-xl"
                >
                  <h2 className="text-2xl font-bold md:text-3xl">{journey.title}</h2>

                  <p className="mt-3 max-w-3xl whitespace-pre-line leading-8 text-slate-100">
                    {journey.desc}
                  </p>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="tel:9711709644"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
                    >
                      <Phone size={18} />
                      Talk to Counselor
                    </a>
                    <a
                      href="https://wa.me/919711709644"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#20BD5A]"
                    >
                      <MessageCircle size={18} />
                      WhatsApp Now
                    </a>
                  </div>
                </motion.div>

                {/* FAQs */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    FAQs
                  </h2>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-2xl border border-slate-200"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left transition hover:bg-slate-50"
                        >
                          <span className="font-semibold text-slate-800">{faq.question}</span>
                          <ChevronDown
                            size={20}
                            className={`shrink-0 text-slate-500 transition-transform ${
                              openFaq === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {openFaq === index && (
                          <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
                            <p className="leading-7 text-slate-600">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                              </div>

              {/* DESKTOP ENQUIRY FORM */}
              <aside className="hidden lg:block min-w-0">
                <div className="lg:sticky lg:top-39">
                  <div
                    id="enquiry-form"
                    className="rounded-[28px] border border-orange-100 bg-gradient-to-r from-blue-900 to-blue-800 p-6 shadow-2xl md:p-7"
                  >
                    <div className="mb-6">
                      <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                        Enquiry Form
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-white">Course Enquiry</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:scale-[1.02]"
                      >
                        Submit Enquiry <ArrowRight size={18} />
                      </button>

                      <div className="flex items-center gap-3 py-2">
                        <div className="h-px flex-1 bg-slate-200"></div>
                        <span className="text-xs font-medium text-slate-400">OR</span>
                        <div className="h-px flex-1 bg-slate-200"></div>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href="tel:9711709644"
                          className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
                        >
                          <Phone size={16} />
                          Call
                        </a>
                        <a
                          href="https://wa.me/919711709644"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-green-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* OTHER COURSES SECTION */}
        <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Explore Our Other Courses
              </h2>
              <p className="mt-3 text-slate-600">
                Discover more industry-relevant programs to accelerate your career.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {otherCourses.slice(0, 8).map((c) => {
                  const courseImage = c.image
                    ? c.image.startsWith("http")
                      ? c.image
                      : `${BASE_URL}${c.image}`
                    : "/images/default-course.jpg";
                  const courseSlug = c.slug || c.name.toLowerCase().replace(/\s+/g, "-");

                  return (
                    <motion.a
                      key={c._id}
                      href={`/${courseSlug}/`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={courseImage}
                          alt={c.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/default-course.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                        {c.price && (
                          <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                            {c.price}
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
                          {c.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                          {c.description?.slice(0, 80)}...
                        </p>
                        <div className="mt-4 flex items-center text-sm font-semibold text-blue-600">
                          Learn More
                          <ArrowRight size={16} className="ml-2 transition group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            )}

            {!loading && allCourses && otherCourses.length === 0 && (
              <p className="text-center text-slate-500">No other courses available.</p>
            )}
          </div>
        </section>

        <CertificateSection />
        <MentorProfile/>
        <PlacedStudents />
        <TestimonialsSlider />
        <FullWidthMap />
        <Footer />
      </main>
    </>
  );
}