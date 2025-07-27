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
  title: "Spectrity - Empowering Digital Transformation",
  description: "Spectrity provides cutting-edge solutions for your digital transformation journey with lightning-fast performance, enterprise-grade security, and cloud-native architecture.",
  keywords: "Spectrity, digital transformation, cloud solutions, enterprise software",
  authors: [{ name: "Spectrity Team" }],
  openGraph: {
    title: "Spectrity - Empowering Digital Transformation",
    description: "Cutting-edge solutions for your digital transformation journey",
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
        <link rel="preload" href="https://spectrity.bio/public/double%20helix.png" as="image" type="image/png" />
        <link rel="preload" href="https://spectrity.bio/public/final%20title.png" as="image" type="image/png" />
        
        {/* Prefetch video for high-end devices */}
        <link rel="prefetch" href="https://spectrity.bio/public/landing%20page%20spirall.mp4" as="video" type="video/mp4" />
        
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
