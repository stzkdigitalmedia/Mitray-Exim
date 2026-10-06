export const metadata = {
  title: "Export Operations & Facility Gallery",
  description:
    "View Mitray's on-site export facility, cold storage terminals, farm packhouses, and container loading operations in Gujarat, India.",
  keywords: [
    "Export facility Gujarat",
    "Packhouse images India",
    "Container loading gallery",
    "Mitray operations",
    "Agricultural export warehouse"
  ],
  alternates: {
    canonical: "https://www.mitrayexim.com/gallery",
  },
  openGraph: {
    title: "Export Operations & Facility Gallery | Mitray",
    description:
      "View Mitray's on-site export facility, cold storage terminals, and container loading operations in Gujarat, India.",
    url: "https://www.mitrayexim.com/gallery",
    siteName: "Mitray",
    images: [
      {
        url: "https://www.mitrayexim.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mitray Export Operations & Facility Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Export Operations & Facility Gallery | Mitray",
    description:
      "View Mitray's on-site export facility, cold storage terminals, and container loading operations in Gujarat, India.",
    images: ["https://www.mitrayexim.com/images/og-image.jpg"],
  },
};

export default function GalleryLayout({ children }) {
  return children;
}
