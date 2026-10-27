import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Modelling Course in Delhi | Lone Star Academy",
  description:
    "Join Lone Star Academy's financial modelling course in Delhi with placement support. Learn valuation, Excel & real-world skills. Enroll today!",
  keywords: [
    "financial modelling course",
    "financial modelling course online",
    "financial modelling course with placement",
    "financial modelling course in delhi",
    "best financial modelling course in india",
    "best financial modelling course",
  ],
  alternates: {
    canonical:
      "https://www.lonestaracademy.in/financial-modelling-course-delhi/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}