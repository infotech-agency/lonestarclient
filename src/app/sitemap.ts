
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.lonestaracademy.in'

const pages = [
  { path: '', priority: 1.0 },
  { path: '/about/', priority: 0.8 },
  { path: '/our-placement/', priority: 0.8 },
  { path: '/testimonials/', priority: 0.8 },
  { path: '/blog/', priority: 0.8 },
  { path: '/contact/', priority: 0.8 },
  { path: '/admission-form/', priority: 0.8 },
  { path: '/courses/', priority: 0.8 },
  { path: '/business-analytics-course-delhi/', priority: 0.8 },
  { path: '/data-analytics-courses-online-delhi/', priority: 0.8 },
  { path: '/data-science-course-online-with-placement-delhi/', priority: 0.8 },
  { path: '/best-online-digital-marketing-courses-delhi/', priority: 0.8 },
  { path: '/cloud-computing-online-courses-delhi/', priority: 0.8 },
  { path: '/financial-modelling-course-delhi/', priority: 0.8 },
  { path: '/privacy/', priority: 0.64 },
  { path: '/terms/', priority: 0.64 },

  // Blog posts
  { path: '/blog/data-analytics-courses-online-guide/', priority: 0.41 },
  { path: '/blog/business-analytics-online-course-career-guide/', priority: 0.41 },
  { path: '/blog/how-to-find-best-data-analytics-institute-in-delhi/', priority: 0.41 },
  { path: '/blog/digital-marketing-course-india-fees-subjects-career-scope/', priority: 0.41 },
  { path: '/blog/best-data-science-course-in-india/', priority: 0.41 },
  { path: '/blog/data-analytics-courses-beginners-guide/', priority: 0.41 },
  { path: '/blog/business-analytics-course-skills-tools/', priority: 0.41 },
  { path: '/blog/best-data-science-institute-in-delhi/', priority: 0.41 },
  { path: '/blog/best-digital-marketing-institute-delhi/', priority: 0.41 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    priority,
  }))
}
