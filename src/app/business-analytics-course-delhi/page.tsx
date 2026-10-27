


"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Clock,
  IndianRupee,
  CheckCircle,
  Star,
  Users,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronDown,
  X,
  MessageCircle,
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

const SLUG = "business-analytics-course-delhi";

const course = {
  name: "Business Analyst Course in Delhi with Practical Training & Career Opportunities",
  duration: "4 Months",
  price: "₹25,000",
  image:
    "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784789105/lonestar_academy/pykifhkharma8izwwgoq.jpg",
};

const about = `Lone Star Academy's Business Analyst Course in Delhi helps you develop practical business analysis skills to adapt to changing career opportunities. This course is suitable for graduates, freshers, and working professionals who wish to learn the business requirements, improve decision-making, and how organizations leverage data to resolve operational issues.

Business analysts bridge the gap between business and technical teams. They identify problems, gather stakeholder requirements, document business processes, and help organizations implement effective solutions. These skills can lead to careers in IT services, banking, consulting, e-commerce, healthcare, and other industries.

Lone Star Academy offers learners the opportunity to explore the basics of business analysis, critical thinking, requirements documentation, and industry-relevant tools. It aims to create practical knowledge that helps professional growth and prepares learners to work in real business scenarios.`;

type Section = {
  title: string;
  before?: string;
  points?: string[];
  after?: string;
};

const sections: Section[] = [
  {
    title: "Why Choose Business Analyst Training in Delhi?",
    before: `Opportunities in technology, consulting, finance, retail, and business services are available throughout Delhi NCR. For those with solid analytical, communication and problem-solving skills, there are opportunities to work on projects that deliver process improvements, digital transformation and support business decision making.

An organized business analyst training program guides learners through identifying business problems, documenting requirements, and assessing solutions. Rather than just teaching the theory, quality training should relate theory to practical business scenarios.

Prospective learners at Lone Star Academy can inquire about the curriculum, training style, batch timings, and career assistance before enrolling. Knowing these details will help you in picking a program that best fits your present skills and career goals.`,
  },
  {
    title: "What Skills Does a Business Analyst Need?",
    before:
      "Business analyst is required to have a blend of business acumen, technical knowledge and soft skills like:",
    points: [
      "Requirement gathering: Understanding stakeholder needs and translating them into clear requirements.",
      "Business documentation: Preparing Business Requirements Documents (BRDs), Functional Requirements Documents (FRDs), and user stories.",
      "Data analysis: Using Excel and SQL to organize, examine, and interpret business information.",
      "Process modelling: Mapping workflows and identifying opportunities for improvement.",
      "Agile methodology: Understanding sprints, backlogs, stakeholder feedback, and collaboration with development teams.",
      "Communication: Explaining business requirements clearly to technical and non-technical stakeholders.",
    ],
    after:
      "These skills enable a business analyst to translate an organization’s goals into actionable outcomes.",
  },
  {
    title: "Business Analyst Course Curriculum",
    before:
      "A good business analyst course in Delhi will cover the basics of business analysis, documentation, analytical tools and how to apply them. The following topics provide a good framework for evaluating a course curriculum.",
    points: [
      "1. Business Analysis Fundamentals: Learn about the business analyst role, software development life cycle (SDLC), business process improvement, stakeholder management, and how business goals relate to project outcomes.",
      "2. Requirement Gathering and Documentation: Master requirement elicitation techniques, stakeholder interviews, workshops, requirement validation, BRDs, FRDs, use cases, and user stories. These techniques help convert business requirements into project requirements that can be implemented.",
      "3. Business Analysis with Excel and SQL: Learn about spreadsheet-based analysis, data cleaning, formulas, pivot tables, and reporting. Basic SQL skills can help you to get and analyze data from relational databases for business decisions.",
      "4. Agile, Jira, and Process Modelling: Learn about Agile and Scrum practices, product backlogs, sprint planning, and project collaboration. Relevant curriculum may also include Jira, Confluence, UML diagrams, flowcharts, and Business Process Model and Notation (BPMN), depending on the curriculum.",
      "5. Practical Projects and Case Studies: Practical exercises can illustrate how analysts record requirements, align current workflows, identify business problems, and propose solutions. The project-based learning approach also enables learners to justify their analytical choices in interviews.",
    ],
    after:
      "Contact Lone Star Academy to verify the updated syllabus, software tools, project work, and learning outcomes of the course.",
  },
  {
    title: "Who Can Enrol in a Business Analyst Course?",
    before:
      "The business analyst course in Delhi may be a good choice of study for a number of categories of learners based on their educational qualifications and professional aspirations.",
    points: [
      "Freshers and graduates: Gain basic understanding of business analysis and the demands of the workplace.",
      "Working professionals: Enhance analytical and documentation skills for higher level of responsibility.",
      "IT professionals: Acquire the skill of converting the requirements of clients to functional specifications.",
      "Non-IT professionals: Consider moving from operations, finance, sales or customer service into business analysis.",
    ],
    after:
      "You don’t have to have super advanced programming skills to start learning business analysis. But a solid grasp of Excel, some basic data concepts, good communication skills, and a degree of structured problem-solving will help.",
  },
  {
    title: "Business Analyst Course Fees, Duration, and Placement Support",
    before: `Lone Star Academy's Business Analyst Course provides hands-on business analysis skills to learners through a structured 4-month training program. The program, with a course fee of ₹25,000, provides a tailored learning route for freshers and working professionals looking to enhance their understanding of business analysis, requirements gathering, data analysis, and business process improvement.

Lone Star Academy, with 500+ students and a 4.9-star rating, strives to create a conducive learning environment for aspiring professionals. Learners can ask for the full curriculum, batch timings, training mode, practical assignments, and any extra charges before signing up.

For those looking for a business analyst course in Delhi with placement support, it is important to check the career services provided, such as resume building, mock interviews, career counseling, and job placement assistance. Placement support can help learners get ready for the recruitment process.

Before enrolling, also check the certificate details, course examinations and the specific learning outcomes covered in the program. This helps you to make a well-informed choice about your investment in business analyst training in Delhi.`,
  },
  {
    title: "Career Opportunities After Business Analyst Training",
    before:
      "Business Analysis skills are applicable to many areas of business. Based on your experience, technical knowledge and professional background, a few career options are:",
    points: [
      "Business Analyst",
      "Junior Business Analyst",
      "Business Process Analyst",
      "Requirements Analyst",
      "Business Operations Analyst",
      "Functional Analyst",
    ],
    after: `A business analyst commonly works with stakeholders, project managers, developers, quality assurance groups, and product owners. Responsibilities could include capturing requirements, analysing processes, assisting with software implementations, and determining if a solution satisfies business requirements.

Career progression is based on individual performance, relevant experience, communication skills and take on more learning.`,
  },
  {
    title: "Business Analyst Course in Delhi vs. Other Analytics Courses",
    before: `The best course for you depends on the kind of work you want to do.

Business analyst training is centered on understanding business needs, working with stakeholders, improving processes, and turning requirements into practical solutions. Data analytics courses in Delhi, by contrast, focus more on preparing and examining data, creating visualizations, applying statistical methods, and presenting findings. Data science courses usually go further into areas such as predictive modeling and machine learning.

If you’re more interested in SEO, online advertising, content planning, and measuring campaign results, a digital marketing course in Delhi may be a better fit.

To compare business analytics programs across India, look beyond the course name. Consider what’s taught, the instructors’ experience, opportunities for hands-on practice, the tools included, student feedback, and the career support available.`,
  },
];

