import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Viremont Advisory Group",
  description:
    "Strategic advisory, government relations, market entry and risk intelligence for global investors in East Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-slate-50`}>
        <Navbar />

        <main className="pt-16 min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
