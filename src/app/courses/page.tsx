// "use client"
// import { useState, useEffect } from "react";
// import { motion } from "motion/react";

// // import { Navigation } from "../components/Navigation";
// import { Navigation } from "../../old_app/components/Navigation";
// // import { Footer } from "../components/Footer";
// import { Footer } from "../../old_app/components/Footer";
// import { Search, IndianRupee, ArrowRight, BookOpen } from "lucide-react";
// import { BASE_URL } from "../../../utils/baseUrl";
// // import ShortTermCourses from "../components/ShortTermCourses";
// import ShortTermCourses from "../../old_app/components/ShortTermCourses";
// import Link from "next/link";

// const API_BASE = BASE_URL;
// // const API_BASE = "https://slategrey-worm-160018.hostingersite.com";


// interface Course {
//   id: string;
//   name: string;
//   price: string;
//   duration: string;
//   description: string;
//   category: string;
//   image: string | null;
//   featured: boolean;
//   paymentLink?: string;
// }

// const categoryColors: Record<string, string> = {
//   Analytics: "bg-blue-100 text-blue-700",
//   "AI/ML": "bg-purple-100 text-purple-700",
//   Marketing: "bg-green-100 text-green-700",
//   Cloud: "bg-orange-100 text-orange-700",
//   Excel: "bg-emerald-100 text-emerald-700",
//   Database: "bg-amber-100 text-amber-700",
//   Programming: "bg-cyan-100 text-cyan-700",
//   Visualization: "bg-pink-100 text-pink-700",
// };

// export default function CoursesPage() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${API_BASE}/api/courses`)
//       .then((r) => r.json())
//       .then((data) => {
//         setCourses(Array.isArray(data) ? data : []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setCourses([]);
//         setLoading(false);
//       });
//   }, []);

//   const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

//   const filtered = courses.filter(
//     (c) =>
//       (category === "All" || c.category === category) &&
//       c.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const isMainCourse = (course: Course) => true;

//   const courseSlugMap: Record<string, string> = {
//     "Business Analytics": "about2",
//     "Data Analytics": "about3",
//     "Data Science": "about4",
//     "Digital Marketing": "about5",
//     "Cloud Computing": "about6",
//     "Financial Modeling": "about7",
//   };

//   return (
//     <>
//       <Navigation />

//       <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F4D] via-[#12397A] to-[#1D4ED8] py-20 text-white">
//         <div className="container relative mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 28 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
//           >
//             Explore Our <span className="text-orange-400">Professional Courses</span>
//           </motion.h1>

//           <p className="mx-auto mb-8 max-w-3xl text-base text-blue-100 md:text-lg">
//             Learn job-ready tools like Excel, Python, SQL, Tableau, SAS, AI, Machine Learning,
//             Big Data and more with practical training.
//           </p>

//           <div className="relative mx-auto max-w-xl">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search courses..."
//               className="w-full rounded-2xl bg-white py-3 pl-12 pr-4 text-gray-900 shadow-xl outline-none transition focus:ring-2 focus:ring-orange-400"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
//               Explore Short Term & Professional Certification Courses
//             </h2>
//           </div>

//           <div className="mb-10 flex flex-wrap justify-center gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setCategory(cat)}
//                 className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
//                   category === cat
//                     ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
//                     : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {loading ? (
//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//               {[...Array(8)].map((_, i) => (
//                 <div key={i} className="h-[370px] animate-pulse rounded-3xl bg-gray-200" />
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//               {filtered.map((course, i) => (
//                 <motion.div
//                   key={`${course.id}-${course.name}`}
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.04 }}
//                   className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//                 >
//                   <div className="relative h-52 overflow-hidden">
//                     {course.image ? (
//                       <img
//                         src={course.image}
//                         alt={course.name}
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
//                       />
//                     ) : (
//                       <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
//                         <BookOpen size={50} className="text-white/70" />
//                       </div>
//                     )}

//                     {course.featured && (
//                       <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
//                         Featured
//                       </span>
//                     )}

//                     <span
//                       className={`absolute bottom-3 left-3 rounded-full px-4 py-1 text-xs font-semibold ${
//                         categoryColors[course.category] || "bg-gray-100 text-gray-700"
//                       }`}
//                     >
//                       {course.category}
//                     </span>
//                   </div>

//                   <div className="p-5">
//                     <h3 className="mb-3 min-h-[56px] text-lg font-bold leading-snug text-[#002B5B]">
//                       {course.name}
//                     </h3>

//                     <p className="mb-5 line-clamp-2 text-sm leading-6 text-slate-600">
//                       {course.description}
//                     </p>

//                     <div className="border-t border-slate-200 pt-4">
//                       <div className="mb-4 flex items-center justify-between">
//                         <span className="flex items-center gap-1 text-sm text-slate-600">
//                           <IndianRupee size={15} />
//                           {course.price.replace("₹", "")}
//                         </span>

//                         <a
//                           href={course.paymentLink || "https://forms.eduqfix.com/lsaof/add"}
//                           className="font-semibold text-blue-600 transition hover:text-blue-800"
//                         >
//                           Pay Now
//                         </a>
//                       </div>

