import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Favourite Pizza Place | Pie & Patty Co",
  description:
    "Pie & Patty Co is a Tamil Nadu-born QSR chain with 40+ stores offering vegetarian and non-vegetarian pizzas made with 100% pure dairy cheese. Order now for free home delivery from 11 AM to 3 AM.",
  keywords: [
    "Pie & Patty Co",
    "pizza delivery Tamil Nadu",
    "best pizza Madurai",
    "pizza near me",
    "vegetarian pizza",
    "non-vegetarian pizza",
  ],
  openGraph: {
    title: "Your Favourite Pizza Place | Pie & Patty Co",
    description: "Bold flavors. 40+ stores. Free home delivery. Order Now!",
    url: "/",
    siteName: "Pie & Patty Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Favourite Pizza Place | Pie & Patty Co",
    description: "Bold flavors. 40+ stores. Free home delivery. Order Now!",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
