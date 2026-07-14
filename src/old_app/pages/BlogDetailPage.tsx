// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Navigation } from "../components/Navigation";
// import { Footer } from "../components/Footer";
// import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
// import { marked } from "marked";
// interface Blog {
//   _id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   image: string;
//   category: string;
//   author: string;
//   createdAt: string;
//   updatedAt: string;
//   seo?: {
//     title?: string;
//     description?: string;
//     keywords?: string;
//   };
// }

// interface RelatedBlog {
//   _id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   image: string;
//   category: string;
// }

// const BLOG_CONTENT_ENCODING_PREFIX = "__BLOG_HTML_URI__:";

// const decodeBlogContent = (content: string) => {
//   if (!content.startsWith(BLOG_CONTENT_ENCODING_PREFIX)) return content;

//   try {
//     return decodeURIComponent(content.slice(BLOG_CONTENT_ENCODING_PREFIX.length));
//   } catch {
//     return content.slice(BLOG_CONTENT_ENCODING_PREFIX.length);
//   }
// };

// const renderBlogContent = (content = "") => {
//   const trimmedContent = decodeBlogContent(content).trim();
//   const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(trimmedContent);

//   if (hasHtmlTags) {
//     return trimmedContent;
//   }

//   return marked.parse(trimmedContent, { async: false }) as string;
// };

