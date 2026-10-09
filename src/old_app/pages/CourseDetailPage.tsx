
// // // "use client";
// // // import { useEffect, useState } from "react";
// // // import { motion } from "motion/react";

// // // import {
// // //   BookOpen,
// // //   Clock,
// // //   IndianRupee,
// // //   CheckCircle,
// // //   Star,
// // //   Users,
// // //   Award,
// // //   Briefcase,
// // //   Phone,
// // //   ArrowRight,
// // //   Sparkles,
// // //   GraduationCap,
// // //   ChevronDown,
// // //   Info,
// // //   X,
// // //   MessageCircle,
// // // } from "lucide-react";
// // // import { Navigation } from "../components/Navigation";
// // // import { Footer } from "../components/Footer";
// // // import { BASE_URL } from "../../../utils/baseUrl";
// // // import NotFound from "./NotFound";
// // // import axios from "axios";

// // // interface Course {
// // //   _id: string;
// // //   id?: string;
// // //   slug?: string;
// // //   name: string;
// // //   price: string;
// // //   duration: string;
// // //   description: string;
// // //   category: string;
// // //   image: string | null;
// // //   syllabus?: string[];
// // //   highlights?: string[];
// // //   tools?: string[];
// // //   whoCanJoin?: string[];
// // //   careerOptions?: string[];
// // //   faqs?: { question: string; answer: string }[];
// // //   seo?: {
// // //     title?: string;
// // //     description?: string;
// // //     keywords?: string;
// // //   };
// // // }

// // // type CourseSection = {
// // //   title: string;
// // //   content: string;
// // //   points?: string[];
// // // };

// // // type CourseExtraContent = {
// // //   aboutTitle: string;
// // //   about: string;
// // //   sections: CourseSection[];
// // //   highlights: string[];
// // //   tools: string[];
// // //   whoCanJoin: string[];
// // //   careerOptions: string[];
// // // };

// // // const courseContent: Record<string, CourseExtraContent> = {
// // //   "Business Analytics": {
// // //     aboutTitle: ": Business Analytics Online Course & Training in Delhi | Lone Star",
// // //     about: "In this era of big data, choosing the right business analytics online course or business analyst course in Delhi can be a game changer for your career. At Lone Star Academy, we provide a practical, industry-relevant learning path for beginners, working professionals, and fresh graduates who want to build a strong career in analytics and decision making.",
// // //     sections: [
// // //       {
// // //         title: "Why Choose Lone Star Academy for Business Analytics?",
// // //         content: "At Lone Star Academy, we focus on making students job-ready through practical training, live projects, real industry case studies, and placement-oriented preparation.",
// // //         points: [
// // //           "Industry-relevant content designed by subject experts",
// // //           "Live projects and real industry case studies",
// // //           "Placement-oriented training with interview preparation",
// // //           "Flexible online and offline classroom learning",
// // //           "Mentorship from working professionals",
// // //         ],
// // //       },
// // //       {
// // //         title: "What You Will Learn",
// // //         content: "This Business Analytics course gives you strong knowledge of basic and advanced analytics concepts with real business applications.",
// // //         points: [
// // //           "Introduction to Business Analytics",
// // //           "Data Visualization with Excel, Power BI and Tableau",
// // //           "SQL for Data Analysis",
// // //           "Python for Data Analytics",
// // //           "Statistical Analysis and Predictive Modeling",
// // //           "Business Intelligence and Reporting",
// // //         ],
// // //       },
// // //       {
// // //         title: "Practice-Based Learning Model",
// // //         content: "Our course focuses on practical learning instead of only theory. You will work on real datasets, case studies, live assignments, and a capstone project to build your portfolio.",
// // //       },
// // //       {
// // //         title: "Job Support and Career Assistance",
// // //         content: "Our Business Analyst training in Delhi includes resume building, mock interviews, soft skills training, job referrals, and placement assistance.",
// // //       },
// // //     ],
// // //     highlights: [
// // //       "Practical business analytics training",
// // //       "Live projects and case studies",
// // //       "Excel, Power BI, Tableau, SQL and Python",
// // //       "Online and offline flexible batches",
// // //       "Interview preparation",
// // //       "Placement assistance",
// // //     ],
// // //     tools: ["Advanced Excel", "Power BI", "Tableau", "SQL", "Python"],
// // //     whoCanJoin: [
// // //       "Fresh graduates",
// // //       "Working professionals",
// // //       "Business owners",
// // //       "IT professionals",
// // //       "Beginners with no coding background",
// // //     ],
// // //     careerOptions: [
// // //       "Business Analyst",
// // //       "Data Analyst",
// // //       "Reporting Analyst",
// // //       "BI Developer",
// // //       "Product Analyst",
// // //     ],
// // //   },
// // //   "Data Analytics": {
// // //     aboutTitle: "Data Analytics Courses Online & Data Analytics Courses in Delhi",
// // //     about: "With the growing demand for data-driven decisions, Data Analytics is one of the best career choices for students, working professionals, and career switchers. Lone Star Academy provides practical training that helps beginners become confident data analysts.",
// // //     sections: [
// // //       {
// // //         title: "Why Enroll in Lone Star Academy Data Analytics Course?",
// // //         content: "Lone Star Academy stands out because of its student-first approach, expert trainers, practical learning style, and placement support.",
// // //         points: [
// // //           "Industry-led and expert-designed curriculum",
// // //           "Hands-on projects and case studies",
// // //           "Flexible online and offline classes",
// // //           "Personalized mentorship",
// // //           "Placement support and career counselling",
// // //         ],
// // //       },
// // //       {
// // //         title: "Core Modules Covered",
// // //         content: "Our Data Analytics course content is designed for beginners and intermediate learners with practical tools and real-world analytics training.",
// // //         points: [
// // //           "What is Data Analytics?",
// // //           "Excel for Data Analysis",
// // //           "Data Handling with SQL",
// // //           "Python for Data Analytics",
// // //           "Data Visualization with Power BI and Tableau",
// // //           "Statistics and Data Analysis",
// // //           "Real-world Case Studies",
// // //           "Capstone Projects",
// // //         ],
// // //       },
// // //       {
// // //         title: "Certification and Practical Exposure",
// // //         content: "After completing the course, students receive Lone Star Academy certification. The course includes real company case studies, data cleaning, visualization exercises, and a portfolio-building capstone project.",
// // //       },
// // //       {
// // //         title: "Placement Assistance",
// // //         content: "We provide resume building sessions, mock interviews, job referrals, and career counselling to help students become job-ready.",
// // //       },
// // //     ],
// // //     highlights: [
// // //       "Beginner-friendly data analytics training",
// // //       "Excel, SQL, Python, Power BI and Tableau",
// // //       "Hands-on projects",
// // //       "Capstone project",
// // //       "Certification support",
// // //       "Placement assistance",
// // //     ],
// // //     tools: ["Microsoft Excel", "SQL", "Python", "Power BI", "Tableau"],
// // //     whoCanJoin: [
// // //       "Recent graduates",
// // //       "Working professionals",
// // //       "Business owners",
// // //       "IT specialists",
// // //       "Data analyst aspirants",
// // //     ],
// // //     careerOptions: [
// // //       "Data Analyst",
// // //       "Business Analyst",
// // //       "Reporting Analyst",
// // //       "MIS Analyst",
// // //       "Entry-Level Data Scientist",
// // //     ],
// // //   },
// // //   "Data Science": {
// // //     aboutTitle: "Data Science Course in Delhi with Placement",
// // //     about: "If you are looking for a Data Science course online with placement or a Data Science course in Delhi, Lone Star Academy offers a future-focused program with industry skills, hands-on learning, live projects, and career support.",
// // //     sections: [
// // //       {
// // //         title: "Why Take Data Science with Lone Star Academy?",
// // //         content: "Our Data Science course focuses on practical learning, real projects, industry tools, and placement assistance instead of only theoretical concepts.",
// // //         points: [
// // //           "Industry-relevant curriculum on AI, machine learning and analytics",
// // //           "Experienced mentors from top tech companies",
// // //           "Live projects and case studies",
// // //           "Placement services and career support",
// // //           "Offline and online learning modes",
// // //         ],
// // //       },
// // //       {
// // //         title: "End-to-End Data Science Curriculum",
// // //         content: "The curriculum is designed to help learners build strong foundations and move towards advanced machine learning and AI concepts.",
// // //         points: [
// // //           "Python programming",
// // //           "Statistics and probability",
// // //           "Data manipulation and visualization",
// // //           "Supervised and unsupervised learning",
// // //           "Model building and evaluation",
// // //           "Deep learning basics",
// // //           "Natural Language Processing",
// // //           "AI-enabled automation",
// // //         ],
// // //       },
// // //       {
// // //         title: "Flexible Learning Options",
// // //         content: "Students can choose live online classes with recordings or classroom training in Delhi NCR with mentorship and networking opportunities.",
// // //       },
// // //       {
// // //         title: "Career Guidance",
// // //         content: "The program includes resume building, mock interviews, portfolio development, and interview opportunity support.",
// // //       },
// // //     ],
// // //     highlights: [
// // //       "AI and machine learning curriculum",
// // //       "Live projects and real datasets",
// // //       "Online and offline learning",
// // //       "Portfolio building",
// // //       "Mock interviews",
// // //       "Placement assistance",
// // //     ],
// // //     tools: ["Python", "SQL", "Excel", "Power BI", "Tableau", "Machine Learning"],
// // //     whoCanJoin: [
// // //       "Students",
// // //       "Recent graduates",
// // //       "IT professionals",
// // //       "Non-tech career switchers",
// // //       "Business owners",
// // //     ],
// // //     careerOptions: [
// // //       "Data Analyst",
// // //       "Data Scientist",
// // //       "Machine Learning Engineer",
// // //       "Business Analyst",
// // //       "AI Specialist",
// // //     ],
// // //   },
// // //   "Digital Marketing": {
// // //     aboutTitle: "Best Online Digital Marketing Course & Digital Marketing Course in Delhi",
// // //     about: "Digital marketing is one of the fastest-growing career fields. At Lone Star Academy, our Digital Marketing course combines real-world skills, industry tools, live projects, certifications, and placement assistance.",
// // //     sections: [
// // //       {
// // //         title: "Why Choose Lone Star Academy for Digital Marketing?",
// // //         content: "We train, mentor, and prepare students for real digital marketing work through practical projects and industry-standard tools.",
// // //         points: [
// // //           "Industry-relevant curriculum based on current trends",
// // //           "Live project training",
// // //           "Expert mentors from top agencies",
// // //           "Certifications to enhance your credibility",
// // //           "Placement support",
// // //         ],
// // //       },
// // //       {
// // //         title: "Course Highlights",
// // //         content: "Our Digital Marketing course covers both basic and advanced digital marketing skills.",
// // //         points: [
// // //           "SEO",
// // //           "Google Ads and PPC Campaigns",
// // //           "Social Media Marketing",
// // //           "Content Marketing",
// // //           "Email Marketing Automation",
// // //           "Affiliate Marketing",
// // //           "Web Analytics and Tracking",
// // //           "AI Tools in Digital Marketing",
// // //         ],
// // //       },
// // //       {
// // //         title: "Practical Campaign Training",
// // //         content: "Students work on live business websites, ad campaign creation, SEO audits, social media strategy, and reporting concepts.",
// // //       },
// // //       {
// // //         title: "Placement Assistance",
// // //         content: "Our placement assistance includes resume building, interview coaching, expert mock interviews, hiring partner access, and internship opportunities.",
// // //       },
// // //     ],
// // //     highlights: [
// // //       "SEO and Google Ads training",
// // //       "Social media marketing",
// // //       "Live campaign projects",
// // //       "AI tools in digital marketing",
// // //       "Internship support",
// // //       "Placement assistance",
// // //     ],
// // //     tools: [
// // //       "SEO",
// // //       "Google Ads",
// // //       "Meta Ads",
// // //       "Google Analytics",
// // //       "Email Marketing",
// // //       "AI Tools",
// // //     ],
// // //     whoCanJoin: [
// // //       "Students",
// // //       "Job seekers",
// // //       "Entrepreneurs",
// // //       "Freelancers",
// // //       "Working professionals",
// // //     ],
// // //     careerOptions: [
// // //       "SEO Specialist",
// // //       "Social Media Manager",
// // //       "PPC Expert",
// // //       "Content Strategist",
// // //       "Digital Marketing Manager",
// // //     ],
// // //   },
// // //   "Cloud Computing": {
// // //     aboutTitle: "Cloud Computing Courses in Delhi & Online",
// // //     about: "If you are looking for practical Cloud Computing training, online cloud courses, real-life environment-based learning, and job-oriented cloud courses in Delhi, Lone Star Academy is the perfect choice for you.",
// // //     sections: [
// // //       {
// // //         title: "Why Select Lone Star Academy for Cloud Computing Training?",
// // //         content: "A good cloud training institute can shape your career path. Lone Star Academy provides quality education, practical lab sessions, expert guidance, and placement support.",
// // //         points: [
// // //           "Industry-relevant AWS, Azure and Google Cloud based curriculum",
// // //           "Real-world experience through practical lab sessions",
// // //           "Trained professionals with industry exposure",
// // //           "In-house placement support and interview preparation",
// // //           "Flexible online and classroom learning options",
// // //         ],
// // //       },
// // //       {
// // //         title: "What You Will Learn",
// // //         content: "Our Cloud Computing course covers everything from cloud basics to advanced deployment and security concepts.",
// // //         points: [
// // //           "Introduction to Cloud Computing and Architecture",
// // //           "Virtualization and basic networking",
// // //           "Cloud Service Models: IaaS, PaaS and SaaS",
// // //           "AWS, Microsoft Azure and Google Cloud Platforms",
// // //           "Security and Compliance in the Cloud",
// // //           "DevOps and Automation Tools",
// // //           "Deployment and Migration Techniques",
// // //         ],
// // //       },
// // //       {
// // //         title: "Cloud Computing Training with Placement",
// // //         content: "Our placement assistance includes resume building, portfolio development, mock interviews, HR preparation, job referrals, hiring partner connections, and communication training.",
// // //       },
// // //       {
// // //         title: "Certification Preparation",
// // //         content: "The course helps students prepare for AWS, Microsoft Azure, and Google Cloud certifications with practical guidance and career support.",
// // //       },
// // //     ],
// // //     highlights: [
// // //       "AWS, Azure and Google Cloud curriculum",
// // //       "Practical lab sessions",
// // //       "Cloud security and compliance",
// // //       "DevOps and automation tools",
// // //       "Certification preparation",
// // //       "Placement assistance",
// // //     ],
// // //     tools: [
// // //       "AWS",
// // //       "Microsoft Azure",
// // //       "Google Cloud",
// // //       "Docker",
// // //       "Kubernetes",
// // //       "DevOps Tools",
// // //     ],
// // //     whoCanJoin: [
// // //       "Fresh graduates",
// // //       "IT professionals",
// // //       "Career switchers",
// // //       "Business owners",
// // //       "Beginners in cloud technology",
// // //     ],
// // //     careerOptions: [
// // //       "Cloud Engineer",
// // //       "Solutions Architect",
// // //       "DevOps Engineer",
// // //       "Cloud Security Specialist",
// // //       "System Administrator",
// // //     ],
// // //   },
// // // };

// // // const curriculum: Record<string, string[]> = {
// // //   "Business Analytics": [
// // //     "Introduction to Business Analytics",
// // //     "Advanced Excel",
// // //     "Power BI Fundamentals",
// // //     "Tableau Dashboards",
// // //     "SQL for Analytics",
// // //     "Business Reporting",
// // //     "Real-world Case Studies",
// // //   ],
// // //   "Data Analytics": [
// // //     "Python Basics",
// // //     "NumPy & Pandas",
// // //     "SQL & Database Concepts",
// // //     "Data Cleaning",
// // //     "Visualization with Power BI",
// // //     "Statistics for Analytics",
// // //     "Capstone Project",
// // //   ],
// // //   "Data Science": [
// // //     "Python for Data Science",
// // //     "Machine Learning",
// // //     "Deep Learning Basics",
// // //     "NLP Fundamentals",
// // //     "Data Engineering Concepts",
// // //     "Model Deployment",
// // //     "Industry Projects",
// // //   ],
// // //   "Digital Marketing": [
// // //     "SEO Fundamentals",
// // //     "Google Ads",
// // //     "Social Media Marketing",
// // //     "Content Marketing",
// // //     "Email Marketing",
// // //     "Analytics & Reporting",
// // //     "Practical Campaign Projects",
// // //   ],
// // //   "Cloud Computing": [
// // //     "Cloud Fundamentals",
// // //     "AWS Services",
// // //     "Microsoft Azure Basics",
// // //     "Google Cloud Basics",
// // //     "Docker & Kubernetes",
// // //     "Cloud Security",
// // //     "Certification Preparation",
// // //   ],
// // // };

// // // const benefits = [
// // //   "100% Practical Training",
// // //   "Live Projects & Assignments",
// // //   "Interview Preparation",
// // //   "Resume Building Support",
// // //   "Placement Assistance",
// // //   "Recorded Backup Sessions",
// // //   "Expert Trainers",
// // //   "Flexible Learning Structure",
// // // ];

// // // const whyChoose = [
// // //   {
// // //     icon: Award,
// // //     title: "Industry-Oriented Learning",
// // //     desc: "Learn with real tools, real scenarios, and job-ready practical modules.",
// // //   },
// // //   {
// // //     icon: Briefcase,
// // //     title: "Placement Assistance",
// // //     desc: "We help students with resume support, mock interviews, and placement guidance.",
// // //   },
// // //   {
// // //     icon: Users,
// // //     title: "Expert Mentorship",
// // //     desc: "Get support from experienced trainers with practical domain knowledge.",
// // //   },
// // // ];

// // // const pageImages: Record<string, string> = {
// // //   "Business Analytics": "/businessanlytics.jpg",
// // //   "Data Analytics": "/dataanalytics.jpg",
// // //   "Data Science": "/datascience.jpg",
// // //   "Digital Marketing": "/Digitalmarketing.jpg",
// // //   "Cloud Computing": "/cloudcomputing.jpg",
// // // };

// // // const faqs: Record<string, { question: string; answer: string }[]> = {
// // //   "Business Analytics": [
// // //     {
// // //       question: "Who can join the Business Analytics course?",
// // //       answer: "Students, working professionals, freshers, and business professionals who want to build reporting, dashboard, and analytics skills can join this course.",
// // //     },
// // //     {
// // //       question: "What tools are covered in Business Analytics?",
// // //       answer: "This course covers Excel, Power BI, Tableau, SQL, reporting concepts, and practical business case studies.",
// // //     },
// // //     {
// // //       question: "Do you provide placement assistance for Business Analytics?",
// // //       answer: "Yes, we provide resume support, interview preparation, mock interviews, and placement guidance.",
// // //     },
// // //     {
// // //       question: "Is this course suitable for beginners?",
// // //       answer: "Yes, the course starts from fundamentals and gradually moves to advanced practical concepts.",
// // //     },
// // //   ],
// // //   "Data Analytics": [
// // //     {
// // //       question: "What will I learn in the Data Analytics course?",
// // //       answer: "You will learn Python, Pandas, NumPy, SQL, data cleaning, dashboards, statistics, and project-based analytics skills.",
// // //     },
// // //     {
// // //       question: "Is coding required for Data Analytics?",
// // //       answer: "Basic coding helps, but beginners can also join because the training starts from fundamentals.",
// // //     },
// // //     {
// // //       question: "Will I work on practical projects?",
// // //       answer: "Yes, the course includes hands-on assignments, case studies, and a capstone project.",
// // //     },
// // //     {
// // //       question: "Can freshers join the Data Analytics course?",
// // //       answer: "Yes, freshers can join this course to build job-ready analytics skills.",
// // //     },
// // //   ],
// // //   "Data Science": [
// // //     {
// // //       question: "What topics are included in the Data Science course?",
// // //       answer: "The course includes Python, machine learning, deep learning basics, NLP, data engineering concepts, and model deployment.",
// // //     },
// // //     {
// // //       question: "Is Data Science good for career growth?",
// // //       answer: "Yes, Data Science is one of the most in-demand fields with strong career opportunities across industries.",
// // //     },
// // //     {
// // //       question: "Do I need prior programming experience?",
// // //       answer: "No, beginners can start with this course, but regular practice is important.",
// // //     },
// // //     {
// // //       question: "Will I get project experience in Data Science?",
// // //       answer: "Yes, students work on industry-oriented projects to improve practical understanding.",
// // //     },
// // //   ],
// // //   "Digital Marketing": [
// // //     {
// // //       question: "What modules are covered in the Digital Marketing course?",
// // //       answer: "This course covers SEO, Google Ads, social media marketing, content marketing, email marketing, and performance analytics.",
// // //     },
// // //     {
// // //       question: "Is Digital Marketing a good option for beginners?",
// // //       answer: "Yes, it is a beginner-friendly field and suitable for students, job seekers, and business owners.",
// // //     },
// // //     {
// // //       question: "Will I learn practical campaign execution?",
// // //       answer: "Yes, the course includes practical campaign work, ad strategy, and reporting concepts.",
// // //     },
// // //     {
// // //       question: "Do you provide certification support?",
// // //       answer: "Yes, we guide students for course completion and help them prepare for relevant certifications.",
// // //     },
// // //   ],
// // //   "Cloud Computing": [
// // //     {
// // //       question: "What will I learn in the Cloud Computing course?",
// // //       answer: "You will learn cloud fundamentals, AWS, Azure, Google Cloud basics, Docker, Kubernetes, and cloud security concepts.",
// // //     },
// // //     {
// // //       question: "Is Cloud Computing suitable for beginners?",
// // //       answer: "Yes, this course starts with core cloud fundamentals before moving to advanced tools.",
// // //     },
// // //     {
// // //       question: "Does the course include certification preparation?",
// // //       answer: "Yes, the course includes support for cloud certification preparation.",
// // //     },
// // //     {
// // //       question: "Will I learn deployment and cloud services practically?",
// // //       answer: "Yes, the training includes practical exposure to cloud platforms and deployment-related concepts.",
// // //     },
// // //   ],
// // // };

// // // export default function CourseDetailPage({ 
// // //   slug, 
// // //   courseData 
// // // }: { 
// // //   slug: string; 
// // //   courseData: Course;
// // // }) {
// // //   const [openFaq, setOpenFaq] = useState<number | null>(0);
// // //   const [showMobileForm, setShowMobileForm] = useState(false);
// // //   const [allCourses, setAllCourses] = useState(null);
// // //   const course = courseData;
// // //   const [loading, setLoading] = useState(false);
// // //   console.log("course--->", course);
    

