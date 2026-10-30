import { Geist, Geist_Mono, Playfair_Display, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-ethiopic",
  subsets: ["ethiopic"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://bedasodersu.dev"),
  title: "Bedaso Dersu — Full-Stack Developer & AI Enthusiast",
  description:
    "Personal portfolio of Bedaso Dersu, a Software Engineer specializing in high-performance full-stack web applications, Python, and applied artificial intelligence.",
  keywords: [
    "Bedaso Dersu",
    "Full-Stack Developer",
    "Jimma University",
    "Software Engineer",
    "Next.js Developer Ethiopia",
    "AI Enthusiast",
    "Bishoftu News",
    "ProjectHub",
    "Hotel Management System",
  ],
  authors: [{ name: "Bedaso Dersu", url: "https://github.com/bedaso-soft" }],
  openGraph: {
    title: "Bedaso Dersu — Full-Stack Developer & AI Enthusiast",
    description:
      "Crafting digital experiences that solve real problems. Software engineering with product-minded execution.",
    url: "https://bedasodersu.dev",
    siteName: "Bedaso Dersu Portfolio",
    images: [
      {
        url: "/bedaso.jpg",
        width: 1200,
        height: 630,
        alt: "Bedaso Dersu — Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedaso Dersu — Full-Stack Developer & AI Enthusiast",
    description: "Crafting digital experiences that solve real problems.",
    images: ["/bedaso.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${notoSansEthiopic.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070709] text-slate-100 font-sans selection:bg-blue-600/40 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
