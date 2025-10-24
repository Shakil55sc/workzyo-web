"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  };

  const onClickOutside = (e: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  if (open) {
    const body = document.body;
    const docEl = document.documentElement;
    const scrollbarWidth = Math.max(0, window.innerWidth - docEl.clientWidth);

    // scroll lock + scrollbar compensation (no jump)
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.setProperty("padding-right", String(scrollbarWidth) + "px");
    } else {
      body.style.removeProperty("padding-right");
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
  } else {
    const body = document.body;
    body.style.overflow = "";
    body.style.removeProperty("padding-right");

    document.removeEventListener("keydown", onKey);
    document.removeEventListener("mousedown", onClickOutside);
  }

  return () => {
    document.removeEventListener("keydown", onKey);
    document.removeEventListener("mousedown", onClickOutside);
  };
}, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#0B1220]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            aria-controls="mobile-menu"
            aria-expanded={open}
            className="p-2 rounded hover:bg-white/10"
          >
            <span className="sr-only">Open menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" className="text-white">
              <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
            </svg>
          </button>

          <Link href="/" className="text-xl font-bold tracking-tight">
            work<span className="text-[#0F62FE]">zyo</span>
          </Link>
        </div>

        {/* Right: auth (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="px-3 py-1.5 rounded-lg border border-white/20 hover:bg-white/10 text-sm"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="px-3 py-1.5 rounded-lg bg-[#0F62FE] hover:bg-[#0954d1] text-sm"
          >
            Join
          </Link>
        </div>
      </div>

      {/* Overlay + Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        ref={drawerRef}
        id="mobile-menu"
        className={`fixed left-0 top-0 z-50 h-screen w-80 max-w-[85vw] bg-[#0B1220] border-r border-white/10 shadow-xl overflow-y-auto transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="text-xl font-bold">
            work<span className="text-[#0F62FE]">zyo</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded hover:bg-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-white">
              <path
                fill="currentColor"
                d="M18.3 5.71L12 12.01l-6.3-6.3-1.4 1.41 6.29 6.3-6.3 6.29 1.41 1.41 6.3-6.29 6.29 6.29 1.41-1.41-6.29-6.29 6.29-6.3z"
              />
            </svg>
          </button>
        </div>

        <nav className="p-4 text-sm">
          <details>
            <summary className="flex items-center justify-between cursor-pointer py-2 font-medium">
              Browse categories <span>▸</span>
            </summary>
            <ul className="mt-2 pl-3 space-y-2 text-white/80">
              <li><Link href="#">Design</Link></li>
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">Marketing</Link></li>
              <li><Link href="#">Writing</Link></li>
              <li><Link href="#">Video Editing</Link></li>
            </ul>
          </details>

          <details className="mt-3">
            <summary className="flex items-center justify-between cursor-pointer py-2 font-medium">
              Explore <span>▸</span>
            </summary>
            <ul className="mt-2 pl-3 space-y-2 text-white/80">
              <li><Link href="#">Workzyo Pro (demo)</Link></li>
              <li><Link href="#">Success stories</Link></li>
              <li><Link href="#">Guides</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </details>

          <details className="mt-3">
            <summary className="flex items-center justify-between cursor-pointer py-2 font-medium">
              General <span>▸</span>
            </summary>
            <ul className="mt-2 pl-3 space-y-2 text-white/80">
              <li><Link href="#">Help & Support</Link></li>
              <li><Link href="#">Trust & Safety</Link></li>
              <li><Link href="#">Pricing</Link></li>
            </ul>
          </details>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link href="#" className="bg-[#0F62FE] text-center py-2 rounded-lg hover:bg-[#0954d1]">
              Join
            </Link>
            <Link href="#" className="border border-white/30 text-center py-2 rounded-lg hover:bg-white/10">
              Sign in
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  );
}