import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Providers from "@/components/Providers";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://piwckaneshie.org"),
  title: {
    default: "PIWC Kaneshie | Church of Pentecost - Welcome Home",
    template: "%s | PIWC Kaneshie",
  },
  description:
    "Welcome to the Pentecost International Worship Centre (PIWC) Kaneshie, a vibrant Church of Pentecost assembly in Accra, Ghana. Join us for Spirit-filled worship, transformative teachings, and a loving community.",
  keywords: [
    "PIWC Kaneshie",
    "Church of Pentecost",
    "Pentecost International Worship Centre",
    "Church in Kaneshie",
    "Church in Accra",
    "Ghana Church",
    "Pentecostal Church",
    "Christian Church Accra",
    "Sunday Service Kaneshie",
    "Bible Study Accra",
    "Youth Ministry Ghana",
    "Women's Fellowship",
    "Men's Ministry",
    "Children's Church",
    "Prayer Meeting",
    "Worship Service",
  ],
  authors: [{ name: "PIWC Kaneshie" }],
  creator: "PIWC Kaneshie",
  publisher: "Church of Pentecost",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://piwckaneshie.org",
    siteName: "PIWC Kaneshie - Church of Pentecost",
    title: "PIWC Kaneshie | Church of Pentecost - Welcome Home",
    description:
      "Welcome to PIWC Kaneshie, a vibrant Church of Pentecost assembly. Join us for Spirit-filled worship and a loving community in Accra, Ghana.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PIWC Kaneshie - Church of Pentecost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PIWC Kaneshie | Church of Pentecost",
    description:
      "Welcome to PIWC Kaneshie, a vibrant Church of Pentecost assembly in Accra, Ghana.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://piwckaneshie.org",
  },
  category: "religion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a5f" />
        <meta name="geo.region" content="GH-AA" />
        <meta name="geo.placename" content="Kaneshie, Accra" />
        <meta name="geo.position" content="5.5600;-0.2300" />
        <meta name="ICBM" content="5.5600, -0.2300" />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden`}>
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
