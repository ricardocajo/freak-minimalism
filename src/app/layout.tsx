import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Providers from "./Providers";
import { CartProvider } from "@/contexts/CartContext";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freak Minimalism",
  description: "Minimalist clothing for the modern man",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Providers>
            <Navbar />
            <main className="pointer-events-auto">
              {children}
              <Toaster position="top-right" />
              <Analytics />
              <SpeedInsights />
            </main>
            <Footer />
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
