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




// import BlogDetailPage from '../../../old_app/pages/BlogDetailPage';
// import type { Metadata } from 'next';
// import { BASE_URL } from '../../../../utils/baseUrl';

// export async function generateStaticParams() {
//   try {
//     const response = await fetch(`${BASE_URL}/api/blogs`);

//     const data = await response.json();

//     return data.map((blog: any) => ({
//       slug: blog.slug,
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
//       `${BASE_URL}/api/blogs/${params.slug}`
//     );

//     if (response.ok) {
//       const data = await response.json();

//       return {
//         metadataBase: new URL(
//           'https://www.lonestaracademy.in'
//         ),

//         title:
//           data.seo?.title ||
//           data.title ||
//           'Blog | Lone Star Academy',

//         description:
//           data.seo?.description ||
//           data.excerpt ||
//           '',

//         keywords: data.seo?.keywords || '',

//         alternates: {
//           canonical: `https://www.lonestaracademy.in/blog/${params.slug}`,
//         },

//         openGraph: {
//           title: data.seo?.title || data.title,

//           description:
//             data.seo?.description ||
//             data.excerpt,

//           url: `https://www.lonestaracademy.in/blog/${params.slug}`,

//           images: data.image ? [data.image] : [],
//         },
//       };
//     }
//   } catch (error) {}

//   return {
//     metadataBase: new URL(
//       'https://www.lonestaracademy.in'
//     ),

//     title: 'Blog | Lone Star Academy',

//     alternates: {
//       canonical: `https://www.lonestaracademy.in/blog/${params.slug}`,
//     },
//   };
// }

// export default function Page({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   return <BlogDetailPage slug={params.slug} />;
// }

import BlogDetailPage from '../../../old_app/pages/BlogDetailPage';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BASE_URL } from '../../../../utils/baseUrl';

async function getBlog(slug: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs/${slug}`, {
      next: { revalidate: 3600 } // ISR — revalidate every hour
    });
    
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    return null;
  }
}

async function getRelatedBlogs(category: string, currentBlogId: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs?category=${category}&limit=4`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) return [];
    const data = await response.json();
    
    // Filter out current blog and limit to 3
    const filtered = Array.isArray(data) 
      ? data.filter((blog: any) => blog._id !== currentBlogId).slice(0, 3)
      : [];
    
    return filtered;
  } catch (error) {
    return [];
  }
}

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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) {
    return {
      title: 'Blog | Lone Star Academy',
      alternates: {
        canonical: `https://www.lonestaracademy.in/blog/${slug}`,
      },
    };
  }
  
  return {
    metadataBase: new URL('https://www.lonestaracademy.in'),
    title: blog.seo?.title || blog.title || 'Blog | Lone Star Academy',
    description: blog.seo?.description || blog.excerpt || '',
    keywords: blog.seo?.keywords || '',
    alternates: {
      canonical: `https://www.lonestaracademy.in/blog/${slug}`,
    },
    openGraph: {
      title: blog.seo?.title || blog.title,
      description: blog.seo?.description || blog.excerpt,
      url: `https://www.lonestaracademy.in/blog/${slug}`,
      images: blog.image ? [blog.image] : [],
      type: 'article',
      publishedTime: blog.createdAt,
      authors: [blog.author || 'Lone Star Academy'],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.seo?.title || blog.title,
      description: blog.seo?.description || blog.excerpt,
      images: blog.image ? [blog.image] : [],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) {
    notFound();
  }
  
  const relatedBlogs = await getRelatedBlogs(blog.category, blog._id);
  
  // Pass data as props to client component
  return <BlogDetailPage blogData={blog} relatedBlogsData={relatedBlogs} />;
}