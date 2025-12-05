import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import DotGrid from "@/components/UI/DotGrid";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Maxxit",
};

const AeonikBold = localFont({
  src: "./fonts/Aeonik-Bold.ttf",
  display: "optional",
  variable: "--font-Aeonik-Bold",
  adjustFontFallback: false,
  
  preload: true,
});

const AeonikRegular = localFont({
  src: "./fonts/fonnts.com-Aeonik-Regular.ttf",
  display: "optional",
  variable: "--font-Aeonik-Regular",
  adjustFontFallback: false,
 
  preload: true,
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AeonikBold.variable} ${AeonikRegular.variable}`}>
        <DotGrid />
        <Navbar />
        {children}
        {/* <Footer /> */}
        
      </body>
    </html>
  );
}
