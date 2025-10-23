export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0B1220]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 text-white/80">
        {/* top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <div className="font-semibold text-white mb-3">Categories</div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#">Graphics & Design</a></li>
              <li><a className="hover:text-white" href="#">Digital Marketing</a></li>
              <li><a className="hover:text-white" href="#">Writing & Translation</a></li>
              <li><a className="hover:text-white" href="#">Video & Animation</a></li>
              <li><a className="hover:text-white" href="#">Music & Audio</a></li>
              <li><a className="hover:text-white" href="#">Programming & Tech</a></li>
              <li><a className="hover:text-white" href="#">AI Services</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-3">For Clients</div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#">How Workzyo Works</a></li>
              <li><a className="hover:text-white" href="#">Trust & Safety</a></li>
              <li><a className="hover:text-white" href="#">Quality Guide</a></li>
              <li><a className="hover:text-white" href="#">Customer Stories</a></li>
              <li><a className="hover:text-white" href="#">Help & Support</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-3">For Freelancers</div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#">Start Selling</a></li>
              <li><a className="hover:text-white" href="#">Create a Gig</a></li>
              <li><a className="hover:text-white" href="#">Pricing & Fees</a></li>
              <li><a className="hover:text-white" href="#">Payments & Payouts</a></li>
              <li><a className="hover:text-white" href="#">Community Hub</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-3">Business</div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#">Workzyo Pro</a></li>
              <li><a className="hover:text-white" href="#">Project Management</a></li>
              <li><a className="hover:text-white" href="#">Team Accounts</a></li>
              <li><a className="hover:text-white" href="#">Contact Sales</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#">About</a></li>
              <li><a className="hover:text-white" href="#">Careers</a></li>
              <li><a className="hover:text-white" href="#">Press</a></li>
              <li><a className="hover:text-white" href="#">Terms</a></li>
              <li><a className="hover:text-white" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="font-extrabold text-white">
            <span>work</span><span className="text-[#0F62FE]">zyo</span>
          </div>
          <div className="text-white/60">© {new Date().getFullYear()} Workzyo — Less fees. Faster payouts.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">English</a>
            <a className="hover:text-white" href="#">USD $</a>
            <a className="hover:text-white" href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}