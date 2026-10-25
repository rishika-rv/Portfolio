import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishika Vishwakarma | AI/ML Engineer & Python Developer",
  description:
    "Portfolio of Rishika Vishwakarma, an AI/ML and Full-Stack Engineer working with Python, Generative AI, RAG, machine learning, backend development, and modern web technologies.",
  keywords: [
    "AI Engineer",
    "AI/ML Engineer",
    "Machine Learning",
    "Portfolio",
    "Rishika Vishwakarma",
    "Python",
    "Generative AI",
    "RAG",
    "Full-Stack Engineer",
  ],
  authors: [{ name: "Rishika Vishwakarma" }],
  creator: "Rishika Vishwakarma",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rishika Vishwakarma",
    title: "Rishika Vishwakarma | AI/ML Engineer & Python Developer",
    description:
      "AI/ML and Full-Stack Engineer working with Python, Generative AI, RAG, machine learning, backend development, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishika Vishwakarma | AI/ML Engineer & Python Developer",
    description:
      "AI/ML and Full-Stack Engineer working with Python, Generative AI, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
