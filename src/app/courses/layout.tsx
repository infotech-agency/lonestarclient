import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Lone Star Academy",
  description:
    "Explore Data Science, Digital Marketing, Business Analytics and other professional courses at Lone Star Academy.",
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