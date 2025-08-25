import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/nav/Footer";

const netflixSans = localFont({
  src: "../../public/font/netflix-sans-core-variable-full.woff2",
  variable: "--font-netflix-sans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "A modern Netflix clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${netflixSans.variable} font-netflix antialiased py-0`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
