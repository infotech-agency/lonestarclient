"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Aman Gupta", course: "Data Science", company: "Amazon", rating: 5, text: "Lone Star Academy transformed my career. Within 3 months of completing the Data Science course, I landed a job at Amazon with a 3x salary hike.", avatar: "AG" },
  { name: "Sneha Patel", course: "Digital Marketing", company: "Flipkart", rating: 5, text: "The digital marketing course was comprehensive and practical. The trainers have real industry experience and the placement support was excellent.", avatar: "SP" },
  { name: "Rahul Mehra", course: "Business Analytics", company: "Deloitte", rating: 5, text: "Best analytics institute in Delhi. The Power BI and Tableau training was world-class. Got placed in Deloitte thanks to their interview prep sessions.", avatar: "RM" },
  { name: "Priya Sharma", course: "Cloud Computing", company: "TCS", rating: 5, text: "I had zero cloud knowledge before joining. After 80 days of training, I passed my AWS Solutions Architect exam and got a great job in TCS.", avatar: "PS" },
  { name: "Vikas Kumar", course: "Data Analytics", company: "Infosys", rating: 4, text: "Quality training with practical projects. The SQL and Python modules were exceptional. Highly recommend to anyone looking to enter data analytics.", avatar: "VK" },
  { name: "Ankita Singh", course: "Data Science", company: "Wipro", rating: 5, text: "The machine learning project experience helped me crack interviews at 3 top companies. I chose Wipro and I'm loving every day of my new career.", avatar: "AS" },
  { name: "Mohit Verma", course: "Digital Marketing", company: "Publicis", rating: 5, text: "From a fresher to a Digital Marketing Executive in 2 months. The Google certification training and agency internship were game changers.", avatar: "MV" },
  { name: "Ritika Jain", course: "Business Analytics", company: "EY", rating: 5, text: "Amazing trainers and curriculum. Lone Star Academy's placement team worked tirelessly to get me interviews. Now working at EY as a Business Analyst.", avatar: "RJ" },

    // New Testimonials
  { name: "Karan Malhotra", course: "Cloud Computing", company: "Accenture", rating: 5, text: "The Cloud Computing program gave me strong hands-on experience with AWS, Docker and real deployment projects. The mock interviews helped me confidently prepare for my first cloud role.", avatar: "KM" },

  { name: "Neha Kapoor", course: "Data Analytics", company: "HCLTech", rating: 5, text: "The practical approach made learning SQL, Excel and Power BI much easier. Working on real-world dashboards helped me build a strong portfolio for data analyst interviews.", avatar: "NK" },

  { name: "Arjun Bansal", course: "Data Science", company: "Capgemini", rating: 5, text: "The Data Science course covered Python, machine learning and projects in a very structured way. The mentors were always available to clear doubts and guide me during interview preparation.", avatar: "AB" },

  { name: "Simran Kaur", course: "Digital Marketing", company: "Dentsu", rating: 5, text: "I learned SEO, Google Ads, social media marketing and analytics through practical assignments. The agency-style projects gave me the confidence to start my career in digital marketing.", avatar: "SK" },

  // More Testimonials
{
  name: "Rahul Sharma",
  course: "Full Stack Development",
  company: "TCS",
  rating: 5,
  text: "The Full Stack Development program helped me master React, Node.js and MongoDB through hands-on projects. The structured curriculum and mentor guidance helped me prepare for real-world development challenges.",
  avatar: "RS"
},

{
  name: "Priya Verma",
  course: "Python Programming",
  company: "Infosys",
  rating: 5,
  text: "The practical Python sessions made complex concepts easy to understand. Working on real projects and receiving personalized feedback helped me improve my coding skills and build confidence for technical interviews.",
  avatar: "PV"
},

{
  name: "Rohit Mehta",
  course: "Financial Modeling",
  company: "Wipro",
  rating: 5,
  text: "The cybersecurity training provided hands-on exposure to network security, ethical hacking and vulnerability assessment. The practical labs and expert mentorship helped me understand industry practices and prepare for my career.",
  avatar: "RM"
},

{
  name: "Ananya Singh",
  course: "Data Analyst",
  company: "Accenture",
  rating: 5,
  text: "The UI/UX course helped me understand user research, wireframing and prototyping using Figma. Working on real design projects helped me create a professional portfolio and approach design challenges with confidence.",
  avatar: "AS"
},
{
  name: "Arjun Sharma",
  course: "Digital Marketing",
  company: "TCS",
  rating: 5,
  text: "The full stack development course provided a strong foundation in frontend and backend technologies. Building real-world projects helped me understand application development and improve my problem-solving skills.",
  avatar: "AS"
},

{
  name: "Neha Gupta",
  course: "Data Science",
  company: "Capgemini",
  rating: 5,
  text: "The data science training made Python, data analysis and machine learning concepts easy to understand. Practical assignments and project-based learning helped me gain confidence in working with real datasets.",
  avatar: "NG"
},

{
  name: "Vikram Patel",
  course: "Cloud Computing",
  company: "Accenture",
  rating: 5,
  text: "The cloud computing course offered valuable hands-on experience with cloud infrastructure, deployment and essential cloud services. The practical sessions helped me understand real-world cloud environments and strengthen my technical knowledge.",
  avatar: "VP"
},

{
  name: "Sneha Kapoor",
  course: "Python Programming",
  company: "Wipro",
  rating: 5,
  text: "The Java programming sessions explained core concepts, object-oriented programming and coding practices in a simple way. Regular coding exercises and instructor guidance helped me improve my programming skills and prepare for technical interviews.",
  avatar: "SK"
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