//                       {isMainCourse(course) && (
//                         <Link
//                           // to={`/courses/${course._id || course.id}`}
//                           to={`/${course?.slug}`}
//                           className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
//                         >
//                           View Details <ArrowRight size={16} />
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//       <section>
//         <ShortTermCourses/>
//       </section>
//       <Footer />
//     </>
//   );
// }

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Search, IndianRupee, ArrowRight, BookOpen } from "lucide-react";

// Import components (adjust paths as needed)
import { Navigation } from "../../old_app/components/Navigation";
import { Footer } from "../../old_app/components/Footer";
import ShortTermCourses from "../../old_app/components/ShortTermCourses";

// API configuration
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://slategrey-worm-160018.hostingersite.com";

interface Course {
  id: string;
  _id?: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  category: string;
  image: string | null;
  featured: boolean;
  paymentLink?: string;
  slug?: string;
}

const categoryColors: Record<string, string> = {
  Analytics: "bg-blue-100 text-blue-700",
  "AI/ML": "bg-purple-100 text-purple-700",
  Marketing: "bg-green-100 text-green-700",
  Cloud: "bg-orange-100 text-orange-700",
  Excel: "bg-emerald-100 text-emerald-700",
  Database: "bg-amber-100 text-amber-700",
  Programming: "bg-cyan-100 text-cyan-700",
  Visualization: "bg-pink-100 text-pink-700",
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/courses`);
        if (!response.ok) throw new Error("Failed to fetch courses");
        const data = await response.json();
        setCourses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Fetch error:", err);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

  const filtered = courses.filter(
    (c) =>
      (category === "All" || c.category === category) &&
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  const getCourseSlug = (course: Course): string => {
    // Use custom slug mapping or generate from name
    const slugMap: Record<string, string> = {
      "Business Analytics": "about2",
      "Data Analytics": "about3",
      "Data Science": "about4",
      "Digital Marketing": "about5",
      "Cloud Computing": "about6",
      "Financial Modeling": "about7",
    };
    
    return course.slug || slugMap[course.name] || `/courses/${course._id || course.id}`;
  };

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F4D] via-[#12397A] to-[#1D4ED8] py-20 text-white">
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Explore Our <span className="text-orange-400">Professional Courses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-8 max-w-3xl text-base text-blue-100 md:text-lg"
          >
            Learn job-ready tools like Excel, Python, SQL, Tableau, SAS, AI, Machine Learning,
            Big Data and more with practical training.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto max-w-xl"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              value={search}
              onChange={handleSearchChange}
              placeholder="Search courses..."
              className="w-full rounded-2xl bg-white py-3 pl-12 pr-4 text-gray-900 shadow-xl outline-none transition focus:ring-2 focus:ring-orange-400"
              aria-label="Search courses"
            />
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Explore Short Term & Professional Certification Courses
            </h2>
          </div>

          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  category === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600"
                }`}
                aria-label={`Filter by ${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[420px] animate-pulse rounded-3xl bg-gray-200" />
              ))}
            </div>
          ) : (
            <>
              {/* Courses Grid */}
              {filtered.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="text-xl text-gray-500">No courses found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearch("");
                      setCategory("All");
                    }}
                    className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((course, i) => (
                    <motion.div
                      key={course.id || course._id || course.name}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: Math.min(i * 0.04, 0.5) }}
                      className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      {/* Course Image */}
                      <div className="relative h-52 overflow-hidden">
                        {course.image ? (
                          <Image
                            src={course.image}
                            alt={course.name}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              const parent = target.parentElement;
                              if (parent) {
                                const fallback = document.createElement("div");
                                fallback.className = "flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600";
                                fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>';
                                parent.appendChild(fallback);
                                target.remove();
                              }
                            }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                            <BookOpen size={50} className="text-white/70" />
                          </div>
                        )}

                        {/* Featured Badge */}
                        {course.featured && (
                          <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                            Featured
                          </span>
                        )}

                        {/* Category Badge */}
                        <span
                          className={`absolute bottom-3 left-3 rounded-full px-4 py-1 text-xs font-semibold ${
                            categoryColors[course.category] || "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {course.category}
                        </span>
                      </div>

                      {/* Course Content */}
                      <div className="p-5">
                        <h3 className="mb-3 min-h-[56px] text-lg font-bold leading-snug text-[#002B5B]">
                          {course.name}
                        </h3>

                        <p className="mb-5 line-clamp-2 text-sm leading-6 text-slate-600">
                          {course.description}
                        </p>

                        <div className="border-t border-slate-200 pt-4">
                          <div className="mb-4 flex items-center justify-between">
                            <span className="flex items-center gap-1 text-sm text-slate-600">
                              <IndianRupee size={15} />
                              {course.price.replace("₹", "")}
                            </span>

                            <a
                              href={course.paymentLink || "https://forms.eduqfix.com/lsaof/add"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-blue-600 transition hover:text-blue-800"
                            >
                              Pay Now
                            </a>
                          </div>

                          <Link
                            href={`/${getCourseSlug(course)}`}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                          >
                            View Details <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Short Term Courses Section */}
      <section>
        <ShortTermCourses />
      </section>

      <Footer />
    </>
  );
}