export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/landing", "/api/"],
      },
    ],
    sitemap: "https://www.mitrayexim.com/sitemap.xml",
    host: "https://www.mitrayexim.com",
  };
}
