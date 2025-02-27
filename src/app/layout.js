import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.jsx"
import Footer from "@/components/Footer";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Debugger Softtech | Empowering Innovation",
  description: "Debugger Softtech offers top-notch IT solutions in AI/ML, Cloud Computing, Cybersecurity, and Software Development. Innovate with us!",
  keywords: "IT Services, AI/ML, Cloud Computing, Cybersecurity, Software Development",
  robots: "index, follow",
  openGraph: {
    title: "Debugger Softtech",
    description: "Empowering Innovation with cutting-edge IT solutions at Debugger Softtech.",
    url: "https://www.debuggersofttech.com/",
    siteName: "Debugger Softtech",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Debugger Softtech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debugger Softtech",
    description: "Empowering Innovation with cutting-edge IT solutions at Debugger Softtech.",
    images: ["/logo.png"],
  },
  viewport: "width=device-width, initial-scale=1.0",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
  <Navbar />
  <main className="pt-[70px] phone:pt-[90px]"> {/* Adjust the height based on your Navbar height */}
    {children}
  </main>
  <Footer />
</body>

    </html>
  );
}
