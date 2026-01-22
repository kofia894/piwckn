export default function StructuredData() {
  const churchSchema = {
    "@context": "https://schema.org",
    "@type": "Church",
    "@id": "https://piwckaneshie.org/#church",
    name: "PIWC Kaneshie - Church of Pentecost",
    alternateName: "Pentecost International Worship Centre Kaneshie",
    description:
      "A vibrant Church of Pentecost assembly in Kaneshie, Accra, Ghana. Join us for Spirit-filled worship, transformative teachings, and a loving community.",
    url: "https://piwckaneshie.org",
    logo: "https://piwckaneshie.org/logo.png",
    image: "https://piwckaneshie.org/og-image.png",
    telephone: "+233-XX-XXX-XXXX",
    email: "info@piwckaneshie.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaneshie",
      addressLocality: "Accra",
      addressRegion: "Greater Accra",
      postalCode: "",
      addressCountry: "GH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 5.56,
      longitude: -0.23,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "07:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "18:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "18:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/piwckaneshie",
      "https://www.instagram.com/piwckaneshie",
      "https://www.youtube.com/@piwckaneshie",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "The Church of Pentecost",
      url: "https://thecophq.org",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://piwckaneshie.org/#organization",
    name: "PIWC Kaneshie",
    url: "https://piwckaneshie.org",
    logo: "https://piwckaneshie.org/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+233-XX-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: ["English", "Twi"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://piwckaneshie.org/#website",
    url: "https://piwckaneshie.org",
    name: "PIWC Kaneshie - Church of Pentecost",
    description:
      "Official website of Pentecost International Worship Centre (PIWC) Kaneshie",
    publisher: {
      "@id": "https://piwckaneshie.org/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://piwckaneshie.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://piwckaneshie.org",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://piwckaneshie.org/aboutUs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Our Beliefs",
        item: "https://piwckaneshie.org/beleifs",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Give",
        item: "https://piwckaneshie.org/giving",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