// // // const getAllCourses = async () => {
// // //   try {
// // //     setLoading(true);
// // //     const response = await axios.get(`${BASE_URL}/api/courses`);
// // //     setAllCourses(response.data);
// // //     console.log("All courses fetched:", response.data);
// // //   } catch (err) {
// // //     console.error("Error fetching courses:", err);
// // //   } finally {
// // //     setLoading(false);
// // //   }
// // // };

// // // // useEffect to fetch courses on mount
// // // useEffect(() => {
// // //   getAllCourses();
// // // }, []);

// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     phone: "",
// // //     email: "",
// // //     course: course?.name || "",
// // //     message: "",
// // //   });

// // //   useEffect(() => {
// // //     window.scrollTo(0, 0);
// // //   }, []);

// // //   const handleChange = (
// // //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// // //   ) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     alert("Your enquiry has been submitted successfully.");
// // //     setFormData({
// // //       name: "",
// // //       phone: "",
// // //       email: "",
// // //       course: course?.name || "",
// // //       message: "",
// // //     });
// // //     setShowMobileForm(false);
// // //   };

// // //   if (!course) {
// // //     return <NotFound />;
// // //   }

// // //   // const content = courseContent[course.name];
// // //   const content = courseContent[course.category];
  
// // //   console.log("content",content)
// // //   const heroImage = course.image
// // //     ? course.image.startsWith("http")
// // //       ? course.image
// // //       : `${BASE_URL}${course.image}`
// // //     : pageImages[course.name] || "/images/default-course.jpg";

// // //   const syllabus =
// // //     course.syllabus && course.syllabus.length > 0
// // //       ? course.syllabus
// // //       : curriculum[course.name] || [
// // //           "Module 1: Introduction",
// // //           "Module 2: Core Concepts",
// // //           "Module 3: Advanced Topics",
// // //           "Module 4: Practical Implementation",
// // //           "Final Project",
// // //         ];

// // //   const courseFaqs =
// // //     course.faqs && course.faqs.length > 0
// // //       ? course.faqs
// // //       : faqs[course.name] || [
// // //           {
// // //             question: "Who can join this course?",
// // //             answer: "Students, freshers, and working professionals interested in practical learning can join this course.",
// // //           },
// // //           {
// // //             question: "Do you provide placement assistance?",
// // //             answer: "Yes, we provide resume guidance, interview preparation, and placement support.",
// // //           },
// // //           {
// // //             question: "Is this course beginner friendly?",
// // //             answer: "Yes, the course is designed to support beginners as well as learners with some prior knowledge.",
// // //           },
// // //         ];

// // //   const highlights =
// // //     course.highlights && course.highlights.length > 0
// // //       ? course.highlights
// // //       : content?.highlights || [];

// // //   const tools =
// // //     course.tools && course.tools.length > 0
// // //       ? course.tools
// // //       : content?.tools || [];

// // //   const careerOptions =
// // //     course.careerOptions && course.careerOptions.length > 0
// // //       ? course.careerOptions
// // //       : content?.careerOptions || [];

// // //   const whoCanJoin =
// // //     course.whoCanJoin && course.whoCanJoin.length > 0
// // //       ? course.whoCanJoin
// // //       : content?.whoCanJoin || [];

// // //   return (
// // //     <>
// // //       <Navigation />

// // //       <main className="bg-white">
// // //         {/* HERO SECTION */}
// // //         <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-14 text-white md:py-20">
// // //           <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
// // //           <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

// // //           <div className="container mx-auto px-4">
// // //             <div className="grid items-center gap-10 lg:grid-cols-2">
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 24 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 className="relative z-10"
// // //               >
// // //                 <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-100 backdrop-blur-md">
// // //                   <Sparkles size={14} />
// // //                   Lone Star Academy
// // //                 </span>

// // //                 <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
// // //                   {course.name}
// // //                 </h1>

// // //                 <p className="mb-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
// // //                   {content?.about || course.description}
// // //                 </p>

// // //                 <div className="mb-8 flex flex-wrap gap-4">
// // //                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
// // //                     <div className="flex items-center gap-2">
// // //                       <Clock size={18} className="text-cyan-300" />
// // //                       <span className="text-sm">{course.duration}</span>
// // //                     </div>
// // //                   </div>

// // //                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
// // //                     <div className="flex items-center gap-2">
// // //                       <IndianRupee size={18} className="text-cyan-300" />
// // //                       <span className="text-sm">{course.price}</span>
// // //                     </div>
// // //                   </div>

// // //                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
// // //                     <div className="flex items-center gap-2">
// // //                       <Users size={18} className="text-cyan-300" />
// // //                       <span className="text-sm">500+ Students</span>
// // //                     </div>
// // //                   </div>

// // //                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
// // //                     <div className="flex items-center gap-2">
// // //                       <Star
// // //                         size={18}
// // //                         className="fill-yellow-400 text-yellow-400"
// // //                       />
// // //                       <span className="text-sm">4.9 Rating</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                <a
// // //   href="tel:9711709644"
// // //   className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20  px-6 py-3 font-semibold text-orange-500 transition bg-white hover:text-slate-900"
// // // >
// // //   <Phone size={18} />
// // //   Call Now
// // // </a>

// // // <a
// // //   href="https://wa.me/919711709644"
// // //   target="_blank"
// // //   rel="noopener noreferrer"
// // //   className="ml-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#20BD5A] hover:-translate-y-0.5"
// // // >
// // //   <MessageCircle size={18} />
// // //   WhatsApp Now
// // // </a>
// // //               </motion.div>

              

// // //               <motion.div
// // //                 initial={{ opacity: 0, scale: 0.94 }}
// // //                 animate={{ opacity: 1, scale: 1 }}
// // //                 transition={{ delay: 0.1 }}
// // //                 className="relative z-10"
// // //               >
// // //                 <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
// // //                   <img
// // //                     src={heroImage}
// // //                     alt={course.name}
// // //                     className="h-[260px] w-full rounded-[22px] object-cover sm:h-[360px] lg:h-[460px]"
// // //                   />
// // //                 </div>
// // //               </motion.div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Mobile Fixed Bottom Action Bar */}
// // //         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
// // //           <div className="flex items-center gap-3 p-3">
// // //             <a
// // //               href="tel:9711709644"
// // //               className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-green-700"
// // //             >
// // //               <Phone size={18} />
// // //               Call Now
// // //             </a>

// // //             <button
// // //               onClick={() => setShowMobileForm(true)}
// // //               className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-orange-700"
// // //             >
// // //               <MessageCircle size={18} />
// // //               Enquiry
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Mobile Enquiry Form Modal */}
// // //         {showMobileForm && (
// // //           <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 md:hidden">
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 100 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               exit={{ opacity: 0, y: 100 }}
// // //               className="w-full max-w-md rounded-t-3xl bg-white shadow-2xl"
// // //             >
// // //               <div className="flex items-center justify-between border-b border-slate-200 p-5">
// // //                 <div>
// // //                   <h3 className="text-xl font-bold text-slate-900">Course Enquiry</h3>
// // //                   <p className="text-sm text-slate-500">Fill details to get more info</p>
// // //                 </div>
// // //                 <button
// // //                   onClick={() => setShowMobileForm(false)}
// // //                   className="rounded-full p-2 transition hover:bg-slate-100"
// // //                 >
// // //                   <X size={24} className="text-slate-500" />
// // //                 </button>
// // //               </div>

// // //               <form onSubmit={handleSubmit} className="p-5 space-y-4">
// // //                 <div>
// // //                   <label className="mb-2 block text-sm font-medium text-slate-700">
// // //                     Full Name *
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="name"
// // //                     value={formData.name}
// // //                     onChange={handleChange}
// // //                     placeholder="Enter your full name"
// // //                     className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
// // //                     required
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="mb-2 block text-sm font-medium text-slate-700">
// // //                     Phone Number *
// // //                   </label>
// // //                   <input
// // //                     type="tel"
// // //                     name="phone"
// // //                     value={formData.phone}
// // //                     onChange={handleChange}
// // //                     placeholder="Enter your phone number"
// // //                     className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
// // //                     required
// // //                   />
// // //                 </div>

// // //                 <button
// // //                   type="submit"
// // //                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-700"
// // //                 >
// // //                   Submit Enquiry <ArrowRight size={18} />
// // //                 </button>

// // //                 <div className="flex items-center gap-3">
// // //                   <div className="h-px flex-1 bg-slate-200"></div>
// // //                   <span className="text-xs font-medium text-slate-400">OR</span>
// // //                   <div className="h-px flex-1 bg-slate-200"></div>
// // //                 </div>

// // //                 <div className="flex gap-3">
// // //                   <a
// // //                     href="tel:9711709644"
// // //                     className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
// // //                   >
// // //                     <Phone size={16} />
// // //                     Call Now
// // //                   </a>

// // //                   <a
// // //                     href="https://wa.me/919711709644"
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
// // //                   >
// // //                     WhatsApp
// // //                   </a>
// // //                 </div>
// // //               </form>
// // //             </motion.div>
// // //           </div>
// // //         )}

// // //         {/* MAIN CONTENT SECTION */}
// // //         <section className="py-12 md:py-16 pb-20 md:pb-16">
// // //           <div className="container mx-auto px-4">
// // //             <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
// // //               <div className="min-w-0 space-y-8">
// // //                 {/* ABOUT SECTION */}
// // //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// // //                   <div className="mb-5 flex items-center gap-3">
// // //                     <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
// // //                       <GraduationCap size={22} />
// // //                     </div>
// // //                     <h2 className="text-2xl font-bold text-slate-900">
// // //                       {content?.aboutTitle || "About This Course"}
// // //                     </h2>
// // //                   </div>

// // //                   <p className="leading-8 text-slate-600">
// // //                     {content?.about || course.description}
// // //                   </p>
// // //                 </div>

// // //                 {/* CONTENT SECTIONS */}
// // //                 {content?.sections?.map((section, index) => (
// // //                   <motion.div
// // //                     key={section.title}
// // //                     initial={{ opacity: 0, y: 18 }}
// // //                     whileInView={{ opacity: 1, y: 0 }}
// // //                     viewport={{ once: true }}
// // //                     transition={{ delay: index * 0.05 }}
// // //                     className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
// // //                   >
// // //                     <h2 className="mb-4 text-2xl font-bold text-slate-900">
// // //                       {section.title} 
// // //                     </h2>

// // //                     <p className="leading-8 text-slate-600">
// // //                       {section.content}
// // //                     </p>

// // //                     {section.points && (
// // //                       <div className="mt-6 grid gap-4 sm:grid-cols-2">
// // //                         {section.points.map((point) => (
// // //                           <div
// // //                             key={point}
// // //                             className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
// // //                           >
// // //                             <CheckCircle
// // //                               size={20}
// // //                               className="mt-0.5 shrink-0 text-green-500"
// // //                             />
// // //                             <span className="font-medium text-slate-700">
// // //                               {point}
// // //                             </span>
// // //                           </div>
// // //                         ))}
// // //                       </div>
// // //                     )}
// // //                   </motion.div>
// // //                 ))}

// // //                 {/* HIGHLIGHTS */}
// // //                 {highlights.length > 0 && (
// // //                   <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// // //                     <h2 className="mb-6 text-2xl font-bold text-slate-900">
// // //                       Course Highlights
// // //                     </h2>

// // //                     <div className="grid gap-4 sm:grid-cols-2">
// // //                       {highlights.map((item, index) => (
// // //                         <motion.div
// // //                           key={item}
// // //                           initial={{ opacity: 0, y: 16 }}
// // //                           whileInView={{ opacity: 1, y: 0 }}
// // //                           viewport={{ once: true }}
// // //                           transition={{ delay: index * 0.05 }}
// // //                           className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4"
// // //                         >
// // //                           <CheckCircle
// // //                             size={20}
// // //                             className="mt-0.5 shrink-0 text-blue-600"
// // //                           />
// // //                           <span className="font-medium text-slate-700">
// // //                             {item}
// // //                           </span>
// // //                         </motion.div>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 {/* BENEFITS */}
// // //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// // //                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
// // //                     What You Will Get
// // //                   </h2>

// // //                   <div className="grid gap-4 sm:grid-cols-2">
// // //                     {benefits.map((item, index) => (
// // //                       <motion.div
// // //                         key={item}
// // //                         initial={{ opacity: 0, y: 16 }}
// // //                         whileInView={{ opacity: 1, y: 0 }}
// // //                         viewport={{ once: true }}
// // //                         transition={{ delay: index * 0.05 }}
// // //                         className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
// // //                       >
// // //                         <CheckCircle
// // //                           size={20}
// // //                           className="mt-0.5 shrink-0 text-green-500"
// // //                         />
// // //                         <span className="font-medium text-slate-700">
// // //                           {item}
// // //                         </span>
// // //                       </motion.div>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 {/* CURRICULUM */}
// // //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// // //                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
// // //                     Course Curriculum
// // //                   </h2>

// // //                   <div className="space-y-4">
// // //                     {syllabus.map((module, index) => (
// // //                       <motion.div
// // //                         key={module}
// // //                         initial={{ opacity: 0, x: -16 }}
// // //                         whileInView={{ opacity: 1, x: 0 }}
// // //                         viewport={{ once: true }}
// // //                         transition={{ delay: index * 0.05 }}
// // //                         className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
// // //                       >
// // //                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
// // //                           {index + 1}
// // //                         </div>
// // //                         <div>
// // //                           <h3 className="font-semibold text-slate-800">
// // //                             {module}
// // //                           </h3>
// // //                           <p className="text-sm text-slate-500">
// // //                             Practical concepts and implementation-based learning.
// // //                           </p>
// // //                         </div>
// // //                       </motion.div>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 {/* TOOLS & CAREER */}
// // //                 {(tools.length > 0 || careerOptions.length > 0) && (
// // //                   <div className="grid gap-6 md:grid-cols-2">
// // //                     {tools.length > 0 && (
// // //                       <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// // //                         <h2 className="mb-5 text-2xl font-bold text-slate-900">
// // //                           Tools You Will Learn
// // //                         </h2>

// // //                         <div className="flex flex-wrap gap-3">
// // //                           {tools.map((tool) => (
// // //                             <span
// // //                               key={tool}
// // //                               className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
// // //                             >
// // //                               {tool}
// // //                             </span>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     )}

// // //                     {careerOptions.length > 0 && (
// // //                       <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// // //                         <h2 className="mb-5 text-2xl font-bold text-slate-900">
// // //                           Career Options
// // //                         </h2>

// // //                         <div className="space-y-3">
// // //                           {careerOptions.map((item) => (
// // //                             <div
// // //                               key={item}
// // //                               className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3"
// // //                             >
// // //                               <Briefcase
// // //                                 size={18}
// // //                                 className="shrink-0 text-blue-600"
// // //                               />
// // //                               <span className="font-medium text-slate-700">
// // //                                 {item}
// // //                               </span>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 )}

// // //                 {/* WHO CAN JOIN */}
// // //                 {whoCanJoin.length > 0 && (
// // //                   <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// // //                     <h2 className="mb-6 text-2xl font-bold text-slate-900">
// // //                       Who Can Join This Course?
// // //                     </h2>

// // //                     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
// // //                       {whoCanJoin.map((item, index) => (
// // //                         <motion.div
// // //                           key={item}
// // //                           initial={{ opacity: 0, y: 16 }}
// // //                           whileInView={{ opacity: 1, y: 0 }}
// // //                           viewport={{ once: true }}
// // //                           transition={{ delay: index * 0.05 }}
// // //                           className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5"
// // //                         >
// // //                           <Users className="mb-3 text-blue-600" size={22} />
// // //                           <h3 className="font-semibold text-slate-800">
// // //                             {item}
// // //                           </h3>
// // //                         </motion.div>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 {/* WHY CHOOSE */}
// // //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// // //                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
// // //                     Why Choose Lone Star Academy
// // //                   </h2>

// // //                   <div className="grid gap-4 md:grid-cols-3">
// // //                     {whyChoose.map((item, index) => {
// // //                       const Icon = item.icon;
// // //                       return (
// // //                         <motion.div
// // //                           key={item.title}
// // //                           initial={{ opacity: 0, y: 16 }}
// // //                           whileInView={{ opacity: 1, y: 0 }}
// // //                           viewport={{ once: true }}
// // //                           transition={{ delay: index * 0.06 }}
// // //                           className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
// // //                         >
// // //                           <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-600">
// // //                             <Icon size={22} />
// // //                           </div>
// // //                           <h3 className="mb-2 text-lg font-semibold text-slate-900">
// // //                             {item.title}
// // //                           </h3>
// // //                           <p className="text-sm leading-7 text-slate-600">
// // //                             {item.desc}
// // //                           </p>
// // //                         </motion.div>
// // //                       );
// // //                     })}
// // //                   </div>
// // //                 </div>

// // //                 {/* FAQs */}
// // //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// // //                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
// // //                     Frequently Asked Questions
// // //                   </h2>

// // //                   <div className="space-y-4">
// // //                     {courseFaqs.map((faq, index) => (
// // //                       <div
// // //                         key={index}
// // //                         className="overflow-hidden rounded-2xl border border-slate-200"
// // //                       >
// // //                         <button
// // //                           type="button"
// // //                           onClick={() =>
// // //                             setOpenFaq(openFaq === index ? null : index)
// // //                           }
// // //                           className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left transition hover:bg-slate-50"
// // //                         >
// // //                           <span className="font-semibold text-slate-800">
// // //                             {faq.question}
// // //                           </span>
// // //                           <ChevronDown
// // //                             size={20}
// // //                             className={`shrink-0 text-slate-500 transition-transform ${openFaq === index ? "rotate-180" : ""
// // //                               }`}
// // //                           />
// // //                         </button>

// // //                         {openFaq === index && (
// // //                           <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
// // //                             <p className="leading-7 text-slate-600">
// // //                               {faq.answer}
// // //                             </p>
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 {/* CTA */}
// // //                 <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-xl">
// // //                   <h2 className="text-2xl font-bold md:text-3xl">
// // //                     Start Your Learning Journey Today
// // //                   </h2>
// // //                   <p className="mt-3 max-w-2xl text-slate-100">
// // //                     Join {course.name} at Lone Star Academy and learn with expert
// // //                     support, live classes, and practical projects.
// // //                   </p>

// // //                   <div className="mt-6 flex flex-col gap-4 sm:flex-row">
// // //                     <a
// // //                       href="tel:9711709644"
// // //                       className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
// // //                     >
// // //                       <Phone size={18} />
// // //                       Talk to Counselor
// // //                     </a>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* DESKTOP ENQUIRY FORM */}
// // //               <aside className="hidden lg:block min-w-0">
// // //                 <div className="lg:sticky lg:top-39">
// // //                   <div
// // //                     id="enquiry-form"
// // //                     className="rounded-[28px] border border-orange-100 bg-gradient-to-r from-blue-900 to-blue-800 p-6 shadow-2xl md:p-7"
// // //                   >
// // //                     <div className="mb-6">
// // //                       <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
// // //                         Enquiry Form
// // //                       </span>

// // //                       <h3 className="mt-3 text-2xl font-bold text-white">
// // //                         Course Enquiry
// // //                       </h3>
// // //                     </div>

// // //                     <form onSubmit={handleSubmit} className="space-y-4">
// // //                       <div>
// // //                         <label className="mb-2 block text-sm font-medium text-white">
// // //                           Full Name
// // //                         </label>
// // //                         <input
// // //                           type="text"
// // //                           name="name"
// // //                           value={formData.name}
// // //                           onChange={handleChange}
// // //                           placeholder="Enter your full name"
// // //                           className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
// // //                           required
// // //                         />
// // //                       </div>

// // //                       <div>
// // //                         <label className="mb-2 block text-sm font-medium text-white">
// // //                           Phone Number
// // //                         </label>
// // //                         <input
// // //                           type="tel"
// // //                           name="phone"
// // //                           value={formData.phone}
// // //                           onChange={handleChange}
// // //                           placeholder="Enter your phone number"
// // //                           className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
// // //                           required
// // //                         />
// // //                       </div>

// // //                       <button
// // //                         type="submit"
// // //                         className="flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:scale-[1.02]"
// // //                       >
// // //                         Submit Enquiry <ArrowRight size={18} />
// // //                       </button>

// // //                       <div className="flex items-center gap-3 py-2">
// // //                         <div className="h-px flex-1 bg-slate-200"></div>
// // //                         <span className="text-xs font-medium text-slate-400">
// // //                           OR
// // //                         </span>
// // //                         <div className="h-px flex-1 bg-slate-200"></div>
// // //                       </div>

// // //                       <div className="flex gap-3">
// // //                         <a
// // //                           href="tel:9711709644"
// // //                           className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
// // //                         >
// // //                           <Phone size={16} />
// // //                           Call
// // //                         </a>

// // //                         <a
// // //                           href="https://wa.me/919711709644"
// // //                           target="_blank"
// // //                           rel="noopener noreferrer"
// // //                           className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-green-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
// // //                         >
// // //                           WhatsApp
// // //                         </a>
// // //                       </div>
// // //                     </form>
// // //                   </div>
// // //                 </div>
// // //               </aside>
// // //             </div>
// // //           </div>
// // //         </section>
// // //   {/* OTHER COURSES SECTION */}
// // // <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
// // //   <div className="container mx-auto px-4">
// // //     <div className="mb-10 text-center">
// // //       <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
// // //         Explore Our Other Courses
// // //       </h2>
// // //       <p className="mt-3 text-slate-600">
// // //         Discover more industry-relevant programs to accelerate your career.
// // //       </p>
// // //     </div>

// // //     {loading ? (
// // //       <div className="flex justify-center py-12">
// // //         <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
// // //       </div>
// // //     ) : (
// // //       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
// // //         {allCourses
// // //           ?.filter((c: Course) => c._id !== course._id) // Exclude current course
// // //           .slice(0, 8) // Limit to 8 courses
// // //           .map((c: Course) => {
// // //             // Get image URL (handle both local and Cloudinary URLs)
// // //             const courseImage = c.image 
// // //               ? (c.image.startsWith('http') ? c.image : `${BASE_URL}${c.image}`)
// // //               : pageImages[c.name] || "/images/default-course.jpg";
            
// // //             // Get slug for the link
// // //             const courseSlug = c.slug || c.name.toLowerCase().replace(/\s+/g, "-");
            
// // //             return (
// // //               <motion.a
// // //                 key={c._id}
// // //                 href={`/${courseSlug}/`}
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.4 }}
// // //                 className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
// // //               >
// // //                 <div className="relative h-48 overflow-hidden">
// // //                   <img
// // //                     src={courseImage}
// // //                     alt={c.name}
// // //                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
// // //                     onError={(e) => {
// // //                       // Fallback if image fails to load
// // //                       (e.target as HTMLImageElement).src = "/images/default-course.jpg";
// // //                     }}
// // //                   />
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                  
// // //                   {/* Price Badge */}
// // //                   {c.price && (
// // //                     <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
// // //                       {c.price}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //                 <div className="p-5">
// // //                   <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
// // //                     {c.name}
// // //                   </h3>
// // //                   <p className="mt-1 text-sm text-slate-500 line-clamp-2">
// // //                     {c.description?.slice(0, 80)}...
// // //                   </p>
// // //                   <div className="mt-4 flex items-center text-sm font-semibold text-blue-600">
// // //                     Learn More
// // //                     <ArrowRight size={16} className="ml-2 transition group-hover:translate-x-1" />
// // //                   </div>
// // //                 </div>
// // //               </motion.a>
// // //             );
// // //           })}
// // //       </div>
// // //     )}

