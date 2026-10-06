export const metadata = {
  title: "Terms of Service & Trade Agreements",
  description:
    "Standard international merchant trade terms, Incoterms (FOB, CIF, CFR), and product specifications for Mitray Exim.",
  alternates: {
    canonical: "https://www.mitrayexim.com/terms",
  },
  openGraph: {
    title: "Terms of Service & Trade Agreements | Mitray",
    description:
      "Standard international merchant trade terms, Incoterms (FOB, CIF, CFR), and product specifications for Mitray Exim.",
    url: "https://www.mitrayexim.com/terms",
    siteName: "Mitray",
    images: [
      {
        url: "https://www.mitrayexim.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mitray Exim Terms of Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & Trade Agreements | Mitray",
    description:
      "Standard international merchant trade terms, Incoterms (FOB, CIF, CFR), and product specifications for Mitray Exim.",
    images: ["https://www.mitrayexim.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({ children }) {
  return children;
}
