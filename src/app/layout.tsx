import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConstructionBanner from "@/components/ui/construction-banner";
import ContentEditorProvider from "@/components/dev/ContentEditorProvider";
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
    <html lang="pt-BR" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-rose-50 via-blue-50 to-amber-50 min-h-screen relative overflow-x-hidden`}
      >
        {/* Global Background Pattern */}
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-cyan-500 transform rotate-45"></div>
          <div className="absolute top-32 right-4 sm:top-40 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 bg-orange-500"></div>
          <div className="absolute bottom-32 left-1/4 sm:left-1/3 w-20 h-20 sm:w-40 sm:h-40 bg-violet-500 rounded-full"></div>
          <div className="absolute bottom-20 right-4 sm:right-20 w-14 h-14 sm:w-28 sm:h-28 bg-pink-500 transform rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-48 sm:h-48 bg-cyan-400 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-10 h-10 sm:w-20 sm:h-20 bg-orange-400 transform rotate-45"></div>
        </div>

        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
          <ConstructionBanner />
          <ContentEditorProvider />
        </div>
        
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