// // //     {!loading && allCourses?.filter((c: Course) => c._id !== course._id).length === 0 && (
// // //       <p className="text-center text-slate-500">No other courses available.</p>
// // //     )}
// // //   </div>
// // // </section>
// // //         <Footer />
// // //       </main>
// // //     </>
// // //   );
// // // }
// // "use client";
// // import { useEffect, useState } from "react";
// // import { motion } from "motion/react";

// // import {
// //   BookOpen,
// //   Clock,
// //   IndianRupee,
// //   CheckCircle,
// //   Star,
// //   Users,
// //   Award,
// //   Briefcase,
// //   Phone,
// //   ArrowRight,
// //   Sparkles,
// //   GraduationCap,
// //   ChevronDown,
// //   Info,
// //   X,
// //   MessageCircle,
// // } from "lucide-react";
// // import { Navigation } from "../components/Navigation";
// // import { Footer } from "../components/Footer";
// // import { BASE_URL } from "../../../utils/baseUrl";
// // import NotFound from "./NotFound";
// // import axios from "axios";

// // interface Course {
// //   _id: string;
// //   id?: string;
// //   slug?: string;
// //   name: string;
// //   price: string;
// //   duration: string;
// //   description: string;
// //   category: string;
// //   image: string | null;
// //   syllabus?: string[];
// //   highlights?: string[];
// //   tools?: string[];
// //   whoCanJoin?: string[];
// //   careerOptions?: string[];
// //   faqs?: { question: string; answer: string }[];
// //   seo?: {
// //     title?: string;
// //     description?: string;
// //     keywords?: string;
// //   };
// // }

// // type CourseSection = {
// //   title: string;
// //   content: string;
// //   points?: string[];
// // };

// // type CourseExtraContent = {
// //   aboutTitle: string;
// //   about: string;
// //   sections: CourseSection[];
// //   highlights: string[];
// //   tools: string[];
// //   whoCanJoin: string[];
// //   careerOptions: string[];
// // };

// // const courseContent: Record<string, CourseExtraContent> = {
// //   "Business Analytics": {
// //     aboutTitle: ": Business Analytics Online Course & Training in Delhi | Lone Star",
// //     about: "In this era of big data, choosing the right business analytics online course or business analyst course in Delhi can be a game changer for your career. At Lone Star Academy, we provide a practical, industry-relevant learning path for beginners, working professionals, and fresh graduates who want to build a strong career in analytics and decision making.",
// //     sections: [
// //       {
// //         title: "Why Choose Lone Star Academy for Business Analytics?",
// //         content: "At Lone Star Academy, we focus on making students job-ready through practical training, live projects, real industry case studies, and placement-oriented preparation.",
// //         points: [
// //           "Industry-relevant content designed by subject experts",
// //           "Live projects and real industry case studies",
// //           "Placement-oriented training with interview preparation",
// //           "Flexible online and offline classroom learning",
// //           "Mentorship from working professionals",
// //         ],
// //       },
// //       {
// //         title: "What You Will Learn",
// //         content: "This Business Analytics course gives you strong knowledge of basic and advanced analytics concepts with real business applications.",
// //         points: [
// //           "Introduction to Business Analytics",
// //           "Data Visualization with Excel, Power BI and Tableau",
// //           "SQL for Data Analysis",
// //           "Python for Data Analytics",
// //           "Statistical Analysis and Predictive Modeling",
// //           "Business Intelligence and Reporting",
// //         ],
// //       },
// //       {
// //         title: "Practice-Based Learning Model",
// //         content: "Our course focuses on practical learning instead of only theory. You will work on real datasets, case studies, live assignments, and a capstone project to build your portfolio.",
// //       },
// //       {
// //         title: "Job Support and Career Assistance",
// //         content: "Our Business Analyst training in Delhi includes resume building, mock interviews, soft skills training, job referrals, and placement assistance.",
// //       },
// //     ],
// //     highlights: [
// //       "Practical business analytics training",
// //       "Live projects and case studies",
// //       "Excel, Power BI, Tableau, SQL and Python",
// //       "Online and offline flexible batches",
// //       "Interview preparation",
// //       "Placement assistance",
// //     ],
// //     tools: ["Advanced Excel", "Power BI", "Tableau", "SQL", "Python"],
// //     whoCanJoin: [
// //       "Fresh graduates",
// //       "Working professionals",
// //       "Business owners",
// //       "IT professionals",
// //       "Beginners with no coding background",
// //     ],
// //     careerOptions: [
// //       "Business Analyst",
// //       "Data Analyst",
// //       "Reporting Analyst",
// //       "BI Developer",
// //       "Product Analyst",
// //     ],
// //   },
// //   "Data Analytics": {
// //     aboutTitle: "Data Analytics Course in Delhi - Learn Excel, SQL, Python, Power BI & Tableau",
// //     about: "An analytics program worth doing teaches you more than individual software tools. Lone Star Academy helps you link Excel, SQL, Python, statistics, data visualization, and business intelligence in one workflow that you can use for real-world analysis. The course is suitable for beginners as well as learners who want structured, guided instruction with hands-on practice.",
// //     sections: [
// //       {
// //         title: "Why Choose Our Data Analytics Training in Delhi?",
// //         content: "The training helps learners build skills in data cleaning, exploratory analysis, reporting, dashboard creation, trend analysis, and communicating findings effectively. These skills apply across IT, finance, retail, e-commerce, healthcare, marketing, consulting, and operations.",
// //         points: [
// //           "Curriculum linking Excel, SQL, Python, statistics, and BI tools",
// //           "Hands-on projects and business case studies",
// //           "Guided instruction with practical training",
// //           "Beginner to advanced learning path",
// //           "Career support as per program offering",
// //         ],
// //       },
// //       {
// //         title: "What Will You Learn?",
// //         content: "Our Data Analytics course covers the complete analytical workflow: Collect data → Clean data → Explore data → Identify patterns → Create visualizations → Interpret insights → Recommend solutions.",
// //         points: [
// //           "Excel for Data Analysis: formulas, lookup functions, PivotTables, charts, conditional formatting, and dashboards",
// //           "SQL for Data Analytics: filtering, sorting, aggregation, joins, subqueries, CTEs, and analytical queries",
// //           "Python for Data Analytics: Pandas, NumPy, Matplotlib, and Seaborn for data manipulation and visualization",
// //           "Power BI and Tableau: dashboards, calculated fields, reports, and interactive business intelligence",
// //           "Statistics for Data Analysis: descriptive statistics, probability, correlation, regression, distributions, and hypothesis testing",
// //           "Practical Projects and Business Case Studies: sales analysis, customer behaviour, marketing and financial reporting, HR analytics, and operational dashboards",
// //         ],
// //       },
// //       {
// //         title: "Data Analytics Certification in Delhi",
// //         content: "A certificate validates course completion and shows that you have followed a structured program. However, employers usually look for more than a certificate: real-life projects, analytical thinking, SQL knowledge, dashboards, and the ability to explain business insights. That is why our program combines certification with hands-on experience and practical skills. Please confirm the exact certification details with the academy before enrollment.",
// //       },
// //       {
// //         title: "Placement and Career Support",
// //         content: "Placement support is different from an employment guarantee. Our career support can include resume building, interview preparation, mock interviews, portfolio guidance, and help identifying relevant job opportunities. Your final role depends on your education, experience, technical skills, portfolio, and interview performance.",
// //       },
// //       {
// //         title: "Why Learn Data Analytics in Delhi?",
// //         content: "Delhi and the NCR region offer varied opportunities across technology, consulting, banking, finance, retail, healthcare, education, e-commerce, and professional services. Learning locally gives you easy access to instructor-led training, professional networking, and career-focused education. Students from nearby NCR areas can also apply based on their preferred mode of learning and batch timings.",
// //       },
// //     ],
// //     highlights: [
// //       "Beginner to advanced data analytics training",
// //       "Excel, SQL, Python, Power BI and Tableau",
// //       "Hands-on projects and business case studies",
// //       "Statistics for data analysis",
// //       "Certification on course completion",
// //       "Career support and interview preparation",
// //     ],
// //     tools: ["Microsoft Excel", "SQL", "Python", "Power BI", "Tableau"],
// //     whoCanJoin: [
// //       "Graduates and college students",
// //       "BBA, B.Com, MBA and engineering graduates",
// //       "IT and non-IT professionals",
// //       "Business and reporting professionals",
// //       "Professionals planning a career transition",
// //       "Learners who want to strengthen Excel, SQL, Python or BI skills",
// //     ],
// //     careerOptions: [
// //       "Data Analyst",
// //       "Business Analyst",
// //       "BI Analyst",
// //       "Reporting Analyst",
// //       "MIS Analyst",
// //       "Marketing Analyst",
// //       "Operations Analyst",
// //       "Financial Analyst",
// //     ],
// //   },
// //   "Data Science": {
// //     aboutTitle: "Data Science Course in Delhi with Practical Training & Placement Support",
// //     about: "Data science is more than just knowing algorithms. Practitioners at all levels must work with data, write and read code, understand the output of code, solve business problems, and communicate findings.",
// //     sections: [
// //       {
// //         title: "Why Choose Our Data Science Course in Delhi?",
// //         content: "Lone Star Academy believes in teaching that works. Students are exposed to live projects, case studies, assignments, industry tools, resume building, mock interviews and career assistance. The academy also offers both physical class sessions and online education options.",
// //         points: [
// //           "Practical, industry-oriented training",
// //           "Experienced industry trainers",
// //           "Live projects and case studies",
// //           "Hands-on assignments",
// //           "Coding and interview preparation",
// //           "Resume and LinkedIn profile support",
// //           "Mock interviews",
// //           "Placement guidance and job referrals",
// //           "Course completion certification",
// //           "Offline and online learning options",
// //         ],
// //       },
// //       {
// //         title: "Data Science Course Overview",
// //         content: "Lone Star Academy's Delhi centre is located at B-1/1, 2nd Floor, Janakpuri, New Delhi - 110058, making the classroom program accessible to learners from West Delhi and surrounding Delhi-NCR areas.",
// //         points: [
// //           "Location: Janakpuri, New Delhi",
// //           "Training Mode: Offline classroom and online",
// //           "Learning Approach: Practical and project-based",
// //           "Suitable For: Students, graduates and working professionals",
// //           "Projects: Live projects and practical assignments",
// //           "Certification: Lone Star Academy course certificate",
// //           "Career Support: Resume, interviews and placement guidance",
// //         ],
// //       },
// //       {
// //         title: "What Will You Learn in Data Science?",
// //         content: "A good data science background includes programming, statistics, analytics, machine learning, and business problem solving all rolled into one.",
// //         points: [
// //           "Python for Data Science: Acquire the programming skills needed to manipulate data and build data driven applications. Python is also popular for data preprocessing, data analysis, data visualization and machine learning pipelines.",
// //           "Statistics & Data Analysis: The statistical ideas behind the way we interpret data and find patterns, relationships and make decisions with data.",
// //           "Machine Learning: Gain a foundation in machine learning and the practical uses of models for classifying, predicting, interpreting patterns, and more.",
// //           "Data Analytics & Visualization: Through data analysis, visualization, reporting and interpretation, you will learn to convert raw data to actionable intelligence.",
// //           "Practical Projects: Projects and case studies help connect classroom concepts to what is needed on the job. Students practise coding solutions, analyse data and work through real-world cases.",
// //         ],
// //       },
// //       {
// //         title: "Data Science Offline Course in Delhi",
// //         content: "For students who prefer face to face interaction with the trainers and classmates, the data science offline course in Delhi offers a classroom learning environment at Lone Star Academy's Janakpuri centre. Offline learning can be especially handy when you have instant doubts to be resolved, guided coding practice, classroom discussions and structured interaction with the trainers. Lone Star Academy also offers online learning options for students and professionals looking for more flexibility.",
// //       },
// //       {
// //         title: "Projects and Practical Learning",
// //         content: "Practice is the difference between learning data science in theory and being able to implement it in the real world. The training methodology at Lone Star Academy involves live projects, hands-on exercises, case studies and real-time implementation. These can be used by students to reinforce their data analysis and machine learning skills, as well as creating content that can be added to a professional portfolio.",
// //       },
// //       {
// //         title: "Data Science Course in Delhi with Placement Support",
// //         content: "Training is just one aspect of career preparation. Lone Star Academy offers career services, including resume design, LinkedIn profile optimization, mock interviews, soft-skills training, job referrals, placement support and career counselling. The academy also has a hiring partner network and offers placement-centric support to learners. Placement assistance is guidance in career and access to opportunities, and not an alternative to one's individual skills, performance in interview and eligibility.",
// //       },
// //       {
// //         title: "Why Study Data Science in Delhi-NCR?",
// //         content: "Delhi NCR has a vast professional ecosystem that includes technology, consulting, finance, e-commerce, analytics, and various other data-focused industries. Studying at a local data science training institute in Delhi can allow you access to a blend of offline training and real-time professional environment. Lone Star Academy Janakpuri serves students from Vikas Puri, Tilak Nagar, Hari Nagar, Rajouri Garden, Dwarka, Uttam Nagar, Punjabi Bagh, Patel Nagar, Rohini and other parts of Delhi, as well as Noida, Ghaziabad and Gurgaon.",
// //       },
// //       {
// //         title: "Why Choose Lone Star Academy?",
// //         content: "Lone Star Academy was founded in 2013 and its training model is a blend of expert mentorship, industry-relevant curriculum, hands-on execution, and career assistance. According to the academy, it has trained 10,000+ students and has partnered with 100+ industry expert trainers for its programs. The process: take a free demo class, learn from the trainers, do hands-on projects, get your resume and interviews ready, get placed, and start your career.",
// //       },
// //     ],
// //     highlights: [
// //       "Practical, industry-oriented training",
// //       "Live projects and case studies",
// //       "Offline and online learning options",
// //       "Resume and LinkedIn profile support",
// //       "Placement guidance and job referrals",
// //       "Course completion certification",
// //     ],
// //     tools: ["Python", "SQL", "Machine Learning", "Statistics", "Data Visualization"],
// //     whoCanJoin: [
// //       "College students and fresh graduates",
// //       "Professionals from IT and technology backgrounds",
// //       "Data and business analysts",
// //       "Working professionals planning a career transition",
// //       "Professionals who want to strengthen Python, analytics, or machine learning skills",
// //       "Learners beginning their journey toward data science",
// //     ],
// //     careerOptions: [
// //       "Data Analyst",
// //       "Data Scientist",
// //       "Business Analyst",
// //       "Machine Learning Engineer",
// //       "Analytics Professional",
// //       "AI and machine learning roles",
// //     ],
// //   },
// //   "Digital Marketing": {
// //     aboutTitle: "Best Online Digital Marketing Course & Digital Marketing Course in Delhi",
// //     about: "Digital marketing is one of the fastest-growing career fields. At Lone Star Academy, our Digital Marketing course combines real-world skills, industry tools, live projects, certifications, and placement assistance.",
// //     sections: [
// //       {
// //         title: "Why Choose Lone Star Academy for Digital Marketing?",
// //         content: "We train, mentor, and prepare students for real digital marketing work through practical projects and industry-standard tools.",
// //         points: [
// //           "Industry-relevant curriculum based on current trends",
// //           "Live project training",
// //           "Expert mentors from top agencies",
// //           "Certifications to enhance your credibility",
// //           "Placement support",
// //         ],
// //       },
// //       {
// //         title: "Course Highlights",
// //         content: "Our Digital Marketing course covers both basic and advanced digital marketing skills.",
// //         points: [
// //           "SEO",
// //           "Google Ads and PPC Campaigns",
// //           "Social Media Marketing",
// //           "Content Marketing",
// //           "Email Marketing Automation",
// //           "Affiliate Marketing",
// //           "Web Analytics and Tracking",
// //           "AI Tools in Digital Marketing",
// //         ],
// //       },
// //       {
// //         title: "Practical Campaign Training",
// //         content: "Students work on live business websites, ad campaign creation, SEO audits, social media strategy, and reporting concepts.",
// //       },
// //       {
// //         title: "Placement Assistance",
// //         content: "Our placement assistance includes resume building, interview coaching, expert mock interviews, hiring partner access, and internship opportunities.",
// //       },
// //     ],
// //     highlights: [
// //       "SEO and Google Ads training",
// //       "Social media marketing",
// //       "Live campaign projects",
// //       "AI tools in digital marketing",
// //       "Internship support",
// //       "Placement assistance",
// //     ],
// //     tools: [
// //       "SEO",
// //       "Google Ads",
// //       "Meta Ads",
// //       "Google Analytics",
// //       "Email Marketing",
// //       "AI Tools",
// //     ],
// //     whoCanJoin: [
// //       "Students",
// //       "Job seekers",
// //       "Entrepreneurs",
// //       "Freelancers",
// //       "Working professionals",
// //     ],
// //     careerOptions: [
// //       "SEO Specialist",
// //       "Social Media Manager",
// //       "PPC Expert",
// //       "Content Strategist",
// //       "Digital Marketing Manager",
// //     ],
// //   },
// //   "Cloud Computing": {
// //     aboutTitle: "Cloud Computing Courses in Delhi & Online",
// //     about: "If you are looking for practical Cloud Computing training, online cloud courses, real-life environment-based learning, and job-oriented cloud courses in Delhi, Lone Star Academy is the perfect choice for you.",
// //     sections: [
// //       {
// //         title: "Why Select Lone Star Academy for Cloud Computing Training?",
// //         content: "A good cloud training institute can shape your career path. Lone Star Academy provides quality education, practical lab sessions, expert guidance, and placement support.",
// //         points: [
// //           "Industry-relevant AWS, Azure and Google Cloud based curriculum",
// //           "Real-world experience through practical lab sessions",
// //           "Trained professionals with industry exposure",
// //           "In-house placement support and interview preparation",
// //           "Flexible online and classroom learning options",
// //         ],
// //       },
// //       {
// //         title: "What You Will Learn",
// //         content: "Our Cloud Computing course covers everything from cloud basics to advanced deployment and security concepts.",
// //         points: [
// //           "Introduction to Cloud Computing and Architecture",
// //           "Virtualization and basic networking",
// //           "Cloud Service Models: IaaS, PaaS and SaaS",
// //           "AWS, Microsoft Azure and Google Cloud Platforms",
// //           "Security and Compliance in the Cloud",
// //           "DevOps and Automation Tools",
// //           "Deployment and Migration Techniques",
// //         ],
// //       },
// //       {
// //         title: "Cloud Computing Training with Placement",
// //         content: "Our placement assistance includes resume building, portfolio development, mock interviews, HR preparation, job referrals, hiring partner connections, and communication training.",
// //       },
// //       {
// //         title: "Certification Preparation",
// //         content: "The course helps students prepare for AWS, Microsoft Azure, and Google Cloud certifications with practical guidance and career support.",
// //       },
// //     ],
// //     highlights: [
// //       "AWS, Azure and Google Cloud curriculum",
// //       "Practical lab sessions",
// //       "Cloud security and compliance",
// //       "DevOps and automation tools",
// //       "Certification preparation",
// //       "Placement assistance",
// //     ],
// //     tools: [
// //       "AWS",
// //       "Microsoft Azure",
// //       "Google Cloud",
// //       "Docker",
// //       "Kubernetes",
// //       "DevOps Tools",
// //     ],
// //     whoCanJoin: [
// //       "Fresh graduates",
// //       "IT professionals",
// //       "Career switchers",
// //       "Business owners",
// //       "Beginners in cloud technology",
// //     ],
// //     careerOptions: [
// //       "Cloud Engineer",
// //       "Solutions Architect",
// //       "DevOps Engineer",
// //       "Cloud Security Specialist",
// //       "System Administrator",
// //     ],
// //   },
// // };

// // // const courseSchemas: Record<string, object[]> = {
// // //   "Data Science": [
// // //     {
// // //       "@context": "https://schema.org/",
// // //       "@type": "BreadcrumbList",
// // //       itemListElement: [
// // //         {
// // //           "@type": "ListItem",
// // //           position: 1,
// // //           name: "Home",
// // //           item: "https://www.lonestaracademy.in/",
// // //         },
// // //         {
// // //           "@type": "ListItem",
// // //           position: 2,
// // //           name: "Data Science Course in Delhi",
// // //           item: "https://www.lonestaracademy.in/data-science-course-online-with-placement-delhi/",
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       "@context": "https://schema.org/",
// // //       "@type": "Product",
// // //       name: "Data Science Course in Delhi with Practical Training & Placement Support",
// // //       image: "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784789428/lonestar_academy/yz6sed8pmiwupqwfuqz2.jpg",
// // //       description: "Grow your data science skills with Lone Star Academy, a career-focused training institute in Janakpuri, New Delhi. The Data Science Course in Delhi is a blend of instructor-led learning, hands-on assignments, live projects, coding practice, and career readiness to equip students and working professionals with job-ready skills.",
// // //       brand: {
// // //         "@type": "Brand",
// // //         name: "Lone Star Academy",
// // //       },
// // //       aggregateRating: {
// // //         "@type": "AggregateRating",
// // //         ratingValue: "4.5",
// // //         bestRating: "5",
// // //         worstRating: "1",
// // //         ratingCount: "25",
// // //       },
// // //     },
// // //   ],
// // // };


// // const courseSchemas: Record<string, object[]> = {
// //   "Data Science": [
// //     {
// //       "@context": "https://schema.org/",
// //       "@type": "BreadcrumbList",
// //       itemListElement: [
// //         {
// //           "@type": "ListItem",
// //           position: 1,
// //           name: "Home",
// //           item: "https://www.lonestaracademy.in/",
// //         },
// //         {
// //           "@type": "ListItem",
// //           position: 2,
// //           name: "Data Science Course in Delhi",
// //           item: "https://www.lonestaracademy.in/data-science-course-online-with-placement-delhi/",
// //         },
// //       ],
// //     },
// //     {
// //       "@context": "https://schema.org/",
// //       "@type": "Product",
// //       name: "Data Science Course in Delhi with Practical Training & Placement Support",
// //       image: "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784789428/lonestar_academy/yz6sed8pmiwupqwfuqz2.jpg",
// //       description: "Grow your data science skills with Lone Star Academy, a career-focused training institute in Janakpuri, New Delhi. The Data Science Course in Delhi is a blend of instructor-led learning, hands-on assignments, live projects, coding practice, and career readiness to equip students and working professionals with job-ready skills.",
// //       brand: {
// //         "@type": "Brand",
// //         name: "Lone Star Academy",
// //       },
// //       aggregateRating: {
// //         "@type": "AggregateRating",
// //         ratingValue: "4.5",
// //         bestRating: "5",
// //         worstRating: "1",
// //         ratingCount: "25",
// //       },
// //     },
// //   ],

