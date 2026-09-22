import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "../styles/global.css";
import clsx from "clsx";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "MITRAY EXIM - Exporter of Spices, Rice, Fruits & Vegetables from India",
  description:
    "MITRAY EXIM is a leading merchant exporter of fresh vegetables, fruits, spices, and grains from India. APEDA & FSSAI certified partner for global markets including UAE, Qatar, and Saudi Arabia.",
  keywords:
    "Vegetable Exporter India, Fresh Fruits Export, Indian Spices Supplier, Agricultural Export India, Mitray Exim, Dubai Vegetable Import",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mitrayexim.com",
    siteName: "MITRAY EXIM",
    title: "MITRAY EXIM – Trusted Agricultural Export Partner",
    description:
      "Exporting nature's finest produce from Indian farms to global doorsteps. Quality assured, certified, and reliable.",
    images: [
      {
        url: "https://www.mitrayexim.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MITRAY EXIM – Exporting Freshness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mitrayexim",
  },
  icons: {
    icon: '/favicon/svg/SVG/512.svg',
    shortcut: '/favicon/svg/SVG/512.svg',
    apple: '/favicon/svg/SVG/512.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to Cloudinary to eliminate 300ms DNS/TCP/TLS handshake delay for images */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CR6BTGXZGZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CR6BTGXZGZ');
          `}
        </Script>
      </head>
      <body className={clsx(inter.variable, outfit.variable, 'min-h-screen', 'flex', 'flex-col', 'bg-white', 'antialiased', 'text-slate-900', 'font-inter', 'selection:bg-brand-gold', 'selection:text-brand-navy')}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MITRAY EXIM",
              url: "https://www.mitrayexim.com",
              logo: "https://www.mitrayexim.com/newLogo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91 XXXXXXXXXX",
                  contactType: "customer service",
                  email: "info@mitrayexim.com",
                  areaServed: ["IN", "AE", "QA", "OM", "SA"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Street Name, City, Gujarat",
                postalCode: "380001",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/company/mitray-exim",
                "https://www.facebook.com/mitrayexim",
                "https://www.instagram.com/mitrayexim",
              ],
            }),
          }}
        />

        {/* UNIFIED NAVIGATION SYSTEM */}
        <Header />

        <main id="main-content" className={clsx('flex-1', 'relative')}>
          {/* SMOOTH SECTION TRANSITION MASK */}
          <div className={clsx('absolute', 'top-0', 'left-0', 'w-full', 'h-32', 'bg-gradient-to-b', 'from-white', 'to-transparent', 'pointer-events-none', 'z-10')}></div>

          {children}
        </main>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
