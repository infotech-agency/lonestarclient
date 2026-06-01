"use client";
import { motion } from "motion/react";
// import { Navigation } from "../components/Navigation";
import { Navigation } from "../../old_app/components/Navigation";
// import { Footer } from "../components/Footer";
import { Footer } from "../../old_app/components/Footer";
import {
  TrendingUp,
  Briefcase,
  Star,
  CheckCircle,
  Sparkles,
  BadgeCheck,
  Target,
  Users,
  DollarSign,
  BarChart2,
  Globe,
  Cpu,
  Megaphone,
  Database,
  ChevronRight,
  Award,
  Rocket,
} from "lucide-react";

const careerTracks = [
  {
    icon: BarChart2,
    course: "Data Science",
    color: "bg-[#2146C7]",
    roles: [
      "Data Scientist",
      "ML Engineer",
      "Data Analyst",
      "AI Researcher",
      "Business Intelligence Analyst",
    ],
    scope:
      "Data Science is one of the fastest-growing fields globally. With every industry — banking, healthcare, e-commerce, logistics — becoming data-driven, demand for skilled data scientists is at an all-time high.",
    salary: "₹6L – ₹40L+ per annum",
    growth: "35% job growth by 2030 (US Bureau of Labor Statistics)",
    companies: ["Amazon", "Google", "TCS", "Flipkart", "HDFC Bank", "Accenture"],
    skills: ["Python", "ML Algorithms", "Statistics", "Data Visualization", "SQL"],
  },
  {
    icon: Cpu,
    course: "Artificial Intelligence & Machine Learning",
    color: "bg-[#2146C7]",
    roles: [
      "AI Engineer",
      "ML Researcher",
      "NLP Engineer",
      "Computer Vision Engineer",
      "AI Product Manager",
    ],
    scope:
      "AI and ML are transforming every industry from healthcare diagnostics to autonomous vehicles. Organizations are aggressively hiring professionals who can design, build, and deploy intelligent systems.",
    salary: "₹8L – ₹50L+ per annum",
    growth: "Top 5 most in-demand job skills globally (LinkedIn 2024)",
    companies: ["Microsoft", "IBM", "Infosys", "NVIDIA", "Wipro", "Capgemini"],
    skills: ["Deep Learning", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
  },
  {
    icon: Megaphone,
    course: "Digital Marketing",
    color: "bg-[#2146C7]",
    roles: [
      "Digital Marketing Manager",
      "SEO Specialist",
      "Performance Marketing Analyst",
      "Social Media Strategist",
      "Content Marketing Lead",
    ],
    scope:
      "Every business today needs a strong digital presence. Digital marketers are essential across startups, agencies, and global corporations, with scope expanding into AI-driven marketing and marketing automation.",
    salary: "₹4L – ₹25L+ per annum",
    growth: "860,000+ new digital marketing jobs expected by 2026 in India alone",
    companies: ["Zomato", "OYO", "WPP", "Dentsu", "Publicis", "HUL"],
    skills: ["SEO/SEM", "Google Ads", "Analytics", "Social Media", "Email Marketing"],
  },
  {
    icon: BarChart2,
    course: "Business Analytics",
    color: "bg-[#2146C7]",
    roles: [
      "Business Analyst",
      "Operations Analyst",
      "Strategy Analyst",
      "Product Analyst",
      "Risk Analyst",
    ],
    scope:
      "Business Analytics bridges the gap between raw data and business decisions. It is in demand across BFSI, consulting, FMCG, and e-commerce sectors as companies look to optimize operations through insights.",
    salary: "₹5L – ₹30L+ per annum",
    growth: "27% increase in analytics roles expected in India by 2027",
    companies: ["McKinsey", "Deloitte", "American Express", "BCG", "KPMG", "Goldman Sachs"],
    skills: ["Excel", "Power BI", "SQL", "Statistics", "Business Strategy"],
  },
  {
    icon: Database,
    course: "Big Data & Python",
    color: "bg-[#2146C7]",
    roles: [
      "Big Data Engineer",
      "Data Engineer",
      "Python Developer",
      "ETL Developer",
      "Cloud Data Architect",
    ],
    scope:
      "As data volumes grow exponentially, organizations need engineers who can build and manage large-scale data pipelines. Python expertise is foundational for data engineering, automation, and analytics.",
    salary: "₹5L – ₹35L+ per annum",
    growth: "Python is the #1 programming language globally (Stack Overflow 2024)",
    companies: ["Cognizant", "HCL", "WNS", "Orange", "British Telecom", "PayPal"],
    skills: ["Hadoop", "Spark", "Python", "Kafka", "Cloud Platforms"],
  },
  {
    icon: Globe,
    course: "Power BI & Data Visualization",
    color: "bg-[#2146C7]",
    roles: [
      "BI Developer",
      "Power BI Analyst",
      "Reporting Analyst",
      "Data Visualization Specialist",
      "Dashboard Developer",
    ],
    scope:
      "With data-driven decision-making becoming standard across industries, professionals skilled in Power BI and visualization tools are indispensable in finance, operations, consulting, and marketing teams.",
    salary: "₹4L – ₹20L+ per annum",
    growth: "Power BI adoption grew 40% YoY; BI roles growing across all sectors",
    companies: ["Accenture", "Capgemini", "Bank of America", "WNS", "Deloitte", "TCS"],
    skills: ["Power BI", "DAX", "SQL", "Tableau", "Excel"],
  },
];

const whyScope = [
  {
    icon: TrendingUp,
    title: "Explosive Industry Growth",
    desc: "Data, AI, and digital roles are among the fastest-growing globally with no slowdown in sight. Companies across every sector are actively hiring trained professionals.",
  },
  {
    icon: DollarSign,
    title: "High Salary Potential",
    desc: "Courses at Lone Star Academy lead to some of the highest-paying career paths in India's job market — with salaries growing significantly with experience.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    desc: "Skills in Data Science, AI, and Digital Marketing are in demand worldwide. Our alumni work across India, USA, UK, UAE, Canada, and Singapore.",
  },
  {
    icon: Briefcase,
    title: "Cross-Industry Demand",
    desc: "Banking, healthcare, retail, logistics, media — every sector needs data and digital professionals, giving you flexibility to work where you love.",
  },
];

const placementSteps = [
  "Resume building from scratch",
  "LinkedIn profile optimization",
  "Mock interviews with expert trainers",
  "Job application support & referrals",
  "Interview preparation for top companies",
  "Continuous support until placement",
];

const topCompanies = [
  "Accenture", "Amazon", "American Express", "Bank of America",
  "British Telecom", "Capgemini", "Cognizant", "McKinsey",
  "TCS", "WNS", "Orange", "Microsoft",
];

export default function CareersPage() {
  return (
    <>
      <title>Career Scope | Lone Star Academy</title>
      <meta
        name="description"
        content="Explore career opportunities after Data Science, Digital Marketing, Business Analytics, AI & ML courses at Lone Star Academy. Discover roles, salaries, and top hiring companies."
      />

      <Navigation />

      <main className="bg-white text-[#0F172A]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#DBEAFE] blur-3xl opacity-70" />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#E0F2FE] blur-3xl opacity-70" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-2 text-sm font-medium text-[#2146C7]">
                  <Sparkles size={16} className="text-[#2146C7]" />
                  Your Career Starts Here
                </div>

                <h1 className="text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                  Career{" "}
                  <span className="text-[#2146C7]">Scope & Opportunities</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg">
                  Our courses are designed to open doors to{" "}
                  <span className="font-semibold text-[#2146C7]">high-demand careers</span> in
                  Data Science, AI, Digital Marketing, and Analytics.
                  Discover the roles, salaries, and industries you can enter
                  after completing your training with us.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "100+ Hiring Partners",
                    "10,000+ Students Placed",
                    "Roles across 15+ industries",
                    "Global career opportunities",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[#DBEAFE] bg-white px-4 py-3 shadow-sm"
                    >
                      <CheckCircle size={18} className="shrink-0 text-[#2146C7]" />
                      <span className="text-sm text-[#334155]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                <div className="rounded-3xl border border-[#DBEAFE] bg-white p-5 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Users, value: "10,000+", label: "Students Placed" },
                      { icon: Briefcase, value: "100+", label: "Hiring Partners" },
                      { icon: Award, value: "₹40L+", label: "Highest Package" },
                      { icon: Rocket, value: "95%", label: "Placement Rate" },
                    ].map(({ icon: Icon, value, label }) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-[#DBEAFE] bg-[#EFF6FF] p-5"
                      >
                        <Icon size={28} className="mb-3 text-[#2146C7]" />
                        <div className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
                          {value}
                        </div>
                        <p className="mt-1 text-sm text-[#475569]">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#DBEAFE] bg-gradient-to-r from-[#EFF6FF] to-[#E0F2FE] p-5">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#2146C7]">
                      Career Promise
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#475569]">
                      Every course we offer is mapped to real job roles, real
                      companies, and real salary benchmarks — so you always know
                      exactly where your learning is taking you.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why These Fields Have Huge Scope */}
        <section className="bg-[#F8FAFC] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2146C7]">
                Why These Careers
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                Fields With the Brightest Future
              </h2>
              <p className="mt-4 text-base leading-8 text-[#475569]">
                Data, AI, and Digital domains are not just trends — they are the
                backbone of every modern business. The demand is massive, the
                salaries are competitive, and the growth is unstoppable.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyScope.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-3xl border border-[#DBEAFE] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2146C7] text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#0F172A]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475569]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course-wise Career Tracks */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2146C7]">
                Course-Wise Career Paths
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                What Can You Become After Each Course?
              </h2>
              <p className="mt-4 text-base leading-8 text-[#475569]">
                Each program is mapped to specific roles, salary brackets, and
                top hiring companies so you have full clarity on your career
                direction before you even begin.
              </p>
            </motion.div>

            <div className="mt-12 space-y-8">
              {careerTracks.map(
                ({ icon: Icon, course, roles, scope, salary, growth, companies, skills }, i) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-3xl border border-[#DBEAFE] bg-white shadow-sm overflow-hidden"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 bg-[#EFF6FF] px-6 py-5 sm:px-8">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2146C7] text-white">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A] sm:text-2xl">{course}</h3>
                    </div>

                    <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-3">
                      {/* Scope */}
                      <div className="lg:col-span-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#2146C7]">
                          Industry Scope
                        </p>
                        <p className="mt-3 text-base leading-8 text-[#475569]">{scope}</p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-2xl border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#2146C7]">
                              Salary Range
                            </p>
                            <p className="mt-1 text-base font-bold text-[#0F172A]">{salary}</p>
                          </div>
                          <div className="rounded-2xl border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#2146C7]">
                              Market Growth
                            </p>
                            <p className="mt-1 text-sm font-semibold text-[#334155]">{growth}</p>
                          </div>
                        </div>

                        {/* Key Skills */}
                        <div className="mt-5">
                          <p className="mb-3 text-sm font-semibold text-[#0F172A]">Key Skills You'll Learn</p>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-full border border-[#DBEAFE] bg-white px-3 py-1 text-xs font-medium text-[#2146C7]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Roles + Companies */}
                      <div className="space-y-5">
                        <div>
                          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2146C7]">
                            Job Roles
                          </p>
                          <div className="space-y-2">
                            {roles.map((role) => (
                              <div
                                key={role}
                                className="flex items-center gap-3 rounded-2xl border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-3"
                              >
                                <ChevronRight size={16} className="shrink-0 text-[#2146C7]" />
                                <span className="text-sm text-[#334155]">{role}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2146C7]">
                            Top Hiring Companies
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {companies.map((company) => (
                              <span
                                key={company}
                                className="rounded-full border border-white bg-white px-3 py-1 text-xs shadow-sm text-[#334155]"
                              >
                                {company}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Placement Support */}
        <section className="bg-[#F8FAFC] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-medium text-[#2146C7]">
                  <Briefcase size={16} />
                  Placement Guidance
                </div>

                <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
                  We Don't Just Train You.
                  <span className="text-[#2146C7]"> We Help You Get Hired.</span>
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-[#475569]">
                  Our dedicated placement team works with every student to
                  ensure they are job-ready, interview-confident, and connected
                  with the right opportunities across our strong recruiter
                  network.
                </p>

                <div className="mt-8 space-y-3">
                  {placementSteps.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck size={20} className="mt-1 shrink-0 text-[#2146C7]" />
                      <p className="text-sm leading-7 text-[#334155] sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-[#DBEAFE] bg-[#EFF6FF] p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Our Alumni Work At
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#475569]">
                  Lone Star Academy graduates are working across top companies
                  in India and globally — a testament to the quality of
                  training and placement support we provide.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {topCompanies.map((company) => (
                    <span
                      key={company}
                      className="rounded-full border border-white bg-white px-4 py-2 text-sm text-[#334155] shadow-sm"
                    >
                      {company}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#DBEAFE] bg-white p-5">
                  <p className="text-sm font-semibold text-[#2146C7]">
                    Strong Recruiter Network
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#475569]">
                    With 100+ active hiring partners across BFSI, IT,
                    consulting, and digital sectors, our students get access to
                    curated job opportunities before they even start applying.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Career Path Clarity */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#DBEAFE] bg-[#EFF6FF] p-7 sm:p-8"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2146C7] shadow-sm">
                <Target size={16} />
                Career Clarity
              </div>

              <h2 className="text-3xl font-bold text-[#0F172A]">
                Who Can Build a Career From Our Courses?
              </h2>
              <p className="mt-4 text-base leading-8 text-[#475569]">
                Our programs are designed for a diverse range of learners —
                each with their own goals and background.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Fresh graduates looking to enter analytics and tech roles",
                  "Working professionals upgrading to data-driven careers",
                  "Marketing & sales professionals transitioning to digital roles",
                  "MBA / finance professionals adding analytics skills",
                  "Entrepreneurs wanting data insights for their business",
                  "Career changers aiming for high-growth tech domains",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-1 shrink-0 text-[#2146C7]" />
                    <p className="text-sm leading-7 text-[#334155] sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#DBEAFE] bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#2146C7]">
                <Star size={16} />
                Career Growth Path
              </div>

              <h2 className="text-3xl font-bold text-[#0F172A]">
                How Your Career Grows Over Time
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  {
                    level: "0–1 Year",
                    title: "Entry-Level Analyst / Associate",
                    salary: "₹3L – ₹8L p.a.",
                  },
                  {
                    level: "1–3 Years",
                    title: "Analyst / Junior Data Scientist",
                    salary: "₹6L – ₹15L p.a.",
                  },
                  {
                    level: "3–6 Years",
                    title: "Senior Analyst / Lead Data Scientist",
                    salary: "₹12L – ₹28L p.a.",
                  },
                  {
                    level: "6–10 Years",
                    title: "Manager / Principal Scientist",
                    salary: "₹20L – ₹45L p.a.",
                  },
                  {
                    level: "10+ Years",
                    title: "Director / VP Analytics / Chief Data Officer",
                    salary: "₹40L – ₹1Cr+ p.a.",
                  },
                ].map(({ level, title, salary }) => (
                  <div
                    key={level}
                    className="flex items-start gap-4 rounded-2xl border border-[#DBEAFE] bg-[#EFF6FF] px-4 py-4"
                  >
                    <div className="min-w-[70px] rounded-xl bg-[#2146C7] px-2 py-1 text-center text-xs font-bold text-white">
                      {level}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">{title}</p>
                      <p className="mt-0.5 text-xs text-[#2146C7] font-medium">{salary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[#DBEAFE] bg-[#EFF6FF] px-6 py-12 shadow-sm sm:px-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2146C7]">
                Lone Star Academy
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">
                Start Building Your Dream Career Today
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#475569]">
                Whether you want to become a Data Scientist, AI Engineer,
                Digital Marketer, or Business Analyst — we have the right
                course, the right trainers, and the right placement support to
                get you there.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="/courses"
                  className="rounded-2xl bg-[#2146C7] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1839B7]"
                >
                  Explore Courses
                </a>
                <a
                  href="/contact"
                  className="rounded-2xl border border-[#2146C7] bg-white px-6 py-3 text-sm font-semibold text-[#2146C7] transition hover:bg-[#DBEAFE]"
                >
                  Talk to a Counsellor
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}