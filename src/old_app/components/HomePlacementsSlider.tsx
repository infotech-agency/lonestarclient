"use client";

import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../../../utils/baseUrl";

type Placement = {
  _id: string;
  studentName: string;
  studentImage: string;
  companyName: string;
  companyLogo: string;
  role: string;
  order?: number;
};

function PlacementImage({
  src,
  alt,
  className,
  fallback,
}: {
  src?: string;
  alt: string;
  className: string;
  fallback: string;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-blue-50 text-center font-semibold text-[#0b3a82] ${className}`}
      >
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function PlacementStudentCard({ student }: { student: Placement }) {
  const initials = student.studentName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <article className="flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl border border-[#dce5f2] bg-white p-5">
      <div className="flex items-center gap-3">
        <PlacementImage
          src={student.studentImage}
          alt={student.studentName}
          fallback={initials || "LS"}
          className="h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-blue-50"
        />

        <div className="min-w-0">
          <h3 className="break-words text-base font-bold text-slate-900">
            {student.studentName}
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Lone Star Academy Student
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-4 py-8">
        <PlacementImage
          src={student.companyLogo}
          alt={`${student.companyName} logo`}
          fallback={student.companyName}
          className="h-16 w-full max-w-[180px] rounded-lg object-contain p-2 text-lg"
        />

        <p className="text-center text-sm font-medium text-slate-600">
          {student.companyName}
        </p>
      </div>

      <div className="rounded-xl border-l-4 border-[#ff9100] bg-[#f3f7fd] px-4 py-4">
        <p className="text-xs text-slate-500">Selected as</p>
        <h4 className="mt-1 break-words text-base font-bold leading-snug text-[#0b3a82]">
          {student.role}
        </h4>
      </div>
    </article>
  );
}

export default function HomePlacementsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [placements, setPlacements] = useState<Placement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPlacements() {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(`${BASE_URL}/api/placements`, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Request failed");

        const result = await response.json();

        if (!result.success || !Array.isArray(result.data)) {
          throw new Error("Invalid response");
        }

        const records = [...result.data] as Placement[];

        records.sort(
          (a, b) =>
            (a.order ?? Number.MAX_SAFE_INTEGER) -
            (b.order ?? Number.MAX_SAFE_INTEGER),
        );

        setPlacements(records);
      } catch {
        if (!controller.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void fetchPlacements();

    return () => controller.abort();
  }, [retry]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    function updateControls() {
      if (!slider) return;

      setCanPrevious(slider.scrollLeft > 2);
      setCanNext(
        slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 2,
      );
    }

    updateControls();

    const observer = new ResizeObserver(updateControls);
    observer.observe(slider);

    slider.addEventListener("scroll", updateControls, { passive: true });

    return () => {
      observer.disconnect();
      slider.removeEventListener("scroll", updateControls);
    };
  }, [placements.length, loading, error]);

  function moveSlider(direction: -1 | 1) {
    const slider = sliderRef.current;
    const firstCard = slider?.firstElementChild as HTMLElement | null;

    if (!slider || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(slider).columnGap) || 0;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    slider.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  // Avoid an empty placement section on the homepage.
  if (!loading && !error && placements.length === 0) return null;

  return (
    <section
      aria-labelledby="home-placements-heading"
      className="overflow-hidden bg-gradient-to-b from-white to-[#eef4ff] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e78000]">
              Student Success
            </p>

            <h2
              id="home-placements-heading"
              className="text-3xl font-bold tracking-tight text-[#0b3a82] sm:text-4xl"
            >
              Our Placements
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Meet our students and see where their careers are taking them.
            </p>
          </div>

          {!loading && !error && (
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                aria-label="Show previous placements"
                aria-controls="home-placements-track"
                disabled={!canPrevious}
                onClick={() => moveSlider(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-[#0b3a82] transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m14 6-6 6 6 6" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Show next placements"
                aria-controls="home-placements-track"
                disabled={!canNext}
                onClick={() => moveSlider(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-[#0b3a82] transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m10 6 6 6-6 6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {loading ? (
          <div
            role="status"
            aria-label="Loading placements"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[0, 1, 2, 3].map((item) => (
              <div
                key={item}
                className={`h-[340px] animate-pulse rounded-2xl border border-blue-100 bg-white motion-reduce:animate-none ${
                  item > 1 ? "hidden lg:block" : item === 1 ? "hidden sm:block" : ""
                }`}
              />
            ))}
          </div>
        ) : error ? (
          <div role="status" className="rounded-2xl border border-blue-100 bg-white p-6">
            <p className="text-sm text-slate-600">
              Placements could not be loaded.
            </p>
            <button
              type="button"
              onClick={() => setRetry((value) => value + 1)}
              className="mt-3 text-sm font-semibold text-[#0b3a82] underline underline-offset-4"
            >
              Try again
            </button>
          </div>
        ) : (
          <div
            id="home-placements-track"
            ref={sliderRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Student placements"
            tabIndex={0}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:thin] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700"
          >
            {placements.map((student, index) => (
              <div
                key={student._id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${placements.length}`}
                className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-60px)/4)]"
              >
                <PlacementStudentCard student={student} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}