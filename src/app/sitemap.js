import { PRODUCTS } from "@/data/products";
import { BLOGS } from "@/data/blogs";

export default function sitemap() {
  const baseUrl = "https://www.mitrayexim.com";
  const now = new Date();

  const staticRoutes = [
    { url: `${baseUrl}/`,               lastModified: now, changeFrequency: "daily",   priority: 1.0 },
    { url: `${baseUrl}/products`,       lastModified: now, changeFrequency: "daily",   priority: 0.9 },
    { url: `${baseUrl}/about`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/certifications`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/shipping`,       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`,           lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${baseUrl}/gallery`,        lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`,        lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/terms`,          lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // Dynamic Product Pages for SEO indexing
  const productRoutes = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Blog Post Pages
  const blogRoutes = BLOGS.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.date ? new Date(blog.date) : now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