// export default function BlogDetailPage({ 
//   blogData, 
//   relatedBlogsData 
// }: { 
//   blogData: Blog;
//   relatedBlogsData: RelatedBlog[];
// }) {
//   const [copied, setCopied] = useState(false);
//   const blogContentHtml = renderBlogContent(blogData?.content || "");
//   // Sirf scroll ke liye useEffect - data fetching nahi!
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat("en-IN", {
//       day: "numeric",
//       month: "long",
//       year: "numeric"
//     }).format(date);
//   };

//   const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  
//   const shareOnFacebook = () => {
//     window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
//   };
  
//   const shareOnTwitter = () => {
//     window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blogData?.title || "")}`, "_blank");
//   };
  
//   const shareOnLinkedIn = () => {
//     window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
//   };
  
//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(shareUrl);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error("Failed to copy:", err);
//     }
//   };

//   // Agar blog data nahi hai to 404
//   if (!blogData) {
//     return (
//       <>
//         <Navigation />
//         <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
//           <div className="text-center">
//             <h2 className="text-6xl font-bold text-gray-300">404</h2>
//             <h2 className="mt-4 text-2xl font-semibold text-gray-800">Blog not found</h2>
//             <p className="mt-2 text-gray-600">The blog you're looking for doesn't exist or has been moved.</p>
//             <Link
//               href="/blog"
//               className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
//             >
//               <ArrowLeft size={18} />
//               Back to Blog
//             </Link>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navigation />
      
//       <main className="bg-gray-50">
//         {/* Hero Section */}
//         <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 text-white">
//           <div className="absolute inset-0 bg-black/30" />
//           <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
//             <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-semibold text-blue-200 backdrop-blur-sm">
//               {blogData.category}
//             </span>
//             <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
//               {blogData.title}
//             </h1>
//             <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
//               <div className="flex items-center gap-2">
//                 <User size={16} />
//                 <span>By {blogData.author || "Lone Star Academy"}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar size={16} />
//                 <span>{formatDate(blogData.createdAt)}</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Content Section */}
//         <section className="py-12 md:py-16">
//           <div className="mx-auto max-w-4xl px-4">
//             {/* Featured Image */}
//             <div className="mb-8 overflow-hidden rounded-2xl shadow-xl">
//               <img
//                 src={blogData.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"}
//                 alt={blogData.title}
//                 className="h-auto w-full object-cover"
//               />
//             </div>

//             {/* Share Buttons */}
//             <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
//               <Link
//                 href="/blog"
//                 className="inline-flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
//               >
//                 <ArrowLeft size={18} />
//                 Back to Blog
//               </Link>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-gray-500">Share:</span>
//                 <button
//                   onClick={shareOnFacebook}
//                   className="rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700 hover:scale-110"
//                   aria-label="Share on Facebook"
//                 >
//                   <Facebook size={16} />
//                 </button>
//                 <button
//                   onClick={shareOnTwitter}
//                   className="rounded-full bg-black p-2 text-white transition hover:bg-gray-800 hover:scale-110"
//                   aria-label="Share on Twitter"
//                 >
//                   <Twitter size={16} />
//                 </button>
//                 <button
//                   onClick={shareOnLinkedIn}
//                   className="rounded-full bg-blue-700 p-2 text-white transition hover:bg-blue-800 hover:scale-110"
//                   aria-label="Share on LinkedIn"
//                 >
//                   <Linkedin size={16} />
//                 </button>
//                 <button
//                   onClick={copyToClipboard}
//                   className="rounded-full bg-gray-600 p-2 text-white transition hover:bg-gray-700 hover:scale-110"
//                   aria-label="Copy link"
//                 >
//                   {copied ? <Check size={16} /> : <Link2 size={16} />}
//                 </button>
//               </div>
//             </div>

//             {/* Blog Content */}
//             <article
//               className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-ul:list-disc prose-ol:list-decimal"
//               dangerouslySetInnerHTML={{ __html: blogContentHtml }}
//             />


//             {/* Back to Top Button */}
//             <div className="mt-12 border-t border-gray-200 pt-8 text-center">
//               <button
//                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                 className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
//               >
//                 Back to Top
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Related Blogs Section */}
//         {relatedBlogsData && relatedBlogsData.length > 0 && (
//           <section className="bg-white py-16">
//             <div className="mx-auto max-w-7xl px-4">
//               <h2 className="mb-8 text-3xl font-bold text-gray-900">Related Blogs</h2>
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {relatedBlogsData.map((relatedBlog) => (
//                   <div
//                     key={relatedBlog._id}
//                     className="group overflow-hidden rounded-2xl bg-gray-50 shadow-md transition hover:shadow-xl"
//                   >
//                     <img
//                       src={relatedBlog.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"}
//                       alt={relatedBlog.title}
//                       className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
//                     />
//                     <div className="p-6">
//                       <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
//                         {relatedBlog.category}
//                       </span>
//                       <h3 className="mt-3 text-xl font-semibold text-gray-900 line-clamp-2">
//                         {relatedBlog.title}
//                       </h3>
//                       <p className="mt-2 text-sm text-gray-600 line-clamp-2">
//                         {relatedBlog.excerpt}
//                       </p>
//                       <Link
//                         href={`/blog/${relatedBlog.slug}`}
//                         className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
//                       >
//                         Read More
//                         <ArrowLeft size={16} className="rotate-180" />
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}
//       </main>
      
//       <Footer />
//     </>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Calendar, User, ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Link2, Check, Clock } from "lucide-react";
import { marked } from "marked";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

interface RelatedBlog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  createdAt?: string;
}

const BLOG_CONTENT_ENCODING_PREFIX = "__BLOG_HTML_URI__:";

const decodeBlogContent = (content: string) => {
  if (!content.startsWith(BLOG_CONTENT_ENCODING_PREFIX)) return content;

  try {
    return decodeURIComponent(content.slice(BLOG_CONTENT_ENCODING_PREFIX.length));
  } catch {
    return content.slice(BLOG_CONTENT_ENCODING_PREFIX.length);
  }
};

const renderBlogContent = (content = "") => {
  const trimmedContent = decodeBlogContent(content).trim();
  const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(trimmedContent);

  if (hasHtmlTags) {
    return trimmedContent;
  }

  return marked.parse(trimmedContent, { async: false }) as string;
};

// Rough reading time estimate from plain text length
const estimateReadTime = (content = "") => {
  const plain = decodeBlogContent(content).replace(/<[^>]+>/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

export default function BlogDetailPage({
  blogData,
  relatedBlogsData
}: {
  blogData: Blog;
  relatedBlogsData: RelatedBlog[];
}) {
  const [copied, setCopied] = useState(false);
  const blogContentHtml = renderBlogContent(blogData?.content || "");
  const readTime = estimateReadTime(blogData?.content || "");

  // Sirf scroll ke liye useEffect - data fetching nahi!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blogData?.title || "")}`, "_blank");
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Agar blog data nahi hai to 404
  if (!blogData) {
    return (
      <>
        <Navigation />
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-gray-300">404</h2>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">Blog not found</h2>
            <p className="mt-2 text-gray-600">The blog you're looking for doesn't exist or has been moved.</p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />

      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 text-white">
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(96,165,250,0.4), transparent 40%), radial-gradient(circle at 80% 60%, rgba(129,140,248,0.35), transparent 45%)"
            }}
          />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-200 backdrop-blur-sm">
              {blogData.category}
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {blogData.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>By {blogData.author || "Lone Star Academy"}</span>
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-gray-500 sm:block" />
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(blogData.createdAt)}</span>
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-gray-500 sm:block" />
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section: main article + right sidebar */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
              {/* Main column */}
              <div className="min-w-0">
                {/* Featured Image */}
                <div className="mb-8 overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={blogData.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"}
                    alt={blogData.title}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Share Buttons */}
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
                  >
                    <ArrowLeft size={18} />
                    Back to Blog
                  </Link>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Share:</span>
                    <button
                      onClick={shareOnFacebook}
                      className="rounded-full bg-blue-600 p-2 text-white transition hover:scale-110 hover:bg-blue-700"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={16} />
                    </button>
                    <button
                      onClick={shareOnTwitter}
                      className="rounded-full bg-black p-2 text-white transition hover:scale-110 hover:bg-gray-800"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={16} />
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="rounded-full bg-blue-700 p-2 text-white transition hover:scale-110 hover:bg-blue-800"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={16} />
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="rounded-full bg-gray-600 p-2 text-white transition hover:scale-110 hover:bg-gray-700"
                      aria-label="Copy link"
                    >
                      {copied ? <Check size={16} /> : <Link2 size={16} />}
                    </button>
                  </div>
                </div>

                {/* Blog Content */}
                <article
                  className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-ul:list-disc prose-ol:list-decimal"
                  dangerouslySetInnerHTML={{ __html: blogContentHtml }}
                />

                {/* Back to Top Button */}
                <div className="mt-12 border-t border-gray-200 pt-8 text-center">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                  >
                    Back to Top
                  </button>
                </div>
              </div>

              {/* Right Sidebar: Recent Blogs */}
              {relatedBlogsData && relatedBlogsData.length > 0 && (
                <aside className="lg:sticky lg:top-24 lg:self-start">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                      <h2 className="text-lg font-bold text-gray-900">Recent Blogs</h2>
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    </div>

                    <div className="flex flex-col gap-5">
                      {relatedBlogsData.map((recentBlog) => (
                        <Link
                          key={recentBlog._id}
                          href={`/blog/${recentBlog.slug}`}
                          className="group flex gap-3 rounded-xl p-2 transition hover:bg-gray-50"
                        >
                          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                            <img
                              src={recentBlog.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=80"}
                              alt={recentBlog.title}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-600">
                              {recentBlog.category}
                            </span>
                            <h3 className="mt-0.5 line-clamp-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                              {recentBlog.title}
                            </h3>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/blog"
                      className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                    >
                      View all blogs
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}