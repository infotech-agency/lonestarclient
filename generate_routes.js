import fs from 'fs';
import path from 'path';

const routes = {
  'layout.tsx': `import type { Metadata } from 'next';
import '../styles/index.css';
import '../styles/tailwind.css';

export const metadata: Metadata = {
  title: 'Best Data Science & Digital Marketing Institute in Delhi | Lone Star Academy',
  description: "Enroll at Lone Star Academy - a trusted data science institute in Delhi, digital marketing institute in Delhi with courses in Data Analytics, Business Analytics, and Cloud Computing.",
  keywords: "data science institute in delhi, best data science institute in delhi, best data science institute in india, data science institute, digital marketing institute in delhi, best digital marketing institute, best digital marketing institute in delhi, digital marketing institute, best digital marketing institute in delhi with placement, top digital marketing institute in delhi, best offline digital marketing institute in delhi",
  openGraph: {
    type: 'website',
    url: 'https://lonestaracademy.in/',
    title: 'Lone Star Academy | Best Data Science Institute Delhi',
    description: "Delhi\\'s #1 Data Science & Digital Marketing training institute. 1,00,000+ students trained. Microsoft & Google certified trainers.",
    images: ['/ssssss.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lone Star Academy | Data Science & Digital Marketing',
    description: 'Best data science and digital marketing courses in Delhi with placement support.',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Lone Star Academy' }],
  alternates: {
    canonical: 'https://www.lonestaracademy.in/',
  },
  verification: {
    google: 'cCSgYcJHvh709Zb160eFZZUU05pcZti7CLD-YijuQPM',
    other: {
      'msvalidate.01': '7F7089097752845D053BBC152CC43326',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo (3).png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XPX9SM97MJ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: \`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XPX9SM97MJ');
            \`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lone Star Academy",
              "url": "https://www.lonestaracademy.in/",
              "logo": "https://www.lonestaracademy.in/logo.jpeg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9711709644",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "IN",
                "availableLanguage": ["en","Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/people/Lone-Star-Academy/100087175243517/",
                "https://x.com/i/flow/login?redirect_after_login=%2Flone_academy",
                "https://www.instagram.com/lonestaracademy_india?igshid=MDE2OWE1N2Q%3D",
                "https://www.linkedin.com/company/lonestaracademy-in/?viewAsMember=true"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Lone Star Academy | Data Science | Data Analytics | Business Analytics | Cloud Computing | Digital Marketing Institute",
              "image": "https://lh3.googleusercontent.com/p/AF1QipNxRFSvR-f39rWm7YoR1Q1pJNtrybU1W3_wHkiM=w243-h406-n-k-no-nu",
              "@id": "",
              "url": "https://share.google/KCGjxUTANPTMZHLCV",
              "telephone": "09711709644",
              "priceRange": "20000 - 50000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2nd floor, B1/1, Block B1, Janakpuri",
                "addressLocality": "New Delhi, Delhi,",
                "postalCode": "110058",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.6340372,
                "longitude": 77.08965359999999
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/people/Lone-Star-Academy/100087175243517/",
                "https://www.instagram.com/lonestaracademy_india?igshid=MDE2OWE1N2Q%3D",
                "https://x.com/i/flow/login?redirect_after_login=%2Flone_academy",
                "https://www.linkedin.com/company/lonestaracademy-in/?viewAsMember=true"
              ]
            }),
          }}
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}`,
  'page.tsx': `import App from '../old_app/App';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.lonestaracademy.in/',
  },
};

export default function Page() {
  return <App />;
}`,
  'courses/page.tsx': `import CoursesPage from '../../old_app/pages/CoursesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Courses | Lone Star Academy',
  description: 'Explore the best Data Science, Digital Marketing, and Analytics courses in Delhi.',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/courses',
  },
};

export default function Page() {
  return <CoursesPage />;
}`,
  'about/page.tsx': `import AboutPage from '../../old_app/pages/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/about',
  },
};

export default function Page() {
  return <AboutPage />;
}`,
  'contact/page.tsx': `import ContactPage from '../../old_app/pages/ContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/contact',
  },
};

export default function Page() {
  return <ContactPage />;
}`,
  'blog/page.tsx': `import BlogPage from '../../old_app/pages/BlogPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/blog',
  },
};

export default function Page() {
  return <BlogPage />;
}`,
  'privacy/page.tsx': `import PrivacyPolicy from '../../old_app/pages/PrivacyPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/privacy',
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}`,
  'terms/page.tsx': `import TermsAndConditions from '../../old_app/pages/TermsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/terms',
  },
};

export default function Page() {
  return <TermsAndConditions />;
}`,
  'admission-form/page.tsx': `import AdmissionPage from '../../old_app/pages/AdmissionPageSingle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admission Form | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/admission-form',
  },
};

export default function Page() {
  return <AdmissionPage />;
}`,
  'testimonials/page.tsx': `import TestimonialsPage from '../../old_app/pages/TestimonialsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/testimonials',
  },
};

export default function Page() {
  return <TestimonialsPage />;
}`,
  'our-placement/page.tsx': `import TeamPage from '../../old_app/pages/TeamPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Placements | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/our-placement',
  },
};

export default function Page() {
  return <TeamPage />;
}`,
  'admin/page.tsx': `import AdminPanel from '../../old_app/admin/AdminPanel';

export default function Page() {
  return <AdminPanel />;
}`,
  'not-found.tsx': `import NotFound from '../old_app/pages/NotFound';

export default function Page() {
  return <NotFound />;
}`,
  'blog/[slug]/page.tsx': `import BlogDetailPage from '../../../old_app/pages/BlogDetailPage';
import type { Metadata } from 'next';
import { BASE_URL } from '../../../../utils/baseUrl';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const response = await fetch(\`\${BASE_URL}/api/blogs/\${params.slug}\`);
    if (response.ok) {
      const data = await response.json();
      return {
        title: data.seo?.title || data.title || 'Blog | Lone Star Academy',
        description: data.seo?.description || data.excerpt || '',
        keywords: data.seo?.keywords || '',
        alternates: {
          canonical: \`https://www.lonestaracademy.in/blog/\${params.slug}\`,
        },
        openGraph: {
          title: data.seo?.title || data.title,
          description: data.seo?.description || data.excerpt,
          url: \`https://www.lonestaracademy.in/blog/\${params.slug}\`,
          images: data.image ? [data.image] : [],
        }
      };
    }
  } catch (error) {}
  
  return {
    title: 'Blog | Lone Star Academy',
    alternates: {
      canonical: \`https://www.lonestaracademy.in/blog/\${params.slug}\`,
    }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  // Pass slug directly if the old component expects it, or it can use useParams from next/navigation
  return <BlogDetailPage />;
}`,
  'courses/[slug]/page.tsx': `import CourseDetailPage from '../../../old_app/pages/CourseDetailPage';
import type { Metadata } from 'next';
import { BASE_URL } from '../../../../utils/baseUrl';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const response = await fetch(\`\${BASE_URL}/api/courses/\${params.slug}\`);
    if (response.ok) {
      const data = await response.json();
      return {
        title: data.seo?.title || data.name || 'Course | Lone Star Academy',
        description: data.seo?.description || data.description || '',
        keywords: data.seo?.keywords || '',
        alternates: {
          canonical: \`https://www.lonestaracademy.in/courses/\${params.slug}\`,
        },
        openGraph: {
          title: data.seo?.title || data.name,
          description: data.seo?.description || data.description,
          url: \`https://www.lonestaracademy.in/courses/\${params.slug}\`,
          images: data.image ? [data.image] : [],
        }
      };
    }
  } catch (error) {}
  
  return {
    title: 'Course | Lone Star Academy',
    alternates: {
      canonical: \`https://www.lonestaracademy.in/courses/\${params.slug}\`,
    }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <CourseDetailPage />;
}`,
  '[slug]/page.tsx': `import CourseDetailPage from '../../old_app/pages/CourseDetailPage';
import type { Metadata } from 'next';
import { BASE_URL } from '../../../utils/baseUrl';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const response = await fetch(\`\${BASE_URL}/api/courses/\${params.slug}\`);
    if (response.ok) {
      const data = await response.json();
      return {
        title: data.seo?.title || data.name || 'Course | Lone Star Academy',
        description: data.seo?.description || data.description || '',
        keywords: data.seo?.keywords || '',
        alternates: {
          canonical: \`https://www.lonestaracademy.in/\${params.slug}\`,
        },
        openGraph: {
          title: data.seo?.title || data.name,
          description: data.seo?.description || data.description,
          url: \`https://www.lonestaracademy.in/\${params.slug}\`,
          images: data.image ? [data.image] : [],
        }
      };
    }
  } catch (error) {}
  
  return {
    title: 'Course | Lone Star Academy',
    alternates: {
      canonical: \`https://www.lonestaracademy.in/\${params.slug}\`,
    }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <CourseDetailPage />;
}`
};

const createFiles = (baseDir, config) => {
  for (const [routePath, content] of Object.entries(config)) {
    const fullPath = path.join(baseDir, routePath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log("Created " + fullPath);
  }
};

createFiles('./src/app', routes);
