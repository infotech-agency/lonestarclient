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

const SLUG = "cloud-computing-online-courses-delhi";

const course = {
  name: "Cloud Computing Courses in Delhi | Cloud Computing Online Course - Lone Star Academy",
  image: "/cloudcomputing.jpg",
};

const about = `If you are looking for practical training, cloud computing online courses, for real-life environment based learning with job oriented courses in Delhi, then Lone Star Academy is the perfect choice for you.

Beginner or an IT professional looking to upskill, our courses are designed to help you learn cloud technologies, earn industry-recognized certifications, and confidently take the next step in high-demand job roles.
We don’t just teach you the concepts, at Lone Star Academy we prepare you for real. Our cloud computing training is designed by industry experts with hands-on practice and placement support.`;

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
    title: "Why Select Lone Star Academy for Cloud Computing Training?",
    before: `A good cloud training institute can make or break your career path. Lone Star Academy is the top institute for cloud computing for its quality education and successful students.

Here’s what sets us apart:`,
    points: [
      "Industry-relevant AWS, Azure and Google Cloud based curriculum",
      "Real-world experience through practical, lab sessions",
      "Trained professionals with extensive Industry exposure",
      "In-house placement support and preparation for interviews",
      "Learn on your own terms with flexible learning options, cloud computing online courses or in the classroom.",
    ],
    after:
      "We believe this is how theoretical knowledge meets such confidence that students can go out and actually do the job!",
  },
  {
    title: "What You Will Learn in Our Cloud Computing Training",
    before:
      "Our cloud computing courses are based on real-world applications and designed to teach you all you need to know about the cloud, from Cloud computing basics to advanced functionalities.",
    pointsTitle: "Core Modules Include:",
    points: [
      "Introduction to Cloud Computing and Architecture",
      "Virtualization and basic networking",
      "Cloud Service Models (IaaS, PaaS, SaaS)",
      "AWS, Microsoft Azure and Google Cloud Platforms",
      "Security and Compliance in the Cloud",
      "DevOps & Automation Tools",
      "Deployment and Migration Techniques",
    ],
    after:
      "This blended learning path allows us to cater for both novices and experienced professionals, who want to take their cloud knowledge to the next step through certification.",
  },
  {
    title: "Cloud Computing Online Courses & Classroom Training",
    before: `Flexible learning options:
At Lone Star Academy, we recognize that every student/learner is unique. That’s why we offer:`,
    points: [
      "Instructor-led cloud computing online courses",
      "Cloud computing Training in Delhi from Experienced Trainers.",
      "Weekend and weekday batches",
      "Self-paced learning support",
    ],
    after:
      "Cloud computing courses in delhi for students who want to do face to face interaction and also via online for student to study from any place.",
  },
  {
    title: "Cloud Computing Training in Delhi with placement",
    before:
      "Jobs Placement is the only hurdles for the aspirants, that why our training is very much focused on if the person's jobgrabbing ability.",
    pointsTitle: "Placement Assistance Consists of:",
    points: [
      "Resume building and portfolio development",
      "Mock interviews, HR Preparation",
      "Job referrals and hiring partner connections",
      "Soft skills and communication training",
    ],
    after:
      "Lone Star Academy has established solid partnerships with well reputed organisations to be considered as the most reliable cloud computing institute for corporate training.",
  },
  {
    title: "Career Opportunities After Cloud Computing Training",
    before:
      "After completion of our cloud computing training, you may pursue careers such as:",
    points: [
      "Cloud Engineer",
      "Solutions Architect",
      "DevOps Engineer",
      "Cloud Security Specialist",
      "System Administrator",
    ],
    after:
      "As the need for cloud professionals is on the rise, taking up cloud computing courses in delhi at Lone Star Academy will lead to lucrative and futuristic careers in the field.",
  },
  {
    title: "Who is the candidate for our cloud computing courses?",
    before: "Our Cloud Computing courses are ideal if you are:",
    points: [
      "Fresh Graduates : If you are a fresher and want to build your career in technology space, this is the start course.",
      "IT professionals who want to move up in their career",
      "Professionals working in other fields looking for a domain switch",
      "Business owners: Desire cloud infrastructure for personal or business use without becoming a system administrator",
    ],
    after:
      "Whether you prefer online cloud computing courses or traditional cloud computing class training, our courses take various learning styles into account.",
  },
  {
    title: "Advantages of Studying Cloud Computing in Lone Star Academy",
    before:
      "When you study with Lone Star Academy, you get more than just education. You get a complete career makeover.",
    pointsTitle: "Key Benefits:",
    points: [
      "Live training with real life projects",
      "Real-world cloud scenarios exposure",
      "Access to the session recordings and materials for the learning",
      "Get expert guidance for the complete course",
      "Preparation for certification and career assistance",
    ],
    after:
      "So, this is what established us as the trustworthy providers of cloud computing training in Delhi.",
  },
  {
    title: "Course Overview",
    points: [
      "All-in-one cloud computing certification training",
      "Beginner and advanced level training courses/regiments",
      "Adjustable batch schedules",
      "Reasonable tuition fees",
      "Training philosophy focused on job placement",
    ],
    after:
      "It is our goal that every student that comes through the doors at Lone Star Academy is prepared for industry.",
  },
  {
    title: "Why a career in cloud computing is right for You!",
    before: `Cloud computing is changing the way businesses operate and compete. Everyone and everything from startups to global enterprises is moving to cloud-based solutions.`,
    pointsTitle: "Just 3 Essential Reasons to Choose Cloud Computing:",
    points: [
      "Great Demand for Talented Professionals",
      "Attractive Salary Packages",
      "Industries are waiting",
    ],
    after:
      "The Cloud industry has a never ending story of being vibrant and exciting. So we want you to know that by taking cloud computing course online, cloud computing courses in delhi, you become part of this digital revolution.",
  },
  {
    title: "Student-Centric Learning Approach",
    before: `At Lone Star Academy, we tailor education to the individual. Our trainers pay attention and track every student’s progress.

We provide:`,
    points: [
      "Doubt-clearing sessions",
      "One-on-One Mentorship",
      "Real-time project experience",
      "Continuous performance tracking",
    ],
    after:
      "This dedication to quality keeps us as one of best cloud training institute.",
  },
];

