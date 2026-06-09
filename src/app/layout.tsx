import type { Metadata } from 'next';
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
    description: "Delhi\'s #1 Data Science & Digital Marketing training institute. 1,00,000+ students trained. Microsoft & Google certified trainers.",
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
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XPX9SM97MJ');
            `,
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
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Lone Star Academy",
      "url": "https://www.lonestaracademy.in/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.lonestaracademy.in/data-science-course-online-with-placement-delhi/{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }),
  }}
/>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}