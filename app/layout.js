import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { SocialLinks } from "./components/SocialLinks";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Hamza-Code88",
  description: "Web Developer | Frontend Enthusiast | React Explorer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Navbar/>
        <SocialLinks />
        {children}
        <section id="footer">
        <Footer />
      </section>
      </body>
    </html>
  );
}