const faqs = [
  {
    question: "1. Are demo classes available before admission?",
    answer:
      "Yes, Lone Star Academy gives demo class, so students can get a feel of the quality before joining cloud computing courses in delhi.",
  },
  {
    question: "2. Are cloud computing courses online worth it?",
    answer:
      "Yes, the online courses of cloud computing are very good, if they have live sessions with hands-on labs and expert guidance as is the case with Lone Star Academy.",
  },
  {
    question: "3. Do I need to have prior knowledge to take cloud computing course?",
    answer:
      "Yes, of course Not worried our courses will enable you to learn the basics as well as advanced level of preparation. Our cloud computing training for beginners help students kick start their learning in cloud computing.",
  },
  {
    question: "4. What will I be certified after completion of the course?",
    answer:
      "You can get ready to take AWS, Microsoft Azure, and Google Cloud certifications by means of our cloud computing certification courses.",
  },
  {
    question: "5. Does Lone Star Academy have placement assistance?",
    answer:
      "Yes, our cloud computing course with placement assistance includes resume building, interview preparation and job referrals.",
  },
  {
    question: "6. How long is the cloud certification course?",
    answer:
      "Duration varies according to the level of study and the speed at which an individual learns, but most cloud computing certification courses can be completed within 2 to 6 months.",
  },
  {
    question: "7. Will cloud computing be a good career options?",
    answer:
      "Yes, cloud computing is still one of the highest demand skill worldwide making cloud computing training a wise career investment.",
  },
  {
    question: "8. Which job can i apply after cloud computing training?",
    answer:
      "Once training in cloud computing is complete, you will be able to apply for Cloud Engineer, DevOps Engineer, Solutions Architect, Cloud Administrator and much more.",
  },
];

const journey = {
  title: "Enroll Today at Lone Star Academy",
  desc: `If you want to pursue a career in cloud computing, Lone Star Academy is here to help you on your way to success. Our cloud computing courses in delhi & cloud computing online courses prepare you to meet the challenges of the competitive job marketplace.
Make the first step towards a brighter future with Lone Star Academy.`,
};

// Doc me is course ka schema nahi diya gaya, isliye empty. Schema aaye to yahan add kar dena.
const schemas: object[] = [];

/* ===================== PAGE ===================== */

export default function CloudComputingPage() {
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
                      <span className="text-sm">4.5 Rating</span>
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
        <PlacedStudents />
        <TestimonialsSlider />
        <FullWidthMap />
        <Footer />
      </main>
    </>
  );
}