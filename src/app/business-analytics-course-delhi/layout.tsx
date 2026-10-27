import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Analyst Course in Delhi with Placement Support",
  description:
    "Join the Business Analyst Course in Delhi at Lone Star Academy. Explore practical training, course curriculum, fees, career opportunities, and placement support.",
  keywords: [
    "business analyst course in delhi",
    "business analytics course in delhi",
    "best business analytics courses in india",
    "business analyst course in india",
    "business analytics course with placement",
    "business analyst training in delhi",
  ],
  alternates: {
    canonical: "https://www.lonestaracademy.in/business-analytics-course-delhi/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}