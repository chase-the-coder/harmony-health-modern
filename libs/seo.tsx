import type { Metadata } from "next";
import config from "@/config";

type SEOInput = Metadata & {
  canonicalUrlRelative?: string;
  ogImage?: string;
  extraTags?: Record<string, any>;
};

const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${config.domainName}`;

const DEFAULT_KEYWORDS = [
  "hormone replacement therapy athens ga",
  "medical weight loss athens ga",
  "peptide therapy athens ga",
  "semaglutide athens ga",
  "tirzepatide athens ga",
  "IV hydration therapy athens ga",
  "aesthetic treatments athens ga",
  "morpheus8 athens ga",
  "Megan Cryder NP",
  "Harmony Health",
  "functional medicine athens ga",
  "HRT for women",
  "HRT for men",
];

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  ogImage,
  extraTags,
}: SEOInput = {}): Metadata => {
  const fullTitle = title || config.appName;
  const fullDescription = description || config.appDescription;
  const canonical = canonicalUrlRelative
    ? `${SITE_URL}${canonicalUrlRelative.startsWith("/") ? canonicalUrlRelative : "/" + canonicalUrlRelative}`
    : SITE_URL;
  const image = ogImage || "/opengraph-image.jpg";

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords || DEFAULT_KEYWORDS,
    applicationName: config.appName,
    authors: [{ name: "Megan Cryder, NP-C" }],
    creator: "Harmony Health",
    publisher: "Harmony Health",
    metadataBase: new URL(SITE_URL + "/"),
    alternates: { canonical },

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      title: openGraph?.title || fullTitle,
      description: openGraph?.description || fullDescription,
      url: canonical,
      siteName: config.appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: config.appName,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: openGraph?.title || fullTitle,
      description: openGraph?.description || fullDescription,
      images: [image],
    },

    ...extraTags,
  };
};

// Primary MedicalBusiness / LocalBusiness schema. Include on every page.
export const renderSchemaTags = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `https://${config.domainName}/#business`,
    name: "Harmony Health",
    alternateName: "Harmony Health Integrative Wellness",
    description: config.appDescription,
    url: `https://${config.domainName}/`,
    logo: `https://${config.domainName}/legacy-images/logo.png`,
    image: `https://${config.domainName}/opengraph-image.jpg`,
    telephone: "+1-706-614-6818",
    email: "info@yourharmonyhealth.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2425 W. Broad Street, Suite 2",
      addressLocality: "Athens",
      addressRegion: "GA",
      postalCode: "30606",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.9519,
      longitude: -83.4074,
    },
    areaServed: [
      { "@type": "City", name: "Athens" },
      { "@type": "State", name: "Georgia" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "15:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/your.harmony.health/",
      "https://www.facebook.com/people/Harmony-Health-Integrative-Wellness/61571449373842/",
    ],
    founder: {
      "@type": "Person",
      name: "Megan Cryder",
      jobTitle: "Nurse Practitioner, NP-C",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Medical College of Georgia School of Nursing",
        },
        {
          "@type": "EducationalOrganization",
          name: "Texas A&M University",
        },
      ],
    },
    medicalSpecialty: [
      "Hormone Replacement Therapy",
      "Medical Weight Loss",
      "Peptide Therapy",
      "Aesthetic Treatments",
      "IV Hydration Therapy",
      "Functional Medicine",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// FAQPage schema for pages with FAQ accordions. Google shows these as rich snippets.
export const renderFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// BreadcrumbList schema for inner pages.
export const renderBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>
) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://${config.domainName}${item.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// MedicalProcedure / MedicalTherapy schema for service pages.
export const renderServiceSchema = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name,
    description,
    url: `https://${config.domainName}${path}`,
    provider: {
      "@type": "MedicalBusiness",
      name: "Harmony Health",
      url: `https://${config.domainName}/`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