// //   // ✅ NEW ENTRY
// //   "Data Analytics": [
// //     {
// //       "@context": "https://schema.org/",
// //       "@type": "BreadcrumbList",
// //       itemListElement: [
// //         {
// //           "@type": "ListItem",
// //           position: 1,
// //           name: "Home",
// //           item: "https://www.lonestaracademy.in/",
// //         },
// //         {
// //           "@type": "ListItem",
// //           position: 2,
// //           name: "Data Analytics Courses in Delhi",
// //           item: "https://www.lonestaracademy.in/data-analytics-courses-online-delhi/",
// //         },
// //       ],
// //     },
// //     {
// //       "@context": "https://schema.org/",
// //       "@type": "Product",
// //       name: "Data Analytics Course in Delhi with Practical Projects & Career Support",
// //       image: "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784788643/lonestar_academy/ynkxwnhw7b5kfr0n3ysh.jpg",
// //       description: "Develop hands-on, job-ready analytics skills with Lone Star Academy data analytics courses in Delhi. The training is built around the skills businesses use to transform raw data into actionable insights, reports, dashboards, and better decisions. Whether you are a graduate, student, working professional, or looking to transition to a career, the program can assist you in building a structured knowledge of data analysis and business intelligence.",
// //       brand: {
// //         "@type": "Brand",
// //         name: "Lone Star Academy",
// //       },
// //       aggregateRating: {
// //         "@type": "AggregateRating",
// //         ratingValue: "4.5",
// //         bestRating: "5",
// //         worstRating: "1",
// //         ratingCount: "30",
// //       },
// //     },
// //   ],
// // };

// // const curriculum: Record<string, string[]> = {
// //   "Business Analytics": [
// //     "Introduction to Business Analytics",
// //     "Advanced Excel",
// //     "Power BI Fundamentals",
// //     "Tableau Dashboards",
// //     "SQL for Analytics",
// //     "Business Reporting",
// //     "Real-world Case Studies",
// //   ],
// //   "Data Analytics": [
// //     "Python Basics",
// //     "NumPy & Pandas",
// //     "SQL & Database Concepts",
// //     "Data Cleaning",
// //     "Visualization with Power BI",
// //     "Statistics for Analytics",
// //     "Capstone Project",
// //   ],
// //   "Data Science": [
// //     "Python for Data Science",
// //     "Machine Learning",
// //     "Deep Learning Basics",
// //     "NLP Fundamentals",
// //     "Data Engineering Concepts",
// //     "Model Deployment",
// //     "Industry Projects",
// //   ],
// //   "Digital Marketing": [
// //     "SEO Fundamentals",
// //     "Google Ads",
// //     "Social Media Marketing",
// //     "Content Marketing",
// //     "Email Marketing",
// //     "Analytics & Reporting",
// //     "Practical Campaign Projects",
// //   ],
// //   "Cloud Computing": [
// //     "Cloud Fundamentals",
// //     "AWS Services",
// //     "Microsoft Azure Basics",
// //     "Google Cloud Basics",
// //     "Docker & Kubernetes",
// //     "Cloud Security",
// //     "Certification Preparation",
// //   ],
// // };

// // const benefits = [
// //   "100% Practical Training",
// //   "Live Projects & Assignments",
// //   "Interview Preparation",
// //   "Resume Building Support",
// //   "Placement Assistance",
// //   "Recorded Backup Sessions",
// //   "Expert Trainers",
// //   "Flexible Learning Structure",
// // ];

// // const whyChoose = [
// //   {
// //     icon: Award,
// //     title: "Industry-Oriented Learning",
// //     desc: "Learn with real tools, real scenarios, and job-ready practical modules.",
// //   },
// //   {
// //     icon: Briefcase,
// //     title: "Placement Assistance",
// //     desc: "We help students with resume support, mock interviews, and placement guidance.",
// //   },
// //   {
// //     icon: Users,
// //     title: "Expert Mentorship",
// //     desc: "Get support from experienced trainers with practical domain knowledge.",
// //   },
// // ];

// // const pageImages: Record<string, string> = {
// //   "Business Analytics": "/businessanlytics.jpg",
// //   "Data Analytics": "/dataanalytics.jpg",
// //   "Data Science": "/datascience.jpg",
// //   "Digital Marketing": "/Digitalmarketing.jpg",
// //   "Cloud Computing": "/cloudcomputing.jpg",
// // };

// // const faqs: Record<string, { question: string; answer: string }[]> = {
// //   "Business Analytics": [
// //     {
// //       question: "Who can join the Business Analytics course?",
// //       answer: "Students, working professionals, freshers, and business professionals who want to build reporting, dashboard, and analytics skills can join this course.",
// //     },
// //     {
// //       question: "What tools are covered in Business Analytics?",
// //       answer: "This course covers Excel, Power BI, Tableau, SQL, reporting concepts, and practical business case studies.",
// //     },
// //     {
// //       question: "Do you provide placement assistance for Business Analytics?",
// //       answer: "Yes, we provide resume support, interview preparation, mock interviews, and placement guidance.",
// //     },
// //     {
// //       question: "Is this course suitable for beginners?",
// //       answer: "Yes, the course starts from fundamentals and gradually moves to advanced practical concepts.",
// //     },
// //   ],
// //   "Data Analytics": [
// //     {
// //       question: "What will I learn in the Data Analytics course?",
// //       answer: "You will learn Python, Pandas, NumPy, SQL, data cleaning, dashboards, statistics, and project-based analytics skills.",
// //     },
// //     {
// //       question: "Is coding required for Data Analytics?",
// //       answer: "Basic coding helps, but beginners can also join because the training starts from fundamentals.",
// //     },
// //     {
// //       question: "Will I work on practical projects?",
// //       answer: "Yes, the course includes hands-on assignments, case studies, and a capstone project.",
// //     },
// //     {
// //       question: "Can freshers join the Data Analytics course?",
// //       answer: "Yes, freshers can join this course to build job-ready analytics skills.",
// //     },
// //   ],
// //   "Data Science": [
// //     {
// //       question: "What topics are included in the Data Science course?",
// //       answer: "The course includes Python, machine learning, deep learning basics, NLP, data engineering concepts, and model deployment.",
// //     },
// //     {
// //       question: "Is Data Science good for career growth?",
// //       answer: "Yes, Data Science is one of the most in-demand fields with strong career opportunities across industries.",
// //     },
// //     {
// //       question: "Do I need prior programming experience?",
// //       answer: "No, beginners can start with this course, but regular practice is important.",
// //     },
// //     {
// //       question: "Will I get project experience in Data Science?",
// //       answer: "Yes, students work on industry-oriented projects to improve practical understanding.",
// //     },
// //   ],
// //   "Digital Marketing": [
// //     {
// //       question: "What modules are covered in the Digital Marketing course?",
// //       answer: "This course covers SEO, Google Ads, social media marketing, content marketing, email marketing, and performance analytics.",
// //     },
// //     {
// //       question: "Is Digital Marketing a good option for beginners?",
// //       answer: "Yes, it is a beginner-friendly field and suitable for students, job seekers, and business owners.",
// //     },
// //     {
// //       question: "Will I learn practical campaign execution?",
// //       answer: "Yes, the course includes practical campaign work, ad strategy, and reporting concepts.",
// //     },
// //     {
// //       question: "Do you provide certification support?",
// //       answer: "Yes, we guide students for course completion and help them prepare for relevant certifications.",
// //     },
// //   ],
// //   "Cloud Computing": [
// //     {
// //       question: "What will I learn in the Cloud Computing course?",
// //       answer: "You will learn cloud fundamentals, AWS, Azure, Google Cloud basics, Docker, Kubernetes, and cloud security concepts.",
// //     },
// //     {
// //       question: "Is Cloud Computing suitable for beginners?",
// //       answer: "Yes, this course starts with core cloud fundamentals before moving to advanced tools.",
// //     },
// //     {
// //       question: "Does the course include certification preparation?",
// //       answer: "Yes, the course includes support for cloud certification preparation.",
// //     },
// //     {
// //       question: "Will I learn deployment and cloud services practically?",
// //       answer: "Yes, the training includes practical exposure to cloud platforms and deployment-related concepts.",
// //     },
// //   ],
// // };

// // export default function CourseDetailPage({
// //   slug,
// //   courseData,
// // }: {
// //   slug: string;
// //   courseData: Course;
// // }) {
// //   const [openFaq, setOpenFaq] = useState<number | null>(0);
// //   const [showMobileForm, setShowMobileForm] = useState(false);
// //   const [allCourses, setAllCourses] = useState<Course[] | null>(null);
// //   const course = courseData;
// //   const [loading, setLoading] = useState(false);

// //   const getAllCourses = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await axios.get(`${BASE_URL}/api/courses`);
// //       setAllCourses(response.data);
// //     } catch (err) {
// //       console.error("Error fetching courses:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // useEffect to fetch courses on mount
// //   useEffect(() => {
// //     getAllCourses();
// //   }, []);

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     phone: "",
// //     email: "",
// //     course: course?.name || "",
// //     message: "",
// //   });

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// //   ) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     alert("Your enquiry has been submitted successfully.");
// //     setFormData({
// //       name: "",
// //       phone: "",
// //       email: "",
// //       course: course?.name || "",
// //       message: "",
// //     });
// //     setShowMobileForm(false);
// //   };

// //   if (!course) {
// //     return <NotFound />;
// //   }

// //   // Content lookup: category first, then course name as a fallback.
// //   // (course.category in DB must match a key of courseContent, e.g. "Data Analytics")
// //   const findContent = (): CourseExtraContent | undefined => {
// //     const norm = (s?: string) => (s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
// //     const candidates = [course.category, course.name, course.slug].map(norm);

// //     // 1) exact match
// //     for (const key of Object.keys(courseContent)) {
// //       if (candidates.includes(norm(key))) return courseContent[key];
// //     }
// //     // 2) loose match: category/name/slug mein key ka naam aata ho
// //     for (const key of Object.keys(courseContent)) {
// //       if (candidates.some((c) => c && c.includes(norm(key)))) {
// //         return courseContent[key];
// //       }
// //     }
// //     return undefined;
// //   };

// //   const content = findContent();

// //   const heroImage = course.image
// //     ? course.image.startsWith("http")
// //       ? course.image
// //       : `${BASE_URL}${course.image}`
// //     : pageImages[course.name] || "/images/default-course.jpg";

// //   const staticKey =
// //     [course.category, course.name].find((k) => k && curriculum[k]) ||
// //     [course.category, course.name].find((k) => k && faqs[k]) ||
// //     "";

// //   // DB syllabus + static curriculum (duplicates hata diye jaate hain)
// //   const mergedSyllabus = (() => {
// //     const seen = new Set<string>();
// //     return [...(course.syllabus || []), ...(curriculum[staticKey] || [])].filter(
// //       (m) => {
// //         const key = m.trim().toLowerCase();
// //         if (!key || seen.has(key)) return false;
// //         seen.add(key);
// //         return true;
// //       }
// //     );
// //   })();

// //   const syllabus =
// //     mergedSyllabus.length > 0
// //       ? mergedSyllabus
// //       : [
// //           "Module 1: Introduction",
// //           "Module 2: Core Concepts",
// //           "Module 3: Advanced Topics",
// //           "Module 4: Practical Implementation",
// //           "Final Project",
// //         ];

// //   // DB FAQs + static FAQs (same question dobara nahi aayega)
// //   const mergedFaqs = (() => {
// //     const seen = new Set<string>();
// //     return [...(course.faqs || []), ...(faqs[staticKey] || [])].filter((f) => {
// //       const key = f.question.trim().toLowerCase();
// //       if (!key || seen.has(key)) return false;
// //       seen.add(key);
// //       return true;
// //     });
// //   })();

// //   const courseFaqs =
// //     mergedFaqs.length > 0
// //       ? mergedFaqs
// //       : [
// //           {
// //             question: "Who can join this course?",
// //             answer: "Students, freshers, and working professionals interested in practical learning can join this course.",
// //           },
// //           {
// //             question: "Do you provide placement assistance?",
// //             answer: "Yes, we provide resume guidance, interview preparation, and placement support.",
// //           },
// //           {
// //             question: "Is this course beginner friendly?",
// //             answer: "Yes, the course is designed to support beginners as well as learners with some prior knowledge.",
// //           },
// //         ];

// //   // DB values pehle, phir courseContent ki values. Duplicates hata diye jaate hain.
// //   const mergeUnique = (dbList?: string[], contentList?: string[]): string[] => {
// //     const seen = new Set<string>();
// //     return [...(dbList || []), ...(contentList || [])].filter((item) => {
// //       const key = item.trim().toLowerCase();
// //       if (!key || seen.has(key)) return false;
// //       seen.add(key);
// //       return true;
// //     });
// //   };

// //   const highlights = mergeUnique(course.highlights, content?.highlights);
// //   const tools = mergeUnique(course.tools, content?.tools);
// //   const careerOptions = mergeUnique(course.careerOptions, content?.careerOptions);
// //   const whoCanJoin = mergeUnique(course.whoCanJoin, content?.whoCanJoin);

// //   const schemas = courseSchemas[staticKey] || [];

// //   return (
// //     <>
// //       {schemas.map((schema, i) => (
// //         <script
// //           key={i}
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{
// //             __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
// //           }}
// //         />
// //       ))}

// //       <Navigation />

// //       <main className="bg-white">
// //         {/* HERO SECTION */}
// //         <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-14 text-white md:py-20">
// //           <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
// //           <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

// //           <div className="container mx-auto px-4">
// //             <div className="grid items-center gap-10 lg:grid-cols-2">
// //               <motion.div
// //                 initial={{ opacity: 0, y: 24 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="relative z-10"
// //               >
// //                 <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-100 backdrop-blur-md">
// //                   <Sparkles size={14} />
// //                   Lone Star Academy
// //                 </span>

// //                 <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
// //                   {course.name}
// //                 </h1>

// //                 <p className="mb-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
// //                   {course.description || content?.about}
// //                 </p>

// //                 <div className="mb-8 flex flex-wrap gap-4">
// //                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
// //                     <div className="flex items-center gap-2">
// //                       <Clock size={18} className="text-cyan-300" />
// //                       <span className="text-sm">{course.duration}</span>
// //                     </div>
// //                   </div>

// //                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
// //                     <div className="flex items-center gap-2">
// //                       <IndianRupee size={18} className="text-cyan-300" />
// //                       <span className="text-sm">{course.price}</span>
// //                     </div>
// //                   </div>

// //                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
// //                     <div className="flex items-center gap-2">
// //                       <Users size={18} className="text-cyan-300" />
// //                       <span className="text-sm">500+ Students</span>
// //                     </div>
// //                   </div>

// //                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
// //                     <div className="flex items-center gap-2">
// //                       <Star
// //                         size={18}
// //                         className="fill-yellow-400 text-yellow-400"
// //                       />
// //                       <span className="text-sm">4.9 Rating</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <a
// //                   href="tel:9711709644"
// //                   className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20  px-6 py-3 font-semibold text-orange-500 transition bg-white hover:text-slate-900"
// //                 >
// //                   <Phone size={18} />
// //                   Call Now
// //                 </a>

// //                 <a
// //                   href="https://wa.me/919711709644"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="ml-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#20BD5A] hover:-translate-y-0.5"
// //                 >
// //                   <MessageCircle size={18} />
// //                   WhatsApp Now
// //                 </a>
// //               </motion.div>

// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.94 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 transition={{ delay: 0.1 }}
// //                 className="relative z-10"
// //               >
// //                 <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
// //                   <img
// //                     src={heroImage}
// //                     alt={course.name}
// //                     className="h-[260px] w-full rounded-[22px] object-cover sm:h-[360px] lg:h-[460px]"
// //                   />
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Mobile Fixed Bottom Action Bar */}
// //         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
// //           <div className="flex items-center gap-3 p-3">
// //             <a
// //               href="tel:9711709644"
// //               className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-green-700"
// //             >
// //               <Phone size={18} />
// //               Call Now
// //             </a>

// //             <button
// //               onClick={() => setShowMobileForm(true)}
// //               className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-orange-700"
// //             >
// //               <MessageCircle size={18} />
// //               Enquiry
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Enquiry Form Modal */}
// //         {showMobileForm && (
// //           <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 md:hidden">
// //             <motion.div
// //               initial={{ opacity: 0, y: 100 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: 100 }}
// //               className="w-full max-w-md rounded-t-3xl bg-white shadow-2xl"
// //             >
// //               <div className="flex items-center justify-between border-b border-slate-200 p-5">
// //                 <div>
// //                   <h3 className="text-xl font-bold text-slate-900">Course Enquiry</h3>
// //                   <p className="text-sm text-slate-500">Fill details to get more info</p>
// //                 </div>
// //                 <button
// //                   onClick={() => setShowMobileForm(false)}
// //                   className="rounded-full p-2 transition hover:bg-slate-100"
// //                 >
// //                   <X size={24} className="text-slate-500" />
// //                 </button>
// //               </div>

// //               <form onSubmit={handleSubmit} className="p-5 space-y-4">
// //                 <div>
// //                   <label className="mb-2 block text-sm font-medium text-slate-700">
// //                     Full Name *
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     placeholder="Enter your full name"
// //                     className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="mb-2 block text-sm font-medium text-slate-700">
// //                     Phone Number *
// //                   </label>
// //                   <input
// //                     type="tel"
// //                     name="phone"
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                     placeholder="Enter your phone number"
// //                     className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
// //                     required
// //                   />
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-700"
// //                 >
// //                   Submit Enquiry <ArrowRight size={18} />
// //                 </button>

// //                 <div className="flex items-center gap-3">
// //                   <div className="h-px flex-1 bg-slate-200"></div>
// //                   <span className="text-xs font-medium text-slate-400">OR</span>
// //                   <div className="h-px flex-1 bg-slate-200"></div>
// //                 </div>

// //                 <div className="flex gap-3">
// //                   <a
// //                     href="tel:9711709644"
// //                     className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
// //                   >
// //                     <Phone size={16} />
// //                     Call Now
// //                   </a>

// //                   <a
// //                     href="https://wa.me/919711709644"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
// //                   >
// //                     WhatsApp
// //                   </a>
// //                 </div>
// //               </form>
// //             </motion.div>
// //           </div>
// //         )}

// //         {/* MAIN CONTENT SECTION */}
// //         <section className="py-12 md:py-16 pb-20 md:pb-16">
// //           <div className="container mx-auto px-4">
// //             <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
// //               <div className="min-w-0 space-y-8">
// //                 {/* ABOUT SECTION */}
// //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// //                   <div className="mb-5 flex items-center gap-3">
// //                     <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
// //                       <GraduationCap size={22} />
// //                     </div>
// //                     <h2 className="text-2xl font-bold text-slate-900">
// //                       {content?.aboutTitle || "About This Course"}
// //                     </h2>
// //                   </div>

// //                   {course.description && (
// //                     <p className="leading-8 text-slate-600">
// //                       {course.description}
// //                     </p>
// //                   )}

// //                   {content?.about && content.about !== course.description && (
// //                     <p
// //                       className={`leading-8 text-slate-600 ${
// //                         course.description ? "mt-4" : ""
// //                       }`}
// //                     >
// //                       {content.about}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* CONTENT SECTIONS */}
// //                 {content?.sections?.map((section, index) => (
// //                   <motion.div
// //                     key={section.title}
// //                     initial={{ opacity: 0, y: 18 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ delay: index * 0.05 }}
// //                     className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
// //                   >
// //                     <h2 className="mb-4 text-2xl font-bold text-slate-900">
// //                       {section.title}
// //                     </h2>

// //                     <p className="leading-8 text-slate-600">
// //                       {section.content}
// //                     </p>

// //                     {section.points && (
// //                       <div className="mt-6 grid gap-4 sm:grid-cols-2">
// //                         {section.points.map((point) => (
// //                           <div
// //                             key={point}
// //                             className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
// //                           >
// //                             <CheckCircle
// //                               size={20}
// //                               className="mt-0.5 shrink-0 text-green-500"
// //                             />
// //                             <span className="font-medium text-slate-700">
// //                               {point}
// //                             </span>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     )}
// //                   </motion.div>
// //                 ))}

// //                 {/* HIGHLIGHTS */}
// //                 {highlights.length > 0 && (
// //                   <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// //                     <h2 className="mb-6 text-2xl font-bold text-slate-900">
// //                       Course Highlights
// //                     </h2>

// //                     <div className="grid gap-4 sm:grid-cols-2">
// //                       {highlights.map((item, index) => (
// //                         <motion.div
// //                           key={item}
// //                           initial={{ opacity: 0, y: 16 }}
// //                           whileInView={{ opacity: 1, y: 0 }}
// //                           viewport={{ once: true }}
// //                           transition={{ delay: index * 0.05 }}
// //                           className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4"
// //                         >
// //                           <CheckCircle
// //                             size={20}
// //                             className="mt-0.5 shrink-0 text-blue-600"
// //                           />
// //                           <span className="font-medium text-slate-700">
// //                             {item}
// //                           </span>
// //                         </motion.div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* BENEFITS */}
// //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// //                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
// //                     What You Will Get
// //                   </h2>

// //                   <div className="grid gap-4 sm:grid-cols-2">
// //                     {benefits.map((item, index) => (
// //                       <motion.div
// //                         key={item}
// //                         initial={{ opacity: 0, y: 16 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ delay: index * 0.05 }}
// //                         className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
// //                       >
// //                         <CheckCircle
// //                           size={20}
// //                           className="mt-0.5 shrink-0 text-green-500"
// //                         />
// //                         <span className="font-medium text-slate-700">
// //                           {item}
// //                         </span>
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* CURRICULUM */}
// //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// //                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
// //                     Course Curriculum
// //                   </h2>

// //                   <div className="space-y-4">
// //                     {syllabus.map((module, index) => (
// //                       <motion.div
// //                         key={module}
// //                         initial={{ opacity: 0, x: -16 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ delay: index * 0.05 }}
// //                         className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
// //                       >
// //                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
// //                           {index + 1}
// //                         </div>
// //                         <div>
// //                           <h3 className="font-semibold text-slate-800">
// //                             {module}
// //                           </h3>
// //                           <p className="text-sm text-slate-500">
// //                             Practical concepts and implementation-based learning.
// //                           </p>
// //                         </div>
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* TOOLS & CAREER */}
// //                 {(tools.length > 0 || careerOptions.length > 0) && (
// //                   <div className="grid gap-6 md:grid-cols-2">
// //                     {tools.length > 0 && (
// //                       <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// //                         <h2 className="mb-5 text-2xl font-bold text-slate-900">
// //                           Tools You Will Learn
// //                         </h2>

