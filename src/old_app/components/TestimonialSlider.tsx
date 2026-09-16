"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aman Gupta",
    course: "Data Science",
    company: "Amazon",
    rating: 5,
    text: "Lone Star Academy transformed my career. The practical projects and interview preparation helped me build the confidence I needed to start my career in data science.",
    avatar: "AG",
  },
  {
    name: "Sneha Patel",
    course: "Digital Marketing",
    company: "Flipkart",
    rating: 5,
    text: "The digital marketing course was comprehensive and practical. The trainers explained concepts with real-world examples and the placement support was very helpful.",
    avatar: "SP",
  },
  {
    name: "Rahul Mehra",
    course: "Business Analytics",
    company: "Deloitte",
    rating: 5,
    text: "The Power BI and Tableau training was excellent. Working on practical dashboards and getting interview preparation made a big difference in my job search.",
    avatar: "RM",
  },
  {
    name: "Priya Sharma",
    course: "Cloud Computing",
    company: "TCS",
    rating: 5,
    text: "I started with very little cloud knowledge. The hands-on AWS training and practical deployment projects helped me understand cloud computing with confidence.",
    avatar: "PS",
  },
  {
    name: "Vikas Kumar",
    course: "Data Analytics",
    company: "Infosys",
    rating: 4,
    text: "The SQL, Excel and Python modules were very practical. The projects helped me understand how analytics is actually used in real business situations.",
    avatar: "VK",
  },
  {
    name: "Ankita Singh",
    course: "Data Science",
    company: "Wipro",
    rating: 5,
    text: "The machine learning projects gave me practical experience that I could discuss during interviews. The mentors were supportive throughout the learning journey.",
    avatar: "AS",
  },
  {
    name: "Mohit Verma",
    course: "Digital Marketing",
    company: "Publicis",
    rating: 5,
    text: "The combination of SEO, Google Ads, social media and practical assignments gave me a strong foundation to begin my career in digital marketing.",
    avatar: "MV",
  },
  {
    name: "Ritika Jain",
    course: "Business Analytics",
    company: "EY",
    rating: 5,
    text: "The curriculum was well structured and the trainers were approachable. The placement team also helped me prepare for interviews and improve my confidence.",
    avatar: "RJ",
  },
  {
    name: "Karan Malhotra",
    course: "Cloud Computing",
    company: "Accenture",
    rating: 5,
    text: "The Cloud Computing program gave me hands-on experience with AWS, Docker and real deployment projects. The practical approach made cloud concepts much easier to understand.",
    avatar: "KM",
  },
  {
    name: "Neha Kapoor",
    course: "Data Analytics",
    company: "HCLTech",
    rating: 5,
    text: "Learning SQL, Excel and Power BI through practical projects was extremely useful. Building real-world dashboards also helped me create a stronger portfolio.",
    avatar: "NK",
  },
  {
    name: "Arjun Bansal",
    course: "Data Science",
    company: "Capgemini",
    rating: 5,
    text: "The Data Science course covered Python, machine learning and projects in a structured way. The mentors were always available whenever I needed guidance.",
    avatar: "AB",
  },
  {
    name: "Simran Kaur",
    course: "Digital Marketing",
    company: "Dentsu",
    rating: 5,
    text: "The practical assignments helped me understand SEO, Google Ads, social media marketing and analytics. I especially enjoyed working on agency-style projects.",
    avatar: "SK",
  },
];

export function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  const maxIndex = Math.max(
    0,
    testimonials.length - itemsPerView
  );

  useEffect(() => {
    if (current > maxIndex) {
      setCurrent(maxIndex);
    }
  }, [itemsPerView, current, maxIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handlePrevious = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-blue-600">
            Student Success Stories
          </span>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Hear From Our{" "}
            <span className="text-orange-500">Students</span>
          </h2>

          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            Real experiences from students who built practical skills
            and progressed in their careers.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mx-auto max-w-7xl">

          {/* Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${current * (100 / itemsPerView)}%`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-0 shrink-0 px-3"
                  style={{
                    width: `${100 / itemsPerView}%`,
                  }}
                >
                  <div className="flex h-full min-h-[290px] flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">

                    {/* Top */}
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          {testimonial.avatar}
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-900">
                            {testimonial.name}
                          </h3>

                          <p className="text-sm text-blue-600">
                            {testimonial.course}
                          </p>
                        </div>
                      </div>

                      <Quote
                        size={28}
                        className="shrink-0 text-blue-100"
                      />
                    </div>

                    {/* Rating */}
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          className={
                            index < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-200"
                          }
                        />
                      ))}
                    </div>

                    {/* Testimonial */}
                    <p className="flex-1 text-sm leading-7 text-gray-600">
                      “{testimonial.text}”
                    </p>

                    {/* Company */}
                    <div className="mt-5 border-t border-gray-100 pt-4">
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        Currently working at
                      </p>

                      <p className="mt-1 font-semibold text-gray-900">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to testimonial slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-7 bg-blue-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-800"
          >
            View all success stories
            <ChevronRight size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSlider;

