"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Left Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-[#0B1220] border-r border-white/10
        transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="text-xl font-extrabold">
            <span className="text-white">work</span>
            <span className="text-[#0F62FE]">zyo</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-white/70 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <nav className="p-4 text-white/90 text-base space-y-3">
          <a className="block hover:text-white" href="#">Browse categories</a>

          <details className="group">
            <summary className="cursor-pointer select-none text-white/90 hover:text-white">
              Explore
            </summary>
            <div className="pl-4 mt-2 space-y-2 text-white/80">
              <a className="block hover:text-white" href="#">Top gigs</a>
              <a className="block hover:text-white" href="#">New & trending</a>
            </div>
          </details>

          <a className="block hover:text-white" href="#">Workzyo Pro (demo)</a>

          <div className="pt-4 border-t border-white/10 mt-4">
            <a className="block py-2 rounded-lg text-center bg-white/10 hover:bg-white/15" href="#">
              Join
            </a>
            <a className="block py-2 mt-2 rounded-lg text-center border border-white/20 hover:bg-white/5" href="#">
              Sign in
            </a>
          </div>

          <details className="group pt-4 border-t border-white/10 mt-4">
            <summary className="cursor-pointer select-none text-white/90 hover:text-white">
              General
            </summary>
            <div className="pl-4 mt-2 space-y-2 text-white/80">
              <a className="block hover:text-white" href="#">Home</a>
              <a className="block hover:text-white" href="#">Language</a>
              <a className="block hover:text-white" href="#">Currency</a>
            </div>
          </details>
        </nav>
      </aside>
    </>
  );
}