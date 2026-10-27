import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science Course in Delhi | Training & Placement",
  description:
    "Join a practical Data Science Course in Delhi at Lone Star Academy. Learn Python, machine learning, analytics and more with projects, certification & career support.",
  keywords: [
    "data science course in delhi",
    "data science offline course in delhi",
    "data science institute in delhi",
    "data scientist course in delhi",
    "data science course offline",
    "data science training in delhi",
    "data science course in delhi ncr",
    "best data science institute in delhi",
    "best data science course in delhi",
    "data science course in delhi with placements",
  ],
  alternates: {
    canonical:
      "https://www.lonestaracademy.in/data-science-course-online-with-placement-delhi/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}