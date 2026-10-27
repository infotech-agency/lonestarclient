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

interface Course {
  _id: string;
  slug?: string;
  name: string;
  price: string;
  description: string;
  image: string | null;
}

/* ===================== HARDCODED CONTENT ===================== */

const SLUG = "financial-modelling-course-delhi";

const course = {
  name: "Financial Modelling Course in Delhi - Build Real-World Finance Skills with Lone Star Academy",
  image: "/financial-modelling.jpg",
};

const about = `If you are someone who wants to make it big in the world of finance, financial modelling course would be the best option to go for at this moment. Our financial modelling course in Delhi has been crafted to give you job-ready, practical skills that employers want. Whether you're a student, working professional, or shifting careers, this program teaches you financial analysis, valuation, and Excel-based modelling from basics to advanced concepts.

Our financial modelling course is not like other courses course that teach theory based on generic examples and does not help you get a real feel of a business. If you want to work in investment banking, corporate finance, equity research or consulting, this course is the right one for you.`;

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
    title: "Why Select Lone Star Academy for Financial Modelling?",
    before:
      "At Lone Star Academy, we don't explain, we immerse you to think like a financial analyst. Our financial modeling training in Delhi is excellent in terms of clarity of concepts and practical knowledge.",
    points: [
      "Industry-Relevant Curriculum: This module is updated regularly to the industry standards. This makes your financial modelling learning always relevant whether your target is jobs with startups, MNCs or financial institutions.",
      "Learn by Doing: You'll engage with real-world case studies, company financials, and live projects. This working model makes our financial modeling course placement focused and highly job oriented.",
      "Expert Trainers: Learn from professionals with years of experience in investment banking, valuation and corporate finance. Their views makes this one of the top financial modeling courses in India.",
      "Flexible Learning Options: We have Male and female financial modeling course in kabuls classroom and online modes, Choose your ideal learning mode without worrying about learning quality.",
    ],
  },
  {
    title: "What you will learn in the financial modelling course",
    before:
      "Our financial modeling course in delhi is designed to make you efficient in financial analysis and modeling with all the tools:",
    steps: [
      {
        title: "1. Excel for Financial Modelling:",
        text: "Advanced Excel Formulas and Functions\nData visualisation and data analysis\nFinancial dashboards",
      },
      {
        title: "2. Basic Accounting:",
        text: "Reading Financial Statements\nIncome Statement, Balance Sheet, Cash Flow\nConnecting Financial Statements",
      },
      {
        title: "3. Financial Modelling Skills:",
        text: "Working with models from the ground up\nPredicting sales and expenses\nScenario Analysis and Sensitivity Analysis",
      },
      {
        title: "4. Valuation Techniques:",
        text: "Discounted Cash Flow (DCF)\nComparable company analysis\nPast transactions",
      },
      {
        title: "5. Industry-Specific Case Studies:",
        text: "Finance modelling of real companies\nExcess specific modelling approaches",
      },
    ],
  },
  {
    title: "Financial Modelling Training with Placement Assistance",
    before:
      "Strong Placement Assistance is one of the major benefits of joining Lone Star Academy. Our financial modelling course with placement is to close this gap between education and job.",
    pointsTitle: "Placement Highlights:",
    points: [
      "Resume building sessions",
      "Mock interviews with industry experts",
      "Job referrals and hiring partnerships",
      "Internship opportunities",
    ],
    after:
      "We know that skills alone are not enough, you need the right guidance to get you into the job market. That's why our financial modelling course in Delhi includes career support at each stage.",
  },
  {
    title: "Who is this course for?",
    before:
      "This is the short answer to why our financial modelling course is a good choice for:",
    points: [
      "Students of B.Com, BBA, MBA, CA, CFA",
      "Finance and Accounts Professionals",
      "Investment banking hopefuls",
      "Business owners and founders",
      "Financial analysis men and women who want to learn Key takeaways",
    ],
    after:
      "Whether you are a beginner or you want to enhance your skills, the program is generally regarded as one of the best financial modeling course for today.",
  },
  {
    title:
      "Financial Modelling class online - Study at your convenience from your location",
    before:
      "Lone Star Academy provides a fully engaging financial modeling course online, which is the same as classroom training.",
    pointsTitle: "Features of the Online Learning Include:",
    points: [
      "Instructor-Led Sessions Live",
      "For revision, recorded classes available",
      "Study material can be downloaded",
      "Sessions to clear the doubts",
    ],
    after:
      "This flexibility for working professionals to pursue a course in financial modelling makes it less disruptive for their schedule.",
  },
  {
    title: "Why Financial Modelling is an Essential Skill Today?",
    before:
      "Financial modelling is now a must-have skill in the job market today, as there is so much competition. Companies increasingly depend on data to make decisions, and professionals who can model are in demand.\n\nWhen you enroll in a financial modelling course in Delhi, you acquire the following:",
    points: [
      "Sharp analytical thinking",
      "Making Decisions",
      "Well-remunerated Career Options",
      "Opportunities to work across the globe",
    ],
    after:
      "Which makes our course one of the best financial modelling course in India!",
  },
  {
    title: "Duration and Course Structure",
    before:
      "Our financial modelling training is meant to be intensive and flexible:",
    tableHeader: "Details",
    table: [
      { label: "Duration", value: "6–12 weeks (batch dependent)" },
      { label: "Mode", value: "Classroom/ Online Mode" },
      { label: "Level", value: "Beginner to Advanced" },
      { label: "Certification", value: "Industry recognized certificate" },
    ],
    after:
      "The sequenced curriculum guarantees learners with theoretical knowledge and practical application of the financial modelling course with placement.",
  },
  {
    title: "Opportunities in Career after the completion of the course",
    before:
      "After completion of the financial modelling training in delhi, you can work as:",
    points: [
      "Financial Analyst",
      "Investment Banker",
      "Equity Research Analyst",
      "Corporate Finance Executive",
      "Business Analyst",
    ],
    after:
      "With the proper education and training from Lone Star Academy, you can confidently pursue in-demand finance careers.",
  },
  {
    title: "Why This Is The Best Financial Modelling Course?",
    before:
      "There are dozens of programs out there, but here's what makes Lone Star Academy unique:",
    points: [
      "Practical, job-focused curriculum",
      "Real-world case studies",
      "Dedicated placement support",
      "Flexible learning formats",
      "A financial structure that is affordable to maintain",
    ],
    after:
      "This makes it among the best financial modelling courses in India for finance aspirants.",
  },
];

