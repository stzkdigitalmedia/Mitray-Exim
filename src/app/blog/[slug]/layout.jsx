import { BLOGS } from "@/data/blogs";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Article Not Found",
    };
  }

  const title = `${blog.title}`;
  const description = blog.excerpt || "Learn about agricultural exports, cold chain logistics, and trade compliance from Mitray, leading export company in India.";

  return {
    title,
    description,
    keywords: [
      blog.category,
      "Vegetable export India",
      "Agricultural export India",
      "Food exporter",
      "Merchant exporter",
      "Export company in Gujarat",
      "Mitray"
    ],
    alternates: {
      canonical: `https://www.mitrayexim.com/blog/${blog.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://www.mitrayexim.com/blog/${blog.slug}`,
      publishedTime: blog.date,
      authors: [blog.author?.name || "Mitray"],
      images: [
        {
          url: blog.featuredImage,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [blog.featuredImage],
    },
  };
}

export default async function BlogDetailLayout({ children, params }) {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) return children;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://www.mitrayexim.com/blog/${blog.slug}#article`,
        "headline": blog.title,
        "description": blog.excerpt,
        "image": blog.featuredImage,
        "datePublished": blog.date,
        "dateModified": blog.date,
        "author": {
          "@type": "Person",
          "name": blog.author?.name || "Mitray Export Desk"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mitray",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.mitrayexim.com/newLogo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.mitrayexim.com/blog/${blog.slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.mitrayexim.com/blog/${blog.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.mitrayexim.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.mitrayexim.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": blog.title,
            "item": `https://www.mitrayexim.com/blog/${blog.slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