// //                         <div className="flex flex-wrap gap-3">
// //                           {tools.map((tool) => (
// //                             <span
// //                               key={tool}
// //                               className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
// //                             >
// //                               {tool}
// //                             </span>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     )}

// //                     {careerOptions.length > 0 && (
// //                       <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// //                         <h2 className="mb-5 text-2xl font-bold text-slate-900">
// //                           Career Options
// //                         </h2>

// //                         <div className="space-y-3">
// //                           {careerOptions.map((item) => (
// //                             <div
// //                               key={item}
// //                               className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3"
// //                             >
// //                               <Briefcase
// //                                 size={18}
// //                                 className="shrink-0 text-blue-600"
// //                               />
// //                               <span className="font-medium text-slate-700">
// //                                 {item}
// //                               </span>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}

// //                 {/* WHO CAN JOIN */}
// //                 {whoCanJoin.length > 0 && (
// //                   <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// //                     <h2 className="mb-6 text-2xl font-bold text-slate-900">
// //                       Who Can Join This Course?
// //                     </h2>

// //                     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
// //                       {whoCanJoin.map((item, index) => (
// //                         <motion.div
// //                           key={item}
// //                           initial={{ opacity: 0, y: 16 }}
// //                           whileInView={{ opacity: 1, y: 0 }}
// //                           viewport={{ once: true }}
// //                           transition={{ delay: index * 0.05 }}
// //                           className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5"
// //                         >
// //                           <Users className="mb-3 text-blue-600" size={22} />
// //                           <h3 className="font-semibold text-slate-800">
// //                             {item}
// //                           </h3>
// //                         </motion.div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* WHY CHOOSE */}
// //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// //                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
// //                     Why Choose Lone Star Academy
// //                   </h2>

// //                   <div className="grid gap-4 md:grid-cols-3">
// //                     {whyChoose.map((item, index) => {
// //                       const Icon = item.icon;
// //                       return (
// //                         <motion.div
// //                           key={item.title}
// //                           initial={{ opacity: 0, y: 16 }}
// //                           whileInView={{ opacity: 1, y: 0 }}
// //                           viewport={{ once: true }}
// //                           transition={{ delay: index * 0.06 }}
// //                           className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
// //                         >
// //                           <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-600">
// //                             <Icon size={22} />
// //                           </div>
// //                           <h3 className="mb-2 text-lg font-semibold text-slate-900">
// //                             {item.title}
// //                           </h3>
// //                           <p className="text-sm leading-7 text-slate-600">
// //                             {item.desc}
// //                           </p>
// //                         </motion.div>
// //                       );
// //                     })}
// //                   </div>
// //                 </div>

// //                 {/* FAQs */}
// //                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
// //                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
// //                     Frequently Asked Questions
// //                   </h2>

// //                   <div className="space-y-4">
// //                     {courseFaqs.map((faq, index) => (
// //                       <div
// //                         key={index}
// //                         className="overflow-hidden rounded-2xl border border-slate-200"
// //                       >
// //                         <button
// //                           type="button"
// //                           onClick={() =>
// //                             setOpenFaq(openFaq === index ? null : index)
// //                           }
// //                           className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left transition hover:bg-slate-50"
// //                         >
// //                           <span className="font-semibold text-slate-800">
// //                             {faq.question}
// //                           </span>
// //                           <ChevronDown
// //                             size={20}
// //                             className={`shrink-0 text-slate-500 transition-transform ${
// //                               openFaq === index ? "rotate-180" : ""
// //                             }`}
// //                           />
// //                         </button>

// //                         {openFaq === index && (
// //                           <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
// //                             <p className="leading-7 text-slate-600">
// //                               {faq.answer}
// //                             </p>
// //                           </div>
// //                         )}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* CTA */}
// //                 <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-xl">
// //                   <h2 className="text-2xl font-bold md:text-3xl">
// //                     Start Your Learning Journey Today
// //                   </h2>
// //                   <p className="mt-3 max-w-2xl text-slate-100">
// //                     Join {course.name} at Lone Star Academy and learn with expert
// //                     support, live classes, and practical projects.
// //                   </p>

// //                   <div className="mt-6 flex flex-col gap-4 sm:flex-row">
// //                     <a
// //                       href="tel:9711709644"
// //                       className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
// //                     >
// //                       <Phone size={18} />
// //                       Talk to Counselor
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* DESKTOP ENQUIRY FORM */}
// //               <aside className="hidden lg:block min-w-0">
// //                 <div className="lg:sticky lg:top-39">
// //                   <div
// //                     id="enquiry-form"
// //                     className="rounded-[28px] border border-orange-100 bg-gradient-to-r from-blue-900 to-blue-800 p-6 shadow-2xl md:p-7"
// //                   >
// //                     <div className="mb-6">
// //                       <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
// //                         Enquiry Form
// //                       </span>

// //                       <h3 className="mt-3 text-2xl font-bold text-white">
// //                         Course Enquiry
// //                       </h3>
// //                     </div>

// //                     <form onSubmit={handleSubmit} className="space-y-4">
// //                       <div>
// //                         <label className="mb-2 block text-sm font-medium text-white">
// //                           Full Name
// //                         </label>
// //                         <input
// //                           type="text"
// //                           name="name"
// //                           value={formData.name}
// //                           onChange={handleChange}
// //                           placeholder="Enter your full name"
// //                           className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
// //                           required
// //                         />
// //                       </div>

// //                       <div>
// //                         <label className="mb-2 block text-sm font-medium text-white">
// //                           Phone Number
// //                         </label>
// //                         <input
// //                           type="tel"
// //                           name="phone"
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           placeholder="Enter your phone number"
// //                           className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
// //                           required
// //                         />
// //                       </div>

// //                       <button
// //                         type="submit"
// //                         className="flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:scale-[1.02]"
// //                       >
// //                         Submit Enquiry <ArrowRight size={18} />
// //                       </button>

// //                       <div className="flex items-center gap-3 py-2">
// //                         <div className="h-px flex-1 bg-slate-200"></div>
// //                         <span className="text-xs font-medium text-slate-400">
// //                           OR
// //                         </span>
// //                         <div className="h-px flex-1 bg-slate-200"></div>
// //                       </div>

// //                       <div className="flex gap-3">
// //                         <a
// //                           href="tel:9711709644"
// //                           className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
// //                         >
// //                           <Phone size={16} />
// //                           Call
// //                         </a>

// //                         <a
// //                           href="https://wa.me/919711709644"
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                           className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-green-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
// //                         >
// //                           WhatsApp
// //                         </a>
// //                       </div>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </aside>
// //             </div>
// //           </div>
// //         </section>

// //         {/* OTHER COURSES SECTION */}
// //         <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
// //           <div className="container mx-auto px-4">
// //             <div className="mb-10 text-center">
// //               <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
// //                 Explore Our Other Courses
// //               </h2>
// //               <p className="mt-3 text-slate-600">
// //                 Discover more industry-relevant programs to accelerate your career.
// //               </p>
// //             </div>

// //             {loading ? (
// //               <div className="flex justify-center py-12">
// //                 <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
// //               </div>
// //             ) : (
// //               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
// //                 {allCourses
// //                   ?.filter((c: Course) => c._id !== course._id) // Exclude current course
// //                   .slice(0, 8) // Limit to 8 courses
// //                   .map((c: Course) => {
// //                     // Get image URL (handle both local and Cloudinary URLs)
// //                     const courseImage = c.image
// //                       ? c.image.startsWith("http")
// //                         ? c.image
// //                         : `${BASE_URL}${c.image}`
// //                       : pageImages[c.name] || "/images/default-course.jpg";

// //                     // Get slug for the link
// //                     const courseSlug =
// //                       c.slug || c.name.toLowerCase().replace(/\s+/g, "-");

// //                     return (
// //                       <motion.a
// //                         key={c._id}
// //                         href={`/${courseSlug}/`}
// //                         initial={{ opacity: 0, y: 20 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ duration: 0.4 }}
// //                         className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
// //                       >
// //                         <div className="relative h-48 overflow-hidden">
// //                           <img
// //                             src={courseImage}
// //                             alt={c.name}
// //                             className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
// //                             onError={(e) => {
// //                               // Fallback if image fails to load
// //                               (e.target as HTMLImageElement).src =
// //                                 "/images/default-course.jpg";
// //                             }}
// //                           />
// //                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />

// //                           {/* Price Badge */}
// //                           {c.price && (
// //                             <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
// //                               {c.price}
// //                             </div>
// //                           )}
// //                         </div>
// //                         <div className="p-5">
// //                           <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
// //                             {c.name}
// //                           </h3>
// //                           <p className="mt-1 text-sm text-slate-500 line-clamp-2">
// //                             {c.description?.slice(0, 80)}...
// //                           </p>
// //                           <div className="mt-4 flex items-center text-sm font-semibold text-blue-600">
// //                             Learn More
// //                             <ArrowRight
// //                               size={16}
// //                               className="ml-2 transition group-hover:translate-x-1"
// //                             />
// //                           </div>
// //                         </div>
// //                       </motion.a>
// //                     );
// //                   })}
// //               </div>
// //             )}

// //             {!loading &&
// //               allCourses?.filter((c: Course) => c._id !== course._id).length ===
// //                 0 && (
// //                 <p className="text-center text-slate-500">
// //                   No other courses available.
// //                 </p>
// //               )}
// //           </div>
// //         </section>
// //         <Footer />
// //       </main>
// //     </>
// //   );
// // }


// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "motion/react";

// import {
//   BookOpen,
//   Clock,
//   IndianRupee,
//   CheckCircle,
//   Star,
//   Users,
//   Award,
//   Briefcase,
//   Phone,
//   ArrowRight,
//   Sparkles,
//   GraduationCap,
//   ChevronDown,
//   Info,
//   X,
//   MessageCircle,
// } from "lucide-react";
// import { Navigation } from "../components/Navigation";
// import { Footer } from "../components/Footer";
// import { BASE_URL } from "../../../utils/baseUrl";
// import NotFound from "./NotFound";
// import axios from "axios";
// import FullWidthMap from "../components/FullWidthMap";
// import { PlacedStudents } from "../components/PlacedStudents";
// import TestimonialsSlider from "../components/TestimonialSlider";
// import CertificateSection from "../components/ui/CertificateSection";

// interface Course {
//   _id: string;
//   id?: string;
//   slug?: string;
//   name: string;
//   price: string;
//   duration: string;
//   description: string;
//   category: string;
//   image: string | null;
//   syllabus?: string[];
//   highlights?: string[];
//   tools?: string[];
//   whoCanJoin?: string[];
//   careerOptions?: string[];
//   faqs?: { question: string; answer: string }[];
//   seo?: {
//     title?: string;
//     description?: string;
//     keywords?: string;
//   };
// }

// type CourseSection = {
//   title: string;
//   content: string;
//   points?: string[];
// };

// type CourseExtraContent = {
//   aboutTitle: string;
//   about: string;
//   sections: CourseSection[];
//   highlights: string[];
//   tools: string[];
//   whoCanJoin: string[];
//   careerOptions: string[];
// };

// const courseContent: Record<string, CourseExtraContent> = {
//   "Business Analytics": {
//     aboutTitle: ": Business Analytics Online Course & Training in Delhi | Lone Star",
//     about: "In this era of big data, choosing the right business analytics online course or business analyst course in Delhi can be a game changer for your career. At Lone Star Academy, we provide a practical, industry-relevant learning path for beginners, working professionals, and fresh graduates who want to build a strong career in analytics and decision making.",
//     sections: [
//       {
//         title: "Why Choose Lone Star Academy for Business Analytics?",
//         content: "At Lone Star Academy, we focus on making students job-ready through practical training, live projects, real industry case studies, and placement-oriented preparation.",
//         points: [
//           "Industry-relevant content designed by subject experts",
//           "Live projects and real industry case studies",
//           "Placement-oriented training with interview preparation",
//           "Flexible online and offline classroom learning",
//           "Mentorship from working professionals",
//         ],
//       },
//       {
//         title: "What You Will Learn",
//         content: "This Business Analytics course gives you strong knowledge of basic and advanced analytics concepts with real business applications.",
//         points: [
//           "Introduction to Business Analytics",
//           "Data Visualization with Excel, Power BI and Tableau",
//           "SQL for Data Analysis",
//           "Python for Data Analytics",
//           "Statistical Analysis and Predictive Modeling",
//           "Business Intelligence and Reporting",
//         ],
//       },
//       {
//         title: "Practice-Based Learning Model",
//         content: "Our course focuses on practical learning instead of only theory. You will work on real datasets, case studies, live assignments, and a capstone project to build your portfolio.",
//       },
//       {
//         title: "Job Support and Career Assistance",
//         content: "Our Business Analyst training in Delhi includes resume building, mock interviews, soft skills training, job referrals, and placement assistance.",
//       },
//     ],
//     highlights: [
//       "Practical business analytics training",
//       "Live projects and case studies",
//       "Excel, Power BI, Tableau, SQL and Python",
//       "Online and offline flexible batches",
//       "Interview preparation",
//       "Placement assistance",
//     ],
//     tools: ["Advanced Excel", "Power BI", "Tableau", "SQL", "Python"],
//     whoCanJoin: [
//       "Fresh graduates",
//       "Working professionals",
//       "Business owners",
//       "IT professionals",
//       "Beginners with no coding background",
//     ],
//     careerOptions: [
//       "Business Analyst",
//       "Data Analyst",
//       "Reporting Analyst",
//       "BI Developer",
//       "Product Analyst",
//     ],
//   },
//   "Data Analytics": {
//     aboutTitle: "Data Analytics Course in Delhi - Learn Excel, SQL, Python, Power BI & Tableau",
//     about: "An analytics program worth doing teaches you more than individual software tools. Lone Star Academy helps you link Excel, SQL, Python, statistics, data visualization, and business intelligence in one workflow that you can use for real-world analysis. The course is suitable for beginners as well as learners who want structured, guided instruction with hands-on practice.",
//     sections: [
//       {
//         title: "Why Choose Our Data Analytics Training in Delhi?",
//         content: "The training helps learners build skills in data cleaning, exploratory analysis, reporting, dashboard creation, trend analysis, and communicating findings effectively. These skills apply across IT, finance, retail, e-commerce, healthcare, marketing, consulting, and operations.",
//         points: [
//           "Curriculum linking Excel, SQL, Python, statistics, and BI tools",
//           "Hands-on projects and business case studies",
//           "Guided instruction with practical training",
//           "Beginner to advanced learning path",
//           "Career support as per program offering",
//         ],
//       },
//       {
//         title: "What Will You Learn?",
//         content: "Our Data Analytics course covers the complete analytical workflow: Collect data → Clean data → Explore data → Identify patterns → Create visualizations → Interpret insights → Recommend solutions.",
//         points: [
//           "Excel for Data Analysis: formulas, lookup functions, PivotTables, charts, conditional formatting, and dashboards",
//           "SQL for Data Analytics: filtering, sorting, aggregation, joins, subqueries, CTEs, and analytical queries",
//           "Python for Data Analytics: Pandas, NumPy, Matplotlib, and Seaborn for data manipulation and visualization",
//           "Power BI and Tableau: dashboards, calculated fields, reports, and interactive business intelligence",
//           "Statistics for Data Analysis: descriptive statistics, probability, correlation, regression, distributions, and hypothesis testing",
//           "Practical Projects and Business Case Studies: sales analysis, customer behaviour, marketing and financial reporting, HR analytics, and operational dashboards",
//         ],
//       },
//       {
//         title: "Data Analytics Certification in Delhi",
//         content: "A certificate validates course completion and shows that you have followed a structured program. However, employers usually look for more than a certificate: real-life projects, analytical thinking, SQL knowledge, dashboards, and the ability to explain business insights. That is why our program combines certification with hands-on experience and practical skills. Please confirm the exact certification details with the academy before enrollment.",
//       },
//       {
//         title: "Placement and Career Support",
//         content: "Placement support is different from an employment guarantee. Our career support can include resume building, interview preparation, mock interviews, portfolio guidance, and help identifying relevant job opportunities. Your final role depends on your education, experience, technical skills, portfolio, and interview performance.",
//       },
//       {
//         title: "Why Learn Data Analytics in Delhi?",
//         content: "Delhi and the NCR region offer varied opportunities across technology, consulting, banking, finance, retail, healthcare, education, e-commerce, and professional services. Learning locally gives you easy access to instructor-led training, professional networking, and career-focused education. Students from nearby NCR areas can also apply based on their preferred mode of learning and batch timings.",
//       },
//     ],
//     highlights: [
//       "Beginner to advanced data analytics training",
//       "Excel, SQL, Python, Power BI and Tableau",
//       "Hands-on projects and business case studies",
//       "Statistics for data analysis",
//       "Certification on course completion",
//       "Career support and interview preparation",
//     ],
//     tools: ["Microsoft Excel", "SQL", "Python", "Power BI", "Tableau"],
//     whoCanJoin: [
//       "Graduates and college students",
//       "BBA, B.Com, MBA and engineering graduates",
//       "IT and non-IT professionals",
//       "Business and reporting professionals",
//       "Professionals planning a career transition",
//       "Learners who want to strengthen Excel, SQL, Python or BI skills",
//     ],
//     careerOptions: [
//       "Data Analyst",
//       "Business Analyst",
//       "BI Analyst",
//       "Reporting Analyst",
//       "MIS Analyst",
//       "Marketing Analyst",
//       "Operations Analyst",
//       "Financial Analyst",
//     ],
//   },
//   "Data Science": {
//     aboutTitle: "Data Science Course in Delhi with Practical Training & Placement Support",
//     about: "Data science is more than just knowing algorithms. Practitioners at all levels must work with data, write and read code, understand the output of code, solve business problems, and communicate findings.",
//     sections: [
//       {
//         title: "Why Choose Our Data Science Course in Delhi?",
//         content: "Lone Star Academy believes in teaching that works. Students are exposed to live projects, case studies, assignments, industry tools, resume building, mock interviews and career assistance. The academy also offers both physical class sessions and online education options.",
//         points: [
//           "Practical, industry-oriented training",
//           "Experienced industry trainers",
//           "Live projects and case studies",
//           "Hands-on assignments",
//           "Coding and interview preparation",
//           "Resume and LinkedIn profile support",
//           "Mock interviews",
//           "Placement guidance and job referrals",
//           "Course completion certification",
//           "Offline and online learning options",
//         ],
//       },
//       {
//         title: "Data Science Course Overview",
//         content: "Lone Star Academy's Delhi centre is located at B-1/1, 2nd Floor, Janakpuri, New Delhi - 110058, making the classroom program accessible to learners from West Delhi and surrounding Delhi-NCR areas.",
//         points: [
//           "Location: Janakpuri, New Delhi",
//           "Training Mode: Offline classroom and online",
//           "Learning Approach: Practical and project-based",
//           "Suitable For: Students, graduates and working professionals",
//           "Projects: Live projects and practical assignments",
//           "Certification: Lone Star Academy course certificate",
//           "Career Support: Resume, interviews and placement guidance",
//         ],
//       },
//       {
//         title: "What Will You Learn in Data Science?",
//         content: "A good data science background includes programming, statistics, analytics, machine learning, and business problem solving all rolled into one.",
//         points: [
//           "Python for Data Science: Acquire the programming skills needed to manipulate data and build data driven applications. Python is also popular for data preprocessing, data analysis, data visualization and machine learning pipelines.",
//           "Statistics & Data Analysis: The statistical ideas behind the way we interpret data and find patterns, relationships and make decisions with data.",
//           "Machine Learning: Gain a foundation in machine learning and the practical uses of models for classifying, predicting, interpreting patterns, and more.",
//           "Data Analytics & Visualization: Through data analysis, visualization, reporting and interpretation, you will learn to convert raw data to actionable intelligence.",
//           "Practical Projects: Projects and case studies help connect classroom concepts to what is needed on the job. Students practise coding solutions, analyse data and work through real-world cases.",
//         ],
//       },
//       {
//         title: "Data Science Offline Course in Delhi",
//         content: "For students who prefer face to face interaction with the trainers and classmates, the data science offline course in Delhi offers a classroom learning environment at Lone Star Academy's Janakpuri centre. Offline learning can be especially handy when you have instant doubts to be resolved, guided coding practice, classroom discussions and structured interaction with the trainers. Lone Star Academy also offers online learning options for students and professionals looking for more flexibility.",
//       },
//       {
//         title: "Projects and Practical Learning",
//         content: "Practice is the difference between learning data science in theory and being able to implement it in the real world. The training methodology at Lone Star Academy involves live projects, hands-on exercises, case studies and real-time implementation. These can be used by students to reinforce their data analysis and machine learning skills, as well as creating content that can be added to a professional portfolio.",
//       },
//       {
//         title: "Data Science Course in Delhi with Placement Support",
//         content: "Training is just one aspect of career preparation. Lone Star Academy offers career services, including resume design, LinkedIn profile optimization, mock interviews, soft-skills training, job referrals, placement support and career counselling. The academy also has a hiring partner network and offers placement-centric support to learners. Placement assistance is guidance in career and access to opportunities, and not an alternative to one's individual skills, performance in interview and eligibility.",
//       },
//       {
//         title: "Why Study Data Science in Delhi-NCR?",
//         content: "Delhi NCR has a vast professional ecosystem that includes technology, consulting, finance, e-commerce, analytics, and various other data-focused industries. Studying at a local data science training institute in Delhi can allow you access to a blend of offline training and real-time professional environment. Lone Star Academy Janakpuri serves students from Vikas Puri, Tilak Nagar, Hari Nagar, Rajouri Garden, Dwarka, Uttam Nagar, Punjabi Bagh, Patel Nagar, Rohini and other parts of Delhi, as well as Noida, Ghaziabad and Gurgaon.",
//       },
//       {
//         title: "Why Choose Lone Star Academy?",
//         content: "Lone Star Academy was founded in 2013 and its training model is a blend of expert mentorship, industry-relevant curriculum, hands-on execution, and career assistance. According to the academy, it has trained 10,000+ students and has partnered with 100+ industry expert trainers for its programs. The process: take a free demo class, learn from the trainers, do hands-on projects, get your resume and interviews ready, get placed, and start your career.",
//       },
//     ],
//     highlights: [
//       "Practical, industry-oriented training",
//       "Live projects and case studies",
//       "Offline and online learning options",
//       "Resume and LinkedIn profile support",
//       "Placement guidance and job referrals",
//       "Course completion certification",
//     ],
//     tools: ["Python", "SQL", "Machine Learning", "Statistics", "Data Visualization"],
//     whoCanJoin: [
//       "College students and fresh graduates",
//       "Professionals from IT and technology backgrounds",
//       "Data and business analysts",
//       "Working professionals planning a career transition",
//       "Professionals who want to strengthen Python, analytics, or machine learning skills",
//       "Learners beginning their journey toward data science",
//     ],
//     careerOptions: [
//       "Data Analyst",
//       "Data Scientist",
//       "Business Analyst",
//       "Machine Learning Engineer",
//       "Analytics Professional",
//       "AI and machine learning roles",
//     ],
//   },
//   "Digital Marketing": {
//     aboutTitle: "Best Online Digital Marketing Course & Digital Marketing Course in Delhi",
//     about: "Digital marketing is one of the fastest-growing career fields. At Lone Star Academy, our Digital Marketing course combines real-world skills, industry tools, live projects, certifications, and placement assistance.",
//     sections: [
//       {
//         title: "Why Choose Lone Star Academy for Digital Marketing?",
//         content: "We train, mentor, and prepare students for real digital marketing work through practical projects and industry-standard tools.",
//         points: [
//           "Industry-relevant curriculum based on current trends",
//           "Live project training",
//           "Expert mentors from top agencies",
//           "Certifications to enhance your credibility",
//           "Placement support",
//         ],
//       },
//       {
//         title: "Course Highlights",
//         content: "Our Digital Marketing course covers both basic and advanced digital marketing skills.",
//         points: [
//           "SEO",
//           "Google Ads and PPC Campaigns",
//           "Social Media Marketing",
//           "Content Marketing",
//           "Email Marketing Automation",
//           "Affiliate Marketing",
//           "Web Analytics and Tracking",
//           "AI Tools in Digital Marketing",
//         ],
//       },
//       {
//         title: "Practical Campaign Training",
//         content: "Students work on live business websites, ad campaign creation, SEO audits, social media strategy, and reporting concepts.",
//       },
//       {
//         title: "Placement Assistance",
//         content: "Our placement assistance includes resume building, interview coaching, expert mock interviews, hiring partner access, and internship opportunities.",
//       },
//     ],
//     highlights: [
//       "SEO and Google Ads training",
//       "Social media marketing",
//       "Live campaign projects",
//       "AI tools in digital marketing",
//       "Internship support",
//       "Placement assistance",
//     ],
//     tools: [
//       "SEO",
//       "Google Ads",
//       "Meta Ads",
//       "Google Analytics",
//       "Email Marketing",
//       "AI Tools",
//     ],
//     whoCanJoin: [
//       "Students",
//       "Job seekers",
//       "Entrepreneurs",
//       "Freelancers",
//       "Working professionals",
//     ],
//     careerOptions: [
//       "SEO Specialist",
//       "Social Media Manager",
//       "PPC Expert",
//       "Content Strategist",
//       "Digital Marketing Manager",
//     ],
//   },
//   "Cloud Computing": {
//     aboutTitle: "Cloud Computing Courses in Delhi & Online",
//     about: "If you are looking for practical Cloud Computing training, online cloud courses, real-life environment-based learning, and job-oriented cloud courses in Delhi, Lone Star Academy is the perfect choice for you.",
//     sections: [
//       {
//         title: "Why Select Lone Star Academy for Cloud Computing Training?",
//         content: "A good cloud training institute can shape your career path. Lone Star Academy provides quality education, practical lab sessions, expert guidance, and placement support.",
//         points: [
//           "Industry-relevant AWS, Azure and Google Cloud based curriculum",
//           "Real-world experience through practical lab sessions",
//           "Trained professionals with industry exposure",
//           "In-house placement support and interview preparation",
//           "Flexible online and classroom learning options",
//         ],
//       },
//       {
//         title: "What You Will Learn",
//         content: "Our Cloud Computing course covers everything from cloud basics to advanced deployment and security concepts.",
//         points: [
//           "Introduction to Cloud Computing and Architecture",
//           "Virtualization and basic networking",
//           "Cloud Service Models: IaaS, PaaS and SaaS",
//           "AWS, Microsoft Azure and Google Cloud Platforms",
//           "Security and Compliance in the Cloud",
//           "DevOps and Automation Tools",
//           "Deployment and Migration Techniques",
//         ],
//       },
//       {
//         title: "Cloud Computing Training with Placement",
//         content: "Our placement assistance includes resume building, portfolio development, mock interviews, HR preparation, job referrals, hiring partner connections, and communication training.",
//       },
//       {
//         title: "Certification Preparation",
//         content: "The course helps students prepare for AWS, Microsoft Azure, and Google Cloud certifications with practical guidance and career support.",
//       },
//     ],
//     highlights: [
//       "AWS, Azure and Google Cloud curriculum",
//       "Practical lab sessions",
//       "Cloud security and compliance",
//       "DevOps and automation tools",
//       "Certification preparation",
//       "Placement assistance",
//     ],
//     tools: [
//       "AWS",
//       "Microsoft Azure",
//       "Google Cloud",
//       "Docker",
//       "Kubernetes",
//       "DevOps Tools",
//     ],
//     whoCanJoin: [
//       "Fresh graduates",
//       "IT professionals",
//       "Career switchers",
//       "Business owners",
//       "Beginners in cloud technology",
//     ],
//     careerOptions: [
//       "Cloud Engineer",
//       "Solutions Architect",
//       "DevOps Engineer",
//       "Cloud Security Specialist",
//       "System Administrator",
//     ],
//   },
// };