const faqs = [
  {
    question: "What is a business analyst course?",
    answer:
      "A business analyst course teaches learners how to identify business needs, gather requirements, document processes, analyse information, and communicate solutions to stakeholders.",
  },
  {
    question: "Is this the best business analyst course in Delhi?",
    answer:
      "Yes, Lone Star Academy provides most practical and industry led business analyst course in delhi.",
  },
  {
    question: "Do I need any coding experience to participate?",
    answer:
      "No, our business analyst course in Delhi begins from fundamentals and progressively introduces you to technical aspects.",
  },
  {
    question: "What are the jobs after this course?",
    answer:
      "You can work as a Business Analyst, Data Analyst, BI Professional, etc. after finishing this Business Analyst training in Delhi.",
  },
  {
    question: "How is it different from data science courses?",
    answer:
      "Data science course online with placement is more focused on advanced algorithms whereas business analytics deals with business decisions and real world insights.",
  },
  {
    question: "Is this course for beginners?",
    answer:
      "Absolutely. This is one of the best business analytics courses for working professionals as well as freshers.",
  },
  {
    question: "Will I be provided with placement?",
    answer:
      "Yes, you will be gifted complete placement assistance which makes this as one of the best course for business analytics with career support.",
  },
];

const journey = {
  title: "Take the Next Step with Lone Star Academy",
  desc: `Lone Star Academy is one option for Delhi students exploring business analysis courses. Learners in Noida, Gurugram, Ghaziabad, and Faridabad may also find the program worth considering, depending on how classes are delivered and how easy it is to attend.

Growing your business analysis skill set begins with selecting education that aligns with your career aspirations. Check our business analyst course delhi at Lone Star Academy for detailed curriculum, practicals, fees and batch information.
Visit Lone Star Academy to enquire about the program and determine whether it aligns with your professional development plans.`,
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
        name: "Business Analyst Course in Delhi",
        item: "https://www.lonestaracademy.in/business-analytics-course-delhi/",
      },
    ],
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Business Analyst Course in Delhi with Practical Training & Career Opportunities",
    image:
      "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784789105/lonestar_academy/pykifhkharma8izwwgoq.jpg",
    description:
      "Lone Star Academy's Business Analyst Course in Delhi helps you develop practical business analysis skills to adapt to changing career opportunities. This course is suitable for graduates, freshers, and working professionals who wish to learn the business requirements, improve decision-making, and how organizations leverage data to resolve operational issues. Business analysts bridge the gap between business and technical teams.",
    brand: { "@type": "Brand", name: "Lone Star Academy" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "35",
    },
  },
];

/* ===================== PAGE ===================== */

export default function BusinessAnalyticsPage() {
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
                      <Clock size={18} className="text-cyan-300" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <IndianRupee size={18} className="text-cyan-300" />
                      <span className="text-sm">{course.price}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-cyan-300" />
                      <span className="text-sm">500+ Students</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Star size={18} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">4.9 Rating</span>
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

                    {section.points &&
                      (/^\d+\.\s/.test(section.points[0]) ? (
                        <div className="mt-6 space-y-6">
                          {section.points.map((point) => {
                            const i = point.indexOf(": ");
                            return (
                              <div key={point}>
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                                  {point.slice(0, i)}
                                </h3>
                                <p className="leading-8 text-slate-600">
                                  {point.slice(i + 2)}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                      ))}

                    {section.after && (
                      <p
                        className={`leading-8 whitespace-pre-line text-slate-600 ${
                          section.points ? "mt-6" : "mt-4"
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
        <PlacedStudents />
        <TestimonialsSlider />
        <FullWidthMap />
        <Footer />
      </main>
    </>
  );
}