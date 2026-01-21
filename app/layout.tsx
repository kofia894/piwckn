"use client";
import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "../components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <SmoothScroll>
          <Navbar navbarcheck={() => {}} />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