// // const courseSchemas: Record<string, object[]> = {
// //   "Data Science": [
// //     {
// //       "@context": "https://schema.org/",
// //       "@type": "BreadcrumbList",
// //       itemListElement: [
// //         {
// //           "@type": "ListItem",
// //           position: 1,
// //           name: "Home",
// //           item: "https://www.lonestaracademy.in/",
// //         },
// //         {
// //           "@type": "ListItem",
// //           position: 2,
// //           name: "Data Science Course in Delhi",
// //           item: "https://www.lonestaracademy.in/data-science-course-online-with-placement-delhi/",
// //         },
// //       ],
// //     },
// //     {
// //       "@context": "https://schema.org/",
// //       "@type": "Product",
// //       name: "Data Science Course in Delhi with Practical Training & Placement Support",
// //       image: "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784789428/lonestar_academy/yz6sed8pmiwupqwfuqz2.jpg",
// //       description: "Grow your data science skills with Lone Star Academy, a career-focused training institute in Janakpuri, New Delhi. The Data Science Course in Delhi is a blend of instructor-led learning, hands-on assignments, live projects, coding practice, and career readiness to equip students and working professionals with job-ready skills.",
// //       brand: {
// //         "@type": "Brand",
// //         name: "Lone Star Academy",
// //       },
// //       aggregateRating: {
// //         "@type": "AggregateRating",
// //         ratingValue: "4.5",
// //         bestRating: "5",
// //         worstRating: "1",
// //         ratingCount: "25",
// //       },
// //     },
// //   ],
// // };

// const courseSchemas: Record<string, object[]> = {
//   "Data Science": [
//     {
//       "@context": "https://schema.org/",
//       "@type": "BreadcrumbList",
//       itemListElement: [
//         {
//           "@type": "ListItem",
//           position: 1,
//           name: "Home",
//           item: "https://www.lonestaracademy.in/",
//         },
//         {
//           "@type": "ListItem",
//           position: 2,
//           name: "Data Science Course in Delhi",
//           item: "https://www.lonestaracademy.in/data-science-course-online-with-placement-delhi/",
//         },
//       ],
//     },
//     {
//       "@context": "https://schema.org/",
//       "@type": "Product",
//       name: "Data Science Course in Delhi with Practical Training & Placement Support",
//       image: "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784789428/lonestar_academy/yz6sed8pmiwupqwfuqz2.jpg",
//       description: "Grow your data science skills with Lone Star Academy, a career-focused training institute in Janakpuri, New Delhi. The Data Science Course in Delhi is a blend of instructor-led learning, hands-on assignments, live projects, coding practice, and career readiness to equip students and working professionals with job-ready skills.",
//       brand: {
//         "@type": "Brand",
//         name: "Lone Star Academy",
//       },
//       aggregateRating: {
//         "@type": "AggregateRating",
//         ratingValue: "4.5",
//         bestRating: "5",
//         worstRating: "1",
//         ratingCount: "25",
//       },
//     },
//   ],

//   // ✅ NEW ENTRY
//   "Data Analytics": [
//     {
//       "@context": "https://schema.org/",
//       "@type": "BreadcrumbList",
//       itemListElement: [
//         {
//           "@type": "ListItem",
//           position: 1,
//           name: "Home",
//           item: "https://www.lonestaracademy.in/",
//         },
//         {
//           "@type": "ListItem",
//           position: 2,
//           name: "Data Analytics Courses in Delhi",
//           item: "https://www.lonestaracademy.in/data-analytics-courses-online-delhi/",
//         },
//       ],
//     },
//     {
//       "@context": "https://schema.org/",
//       "@type": "Product",
//       name: "Data Analytics Course in Delhi with Practical Projects & Career Support",
//       image: "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784788643/lonestar_academy/ynkxwnhw7b5kfr0n3ysh.jpg",
//       description: "Develop hands-on, job-ready analytics skills with Lone Star Academy data analytics courses in Delhi. The training is built around the skills businesses use to transform raw data into actionable insights, reports, dashboards, and better decisions. Whether you are a graduate, student, working professional, or looking to transition to a career, the program can assist you in building a structured knowledge of data analysis and business intelligence.",
//       brand: {
//         "@type": "Brand",
//         name: "Lone Star Academy",
//       },
//       aggregateRating: {
//         "@type": "AggregateRating",
//         ratingValue: "4.5",
//         bestRating: "5",
//         worstRating: "1",
//         ratingCount: "30",
//       },
//     },
//   ],
// };

// const curriculum: Record<string, string[]> = {
//   "Business Analytics": [
//     "Introduction to Business Analytics",
//     "Advanced Excel",
//     "Power BI Fundamentals",
//     "Tableau Dashboards",
//     "SQL for Analytics",
//     "Business Reporting",
//     "Real-world Case Studies",
//   ],
//   "Data Analytics": [
//     "Python Basics",
//     "NumPy & Pandas",
//     "SQL & Database Concepts",
//     "Data Cleaning",
//     "Visualization with Power BI",
//     "Statistics for Analytics",
//     "Capstone Project",
//   ],
//   "Data Science": [
//     "Python for Data Science",
//     "Machine Learning",
//     "Deep Learning Basics",
//     "NLP Fundamentals",
//     "Data Engineering Concepts",
//     "Model Deployment",
//     "Industry Projects",
//   ],
//   "Digital Marketing": [
//     "SEO Fundamentals",
//     "Google Ads",
//     "Social Media Marketing",
//     "Content Marketing",
//     "Email Marketing",
//     "Analytics & Reporting",
//     "Practical Campaign Projects",
//   ],
//   "Cloud Computing": [
//     "Cloud Fundamentals",
//     "AWS Services",
//     "Microsoft Azure Basics",
//     "Google Cloud Basics",
//     "Docker & Kubernetes",
//     "Cloud Security",
//     "Certification Preparation",
//   ],
// };

// const benefits = [
//   "100% Practical Training",
//   "Live Projects & Assignments",
//   "Interview Preparation",
//   "Resume Building Support",
//   "Placement Assistance",
//   "Recorded Backup Sessions",
//   "Expert Trainers",
//   "Flexible Learning Structure",
// ];

// const whyChoose = [
//   {
//     icon: Award,
//     title: "Industry-Oriented Learning",
//     desc: "Learn with real tools, real scenarios, and job-ready practical modules.",
//   },
//   {
//     icon: Briefcase,
//     title: "Placement Assistance",
//     desc: "We help students with resume support, mock interviews, and placement guidance.",
//   },
//   {
//     icon: Users,
//     title: "Expert Mentorship",
//     desc: "Get support from experienced trainers with practical domain knowledge.",
//   },
// ];

// const pageImages: Record<string, string> = {
//   "Business Analytics": "/businessanlytics.jpg",
//   "Data Analytics": "/dataanalytics.jpg",
//   "Data Science": "/datascience.jpg",
//   "Digital Marketing": "/Digitalmarketing.jpg",
//   "Cloud Computing": "/cloudcomputing.jpg",
// };

// const faqs: Record<string, { question: string; answer: string }[]> = {
//   "Business Analytics": [
//     {
//       question: "Who can join the Business Analytics course?",
//       answer: "Students, working professionals, freshers, and business professionals who want to build reporting, dashboard, and analytics skills can join this course.",
//     },
//     {
//       question: "What tools are covered in Business Analytics?",
//       answer: "This course covers Excel, Power BI, Tableau, SQL, reporting concepts, and practical business case studies.",
//     },
//     {
//       question: "Do you provide placement assistance for Business Analytics?",
//       answer: "Yes, we provide resume support, interview preparation, mock interviews, and placement guidance.",
//     },
//     {
//       question: "Is this course suitable for beginners?",
//       answer: "Yes, the course starts from fundamentals and gradually moves to advanced practical concepts.",
//     },
//   ],
//   "Data Analytics": [
//     {
//       question: "What will I learn in the Data Analytics course?",
//       answer: "You will learn Python, Pandas, NumPy, SQL, data cleaning, dashboards, statistics, and project-based analytics skills.",
//     },
//     {
//       question: "Is coding required for Data Analytics?",
//       answer: "Basic coding helps, but beginners can also join because the training starts from fundamentals.",
//     },
//     {
//       question: "Will I work on practical projects?",
//       answer: "Yes, the course includes hands-on assignments, case studies, and a capstone project.",
//     },
//     {
//       question: "Can freshers join the Data Analytics course?",
//       answer: "Yes, freshers can join this course to build job-ready analytics skills.",
//     },
//   ],
//   "Data Science": [
//     {
//       question: "What topics are included in the Data Science course?",
//       answer: "The course includes Python, machine learning, deep learning basics, NLP, data engineering concepts, and model deployment.",
//     },
//     {
//       question: "Is Data Science good for career growth?",
//       answer: "Yes, Data Science is one of the most in-demand fields with strong career opportunities across industries.",
//     },
//     {
//       question: "Do I need prior programming experience?",
//       answer: "No, beginners can start with this course, but regular practice is important.",
//     },
//     {
//       question: "Will I get project experience in Data Science?",
//       answer: "Yes, students work on industry-oriented projects to improve practical understanding.",
//     },
//   ],
//   "Digital Marketing": [
//     {
//       question: "What modules are covered in the Digital Marketing course?",
//       answer: "This course covers SEO, Google Ads, social media marketing, content marketing, email marketing, and performance analytics.",
//     },
//     {
//       question: "Is Digital Marketing a good option for beginners?",
//       answer: "Yes, it is a beginner-friendly field and suitable for students, job seekers, and business owners.",
//     },
//     {
//       question: "Will I learn practical campaign execution?",
//       answer: "Yes, the course includes practical campaign work, ad strategy, and reporting concepts.",
//     },
//     {
//       question: "Do you provide certification support?",
//       answer: "Yes, we guide students for course completion and help them prepare for relevant certifications.",
//     },
//   ],
//   "Cloud Computing": [
//     {
//       question: "What will I learn in the Cloud Computing course?",
//       answer: "You will learn cloud fundamentals, AWS, Azure, Google Cloud basics, Docker, Kubernetes, and cloud security concepts.",
//     },
//     {
//       question: "Is Cloud Computing suitable for beginners?",
//       answer: "Yes, this course starts with core cloud fundamentals before moving to advanced tools.",
//     },
//     {
//       question: "Does the course include certification preparation?",
//       answer: "Yes, the course includes support for cloud certification preparation.",
//     },
//     {
//       question: "Will I learn deployment and cloud services practically?",
//       answer: "Yes, the training includes practical exposure to cloud platforms and deployment-related concepts.",
//     },
//   ],
// };

// export default function CourseDetailPage({
//   slug,
//   courseData,
// }: {
//   slug: string;
//   courseData: Course;
// }) {
//   const [openFaq, setOpenFaq] = useState<number | null>(0);
//   const [showMobileForm, setShowMobileForm] = useState(false);
//   const [allCourses, setAllCourses] = useState<Course[] | null>(null);
//   const course = courseData;
//   const [loading, setLoading] = useState(false);

//   const getAllCourses = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${BASE_URL}/api/courses`);
//       setAllCourses(response.data);
//     } catch (err) {
//       console.error("Error fetching courses:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // useEffect to fetch courses on mount
//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     course: course?.name || "",
//     message: "",
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Your enquiry has been submitted successfully.");
//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       course: course?.name || "",
//       message: "",
//     });
//     setShowMobileForm(false);
//   };

//   if (!course) {
//     return <NotFound />;
//   }

//   // Content lookup: category first, then course name as a fallback.
//   // (course.category in DB must match a key of courseContent, e.g. "Data Analytics")
//   // category / name / slug se loose match (case, space, hyphen ignore)
//   const norm = (v?: string) => (v || "").toLowerCase().replace(/[^a-z0-9]/g, "");
//   const candidates = [course.category, course.name, course.slug].map(norm);

//   const matchKey = (keys: string[]): string => {
//     const exact = keys.find((k) => candidates.includes(norm(k)));
//     if (exact) return exact;
//     return (
//       keys.find((k) => candidates.some((c) => c && c.includes(norm(k)))) || ""
//     );
//   };

//   const contentKey = matchKey(Object.keys(courseContent));
//   const content: CourseExtraContent | undefined = contentKey
//     ? courseContent[contentKey]
//     : undefined;

//   const heroImage = course.image
//     ? course.image.startsWith("http")
//       ? course.image
//       : `${BASE_URL}${course.image}`
//     : pageImages[course.name] || "/images/default-course.jpg";

//   const staticKey =
//     matchKey(Object.keys(curriculum)) || matchKey(Object.keys(faqs)) || "";

//   // DB syllabus + static curriculum (duplicates hata diye jaate hain)
//   const mergedSyllabus = (() => {
//     const seen = new Set<string>();
//     return [...(course.syllabus || []), ...(curriculum[staticKey] || [])].filter(
//       (m) => {
//         const key = m.trim().toLowerCase();
//         if (!key || seen.has(key)) return false;
//         seen.add(key);
//         return true;
//       }
//     );
//   })();

//   const syllabus =
//     mergedSyllabus.length > 0
//       ? mergedSyllabus
//       : [
//           "Module 1: Introduction",
//           "Module 2: Core Concepts",
//           "Module 3: Advanced Topics",
//           "Module 4: Practical Implementation",
//           "Final Project",
//         ];

//   // DB FAQs + static FAQs (same question dobara nahi aayega)
//   const mergedFaqs = (() => {
//     const seen = new Set<string>();
//     return [...(course.faqs || []), ...(faqs[staticKey] || [])].filter((f) => {
//       const key = f.question.trim().toLowerCase();
//       if (!key || seen.has(key)) return false;
//       seen.add(key);
//       return true;
//     });
//   })();

//   const courseFaqs =
//     mergedFaqs.length > 0
//       ? mergedFaqs
//       : [
//           {
//             question: "Who can join this course?",
//             answer: "Students, freshers, and working professionals interested in practical learning can join this course.",
//           },
//           {
//             question: "Do you provide placement assistance?",
//             answer: "Yes, we provide resume guidance, interview preparation, and placement support.",
//           },
//           {
//             question: "Is this course beginner friendly?",
//             answer: "Yes, the course is designed to support beginners as well as learners with some prior knowledge.",
//           },
//         ];

//   // DB values pehle, phir courseContent ki values. Duplicates hata diye jaate hain.
//   const mergeUnique = (dbList?: string[], contentList?: string[]): string[] => {
//     const seen = new Set<string>();
//     return [...(dbList || []), ...(contentList || [])].filter((item) => {
//       const key = item.trim().toLowerCase();
//       if (!key || seen.has(key)) return false;
//       seen.add(key);
//       return true;
//     });
//   };

//   const highlights = mergeUnique(course.highlights, content?.highlights);
//   const tools = mergeUnique(course.tools, content?.tools);
//   const careerOptions = mergeUnique(course.careerOptions, content?.careerOptions);
//   const whoCanJoin = mergeUnique(course.whoCanJoin, content?.whoCanJoin);

//   const schemas = courseSchemas[matchKey(Object.keys(courseSchemas))] || [];

//   return (
//     <>
//       {schemas.map((schema, i) => (
//         <script
//           key={i}
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
//           }}
//         />
//       ))}

//       <Navigation />

//       <main className="bg-white">
//         {/* HERO SECTION */}
//         <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-14 text-white md:py-20">
//           <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
//           <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

//           <div className="container mx-auto px-4">
//             <div className="grid items-center gap-10 lg:grid-cols-2">
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="relative z-10"
//               >
//                 <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-100 backdrop-blur-md">
//                   <Sparkles size={14} />
//                   Lone Star Academy
//                 </span>

//                 <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
//                   {course.name}
//                 </h1>

//                 {/* <p className="mb-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
//                   {course.description || content?.about}
//                 </p> */}

//                 <div className="mb-8 flex flex-wrap gap-4">
//                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
//                     <div className="flex items-center gap-2">
//                       <Clock size={18} className="text-cyan-300" />
//                       <span className="text-sm">{course.duration}</span>
//                     </div>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
//                     <div className="flex items-center gap-2">
//                       <IndianRupee size={18} className="text-cyan-300" />
//                       <span className="text-sm">{course.price}</span>
//                     </div>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
//                     <div className="flex items-center gap-2">
//                       <Users size={18} className="text-cyan-300" />
//                       <span className="text-sm">500+ Students</span>
//                     </div>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
//                     <div className="flex items-center gap-2">
//                       <Star
//                         size={18}
//                         className="fill-yellow-400 text-yellow-400"
//                       />
//                       <span className="text-sm">4.9 Rating</span>
//                     </div>
//                   </div>
//                 </div>

//                 <a
//                   href="tel:9711709644"
//                   className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20  px-6 py-3 font-semibold text-orange-500 transition bg-white hover:text-slate-900"
//                 >
//                   <Phone size={18} />
//                   Call Now
//                 </a>

//                 <a
//                   href="https://wa.me/919711709644"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="ml-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#20BD5A] hover:-translate-y-0.5"
//                 >
//                   <MessageCircle size={18} />
//                   WhatsApp Now
//                 </a>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.94 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.1 }}
//                 className="relative z-10"
//               >
//                 <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
//                   <img
//                     src={heroImage}
//                     alt={course.name}
//                     className="h-[260px] w-full rounded-[22px] object-cover sm:h-[360px] lg:h-[460px]"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Mobile Fixed Bottom Action Bar */}
//         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
//           <div className="flex items-center gap-3 p-3">
//             <a
//               href="tel:9711709644"
//               className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-green-700"
//             >
//               <Phone size={18} />
//               Call Now
//             </a>

