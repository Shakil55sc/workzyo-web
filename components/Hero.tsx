"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hire <span className="text-[#0F62FE]">talent</span>. Work smarter.
        </h1>

        <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
          10–12% fees, 3–5 business day payouts, and hundreds of categories.
          <br className="hidden sm:block" />
          A faster, fairer freelance marketplace for buyers and sellers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-[#0F62FE] px-6 py-3 rounded-lg font-medium hover:bg-[#0954d1] transition">
            Explore gigs
          </button>
          <button className="border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
            Start selling
          </button>
        </div>

        {/* Search bar */}
        <div className="mx-auto flex w-full sm:w-[560px] gap-2">
          <input
            type="text"
            placeholder="Search gigs (e.g. logo design, website, SEO)…"
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-left placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0F62FE]"
          />
          <button className="px-5 py-3 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition">
            Search
          </button>
        </div>

        {/* Suggestion chips (UI-only) */}
        <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm">
          {[
            "Logo design",
            "WordPress",
            "SEO",
            "Video editing",
            "AI chatbot",
            "Escrow-protected payments",
            "3–5 business day payouts",
            "10–12% marketplace fee",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}