"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BottomNav() {
  const [visible, setVisible] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    observerRef.current = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
    });

    observerRef.current.observe(footer);

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-background border-t flex items-center justify-around px-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link href="/" className="text-sm">Home</Link>
      <Link href="/works" className="text-sm">Works</Link>
      <Link href="/profile" className="text-sm">Profile</Link>
      <Link href="/contact" className="text-sm">Contact</Link>
    </nav>
  );
}