const faqs = [
  {
    question: "1. Who all can join a financial modelling course in Delhi?",
    answer:
      "The candidate can be a student or a professional, anyone with a fundamental knowledge of finance or accounting. With our course you can learn how to make forecasts on your business.",
  },
  {
    question: "2. Does Lone Star Academy provide placement assistance?",
    answer:
      "Our financial modelling course with placement has resume building, mock interviews & job assistance. You will work with experienced instructors and financial professionals, and be exposed to advanced simulation tools.",
  },
  {
    question: "3. Is there an online option available?",
    answer:
      "Yes, we do provide for a full financial modelling course online Live and Recordings.",
  },
  {
    question: "4. What is the duration of the course?",
    answer:
      "The financial modelling course typically lasts between 6 to 12 weeks depending on the batch.",
  },
  {
    question: "5. What skills will I gain from this course?",
    answer:
      "You'll learn Excel modelling, financial analysis, valuation techniques, and business forecasting.",
  },
  {
    question: "6. Do I need prior experience in finance?",
    answer:
      "No, our financial modelling course starts from basics and gradually moves to advanced concepts.",
  },
  {
    question: "7. What career opportunities are available after completion?",
    answer:
      "You can work as a financial analyst, investment banker, or business analyst after completing the course.",
  },
  {
    question: "8. How do I enroll?",
    answer:
      "You can apply online for the financial modelling course in Delhi through Lone Star Academy's official website.",
  },
];

// Doc me is course ka schema nahi diya gaya, isliye empty. Schema aaye to yahan add kar dena.
const schemas: object[] = [];

/* ===================== PAGE ===================== */

export default function FinancialModellingPage() {
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

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert("Your enquiry has been submitted successfully.");
  //   setFormData({ name: "", phone: "" });
  //   setShowMobileForm(false);
  // };

  const WHATSAPP_NUMBER = "919711709644";

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const text =
    `*New Course Enquiry*\n\n` +
    `*Name:* ${formData.name}\n` +
    `*Phone:* ${formData.phone}\n` +
    `*Course:* ${course.name}\n` +
    `*Page:* ${window.location.href}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank", "noopener,noreferrer");

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
                      <span className="text-sm">4000</span>
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
                    src='https://res.cloudinary.com/df5l1kxpf/image/upload/v1784788289/lonestar_academy/glg9ermltwtaqcfe4s30.webp'
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
                            <p className="leading-8 whitespace-pre-line text-slate-600">
                              {step.text}
                            </p>
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

                {/* FAQs */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    FAQs About Financial Modelling Course
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
        <PlacedStudents />
        <TestimonialsSlider />
        <FullWidthMap />
        <Footer />
      </main>
    </>
  );
}