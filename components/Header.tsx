"use client";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between py-4">
        {/* Left: Hamburger (now visible on all screens) */}
        <div className="flex items-center gap-3">
          <button
  className="inline-flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 space-y-1.5"
  aria-label="Open menu"
  onClick={() => setOpen(true)}
>
  <span className="block w-6 h-0.5 bg-white rounded-full" />
  <span className="block w-6 h-0.5 bg-white rounded-full" />
  <span className="block w-6 h-0.5 bg-white rounded-full" />
</button>

          <a href="/" className="text-2xl font-extrabold tracking-tight">
            <span className="text-white">work</span>
            <span className="text-[#0F62FE]">zyo</span>
          </a>
        </div>

        {/* Right nav (desktop) */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white" href="#">Find services</a>
          <a className="hover:text-white" href="#">Explore</a>
          <a className="rounded-lg px-3 py-2 border border-white/20 hover:bg-white/5" href="#">Sign in</a>
          <a className="rounded-lg px-3 py-2 bg-[#0F62FE] hover:opacity-90 font-semibold" href="#">Join</a>
        </nav>
      </header>

      {/* Mobile/desktop drawer (same) */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}