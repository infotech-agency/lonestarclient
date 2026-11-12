"use client";

import { useEffect, useRef, useState } from "react";
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

function ArrowIcon({ left = false }: { left?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className={left ? "rotate-180" : ""}
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlogImage({ blog }: { blog: Blog }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [blog.image]);

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#edf2fa]">
      {blog.image && !failed ? (
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-[#0b3a82]/30">
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
          </svg>
        </div>
      )}

      <span className="absolute bottom-4 left-4 max-w-[85%] truncate rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#0b3a82] shadow-sm">
        {blog.category || "Insights"}
      </span>
    </div>
  );
}

export default function HomeBlogSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);

  const [navigation, setNavigation] = useState({
    previous: false,
    next: false,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadBlogs() {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(`${BASE_URL}/api/blogs`, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Failed to load blogs");

        const result = await response.json();
        const records = Array.isArray(result)
          ? result
          : Array.isArray(result?.data)
            ? result.data
            : null;

        if (!records || result?.success === false) {
          throw new Error("Invalid blog response");
        }

        setBlogs(records);
      } catch {
        if (!controller.signal.aborted) setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadBlogs();

    return () => controller.abort();
  }, [retry]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    function updateNavigation() {
      if (!slider) return;

      const previous = slider.scrollLeft > 2;
      const next =
        slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 2;

      setNavigation((current) =>
        current.previous === previous && current.next === next
          ? current
          : { previous, next },
      );
    }

    updateNavigation();

    const observer = new ResizeObserver(updateNavigation);
    observer.observe(slider);

    slider.addEventListener("scroll", updateNavigation, { passive: true });

    return () => {
      observer.disconnect();
      slider.removeEventListener("scroll", updateNavigation);
    };
  }, [blogs.length, loading, error]);

  function slide(direction: -1 | 1) {
    const slider = sliderRef.current;
    const card = slider?.firstElementChild as HTMLElement | null;

    if (!slider || !card) return;

    const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    slider.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  if (!loading && !error && blogs.length === 0) return null;

  return (
    <section
      aria-labelledby="blogs-heading"
      className="overflow-hidden bg-[#f7f9fc] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-10">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f59a23]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b3a82]">
                From the Blog
              </span>
            </div>

            <h2
              id="blogs-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-[#102b50] sm:text-4xl lg:text-[42px]"
            >
              Fresh ideas.
              <span className="text-[#0b3a82]"> Practical insights.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              Explore career advice, learning resources, and industry updates
              from Lone Star Academy.
            </p>
          </div>

          {!loading && !error && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => slide(-1)}
                disabled={!navigation.previous}
                aria-label="Previous blogs"
                aria-controls="homepage-blog-slider"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8e2ef] bg-white text-[#0b3a82] transition-colors hover:border-[#0b3a82] hover:bg-[#0b3a82] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#d8e2ef] disabled:hover:bg-white disabled:hover:text-[#0b3a82]"
              >
                <ArrowIcon left />
              </button>

              <button
                type="button"
                onClick={() => slide(1)}
                disabled={!navigation.next}
                aria-label="Next blogs"
                aria-controls="homepage-blog-slider"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8e2ef] bg-white text-[#0b3a82] transition-colors hover:border-[#0b3a82] hover:bg-[#0b3a82] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#d8e2ef] disabled:hover:bg-white disabled:hover:text-[#0b3a82]"
              >
                <ArrowIcon />
              </button>
            </div>
          )}
        </div>

        {loading ? (
          <div
            role="status"
            aria-label="Loading blogs"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className={`overflow-hidden rounded-2xl border border-slate-200/70 bg-white ${
                  item === 1
                    ? "hidden sm:block"
                    : item === 2
                      ? "hidden lg:block"
                      : ""
                }`}
              >
                <div className="aspect-[16/10] animate-pulse bg-slate-200 motion-reduce:animate-none" />

                <div className="space-y-4 p-6">
                  <div className="h-5 w-5/6 animate-pulse rounded bg-slate-100 motion-reduce:animate-none" />
                  <div className="h-5 w-2/3 animate-pulse rounded bg-slate-100 motion-reduce:animate-none" />
                  <div className="h-12 animate-pulse rounded bg-slate-100 motion-reduce:animate-none" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div
            role="status"
            className="rounded-2xl border border-slate-200 bg-white p-8 text-center"
          >
            <p className="text-sm text-slate-600">
              Blogs could not be loaded.
            </p>
            <button
              type="button"
              onClick={() => setRetry((value) => value + 1)}
              className="mt-4 text-sm font-semibold text-[#0b3a82] underline underline-offset-4"
            >
              Try again
            </button>
          </div>
        ) : (
          <div
            id="homepage-blog-slider"
            ref={sliderRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Latest blogs"
            tabIndex={0}
            className="blog-slider flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto overscroll-x-contain rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            {blogs.map((blog, index) => (
              <article
                key={blog._id}
                aria-label={`${index + 1} of ${blogs.length}`}
                className="group flex w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-[#e3e9f1] bg-white transition-colors duration-300 hover:border-[#b9cbe3] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
              >
                <BlogImage blog={blog} />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold leading-snug tracking-tight text-[#152e50]">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="line-clamp-2 transition-colors hover:text-[#1760af]"
                    >
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-6">
                    <Link
                      href={`/blog/${blog.slug}`}
                      aria-label={`Read article: ${blog.title}`}
                      className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4 text-sm font-semibold text-[#0b3a82]"
                    >
                      Read Article

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef4fc] transition-colors group-hover:bg-[#0b3a82] group-hover:text-white">
                        <ArrowIcon />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .blog-slider {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .blog-slider::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}