import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spectrity - AI-Powered Programmable Therapeutics",
  description: "Spectrity.bio fuses biology with AI to create programmable therapeutics, accelerating drug development while saving time, money, and lives through our revolutionary EvalStack platform.",
  keywords: "Spectrity, AI drug discovery, programmable therapeutics, biotechnology, EvalStack, clinical translation, pharmaceutical AI, drug development",
  icons: {
    icon: "https://assets.spectrity.bio/double helix.png",
    apple: "https://assets.spectrity.bio/double helix.png",
  },
  authors: [{ name: "Spectrity Team" }],
  openGraph: {
    title: "Spectrity - AI-Powered Programmable Therapeutics",
    description: "Fusing biology with AI to revolutionize drug discovery and development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/double helix.png" as="image" type="image/png" />
        <link rel="preload" href="/final title.png" as="image" type="image/png" />
        
        {/* Prefetch video for high-end devices */}
        <link rel="prefetch" href="/landing page spirall.mp4" as="video" type="video/mp4" />
        
        {/* Performance hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ServiceWorkerRegistration />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
