import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { seo, generateVeterinaryClinicSchema } from "@/lib/seo";
import { clinic } from "@/lib/env";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: `%s | ${clinic.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: clinic.name, url: seo.canonical }],
  creator: clinic.name,
  publisher: clinic.name,
  metadataBase: new URL(seo.canonical),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: seo.canonical,
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    siteName: seo.openGraph.siteName,
    images: [
      {
        url: seo.openGraph.image,
        width: 1200,
        height: 630,
        alt: seo.openGraph.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: seo.twitter.site,
    creator: seo.twitter.creator,
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    images: [seo.openGraph.image],
  },
  robots: seo.robots,
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2563eb',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateVeterinaryClinicSchema()),
          }}
        />
      </body>
    </html>
  );
}
