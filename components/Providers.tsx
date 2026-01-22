"use client";

import Navbar from "./Navbar";
import SmoothScroll from "./SmoothScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Navbar navbarcheck={() => {}} />
      {children}
    </SmoothScroll>
  );
}