//             <button
//               onClick={() => setShowMobileForm(true)}
//               className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 font-semibold text-white transition active:scale-95 hover:bg-orange-700"
//             >
//               <MessageCircle size={18} />
//               Enquiry
//             </button>
//           </div>
//         </div>

//         {/* Mobile Enquiry Form Modal */}
//         {showMobileForm && (
//           <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 md:hidden">
//             <motion.div
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 100 }}
//               className="w-full max-w-md rounded-t-3xl bg-white shadow-2xl"
//             >
//               <div className="flex items-center justify-between border-b border-slate-200 p-5">
//                 <div>
//                   <h3 className="text-xl font-bold text-slate-900">Course Enquiry</h3>
//                   <p className="text-sm text-slate-500">Fill details to get more info</p>
//                 </div>
//                 <button
//                   onClick={() => setShowMobileForm(false)}
//                   className="rounded-full p-2 transition hover:bg-slate-100"
//                 >
//                   <X size={24} className="text-slate-500" />
//                 </button>
//               </div>

//               <form onSubmit={handleSubmit} className="p-5 space-y-4">
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-slate-700">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your full name"
//                     className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-slate-700">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter your phone number"
//                     className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-700"
//                 >
//                   Submit Enquiry <ArrowRight size={18} />
//                 </button>

//                 <div className="flex items-center gap-3">
//                   <div className="h-px flex-1 bg-slate-200"></div>
//                   <span className="text-xs font-medium text-slate-400">OR</span>
//                   <div className="h-px flex-1 bg-slate-200"></div>
//                 </div>

//                 <div className="flex gap-3">
//                   <a
//                     href="tel:9711709644"
//                     className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
//                   >
//                     <Phone size={16} />
//                     Call Now
//                   </a>

//                   <a
//                     href="https://wa.me/919711709644"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
//                   >
//                     WhatsApp
//                   </a>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         )}

//         {/* MAIN CONTENT SECTION */}
//         <section className="py-12 md:py-16 pb-20 md:pb-16">
//           <div className="container mx-auto px-4">
//             <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
//               <div className="min-w-0 space-y-8">
//                 {/* ABOUT SECTION */}
//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                   {/* <div className="mb-5 flex items-center gap-3">
//                     <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
//                       <GraduationCap size={22} />
//                     </div>
//                     <h2 className="text-2xl font-bold text-slate-900">
//                       {content?.aboutTitle || "About This Course"}
//                     </h2>
//                   </div> */}

//                   {course.description && (
//                     <p className="leading-8 text-slate-600">
//                       {course.description}
//                     </p>
//                   )}

//                   {content?.about && content.about !== course.description && (
//                     <p
//                       className={`leading-8 text-slate-600 ${
//                         course.description ? "mt-4" : ""
//                       }`}
//                     >
//                       {content.about}
//                     </p>
//                   )}
//                 </div>

//                 {/* CONTENT SECTIONS */}
//                 {content?.sections?.map((section, index) => (
//                   <motion.div
//                     key={section.title}
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.05 }}
//                     className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
//                   >
//                     <h2 className="mb-4 text-2xl font-bold text-slate-900">
//                       {section.title}
//                     </h2>

//                     <p className="leading-8 text-slate-600">
//                       {section.content}
//                     </p>

//                     {section.points && (
//                       <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                         {section.points.map((point) => (
//                           <div
//                             key={point}
//                             className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
//                           >
//                             <CheckCircle
//                               size={20}
//                               className="mt-0.5 shrink-0 text-green-500"
//                             />
//                             <span className="font-medium  text-slate-700">
//                               {point}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </motion.div>
//                 ))}

//                 {/* HIGHLIGHTS */}
//                 {highlights.length > 0 && (
//                   <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                     <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                       Course Highlights
//                     </h2>

//                     <div className="grid gap-4 sm:grid-cols-2">
//                       {highlights.map((item, index) => (
//                         <motion.div
//                           key={item}
//                           initial={{ opacity: 0, y: 16 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.05 }}
//                           className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4"
//                         >
//                           <CheckCircle
//                             size={20}
//                             className="mt-0.5 shrink-0 text-blue-600"
//                           />
//                           <span className="font-medium text-slate-700">
//                             {item}
//                           </span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* BENEFITS */}
//                 {/* <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                     What You Will Get
//                   </h2>

//                   <div className="grid gap-4 sm:grid-cols-2">
//                     {benefits.map((item, index) => (
//                       <motion.div
//                         key={item}
//                         initial={{ opacity: 0, y: 16 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.05 }}
//                         className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
//                       >
//                         <CheckCircle
//                           size={20}
//                           className="mt-0.5 shrink-0 text-green-500"
//                         />
//                         <span className="font-medium text-slate-700">
//                           {item}
//                         </span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div> */}

//                 {/* CURRICULUM */}
//                 {/* <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                     Course Curriculum
//                   </h2>

//                   <div className="space-y-4">
//                     {syllabus.map((module, index) => (
//                       <motion.div
//                         key={module}
//                         initial={{ opacity: 0, x: -16 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.05 }}
//                         className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
//                       >
//                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
//                           {index + 1}
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-slate-800">
//                             {module}
//                           </h3>
//                           <p className="text-sm text-slate-500">
//                             Practical concepts and implementation-based learning.
//                           </p>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div> */}

//                 {/* TOOLS & CAREER */}
//                 {(tools.length > 0 || careerOptions.length > 0) && (
//                   <div className="grid gap-6 md:grid-cols-2">
//                     {tools.length > 0 && (
//                       <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                         <h2 className="mb-5 text-2xl font-bold text-slate-900">
//                           Tools You Will Learn
//                         </h2>

//                         <div className="flex flex-wrap gap-3">
//                           {tools.map((tool) => (
//                             <span
//                               key={tool}
//                               className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
//                             >
//                               {tool}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {careerOptions.length > 0 && (
//                       <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                         <h2 className="mb-5 text-2xl font-bold text-slate-900">
//                           Career Options
//                         </h2>

//                         <div className="space-y-3">
//                           {careerOptions.map((item) => (
//                             <div
//                               key={item}
//                               className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3"
//                             >
//                               <Briefcase
//                                 size={18}
//                                 className="shrink-0 text-blue-600"
//                               />
//                               <span className="font-medium text-slate-700">
//                                 {item}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* WHO CAN JOIN */}
//                 {whoCanJoin.length > 0 && (
//                   <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                     <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                       Who Can Join This Course?
//                     </h2>

//                     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                       {whoCanJoin.map((item, index) => (
//                         <motion.div
//                           key={item}
//                           initial={{ opacity: 0, y: 16 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.05 }}
//                           className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5"
//                         >
//                           <Users className="mb-3 text-blue-600" size={22} />
//                           <h3 className="font-semibold text-slate-800">
//                             {item}
//                           </h3>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* WHY CHOOSE */}
//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                     Why Choose Lone Star Academy
//                   </h2>

//                   <div className="grid gap-4 md:grid-cols-3">
//                     {whyChoose.map((item, index) => {
//                       const Icon = item.icon;
//                       return (
//                         <motion.div
//                           key={item.title}
//                           initial={{ opacity: 0, y: 16 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.06 }}
//                           className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
//                         >
//                           <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-600">
//                             <Icon size={22} />
//                           </div>
//                           <h3 className="mb-2 text-lg font-semibold text-slate-900">
//                             {item.title}
//                           </h3>
//                           <p className="text-sm leading-7 text-slate-600">
//                             {item.desc}
//                           </p>
//                         </motion.div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* FAQs */}
//                 <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
//                   <h2 className="mb-6 text-2xl font-bold text-slate-900">
//                     Frequently Asked Questions
//                   </h2>

//                   <div className="space-y-4">
//                     {courseFaqs.map((faq, index) => (
//                       <div
//                         key={index}
//                         className="overflow-hidden rounded-2xl border border-slate-200"
//                       >
//                         <button
//                           type="button"
//                           onClick={() =>
//                             setOpenFaq(openFaq === index ? null : index)
//                           }
//                           className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left transition hover:bg-slate-50"
//                         >
//                           <span className="font-semibold text-slate-800">
//                             {faq.question}
//                           </span>
//                           <ChevronDown
//                             size={20}
//                             className={`shrink-0 text-slate-500 transition-transform ${
//                               openFaq === index ? "rotate-180" : ""
//                             }`}
//                           />
//                         </button>

//                         {openFaq === index && (
//                           <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
//                             <p className="leading-7 text-slate-600">
//                               {faq.answer}
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-xl">
//                   <h2 className="text-2xl font-bold md:text-3xl">
//                     Start Your Learning Journey Today
//                   </h2>
//                   <p className="mt-3 max-w-2xl text-slate-100">
//                     Join {course.name} at Lone Star Academy and learn with expert
//                     support, live classes, and practical projects.
//                   </p>

//                   <div className="mt-6 flex flex-col gap-4 sm:flex-row">
//                     <a
//                       href="tel:9711709644"
//                       className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
//                     >
//                       <Phone size={18} />
//                       Talk to Counselor
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* DESKTOP ENQUIRY FORM */}
//               <aside className="hidden lg:block min-w-0">
//                 <div className="lg:sticky lg:top-39">
//                   <div
//                     id="enquiry-form"
//                     className="rounded-[28px] border border-orange-100 bg-gradient-to-r from-blue-900 to-blue-800 p-6 shadow-2xl md:p-7"
//                   >
//                     <div className="mb-6">
//                       <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
//                         Enquiry Form
//                       </span>

//                       <h3 className="mt-3 text-2xl font-bold text-white">
//                         Course Enquiry
//                       </h3>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <label className="mb-2 block text-sm font-medium text-white">
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder="Enter your full name"
//                           className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                           required
//                         />
//                       </div>

//                       <div>
//                         <label className="mb-2 block text-sm font-medium text-white">
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="Enter your phone number"
//                           className="w-full rounded-2xl border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
//                           required
//                         />
//                       </div>

//                       <button
//                         type="submit"
//                         className="flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:scale-[1.02]"
//                       >
//                         Submit Enquiry <ArrowRight size={18} />
//                       </button>

//                       <div className="flex items-center gap-3 py-2">
//                         <div className="h-px flex-1 bg-slate-200"></div>
//                         <span className="text-xs font-medium text-slate-400">
//                           OR
//                         </span>
//                         <div className="h-px flex-1 bg-slate-200"></div>
//                       </div>

//                       <div className="flex gap-3">
//                         <a
//                           href="tel:9711709644"
//                           className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
//                         >
//                           <Phone size={16} />
//                           Call
//                         </a>

//                         <a
//                           href="https://wa.me/919711709644"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-green-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
//                         >
//                           WhatsApp
//                         </a>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </aside>
//             </div>
//           </div>
//         </section>

//         {/* OTHER COURSES SECTION */}
//         <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
//           <div className="container mx-auto px-4">
//             <div className="mb-10 text-center">
//               <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
//                 Explore Our Other Courses
//               </h2>
//               <p className="mt-3 text-slate-600">
//                 Discover more industry-relevant programs to accelerate your career.
//               </p>
//             </div>

//             {loading ? (
//               <div className="flex justify-center py-12">
//                 <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
//               </div>
//             ) : (
//               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                 {allCourses
//                   ?.filter((c: Course) => c._id !== course._id) // Exclude current course
//                   .slice(0, 8) // Limit to 8 courses
//                   .map((c: Course) => {
//                     // Get image URL (handle both local and Cloudinary URLs)
//                     const courseImage = c.image
//                       ? c.image.startsWith("http")
//                         ? c.image
//                         : `${BASE_URL}${c.image}`
//                       : pageImages[c.name] || "/images/default-course.jpg";

//                     // Get slug for the link
//                     const courseSlug =
//                       c.slug || c.name.toLowerCase().replace(/\s+/g, "-");

//                     return (
//                       <motion.a
//                         key={c._id}
//                         href={`/${courseSlug}/`}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.4 }}
//                         className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
//                       >
//                         <div className="relative h-48 overflow-hidden">
//                           <img
//                             src={courseImage}
//                             alt={c.name}
//                             className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                             onError={(e) => {
//                               // Fallback if image fails to load
//                               (e.target as HTMLImageElement).src =
//                                 "/images/default-course.jpg";
//                             }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />

//                           {/* Price Badge */}
//                           {c.price && (
//                             <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
//                               {c.price}
//                             </div>
//                           )}
//                         </div>
//                         <div className="p-5">
//                           <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
//                             {c.name}
//                           </h3>
//                           <p className="mt-1 text-sm text-slate-500 line-clamp-2">
//                             {c.description?.slice(0, 80)}...
//                           </p>
//                           <div className="mt-4 flex items-center text-sm font-semibold text-blue-600">
//                             Learn More
//                             <ArrowRight
//                               size={16}
//                               className="ml-2 transition group-hover:translate-x-1"
//                             />
//                           </div>
//                         </div>
//                       </motion.a>
//                     );
//                   })}
//               </div>
//             )}

//             {!loading &&
//               allCourses?.filter((c: Course) => c._id !== course._id).length ===
//                 0 && (
//                 <p className="text-center text-slate-500">
//                   No other courses available.
//                 </p>
//               )}
//           </div>
//         </section>
//         <CertificateSection/>
//         <PlacedStudents/>
//         <TestimonialsSlider/>
//         <FullWidthMap/>
//         <Footer />
//       </main>
//     </>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import {
  BookOpen,
  Clock,
  IndianRupee,
  CheckCircle,
  Star,
  Users,
  Award,
  Briefcase,
  Phone,
  ArrowRight,
  Sparkles,
  GraduationCap,
  ChevronDown,
  Info,
  X,
  MessageCircle,
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { BASE_URL } from "../../../utils/baseUrl";
import NotFound from "./NotFound";
import axios from "axios";
import FullWidthMap from "../components/FullWidthMap";
import { PlacedStudents } from "../components/PlacedStudents";
import TestimonialsSlider from "../components/TestimonialSlider";
import CertificateSection from "../components/ui/CertificateSection";

