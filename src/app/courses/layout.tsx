import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Courses | Lone Star Academy Delhi & Online",
  description:
    " Explore industry-focused courses in Data Science, Data Analytics, Business Analytics, Digital Marketing, Cloud Computing, and Financial Modeling with placement support.",
  alternates: {
    canonical: "https://www.lonestaracademy.in/courses",
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}