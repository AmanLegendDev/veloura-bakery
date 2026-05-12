import "./globals.css";

import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata = {

  title: {
    default: "Veloura Bakery | Premium Cakes & Desserts",
    template: "%s | Veloura Bakery"
  },

  description:
    "Veloura Bakery offers premium cakes, pastries, brownies, dessert jars and custom celebration cakes freshly baked in Shimla.",

  keywords: [
    "bakery shimla",
    "veloura bakery",
    "cakes in shimla",
    "birthday cakes",
    "custom cakes",
    "pastries",
    "dessert jars",
    "brownies",
    "eggless cakes",
    "premium bakery"
  ],

  authors: [
    {
      name: "Aman Digital Solution"
    }
  ],

  creator: "Aman Digital Solution",

  verification: {
    google: "5gYda82MANvDdRu9ccuD9s8H1RuZDs290h4BZdgWq0A"
  },

  metadataBase: new URL(
    "https://www.velourabakery.com"
  ),

  robots: {
    index: true,
    follow: true
  },

  openGraph: {

    title: "Veloura Bakery",

    description:
      "Fresh cakes, pastries & handcrafted desserts baked daily ✨",

    url: "https://www.velourabakery.com",

    siteName: "Veloura Bakery",

    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Veloura Bakery"
      }
    ],

    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",

    title: "Veloura Bakery",

    description:
      "Premium cakes & desserts baked fresh daily 🎂",

    images: ["/og.jpg"]
  },

};

export default function RootLayout({
  children
}) {

  const localBusinessSchema = {

    "@context": "https://schema.org",

    "@type": "Bakery",

    name: "Veloura Bakery",

    image:
      "https://www.velourabakery.com/og.jpg",

    url:
      "https://www.velourabakery.com",

    telephone:
      "+91 9459365278",

    address: {

      "@type": "PostalAddress",

      addressLocality: "Shimla",

      addressRegion: "Himachal Pradesh",

      postalCode: "171009",

      addressCountry: "IN"

    },

    areaServed: [
      "Shimla",
      "Panthaghati",
      "Sanjauli",
      "Dhalli"
    ],

    priceRange: "₹₹",

    description:
      "Premium bakery in Shimla offering fresh cakes, pastries, brownies, dessert jars and celebration cakes.",

    sameAs: [

    ]
  };

  return (

    <html lang="en">

      <body
        className={`${inter.variable} ${poppins.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
      >

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />

        {children}

      </body>

    </html>

  );

}