interface Course {
  _id: string;
  id?: string;
  slug?: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  category: string;
  image: string | null;
  syllabus?: string[];
  highlights?: string[];
  tools?: string[];
  whoCanJoin?: string[];
  careerOptions?: string[];
  faqs?: { question: string; answer: string }[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

type CourseSection = {
  title: string;
  content: string;
  points?: string[];
};

type CourseExtraContent = {
  aboutTitle: string;
  about: string;
  sections: CourseSection[];
  highlights: string[];
  tools: string[];
  whoCanJoin: string[];
  careerOptions: string[];
};



const courseContent: Record<string, CourseExtraContent> = {
  "Business Analytics": {
    aboutTitle: ": Business Analytics Online Course & Training in Delhi | Lone Star",
    about: "In this era of big data, choosing the right business analytics online course or business analyst course in Delhi can be a game changer for your career. At Lone Star Academy, we provide a practical, industry-relevant learning path for beginners, working professionals, and fresh graduates who want to build a strong career in analytics and decision making.",
    sections: [
      {
        title: "Why Choose Lone Star Academy for Business Analytics?",
        content: "At Lone Star Academy, we focus on making students job-ready through practical training, live projects, real industry case studies, and placement-oriented preparation.",
        points: [
          "Industry-relevant content designed by subject experts",
          "Live projects and real industry case studies",
          "Placement-oriented training with interview preparation",
          "Flexible online and offline classroom learning",
          "Mentorship from working professionals",
        ],
      },
      {
        title: "What You Will Learn",
        content: "This Business Analytics course gives you strong knowledge of basic and advanced analytics concepts with real business applications.",
        points: [
          "Introduction to Business Analytics",
          "Data Visualization with Excel, Power BI and Tableau",
          "SQL for Data Analysis",
          "Python for Data Analytics",
          "Statistical Analysis and Predictive Modeling",
          "Business Intelligence and Reporting",
        ],
      },
      {
        title: "Practice-Based Learning Model",
        content: "Our course focuses on practical learning instead of only theory. You will work on real datasets, case studies, live assignments, and a capstone project to build your portfolio.",
      },
      {
        title: "Job Support and Career Assistance",
        content: "Our Business Analyst training in Delhi includes resume building, mock interviews, soft skills training, job referrals, and placement assistance.",
      },
    ],
    highlights: [
      "Practical business analytics training",
      "Live projects and case studies",
      "Excel, Power BI, Tableau, SQL and Python",
      "Online and offline flexible batches",
      "Interview preparation",
      "Placement assistance",
    ],
    tools: ["Advanced Excel", "Power BI", "Tableau", "SQL", "Python"],
    whoCanJoin: [
      "Fresh graduates",
      "Working professionals",
      "Business owners",
      "IT professionals",
      "Beginners with no coding background",
    ],
    careerOptions: [
      "Business Analyst",
      "Data Analyst",
      "Reporting Analyst",
      "BI Developer",
      "Product Analyst",
    ],
  },
  "Data Analytics": {
    aboutTitle: "Data Analytics Course in Delhi - Learn Excel, SQL, Python, Power BI & Tableau",
    about: "An analytics program worth doing teaches you more than individual software tools. Lone Star Academy helps you link Excel, SQL, Python, statistics, data visualization, and business intelligence in one workflow that you can use for real-world analysis. The course is suitable for beginners as well as learners who want structured, guided instruction with hands-on practice.",
    sections: [
      {
        title: "Why Choose Our Data Analytics Training in Delhi?",
        content: `
        An analytics program worth doing will teach you more than individual software tools. Lone Star Academy helps you link Excel, SQL, Python, statistics, data visualizations, and business intelligence in a workflow that you can use to do real-world analysis.\n\nThe training helps learners build skills in data cleaning, exploratory analysis, reporting, dashboard creation, trend analysis, and communicating findings effectively. These skills apply across IT, finance, retail, e-commerce, healthcare, marketing, consulting, and operations.\n\n The program also caters to learners who like structured data analytics classes with guided instruction and hands-on practice.
`,
        points: [
          "Curriculum linking Excel, SQL, Python, statistics, and BI tools",
          "Hands-on projects and business case studies",
          "Guided instruction with practical training",
          "Beginner to advanced learning path",
          "Career support as per program offering",
        ],
      },
      {
        title: "What Will You Learn?",
        content: `The analytical workflow is typically as follows:

Collect data → Clean data → Explore data → Identify patterns → Create visualizations → Interpret insights → Recommend solutions

This helps learners to know how to use a tool, but also why a tool is relevant for a specific type of analysis. 
`,
        points: [
          "Excel for Data Analysis: formulas, lookup functions, PivotTables, charts, conditional formatting, and dashboards",
          "SQL for Data Analytics: filtering, sorting, aggregation, joins, subqueries, CTEs, and analytical queries",
          "Python for Data Analytics: Pandas, NumPy, Matplotlib, and Seaborn for data manipulation and visualization",
          "Power BI and Tableau: dashboards, calculated fields, reports, and interactive business intelligence",
          "Statistics for Data Analysis: descriptive statistics, probability, correlation, regression, distributions, and hypothesis testing",
          "Practical Projects and Business Case Studies: sales analysis, customer behaviour, marketing and financial reporting, HR analytics, and operational dashboards",
        ],
      },
      {
        title: "Data Analytics Certification in Delhi",
        content: `A certificate can serve to validate course completion and show that you have completed a formalized study. But employers typically look for something more than a certificate. Real life projects, thinking analytically, knowing SQL, dashboards, communication and ability to explain business insights are some of the critical components of a good candidate.
So, must-have features of a good data analytics institution would include the ability to fuse certification with hands-on-experience and tangible skills. 
`,
      },
      {
        title: "Data Analytics Course With Placement and Career Support",
        content: `For learners considering a data analytics course with placement, it is crucial to differentiate between placement support and an employment guarantee. Career support services can include assistance with resume building, interview preparation, mock interviews, portfolio guidance, and help identifying relevant job opportunities.\n\nLone Star Academy can be assessed on these tangible criteria when selecting a data analyst course in Delhi with placement: quality of curriculum, project relevance, trainer experience, student support services, certification, and the type of career assistance provided. 
`,
      },
      {
        title: "Why Learn Data Analytics in Delhi?",
        content: `The employment landscape in Delhi and the NCR region is varied across technology, consulting, banking, finance, retail, healthcare, education, e-commerce and professional services. Studying in the classroom locally also meant easy access to instructor-led data analytics training, professional networking, and career-focused education.
Lone Star Academy caters to the students in Delhi and those from the adjoining NCR areas can also apply for this course on the basis of their preferred mode of learning and batch timings. 
`,
      },
    ],
    // highlights: [
    //   "Beginner to advanced data analytics training",
    //   "Excel, SQL, Python, Power BI and Tableau",
    //   "Hands-on projects and business case studies",
    //   "Statistics for data analysis",
    //   "Certification on course completion",
    //   "Career support and interview preparation",
    // ],
    tools: ["Microsoft Excel", "SQL", "Python", "Power BI", "Tableau"],
    whoCanJoin: [
      "Graduates and college students",
      "BBA, B.Com, MBA and engineering graduates",
      "IT and non-IT professionals",
      "Business and reporting professionals",
      "Professionals planning a career transition",
      "Learners who want to strengthen Excel, SQL, Python or BI skills",
    ],
    careerOptions: [
      "Data Analyst",
      "Business Analyst",
      "BI Analyst",
      "Reporting Analyst",
      "MIS Analyst",
      "Marketing Analyst",
      "Operations Analyst",
      "Financial Analyst",
    ],
   
journey: [
  {
    title: "Start Your Data Analytics Journey",
    desc: `An important career decision is which data analytics institute in Delhi you will choose. Before you enroll, consider the curriculum, hands-on training, projects, learning support, certification, and career services.

Lone Star Academy offers a guided learning environment to build modern analytics skills. Get in touch with the academy to enquire about their data analytics courses in Delhi, latest batches, curriculum, fees, and eligibility, and select a learning path that best fits your career aspirations.`
  }
]

  },
  "Data Science": {
    aboutTitle: "Data Science Course in Delhi with Practical Training & Placement Support",
    about: "Data science is more than just knowing algorithms. Practitioners at all levels must work with data, write and read code, understand the output of code, solve business problems, and communicate findings.",
    sections: [
      {
        title: "Why Choose Our Data Science Course in Delhi?",
         content: `Data science is more than just knowing algorithms. Practitioners at all levels must work with data, write and read code, understand the output of code, solve business problems, and communicate findings.\n\nLone Star Academy believes in teaching that works. Students are exposed to live projects, case studies, assignments, industry tools, resume building, mock interviews and career assistance. The academy also offers both physical class sessions and online education options.`,
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
        content: "Lone Star Academy's Delhi centre is located at B-1/1, 2nd Floor, Janakpuri, New Delhi - 110058, making the classroom program accessible to learners from West Delhi and surrounding Delhi-NCR areas.",
        points: [
          "Location: Janakpuri, New Delhi",
          "Training Mode: Offline classroom and online",
          "Learning Approach: Practical and project-based",
          "Suitable For: Students, graduates and working professionals",
          "Projects: Live projects and practical assignments",
          "Certification: Lone Star Academy course certificate",
          "Career Support: Resume, interviews and placement guidance",
        ],
      },
      {
        title: "What Will You Learn in Data Science?",
        content: "A good data science background includes programming, statistics, analytics, machine learning, and business problem solving all rolled into one.",
        points: [
          "Python for Data Science: Acquire the programming skills needed to manipulate data and build data driven applications. Python is also popular for data preprocessing, data analysis, data visualization and machine learning pipelines.",
          "Statistics & Data Analysis: The statistical ideas behind the way we interpret data and find patterns, relationships and make decisions with data.",
          "Machine Learning: Gain a foundation in machine learning and the practical uses of models for classifying, predicting, interpreting patterns, and more.",
          "Data Analytics & Visualization: Through data analysis, visualization, reporting and interpretation, you will learn to convert raw data to actionable intelligence.",
          "Practical Projects: Projects and case studies help connect classroom concepts to what is needed on the job. Students practise coding solutions, analyse data and work through real-world cases.",
        ],
      },
      {
        title: "Data Science Offline Course in Delhi",
        content: "For students who prefer face to face interaction with the trainers and classmates, the data science offline course in Delhi offers a classroom learning environment at Lone Star Academy's Janakpuri centre.\n\n Offline learning can be especially handy when you have instant doubts to be resolved, guided coding practice, classroom discussions and structured interaction with the trainers. Lone Star Academy also offers online learning options for students and professionals looking for more flexibility.",
      },
      {
        title: "Projects and Practical Learning",
        content: "Practice is the difference between learning data science in theory and being able to implement it in the real world.\n\n The training methodology at Lone Star Academy involves live projects, hands-on exercises, case studies and real-time implementation. These can be used by students to reinforce their data analysis and machine learning skills, as well as creating content that can be added to a professional portfolio.",
      },
      {
        title: "Data Science Course in Delhi with Placement Support",
        content: "Training is just one aspect of career preparation. Lone Star Academy offers career services, including resume design, LinkedIn profile optimization, mock interviews, soft-skills training, job referrals, placement support and career counselling. The academy also has a hiring partner network and offers placement-centric support to learners. Placement assistance is guidance in career and access to opportunities, and not an alternative to one's individual skills, performance in interview and eligibility.",
      },
      {
        title: "Why Study Data Science in Delhi-NCR?",
        content: "Delhi NCR has a vast professional ecosystem that includes technology, consulting, finance, e-commerce, analytics, and various other data-focused industries. Studying at a local data science training institute in Delhi can allow you access to a blend of offline training and real-time professional environment. Lone Star Academy Janakpuri serves students from Vikas Puri, Tilak Nagar, Hari Nagar, Rajouri Garden, Dwarka, Uttam Nagar, Punjabi Bagh, Patel Nagar, Rohini and other parts of Delhi, as well as Noida, Ghaziabad and Gurgaon.",
      },
      {
        title: "Why Choose Lone Star Academy?",
        content: "Lone Star Academy was founded in 2013 and its training model is a blend of expert mentorship, industry-relevant curriculum, hands-on execution, and career assistance. According to the academy, it has trained 10,000+ students and has partnered with 100+ industry expert trainers for its programs.\n\nThe process is structured as follows: take a free demo class, learn from the trainers, do hands-on projects, get your resume and interviews ready, get placed, and start your career.",
      },
    ],
    // highlights: [
    //   "Practical, industry-oriented training",
    //   "Live projects and case studies",
    //   "Offline and online learning options",
    //   "Resume and LinkedIn profile support",
    //   "Placement guidance and job referrals",
    //   "Course completion certification",
    // ],
    tools: ["Python", "SQL", "Machine Learning", "Statistics", "Data Visualization"],
    whoCanJoin: [
      "College students and fresh graduates",
      "Professionals from IT and technology backgrounds",
      "Data and business analysts",
      "Working professionals planning a career transition",
      "Professionals who want to strengthen Python, analytics, or machine learning skills",
      "Learners beginning their journey toward data science",
    ],
    careerOptions: [
      "Data Analyst",
      "Data Scientist",
      "Business Analyst",
      "Machine Learning Engineer",
      "Analytics Professional",
      "AI and machine learning roles",
    ],
    journey: [
  {
    title: "Start Learning Data Science in Delhi",
    desc: `A data scientist’s career is developed through regular practice, solid conceptual understanding, hands-on projects, and real-world application of technical knowledge. Lone Star Academy offers the perfect blend of classroom or online learning with hands-on experience and career readiness, to support you in taking that next step.
Enroll for Data Science Course in Delhi at Lone Star Academy and begin your journey to a data driven career.
`
  }
]
  },
  "Digital Marketing": {
    aboutTitle: "Best Online Digital Marketing Course & Digital Marketing Course in Delhi",
    about: "Digital marketing is one of the fastest-growing career fields. At Lone Star Academy, our Digital Marketing course combines real-world skills, industry tools, live projects, certifications, and placement assistance.",
    sections: [
      {
        title: "Why Choose Lone Star Academy for Digital Marketing?",
        content: "We train, mentor, and prepare students for real digital marketing work through practical projects and industry-standard tools.",
        points: [
          "Industry-relevant curriculum based on current trends",
          "Live project training",
          "Expert mentors from top agencies",
          "Certifications to enhance your credibility",
          "Placement support",
        ],
      },
      {
        title: "Course Highlights",
        content: "Our Digital Marketing course covers both basic and advanced digital marketing skills.",
        points: [
          "SEO",
          "Google Ads and PPC Campaigns",
          "Social Media Marketing",
          "Content Marketing",
          "Email Marketing Automation",
          "Affiliate Marketing",
          "Web Analytics and Tracking",
          "AI Tools in Digital Marketing",
        ],
      },
      {
        title: "Practical Campaign Training",
        content: "Students work on live business websites, ad campaign creation, SEO audits, social media strategy, and reporting concepts.",
      },
      {
        title: "Placement Assistance",
        content: "Our placement assistance includes resume building, interview coaching, expert mock interviews, hiring partner access, and internship opportunities.",
      },
    ],
    highlights: [
      "SEO and Google Ads training",
      "Social media marketing",
      "Live campaign projects",
      "AI tools in digital marketing",
      "Internship support",
      "Placement assistance",
    ],
    tools: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Google Analytics",
      "Email Marketing",
      "AI Tools",
    ],
    whoCanJoin: [
      "Students",
      "Job seekers",
      "Entrepreneurs",
      "Freelancers",
      "Working professionals",
    ],
    careerOptions: [
      "SEO Specialist",
      "Social Media Manager",
      "PPC Expert",
      "Content Strategist",
      "Digital Marketing Manager",
    ],
  },
  "Cloud Computing": {
    aboutTitle: "Cloud Computing Courses in Delhi & Online",
    about: "If you are looking for practical Cloud Computing training, online cloud courses, real-life environment-based learning, and job-oriented cloud courses in Delhi, Lone Star Academy is the perfect choice for you.",
    sections: [
      {
        title: "Why Select Lone Star Academy for Cloud Computing Training?",
        content: "A good cloud training institute can shape your career path. Lone Star Academy provides quality education, practical lab sessions, expert guidance, and placement support.",
        points: [
          "Industry-relevant AWS, Azure and Google Cloud based curriculum",
          "Real-world experience through practical lab sessions",
          "Trained professionals with industry exposure",
          "In-house placement support and interview preparation",
          "Flexible online and classroom learning options",
        ],
      },
      {
        title: "What You Will Learn",
        content: "Our Cloud Computing course covers everything from cloud basics to advanced deployment and security concepts.",
        points: [
          "Introduction to Cloud Computing and Architecture",
          "Virtualization and basic networking",
          "Cloud Service Models: IaaS, PaaS and SaaS",
          "AWS, Microsoft Azure and Google Cloud Platforms",
          "Security and Compliance in the Cloud",
          "DevOps and Automation Tools",
          "Deployment and Migration Techniques",
        ],
      },
      {
        title: "Cloud Computing Training with Placement",
        content: "Our placement assistance includes resume building, portfolio development, mock interviews, HR preparation, job referrals, hiring partner connections, and communication training.",
      },
      {
        title: "Certification Preparation",
        content: "The course helps students prepare for AWS, Microsoft Azure, and Google Cloud certifications with practical guidance and career support.",
      },
    ],
    highlights: [
      "AWS, Azure and Google Cloud curriculum",
      "Practical lab sessions",
      "Cloud security and compliance",
      "DevOps and automation tools",
      "Certification preparation",
      "Placement assistance",
    ],
    tools: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "DevOps Tools",
    ],
    whoCanJoin: [
      "Fresh graduates",
      "IT professionals",
      "Career switchers",
      "Business owners",
      "Beginners in cloud technology",
    ],
    careerOptions: [
      "Cloud Engineer",
      "Solutions Architect",
      "DevOps Engineer",
      "Cloud Security Specialist",
      "System Administrator",
    ],
  },
};

const courseSchemas: Record<string, object[]> = {
  "Data Science": [
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
      image: "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784789428/lonestar_academy/yz6sed8pmiwupqwfuqz2.jpg",
      description: "Grow your data science skills with Lone Star Academy, a career-focused training institute in Janakpuri, New Delhi. The Data Science Course in Delhi is a blend of instructor-led learning, hands-on assignments, live projects, coding practice, and career readiness to equip students and working professionals with job-ready skills.",
      brand: {
        "@type": "Brand",
        name: "Lone Star Academy",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "25",
      },
    },
  ],

  "Data Analytics": [
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
      image: "https://res.cloudinary.com/df5l1kxpf/image/upload/v1784788643/lonestar_academy/ynkxwnhw7b5kfr0n3ysh.jpg",
      description: "Develop hands-on, job-ready analytics skills with Lone Star Academy data analytics courses in Delhi. The training is built around the skills businesses use to transform raw data into actionable insights, reports, dashboards, and better decisions. Whether you are a graduate, student, working professional, or looking to transition to a career, the program can assist you in building a structured knowledge of data analysis and business intelligence.",

      brand: {
        "@type": "Brand",
        name: "Lone Star Academy",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "30",
      },
    },
  ],
};

const curriculum: Record<string, string[]> = {
  "Business Analytics": [
    "Introduction to Business Analytics",
    "Advanced Excel",
    "Power BI Fundamentals",
    "Tableau Dashboards",
    "SQL for Analytics",
    "Business Reporting",
    "Real-world Case Studies",
  ],
  "Data Analytics": [
    "Python Basics",
    "NumPy & Pandas",
    "SQL & Database Concepts",
    "Data Cleaning",
    "Visualization with Power BI",
    "Statistics for Analytics",
    "Capstone Project",
  ],
  "Data Science": [
    "Python for Data Science",
    "Machine Learning",
    "Deep Learning Basics",
    "NLP Fundamentals",
    "Data Engineering Concepts",
    "Model Deployment",
    "Industry Projects",
  ],
  "Digital Marketing": [
    "SEO Fundamentals",
    "Google Ads",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Analytics & Reporting",
    "Practical Campaign Projects",
  ],
  "Cloud Computing": [
    "Cloud Fundamentals",
    "AWS Services",
    "Microsoft Azure Basics",
    "Google Cloud Basics",
    "Docker & Kubernetes",
    "Cloud Security",
    "Certification Preparation",
  ],
};

const benefits = [
  "100% Practical Training",
  "Live Projects & Assignments",
  "Interview Preparation",
  "Resume Building Support",
  "Placement Assistance",
  "Recorded Backup Sessions",
  "Expert Trainers",
  "Flexible Learning Structure",
];

const whyChoose = [
  {
    icon: Award,
    title: "Industry-Oriented Learning",
    desc: "Learn with real tools, real scenarios, and job-ready practical modules.",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    desc: "We help students with resume support, mock interviews, and placement guidance.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    desc: "Get support from experienced trainers with practical domain knowledge.",
  },
];

const pageImages: Record<string, string> = {
  "Business Analytics": "/businessanlytics.jpg",
  "Data Analytics": "/dataanalytics.jpg",
  "Data Science": "/datascience.jpg",
  "Digital Marketing": "/Digitalmarketing.jpg",
  "Cloud Computing": "/cloudcomputing.jpg",
};

// NOTE: static `faqs` object removed — FAQs ab sirf DB (course.faqs) se aate hain.

export default function CourseDetailPage({
  slug,
  courseData,
}: {
  slug: string;
  courseData: Course;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showMobileForm, setShowMobileForm] = useState(false);
  const [allCourses, setAllCourses] = useState<Course[] | null>(null);
  const course = courseData;
  const [loading, setLoading] = useState(false);
  const shortName = course.name.split(" ").slice(0, 2).join(" ");
  const joinTitleMap: Record<string, string> = {
  "data science": "Data Scientist",
  "data analytics": "Data Analyst",
  "business analytics": "Business Analyst",
  "digital marketing": "Digital Marketing",
  "cloud computing": "Cloud Computing",
};
const joinTitle = joinTitleMap[shortName.toLowerCase()] || shortName;
  const getAllCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/api/courses`);
      setAllCourses(response.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch courses on mount
  useEffect(() => {
    getAllCourses();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: course?.name || "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your enquiry has been submitted successfully.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      course: course?.name || "",
      message: "",
    });
    setShowMobileForm(false);
  };

  if (!course) {
    return <NotFound />;
  }

  // Content lookup: category first, then course name as a fallback.
  // (course.category in DB must match a key of courseContent, e.g. "Data Analytics")
  // category / name / slug se loose match (case, space, hyphen ignore)
  const norm = (v?: string) => (v || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const candidates = [course.category, course.name, course.slug].map(norm);

  const matchKey = (keys: string[]): string => {
    const exact = keys.find((k) => candidates.includes(norm(k)));
    if (exact) return exact;
    return (
      keys.find((k) => candidates.some((c) => c && c.includes(norm(k)))) || ""
    );
  };

  const contentKey = matchKey(Object.keys(courseContent));
  const content: CourseExtraContent | undefined = contentKey
    ? courseContent[contentKey]
    : undefined;

  const heroImage = course.image
    ? course.image.startsWith("http")
      ? course.image
      : `${BASE_URL}${course.image}`
    : pageImages[course.name] || "/images/default-course.jpg";

  const staticKey = matchKey(Object.keys(curriculum)) || "";

  // DB syllabus + static curriculum (duplicates hata diye jaate hain)
  const mergedSyllabus = (() => {
    const seen = new Set<string>();
    return [...(course.syllabus || []), ...(curriculum[staticKey] || [])].filter(
      (m) => {
        const key = m.trim().toLowerCase();
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      }
    );
  })();

  const syllabus =
    mergedSyllabus.length > 0
      ? mergedSyllabus
      : [
          "Module 1: Introduction",
          "Module 2: Core Concepts",
          "Module 3: Advanced Topics",
          "Module 4: Practical Implementation",
          "Final Project",
        ];

  // Sirf DB FAQs (duplicate questions hata diye jaate hain)
  const courseFaqs = (() => {
    const seen = new Set<string>();
    return (course.faqs || []).filter((f) => {
      const key = f.question?.trim().toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  })();

  // DB values pehle, phir courseContent ki values. Duplicates hata diye jaate hain.
  const mergeUnique = (dbList?: string[], contentList?: string[]): string[] => {
    const seen = new Set<string>();
    return [...(dbList || []), ...(contentList || [])].filter((item) => {
      const key = item.trim().toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  const highlights = mergeUnique(course.highlights, content?.highlights);
  const tools = mergeUnique(course.tools, content?.tools);
  const careerOptions = mergeUnique(course.careerOptions, content?.careerOptions);
  const whoCanJoin = mergeUnique(course.whoCanJoin, content?.whoCanJoin);

  const schemas = courseSchemas[matchKey(Object.keys(courseSchemas))] || [];

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

                {/* <p className="mb-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                  {course.description || content?.about}
                </p> */}

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
                      <Star
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span className="text-sm">4.9 Rating</span>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:9711709644"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20  px-6 py-3 font-semibold text-orange-500 transition bg-white hover:text-slate-900"
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
                    src={heroImage}
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
              exit={{ opacity: 0, y: 100 }}
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
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>
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
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number *
                  </label>
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
                  {/* <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                      <GraduationCap size={22} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {content?.aboutTitle || "About This Course"}
                    </h2>
                  </div> */}

                  {course.description && (
                    <p className="leading-8 text-slate-600">
                      {course.description}
                    </p>
                  )}

                  {content?.about && content.about !== course.description && (
                    <p
                      className={`leading-8 text-slate-600 ${
                        course.description ? "mt-4" : ""
                      }`}
                    >
                      {/* {content.about} */}
                    </p>
                  )}
                </div>

                {/* CONTENT SECTIONS */}
                {content?.sections?.map((section, index) => (
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

                    <p className="leading-8 whitespace-pre-line text-slate-600">
                      {section.content}
                    </p>

                    {section.points && (
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
                            <span className="font-medium  text-slate-700">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* HIGHLIGHTS */}
                {highlights.length > 0 && (
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-slate-900">
                      Course Highlights
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {highlights.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4"
                        >
                          <CheckCircle
                            size={20}
                            className="mt-0.5 shrink-0 text-blue-600"
                          />
                          <span className="font-medium text-slate-700">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* BENEFITS */}
                {/* <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    What You Will Get
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {benefits.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <CheckCircle
                          size={20}
                          className="mt-0.5 shrink-0 text-green-500"
                        />
                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div> */}

                {/* CURRICULUM */}
                {/* <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    Course Curriculum
                  </h2>

                  <div className="space-y-4">
                    {syllabus.map((module, index) => (
                      <motion.div
                        key={module}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">
                            {module}
                          </h3>
                          <p className="text-sm text-slate-500">
                            Practical concepts and implementation-based learning.
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div> */}

                {/* TOOLS & CAREER */}
                {(tools.length > 0 || careerOptions.length > 0) && (
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* {tools.length > 0 && (
                      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                        <h2 className="mb-5 text-2xl font-bold text-slate-900">
                          Tools You Will Learn
                        </h2>

                        <div className="flex flex-wrap gap-3">
                          {tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )} */}

                    {careerOptions.length > 0 && (
                      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                        <h2 className="mb-5 text-2xl font-bold text-slate-900">
                          Career Options
                        </h2>

                        <div className="space-y-3">
                          {careerOptions.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3"
                            >
                              <Briefcase
                                size={18}
                                className="shrink-0 text-blue-600"
                              />
                              <span className="font-medium text-slate-700">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* WHO CAN JOIN */}
                {whoCanJoin.length > 0 && (
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-slate-900">
                      Who Can Join This {joinTitle} Course in Delhi?
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {whoCanJoin.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5"
                        >
                          <Users className="mb-3 text-blue-600" size={22} />
                          <h3 className="font-semibold text-slate-800">
                            {item}
                          </h3>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* WHY CHOOSE */}
                {/* <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    Why Choose Lone Star Academy
                  </h2>

                  <div className="grid gap-4 md:grid-cols-3">
                    {whyChoose.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.06 }}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                        >
                          <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-600">
                            <Icon size={22} />
                          </div>
                          <h3 className="mb-2 text-lg font-semibold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-7 text-slate-600">
                            {item.desc}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div> */}

                {/* FAQs (sirf DB se, DB mein na ho to section hide) */}
                {courseFaqs.length > 0 && (
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-slate-900">
                      Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                      {courseFaqs.map((faq, index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-2xl border border-slate-200"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenFaq(openFaq === index ? null : index)
                            }
                            className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left transition hover:bg-slate-50"
                          >
                            <span className="font-semibold text-slate-800">
                              {faq.question}
                            </span>
                            <ChevronDown
                              size={20}
                              className={`shrink-0 text-slate-500 transition-transform ${
                                openFaq === index ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {openFaq === index && (
                            <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
                              <p className="leading-7 text-slate-600">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                {/* <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-xl">
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Start Your Learning Journey Today
                    
                  </h2>
                  <p className="mt-3 max-w-2xl text-slate-100">
                    Join {course.name} at Lone Star Academy and learn with expert
                    support, live classes, and practical projects.
                  </p>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="tel:9711709644"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
                    >
                      <Phone size={18} />
                      Talk to Counselor
                    </a>
                  </div>
                </div> */}
                {/* CTA / JOURNEY */}
{content?.journey && content.journey.length > 0 ? (
  content.journey.map((j, index) => (
    <motion.div
      key={j.title}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-xl"
    >
      <h2 className="text-2xl font-bold md:text-3xl">{j.title}</h2>

      <p className="mt-3 max-w-3xl whitespace-pre-line leading-8 text-slate-100">
        {j.desc}
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
  ))
) : (
  <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-xl">
    <h2 className="text-2xl font-bold md:text-3xl">
      Start Your Learning Journey Today
    </h2>
    <p className="mt-3 max-w-2xl text-slate-100">
      Join {course.name} at Lone Star Academy and learn with expert
      support, live classes, and practical projects.
    </p>

    <div className="mt-6 flex flex-col gap-4 sm:flex-row">
      <a
        href="tel:9711709644"
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
      >
        <Phone size={18} />
        Talk to Counselor
      </a>
    </div>
  </div>
)}
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

                      <h3 className="mt-3 text-2xl font-bold text-white">
                        Course Enquiry
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white">
                          Full Name
                        </label>
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
                        <label className="mb-2 block text-sm font-medium text-white">
                          Phone Number
                        </label>
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
                        <span className="text-xs font-medium text-slate-400">
                          OR
                        </span>
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
                {allCourses
                  ?.filter((c: Course) => c._id !== course._id) // Exclude current course
                  .slice(0, 8) // Limit to 8 courses
                  .map((c: Course) => {
                    // Get image URL (handle both local and Cloudinary URLs)
                    const courseImage = c.image
                      ? c.image.startsWith("http")
                        ? c.image
                        : `${BASE_URL}${c.image}`
                      : pageImages[c.name] || "/images/default-course.jpg";

                    // Get slug for the link
                    const courseSlug =
                      c.slug || c.name.toLowerCase().replace(/\s+/g, "-");

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
                              // Fallback if image fails to load
                              (e.target as HTMLImageElement).src =
                                "/images/default-course.jpg";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                          {/* Price Badge */}
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
                            <ArrowRight
                              size={16}
                              className="ml-2 transition group-hover:translate-x-1"
                            />
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
              </div>
            )}

            {!loading &&
              allCourses?.filter((c: Course) => c._id !== course._id).length ===
                0 && (
                <p className="text-center text-slate-500">
                  No other courses available.
                </p>
              )}
          </div>
        </section>
        <CertificateSection/>
        <PlacedStudents/>
        <TestimonialsSlider/>
        <FullWidthMap/>
        <Footer />
      </main>
    </>
  );
}