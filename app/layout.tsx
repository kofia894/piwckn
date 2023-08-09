"use client";
import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";
import { useEffect } from "react";
import { Router } from "next/router";
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navCheck, setnavCheck] = useState(false);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (navCheck) scrollToTop();
  }, [navCheck]);

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`z-30 flex min-h-screen flex-col overflow-x-hidden ${navCheck ? 'overflow-y-hidden':'overflow-x-hidden'}`}>
        <div className="z-30">
          <Navbar navbarcheck={setnavCheck} />
        </div>
        {children}
        <div className="z-30">
          <Footer />
        </div>
      </body>
    </html>
  );
}
