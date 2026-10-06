export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy and international data security standards for Mitray Exim agricultural trade partners.",
  alternates: {
    canonical: "https://www.mitrayexim.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Mitray",
    description:
      "Privacy Policy and international data security standards for Mitray Exim agricultural trade partners.",
    url: "https://www.mitrayexim.com/privacy",
    siteName: "Mitray",
    images: [
      {
        url: "https://www.mitrayexim.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mitray Exim Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Mitray",
    description:
      "Privacy Policy and international data security standards for Mitray Exim agricultural trade partners.",
    images: ["https://www.mitrayexim.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({ children }) {
  return children;
}
