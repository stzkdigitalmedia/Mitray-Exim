import { PRODUCTS } from "@/data/products";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = `${product.name} Exporter in India`;
  const description = `${product.description} Sourced and exported globally by Mitray, trusted agricultural export company from Gujarat, India.`;
  const imageUrl = product.image?.startsWith("http")
    ? product.image
    : `https://www.mitrayexim.com${product.image}`;

  return {
    title,
    description,
    keywords: [
      product.name,
      `${product.name} exporter`,
      `${product.name} supplier India`,
      "Exporter in India",
      "Agriculture products exporter",
      "Export company in Gujarat"
    ],
    alternates: {
      canonical: `https://www.mitrayexim.com/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.mitrayexim.com/products/${product.slug}`,
      images: [
        {
          url: imageUrl,
          alt: product.alt || product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailLayout({ children, params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) return children;

  const imageUrl = product.image?.startsWith("http")
    ? product.image
    : `https://www.mitrayexim.com${product.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://www.mitrayexim.com/products/${product.slug}#product`,
        "name": product.name,
        "description": product.description,
        "image": imageUrl,
        "category": product.category,
        "brand": {
          "@type": "Brand",
          "name": "Mitray"
        },
        "countryOfOrigin": {
          "@type": "Country",
          "name": "India"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Mitray"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.mitrayexim.com/products/${product.slug}#breadcrumb`,
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
            "name": "Products",
            "item": "https://www.mitrayexim.com/products"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.name,
            "item": `https://www.mitrayexim.com/products/${product.slug}`
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
