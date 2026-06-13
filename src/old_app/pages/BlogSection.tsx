import { useState, useEffect } from "react";
import Link from "next/link";
import { BASE_URL } from "../../../utils/baseUrl";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Our Latest Blogs
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Read the latest updates, industry trends, and professional insights tailored just for you.
          </p>
        </div>

        {/* Blog Grid Container */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            /* Premium Skeleton Loader with Shimmer Effect */
            [1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm p-4 space-y-4">
                <div className="h-48 w-full animate-pulse rounded-xl bg-slate-200" />
                <div className="h-4 w-1/4 animate-pulse rounded bg-slate-200" />
                <div className="space-y-2">
                  <div className="h-5 w-full animate-pulse rounded bg-slate-200" />
                  <div className="h-5 w-5/6 animate-pulse rounded bg-slate-200" />
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-slate-100" />
                </div>
              </div>
            ))
          ) : blogs.length > 0 ? (
            /* Render Dynamic Blogs */
            blogs.map((blog) => (
              <article
                key={blog._id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image Wrapper */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={blog.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"}
                    alt={blog.title}
                    className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content Details */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {blog.category || "General"}
                    </span>
                  </div>

                  <div className="flex-1 mt-4">
                    <h3 className="text-xl font-bold leading-snug text-slate-900 line-clamp-2 transition group-hover:text-blue-600">
                      {blog.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-50">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 transition hover:text-blue-700"
                    >
                      Read Article
                      <svg 
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            /* Empty State Handler */
            <div className="col-span-full rounded-2xl border border-dashed border-slate-200 bg-white py-12 text-center">
              <p className="text-sm font-medium text-slate-500">No matching blogs found at the moment.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}