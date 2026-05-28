// import CourseDetailPage from '../../../old_app/pages/CourseDetailPage';
// import type { Metadata } from 'next';
// import { BASE_URL } from '../../../../utils/baseUrl';

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
//           canonical: `https://www.lonestaracademy.in/courses/${params.slug}`,
//         },
//         openGraph: {
//           title: data.seo?.title || data.name,
//           description: data.seo?.description || data.description,
//           url: `https://www.lonestaracademy.in/courses/${params.slug}`,
//           images: data.image ? [data.image] : [],
//         }
//       };
//     }
//   } catch (error) {}
  
//   return {
//     title: 'Course | Lone Star Academy',
//     alternates: {
//       canonical: `https://www.lonestaracademy.in/courses/${params.slug}`,
//     }
//   };
// }

// export default function Page({ params }: { params: { slug: string } }) {
//   return <CourseDetailPage slug={params.slug} />;
// }

import CourseDetailPage from '../../../old_app/pages/CourseDetailPage';
import type { Metadata } from 'next';
import { BASE_URL } from '../../../../utils/baseUrl';

export async function generateStaticParams() {
  try {
    const response = await fetch(`${BASE_URL}/api/courses`);

    const data = await response.json();

    return data.map((course: any) => ({
      slug: course.slug,
    }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const response = await fetch(
      `${BASE_URL}/api/courses/${params.slug}`
    );

    if (response.ok) {
      const data = await response.json();

      return {
        metadataBase: new URL(
          'https://www.lonestaracademy.in'
        ),

        title:
          data.seo?.title ||
          data.name ||
          'Course | Lone Star Academy',

        description:
          data.seo?.description ||
          data.description ||
          '',

        keywords: data.seo?.keywords || '',

        alternates: {
          canonical: `https://www.lonestaracademy.in/courses/${params.slug}`,
        },

        openGraph: {
          title: data.seo?.title || data.name,

          description:
            data.seo?.description ||
            data.description,

          url: `https://www.lonestaracademy.in/courses/${params.slug}`,

          images: data.image ? [data.image] : [],
        },
      };
    }
  } catch (error) {}

  return {
    metadataBase: new URL(
      'https://www.lonestaracademy.in'
    ),

    title: 'Course | Lone Star Academy',

    alternates: {
      canonical: `https://www.lonestaracademy.in/courses/${params.slug}`,
    },
  };
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return <CourseDetailPage slug={params.slug} />;
}