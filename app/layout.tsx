import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://viremontadvisorygroup.com";
const SITE_NAME = "Viremont Advisory Group";
const SITE_DESC =
  "Strategic advisory, government relations, market entry and risk intelligence for institutional investors and multinationals in East Africa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESC,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
    images: ["/og.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navOffset = "pt-20 md:pt-24";

  // ✅ JSON-LD (Organization)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logov1.png`,
    email: "info@viremontadvisorygroup.com",
    telephone: "+254108675410",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Business Inquiries",
        email: "info@viremontadvisorygroup.com",
        telephone: "+254108675410",
        areaServed: "Africa",
        availableLanguage: ["en"],
      },
    ],
    // Add later when you create these:
    // sameAs: ["https://www.linkedin.com/company/viremont-advisory-group"],
  };

  // ✅ JSON-LD (ProfessionalService)
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESC,
    areaServed: "East Africa",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Inquiries",
      email: "info@viremontadvisorygroup.com",
      telephone: "+254108675410",
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* ✅ Put JSON-LD in HEAD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>

      <body className="antialiased bg-slate-50 text-slate-900">
        <Navbar />
        <main className={`${navOffset} min-h-screen`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
