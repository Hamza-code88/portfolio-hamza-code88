import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

// Zero-CLS font optimization via next/font/google
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Hamza-Code88 — Full-Stack & Mobile Developer | Next.js, React Native, Supabase",
  description:
    "Production systems architect building live Google Play Store mobile apps, Next.js web applications, and autonomous AI workflows with Supabase backends.",
  keywords: [
    "Hamza Khan",
    "Hamza-Code88",
    "Full-Stack Developer",
    "React Native Developer",
    "Next.js Systems",
    "Supabase PostgreSQL",
    "Expo Mobile Apps",
    "Bharosa Lab",
    "AirDart P2P",
    "n8n AI Workflows"
  ],
  authors: [{ name: "Hamza Khan (Hamza-Code88)", url: "https://www.hamzacode88.com" }],
  creator: "Hamza-Code88",
  metadataBase: new URL("https://www.hamzacode88.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hamza-Code88 — Full-Stack & Mobile Developer",
    description:
      "Production systems architect building live Google Play Store mobile apps, Next.js web applications, and autonomous AI workflows.",
    url: "https://www.hamzacode88.com",
    siteName: "Hamza-Code88 Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/projects/hero-slide-1.jpg",
        width: 1200,
        height: 630,
        alt: "Hamza-Code88 Production Healthcare & Mobile Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza-Code88 — Full-Stack & Mobile Developer",
    description:
      "Production Next.js, React Native, and Supabase apps live on Google Play Store and Web.",
    images: ["/projects/hero-slide-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen bg-[#fbfbfa] text-[#111827] font-sans antialiased selection:bg-red-600 selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
