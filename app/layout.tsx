import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
