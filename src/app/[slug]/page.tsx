// import CourseDetailPage from '../../old_app/pages/CourseDetailPage';
// import type { Metadata } from 'next';
// import { BASE_URL } from '../../../utils/baseUrl';

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   try {
//     const response = await fetch(`${BASE_URL}/api/courses/${params.slug}`);
//     if (response.ok) {
//       const data = await response.json();
//       return {
//         title: data.seo?.title || data.name || 'Course | Lone Star Academy',
//         description: data.seo?.description || data.description || '',
//         keywords: data.seo?.keywords || '',
//         alternates: {
//           canonical: `https://www.lonestaracademy.in/${params.slug}`,
//         },
//         openGraph: {
//           title: data.seo?.title || data.name,
//           description: data.seo?.description || data.description,
//           url: `https://www.lonestaracademy.in/${params.slug}`,
//           images: data.image ? [data.image] : [],
//         }
//       };
//     }
//   } catch (error) {}
  
//   return {
//     title: 'Course | Lone Star Academy',
//     alternates: {
//       canonical: `https://www.lonestaracademy.in/${params.slug}`,
//     }
//   };
// }

// export default function Page({ params }: { params: { slug: string } }) {
//   return <CourseDetailPage slug={params.slug} />;
// }



// import CourseDetailPage from '../../old_app/pages/CourseDetailPage';

// import type { Metadata } from 'next';
// import { BASE_URL } from '../../../utils/baseUrl';
// import dynamic from 'next/dynamic';


// const CourseDetailPage = dynamic(()=>import("../../old_app/pages/CourseDetailPage"),{
//   ssr:false,
//   loading:()=><div>Loading...</div>
// })

// export async function generateStaticParams() {
//   try {
//     const response = await fetch(`${BASE_URL}/api/courses`);

//     const data = await response.json();

//     return data.map((course: any) => ({
//       slug: course.slug,
//     }));
//   } catch (error) {
//     return [];
//   }
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/api/courses/${params.slug}`
//     );

//     if (response.ok) {
//       const data = await response.json();

//       return {
//         title:
//           data.seo?.title ||
//           data.name ||
//           'Course | Lone Star Academy',

//         description:
//           data.seo?.description ||
//           data.description ||
//           '',

//         keywords: data.seo?.keywords || '',

//         metadataBase: new URL(
//           'https://www.lonestaracademy.in'
//         ),

//         alternates: {
//           canonical: `https://www.lonestaracademy.in/${params.slug}`,
//         },

//         openGraph: {
//           title: data.seo?.title || data.name,

//           description:
//             data.seo?.description ||
//             data.description,

//           url: `https://www.lonestaracademy.in/${params.slug}`,

//           images: data.image ? [data.image] : [],
//         },
//       };
//     }
//   } catch (error) {}

//   return {
//     title: 'Course | Lone Star Academy',

//     metadataBase: new URL(
//       'https://www.lonestaracademy.in'
//     ),

//     alternates: {
//       canonical: `https://www.lonestaracademy.in/${params.slug}`,
//     },
//   };
// }

// export default function Page({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   return <CourseDetailPage slug={params.slug} />;
// }

// import type { Metadata } from 'next';
// import { BASE_URL } from '../../../utils/baseUrl';
// import CourseDetailPage from '../../old_app/pages/CourseDetailPage'; // Direct import, no dynamic

// export async function generateStaticParams() {
//   try {
//     const response = await fetch(`${BASE_URL}/api/courses`);
//     const data = await response.json();
//     return data.map((course: any) => ({ slug: course.slug }));
//   } catch (error) {
//     return [];
//   }
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>; // async in Next.js 15
// }): Promise<Metadata> {
//   const { slug } = await params;
  
//   try {
//     const response = await fetch(`${BASE_URL}/api/courses/${slug}`);
//     if (response.ok) {
//       const data = await response.json();
//       return {
//         title: data.seo?.title || data.name || 'Course | Lone Star Academy',
//         description: data.seo?.description || data.description || '',
//         keywords: data.seo?.keywords || '',
//         metadataBase: new URL('https://www.lonestaracademy.in'),
//         alternates: {
//           canonical: `https://www.lonestaracademy.in/${slug}`,
//         },
//         openGraph: {
//           title: data.seo?.title || data.name,
//           description: data.seo?.description || data.description,
//           url: `https://www.lonestaracademy.in/${slug}`,
//           images: data.image ? [data.image] : [],
//         },
//       };
//     }
//   } catch (error) {}

//   return {
//     title: 'Course | Lone Star Academy',
//     metadataBase: new URL('https://www.lonestaracademy.in'),
//     alternates: {
//       canonical: `https://www.lonestaracademy.in/${slug}`,
//     },
//   };
// }

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   return <CourseDetailPage slug={slug} />;
// }

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BASE_URL } from '../../../utils/baseUrl';
import CourseDetailPage from '../../old_app/pages/CourseDetailPage';

// Reuse fetch with caching
async function getCourse(slug: string) {
  const res = await fetch(`${BASE_URL}/api/courses/${slug}`, {
    // next: { revalidate: 3600 }, // ISR — re-fetch every hour
    cache: 'no-store'
  });
  if (!res.ok) return null;
  return res.json();
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${BASE_URL}/api/courses`);
    const data = await res.json();
    return data.map((course: any) => ({ slug: course.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCourse(slug);

  if (!data) {
    return {
      title: 'Course | Lone Star Academy',
      alternates: { canonical: `https://www.lonestaracademy.in/${slug}` },
    };
  }

  return {
    title: data.seo?.title || data.name || 'Course | Lone Star Academy',
    description: data.seo?.description || data.description || '',
    keywords: data.seo?.keywords || '',
    metadataBase: new URL('https://www.lonestaracademy.in'),
    alternates: {
      canonical: `https://www.lonestaracademy.in/${slug}`,
    },
    openGraph: {
      title: data.seo?.title || data.name,
      description: data.seo?.description || data.description,
      url: `https://www.lonestaracademy.in/${slug}`,
      images: data.image ? [data.image] : [],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) return notFound();

  // Pass the fetched data as props to client component
  return <CourseDetailPage slug={slug} courseData={course} />;
}