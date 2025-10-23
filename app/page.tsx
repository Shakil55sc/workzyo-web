"use client";

import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Hire <span className="text-[#0F62FE]">talent</span>. Work smarter.
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
          10–12% fees, 3–5 business day payouts, and hundreds of categories.
          <br /> A faster, fairer freelance marketplace for buyers and sellers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-[#0F62FE] px-6 py-3 rounded-lg font-medium hover:bg-[#0954d1] transition">
            Explore gigs
          </button>
          <button className="border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
            Start selling
          </button>
        </div>

        <input
          type="text"
          placeholder="Search gigs (e.g. logo design, website, SEO)..."
          className="w-full sm:w-[500px] mx-auto bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-center placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0F62FE]"
        />
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