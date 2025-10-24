"use client";

import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      {/* Header */}
      <Header />

      {/* Hero Section (enhanced, no external deps) */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-16 text-center relative">
        {/* soft glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="mx-auto h-64 w-64 md:h-96 md:w-96 rounded-full blur-3xl opacity-20"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #0F62FE55, transparent 70%)",
            }}
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hire <span className="text-[#0F62FE]">talent</span>. Work smarter.
        </h1>

        <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
          10–12% fees, 3–5 business day payouts, and hundreds of categories.
          <br /> A faster, fairer freelance marketplace for buyers and sellers.
        </p>

        {/* primary CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-[#0F62FE] px-6 py-3 rounded-lg font-medium hover:bg-[#0954d1] transition">
            Explore gigs
          </button>
          <button className="border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
            Start selling
          </button>
        </div>

        {/* search bar */}
        <form
          className="w-full sm:w-[520px] mx-auto bg-white/10 border border-white/20 rounded-lg flex items-center gap-2 px-3 py-3 backdrop-blur-sm"
          onSubmit={(e) => e.preventDefault()}
          role="search"
          aria-label="Search gigs"
        >
          {/* inline search icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="shrink-0 text-white/70"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5 1.5-1.5-5-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search gigs (e.g. logo design, website, SEO)…"
            className="flex-1 bg-transparent placeholder-white/50 text-sm md:text-base focus:outline-none"
          />

          <button
            type="submit"
            className="bg-[#0F62FE] hover:bg-[#0954d1] px-4 py-2 rounded-md text-sm font-medium"
          >
            Search
          </button>
        </form>

        {/* quick tags */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center text-xs md:text-sm">
          {["Logo design", "WordPress", "SEO", "Video editing", "AI chatbot"].map(
            (t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full border border-white/15 text-white/80 hover:bg-white/10 transition cursor-default"
              >
                {t}
              </span>
            )
          )}
        </div>

        {/* trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-white/60">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Escrow-protected payments
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            3–5 business day payouts
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            10–12% marketplace fee
          </span>
        </div>
      </section>

      {/* Top Categories */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <CategoryCard title="Design" desc="Logo, Brand, UI/UX" icon="🎨" />
          <CategoryCard title="Web Development" desc="Next.js, WordPress" icon="💻" />
          <CategoryCard title="Marketing" desc="SEO, Social Media" icon="📣" />
          <CategoryCard title="Writing" desc="Articles, Copywriting" icon="✍" />
          <CategoryCard title="Video Editing" desc="Reels, Ads, Animation" icon="🎬" />
          <CategoryCard title="AI Services" desc="Chatbot, Automation" icon="🤖" />
          <CategoryCard title="Music & Audio" desc="Voice Over, Mixing" icon="🎵" />
          <CategoryCard title="Consulting" desc="Business, Strategy" icon="🧠" />
          <CategoryCard title="App Development" desc="Android, iOS" icon="📱" />
          <CategoryCard title="Data Analysis" desc="Excel, Power BI" icon="📊" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}