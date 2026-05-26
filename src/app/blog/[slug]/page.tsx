// import BlogDetailPage from '../../../old_app/pages/BlogDetailPage';
// import type { Metadata } from 'next';
// import { BASE_URL } from '../../../../utils/baseUrl';

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   try {
//     const response = await fetch(`${BASE_URL}/api/blogs/${params.slug}`);
//     if (response.ok) {
//       const data = await response.json();
//       return {
//         title: data.seo?.title || data.title || 'Blog | Lone Star Academy',
//         description: data.seo?.description || data.excerpt || '',
//         keywords: data.seo?.keywords || '',
//         alternates: {
//           canonical: `https://www.lonestaracademy.in/blog/${params.slug}`,
//         },
//         openGraph: {
//           title: data.seo?.title || data.title,
//           description: data.seo?.description || data.excerpt,
//           url: `https://www.lonestaracademy.in/blog/${params.slug}`,
//           images: data.image ? [data.image] : [],
//         }
//       };
//     }
//   } catch (error) {}
  
//   return {
//     title: 'Blog | Lone Star Academy',
//     alternates: {
//       canonical: `https://www.lonestaracademy.in/blog/${params.slug}`,
//     }
//   };
// }

// export default function Page({ params }: { params: { slug: string } }) {
//   return <BlogDetailPage slug={params.slug} />;
// }

import BlogDetailPage from '../../../old_app/pages/BlogDetailPage';
import type { Metadata } from 'next';
import { BASE_URL } from '../../../../utils/baseUrl';

export async function generateStaticParams() {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs`);

    const data = await response.json();

    return data.map((blog: any) => ({
      slug: blog.slug,
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
      `${BASE_URL}/api/blogs/${params.slug}`
    );

    if (response.ok) {
      const data = await response.json();

      return {
        metadataBase: new URL(
          'https://www.lonestaracademy.in'
        ),

        title:
          data.seo?.title ||
          data.title ||
          'Blog | Lone Star Academy',

        description:
          data.seo?.description ||
          data.excerpt ||
          '',

        keywords: data.seo?.keywords || '',

        alternates: {
          canonical: `https://www.lonestaracademy.in/blog/${params.slug}`,
        },

        openGraph: {
          title: data.seo?.title || data.title,

          description:
            data.seo?.description ||
            data.excerpt,

          url: `https://www.lonestaracademy.in/blog/${params.slug}`,

          images: data.image ? [data.image] : [],
        },
      };
    }
  } catch (error) {}

  return {
    metadataBase: new URL(
      'https://www.lonestaracademy.in'
    ),

    title: 'Blog | Lone Star Academy',

    alternates: {
      canonical: `https://www.lonestaracademy.in/blog/${params.slug}`,
    },
  };
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return <BlogDetailPage slug={params.slug} />;
}