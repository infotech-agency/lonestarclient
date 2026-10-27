"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  Star,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronDown,
  X,
  MessageCircle,
  Users,
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

const SLUG = "data-analytics-courses-online-delhi";

const course = {
  name: "Data Analytics Course in Delhi with Practical Projects & Career Support",
  image:
    "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784788643/lonestar_academy/ynkxwnhw7b5kfr0n3ysh.jpg",
};

const about = `Develop hands-on, job-ready analytics skills with Lone Star Academy data analytics courses in Delhi. The training is built around the skills businesses use to transform raw data into actionable insights, reports, dashboards, and better decisions. Whether you are a graduate, student, working professional, or looking to transition to a career, the program can assist you in building a structured knowledge of data analysis and business intelligence.

The learning methodology emphasizes practical application over theory. You will be able to use tools and techniques in reporting, business analysis, data visualization, and decision-making, and learn how an analyst solves a real business problem from data collection to insight generation.`;

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
    title: "Why Choose Our Data Analytics Training in Delhi?",
    before: `An analytics program worth doing will teach you more than individual software tools. Lone Star Academy helps you link Excel, SQL, Python, statistics, data visualizations, and business intelligence in a workflow that you can use to do real-world analysis.

The training can help learners to develop skills in data cleaning, exploratory analysis, reporting, creating dashboards, understanding trends, and communicating findings effectively. These skills are applicable across industries including IT, finance, retail, e-commerce, healthcare, MArketing, consulting, and operations.

The program also caters to learners who like structured data analytics classes with guided instruction and hands-on practice.`,
  },
  {
    title: "Data Analytics Course in Delhi - Course Overview",
    tableHeader: "Course Feature",
    table: [
      { label: "Course", value: "Data Analytics" },
      { label: "Location", value: "Delhi" },
      { label: "Learning Focus", value: "Data Analysis & Business Intelligence" },
      { label: "Level", value: "Beginner to Advanced" },
      { label: "Key Tools", value: "Excel, SQL, Python, Power BI and Tableau" },
      { label: "Learning Method", value: "Practical Training & Projects" },
      { label: "Career Support", value: "Available as per program offering" },
      { label: "Mode", value: "Contact the academy for current batch options" },
    ],
    after:
      "The exact curriculum, schedule, fee, batch availability, and certification details should be confirmed with the academy before enrollment.",
  },
  {
    title: "What Will You Learn?",
    steps: [
      {
        title: "Excel for Data Analysis",
        text: "Discover how spreadsheets can be applied for data prep, analysis, reporting, and dashboards. Topics may include formulas, lookup functions, PivotTables, charts, conditional formatting, and beyond.",
      },
      {
        title: "SQL for Data Analytics",
        text: "SQL is a fundamental tool for interacting with structured databases. Lessons include filtering, sorting, aggregation, joins, subqueries, CTEs, and analytical queries to help students obtain useful insights from data.",
      },
      {
        title: "Python for Data Analytics",
        text: "Python can be used to automate analyses and work with large amounts of data. Students may gain experience working with Python libraries such as Pandas, NumPy, Matplotlib, Seaborn to manipulate, analyze, and visualize data.",
      },
      {
        title: "Power BI and Tableau",
        text: "It's important that findings from data analysts are communicated in a manner that non-technical users can understand. Power BI and Tableau Training: Learn How to Transform, Visualize, Dashboards, Calculated Fields, Reports and Interactive Business Intelligence.",
      },
      {
        title: "Statistics for Data Analysis",
        text: "Statistics is the basis on which data can be interpreted appropriately. Descriptive statistics, probability, correlation, regression, distribution and testing hypotheses are some of the important topics.",
      },
      {
        title: "Practical Projects and Business Case Studies",
        text: "Training data analytics courses should link technical skills with real business problems. Project-based learning can cover: sales analysis, customer behaviour, performance indicators (e.g., marketing, financial reporting, HR analytics) or operational dashboards.",
      },
    ],
    after: `The analytical workflow is typically as follows:

Collect data → Clean data → Explore data → Identify patterns → Create visualizations → Interpret insights → Recommend solutions

This helps learners to know how to use a tool, but also why a tool is relevant for a specific type of analysis.`,
  },
  {
    title: "Who Can Join a Data Analytics Course?",
    before: "A data analyst course in Delhi can be relevant to:",
    points: [
      "Graduates and college students",
      "BBA, B.Com, MBA and engineering graduates",
      "IT and non-IT professionals",
      "Business and reporting professionals",
      "Professionals planning a career transition",
      "Learners who want to strengthen Excel, SQL, Python or BI skills",
    ],
    after:
      "You do not necessarily need to be an advanced programmer to begin learning data analytics. A willingness to work with numbers, solve problems, and learn analytical tools is more important at the beginner stage.",
  },
  {
    title: "Career Opportunities After Data Analytics Training",
    before: "Data analytics skills can be used in careers such as:",
    points: [
      "Data Analyst",
      "Business Analyst",
      "BI Analyst",
      "Reporting Analyst",
      "MIS Analyst",
      "Marketing Analyst",
      "Operations Analyst",
      "Financial Analyst",
    ],
    after:
      "The specific role will vary based on your education, work experience, technical skills, portfolio and how you perform in the interview. Thus, a good learning program must integrate technical learning with projects, communication skills, resume preparation and interview practice.",
  },
  {
    title: "Data Analytics Course With Placement and Career Support",
    before: `For learners considering a data analytics course with placement, it is crucial to differentiate between placement support and an employment guarantee. Career support services can include assistance with resume building, interview preparation, mock interviews, portfolio guidance, and help identifying relevant job opportunities.

Lone Star Academy can be assessed on these tangible criteria when selecting a data analyst course in Delhi with placement: quality of curriculum, project relevance, trainer experience, student support services, certification, and the type of career assistance provided.`,
  },
  {
    title: "Why Learn Data Analytics in Delhi?",
    before: `The employment landscape in Delhi and the NCR region is varied across technology, consulting, banking, finance, retail, healthcare, education, e-commerce and professional services. Studying in the classroom locally also meant easy access to instructor-led data analytics training, professional networking, and career-focused education.
Lone Star Academy caters to the students in Delhi and those from the adjoining NCR areas can also apply for this course on the basis of their preferred mode of learning and batch timings.`,
  },
  {
    title: "Data Analytics Certification in Delhi",
    before: `A certificate can serve to validate course completion and show that you have completed a formalized study. But employers typically look for something more than a certificate. Real life projects, thinking analytically, knowing SQL, dashboards, communication and ability to explain business insights are some of the critical components of a good candidate.
So, must-have features of a good data analytics institution would include the ability to fuse certification with hands-on-experience and tangible skills.`,
  },
];

