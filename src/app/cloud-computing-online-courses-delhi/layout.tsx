import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Computing Online Courses | Cloud Computing Courses in Delhi",
  description:
    "Join Lone Star Academy for cloud computing courses in Delhi & online training. Get certified, hands-on skills, and placement support. Enroll today!",
  keywords: [
    "cloud computing online courses",
    "cloud computing courses",
    "cloud computing certification",
    "cloud computing training",
    "cloud computing certification courses",
    "cloud computing courses for beginners",
    "best institute for cloud computing",
    "cloud computing courses in delhi",
    "cloud training institute",
    "cloud computing course with placement",
    "cloud computing classes",
    "cloud computing best institute",
  ],
  alternates: {
    canonical: "https://www.lonestaracademy.in/cloud-computing-online-courses-delhi/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}