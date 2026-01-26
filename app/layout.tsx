import type { Metadata } from "next";
import { Azeret_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camelia Strango - Portfolio & CV",
  description: "Online portfolio & curriculum, by Camelia Strango",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${azeretMono.variable} ${interTight.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