const faqs = [
  {
    question: "What is a data analytics course?",
    answer:
      "A data analytics course teaches learners how to collect, clean, analyse, visualize, and interpret data to support business decisions. Common topics include Excel, SQL, Python, statistics, Power BI, Tableau, and data visualization.",
  },
  {
    question: "Which is the best institute for data analyst course in Delhi?",
    answer:
      "The right institute depends on your learning goals, curriculum, practical projects, trainer experience, schedule, fees, and career support. Compare these factors before deciding on the best institute for data analyst course in Delhi for your needs.",
  },
  {
    question: "Is a data analyst course suitable for beginners?",
    answer:
      "Yes. Beginners can start with fundamentals such as Excel, basic statistics, SQL, and data visualization before progressing to Python and business intelligence tools.",
  },
  {
    question: "What is the best data analyst course in Delhi?",
    answer:
      "The best data analyst course in Delhi is one that combines relevant technical skills with hands-on projects, practical datasets, analytical thinking, and career preparation rather than focusing only on software demonstrations.",
  },
  {
    question: "Does a data analyst need Python?",
    answer:
      "Python is not mandatory for every entry-level analyst role, but it is a valuable skill for data cleaning, automation, statistical analysis, and working with larger or more complex datasets.",
  },
];

const journey = {
  title: "Start Your Data Analytics Journey",
  desc: `An important career decision is which data analytics institute in Delhi you will choose. Before you enroll, consider the curriculum, hands-on training, projects, learning support, certification, and career services.

Lone Star Academy offers a guided learning environment to build modern analytics skills. Get in touch with the academy to enquire about their data analytics courses in Delhi, latest batches, curriculum, fees, and eligibility, and select a learning path that best fits your career aspirations.`,
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
        name: "Data Analytics Courses in Delhi",
        item: "https://www.lonestaracademy.in/data-analytics-courses-online-delhi/",
      },
    ],
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Data Analytics Course in Delhi with Practical Projects & Career Support",
    image:
      "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784788643/lonestar_academy/ynkxwnhw7b5kfr0n3ysh.jpg",
    description:
      "Develop hands-on, job-ready analytics skills with Lone Star Academy data analytics courses in Delhi. The training is built around the skills businesses use to transform raw data into actionable insights, reports, dashboards, and better decisions. Whether you are a graduate, student, working professional, or looking to transition to a career, the program can assist you in building a structured knowledge of data analysis and business intelligence.",
    brand: { "@type": "Brand", name: "Lone Star Academy" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "30",
    },
  },
];

/* ===================== PAGE ===================== */

export default function DataAnalyticsPage() {
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
                      <span className="text-sm">8 Months</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <IndianRupee size={18} className=" text-yellow-400" />
                      <span className="text-sm">3500</span>
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