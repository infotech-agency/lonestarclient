"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  Star,
  Users,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronDown,
  X,
  MessageCircle,
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
import FemaleMentorProfile from "../../old_app/components/FemaleMentorProfile";

interface Course {
  _id: string;
  slug?: string;
  name: string;
  price: string;
  description: string;
  image: string | null;
}

/* ===================== HARDCODED CONTENT ===================== */

const SLUG = "data-science-course-online-with-placement-delhi";

const course = {
  name: "Data Science Course in Delhi with Practical Training & Placement Support",
  image:
    "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784789428/lonestar_academy/yz6sed8pmiwupqwfuqz2.jpg",
};

const about = `Grow your data science skills with Lone Star Academy, a career-focused training institute in Janakpuri, New Delhi. The Data Science Course in Delhi is a blend of instructor-led learning, hands-on assignments, live projects, coding practice, and career readiness to equip students and working professionals with job-ready skills.

The curriculum focuses on core topics in Python, machine learning, statistics, analytics, and data-driven decision-making, with a focus on applying concepts to real-world scenarios. Lone Star Academy has trained over 10,000 students in its career programs and provides support that goes above and beyond the classroom.`;

type Section = {
  title: string;
  before?: string;
  table?: { label: string; value: string }[];
  pointsTitle?: string;
  points?: string[];
  steps?: { title: string; text: string }[];
  after?: string;
};

const sections: Section[] = [
  {
    title: "Why Choose Our Data Science Course in Delhi?",
    before: `Data science is more than just knowing algorithms. Practitioners at all levels must work with data, write and read code, understand the output of code, solve business problems, and communicate findings.

Lone Star Academy believes in teaching that works! Students are exposed to live projects, case studies, assignments, industry tools, resume building, mock interviews and career assistance. The academy also offers both physical class sessions and online education options.`,
    pointsTitle: "Key Benefits",
    points: [
      "Practical, industry-oriented training",
      "Experienced industry trainers",
      "Live projects and case studies",
      "Hands-on assignments",
      "Coding and interview preparation",
      "Resume and LinkedIn profile support",
      "Mock interviews",
      "Placement guidance and job referrals",
      "Course completion certification",
      "Offline and online learning options",
    ],
  },
  {
    title: "Data Science Course Overview",
    table: [
      { label: "Course", value: "Data Science" },
      { label: "Location", value: "Janakpuri, New Delhi" },
      { label: "Training Mode", value: "Offline classroom and online" },
      { label: "Learning Approach", value: "Practical and project-based" },
      { label: "Suitable For", value: "Students, graduates and working professionals" },
      { label: "Projects", value: "Live projects and practical assignments" },
      { label: "Certification", value: "Lone Star Academy course certificate" },
      { label: "Career Support", value: "Resume, interviews and placement guidance" },
    ],
    after:
      "Lone Star Academy's Delhi centre is located at B-1/1, 2nd Floor, Janakpuri, New Delhi – 110058, making the classroom program accessible to learners from West Delhi and surrounding Delhi-NCR areas.",
  },
  {
    title: "What Will You Learn in Data Science?",
    before:
      "A good data science background includes programming, statistics, analytics, machine learning, and business problem solving all rolled into one.",
    steps: [
      {
        title: "Python for Data Science",
        text: "Acquire the programming skills needed to manipulate data and build data driven applications. Python is also popular for data preprocessing, data analysis, data visualization and machine learning pipelines.",
      },
      {
        title: "Statistics & Data Analysis",
        text: "The statistical ideas behind the way we interpret data and find patterns, relationships and make decisions with data.",
      },
      {
        title: "Machine Learning",
        text: "Gain a foundation in machine learning and the practical uses of models for classifying, predicting, interpreting patterns, and more.",
      },
      {
        title: "Data Analytics & Visualization",
        text: "Through data analysis, visualization, reporting and interpretation, you will learn to convert raw data to actionable intelligence.",
      },
      {
        title: "Practical Projects",
        text: "Projects and case studies can help connect classroom concepts to what is needed on the job. Rather than learning from purely theoretical, students are enabled to practise coding solutions, analyse data and work through real-world cases.",
      },
    ],
  },
  {
    title: "Data Science Offline Course in Delhi",
    before: `For students who prefer face to face interaction with the trainers and classmates, data science offline course in Delhi offers a classroom learning environment at Lone Star Academy's Janakpuri centre.

Offline learning can be especially handy when you have instant doubts to be resolved, guided coding practice, classroom discussions and structured interaction with the trainers. Lone Star Academy also offers online learning options for students and professionals looking for more flexibility.`,
  },
  {
    title: "Who Can Join This Data Scientist Course in Delhi?",
    before: "The course can be relevant to:",
    points: [
      "College students and fresh graduates",
      "Professionals from IT and technology backgrounds",
      "Data and business analysts",
      "Working professionals planning a career transition",
      "Professionals who want to strengthen Python, analytics, or machine learning skills",
      "Learners beginning their journey toward data science",
    ],
    after:
      "An interest in programming, mathematics, statistics, and problem-solving can be an asset, but the ideal starting point will vary based on your current knowledge and career goals.",
  },
  {
    title: "Projects and Practical Learning",
    before: `Practice is the difference between learning data science in theory and being able to implement it in the real world.

The training methodology at Lone Star Academy involves live projects, hands-on exercises, case studies and real-time implementation. These can be used by students to reinforce their data analysis and machine learning skills, as well as creating content that can be added to a professional portfolio.`,
  },
  {
    title: "Data Science Course in Delhi with Placement Support",
    before: `Training is just one aspect of career preparation. Lone Star Academy offers career services, including resume design, LinkedIn profile optimization, mock interviews, soft-skills training, job referrals, placement support and career counseling.
The academy also claims to have a hiring partner network and offers placement-centric support to learners. Perspective on placement assistance: It is guidance in career and access to opportunities and not an alternative to one's individual skills, performance in interview and eligibility.`,
  },
  {
    title: "Why Study Data Science in Delhi-NCR?",
    before: `Delhi NCR has a vast professional ecosystem that includes technology, consulting, finance, e-commerce, analytics, and various other data-focused industries. Studying at a local data science training institute in delhi can allow you access to a blend of offline training and real-time professional environment.
Lone Star Academy Janakpuri is the best school Delhi for students from Vikas Puri, Tilak Nagar, Hari Nagar, Rajouri Garden, Dwarka, Uttam Nagar, Punjabi Bagh, Patel Nagar, Rohini and other parts of Delhi, as well as Noida, Ghaziabad and Gurgaon.`,
  },
  {
    title: "Career Opportunities After Data Science Training",
    before:
      "A data science skill set can serve as a foundation for careers in both analytics and technology. Some of the jobs you could be doing include:",
    points: [
      "Data Analyst",
      "Data Scientist",
      "Business Analyst",
      "Machine Learning Engineer",
      "Analytics Professional",
      "AI and machine learning roles",
    ],
    after:
      "Career services at Lone Star Academy highlight the data analyst, business analyst, data scientist and machine learning engineer as pertinent data and analytics career paths.",
  },
  {
    title: "Why Choose Lone Star Academy?",
    before: `Lone Star Academy was founded in 2013 and claims that its training model is a blend of expert mentorship, industry-relevant curriculum, hands-on execution, and career assistance. According to the academy, it has trained 10,000+ students and has partnered with 100+ industry expert trainers for its programs.

The process is structured as follows: take a free demo class, learn from the trainers, do hands-on projects, get your resume and interviews ready, get placed, and start your career.`,
  },
];

const faqs = [
  {
    question: "What is a Data Science Course?",
    answer:
      "A data science course teaches learners how to collect, process, analyse, visualize, and interpret data while using programming, statistics, and machine learning to solve practical problems.",
  },
  {
    question: "Is there a data science offline course in Delhi?",
    answer:
      "Yes. Lone Star Academy offers offline classroom training from its centre in Janakpuri, New Delhi, along with online learning options.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "The training is designed to support beginners as well as working professionals. Your recommended learning path may depend on your existing programming, mathematics, and analytics knowledge.",
  },
  {
    question: "What skills are important for a data scientist?",
    answer:
      "Python, statistics, data analysis, SQL, machine learning, data visualization, problem-solving, and communication are among the important skills for a data science career.",
  },
  {
    question: "Does Lone Star Academy provide placement assistance?",
    answer:
      "Yes. Career support includes resume preparation, LinkedIn optimization, mock interviews, job referrals, placement assistance, and career counselling.",
  },
];

const journey = {
  title: "Start Learning Data Science in Delhi",
  desc: `A data scientist’s career is developed through regular practice, solid conceptual understanding, hands-on projects, and real-world application of technical knowledge. Lone Star Academy offers the perfect blend of classroom or online learning with hands-on experience and career readiness, to support you in taking that next step.
Enroll for Data Science Course in Delhi at Lone Star Academy and begin your journey to a data driven career.`,
};

const schemas = [
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
        name: "Data Science Course in Delhi",
        item: "https://www.lonestaracademy.in/data-science-course-online-with-placement-delhi/",
      },
    ],
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Data Science Course in Delhi with Practical Training & Placement Support",
    image:
      "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784789428/lonestar_academy/yz6sed8pmiwupqwfuqz2.jpg",
    description:
      "Grow your data science skills with Lone Star Academy, a career-focused training institute in Janakpuri, New Delhi. The Data Science Course in Delhi is a blend of instructor-led learning, hands-on assignments, live projects, coding practice, and career readiness to equip students and working professionals with job-ready skills.",
    brand: { "@type": "Brand", name: "Lone Star Academy" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "25",
    },
  },
];

/* ===================== PAGE ===================== */

export default function DataSciencePage() {
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

  const openEnquiry = () => {
    if (window.innerWidth < 768) setShowMobileForm(true);
    else
      document
        .getElementById("enquiry-form")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
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
                      <span className="text-sm">500+ Students</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Star size={18} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">4.5 Rating</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className=" text-yellow-400" />
                      <span className="text-sm">10 Months</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <IndianRupee size={18} className=" text-yellow-400" />
                      <span className="text-sm">4500</span>
                    </div>
                  </div>


                </div>

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
                              <th className="px-4 py-3 font-semibold">Feature</th>
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

                {/* FAQs */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    Frequently Asked Questions
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
                    <button
                      type="button"
                      onClick={openEnquiry}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-700"
                    >
                      Book a Free Demo Class
                    </button>
                    <button
                      type="button"
                      onClick={openEnquiry}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
                    >
                      Enquire Now
                    </button>
                    <a
                      href="tel:9711709644"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
                    >
                      <Phone size={18} />
                      Talk to a Career Advisor
                    </a>
                  </div>
                </motion.div>
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
        <FemaleMentorProfile/>
        <PlacedStudents />
        <TestimonialsSlider />
        <FullWidthMap />
        <Footer />
      </main>
    </>
  );
}