'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">HelpuiT</h3>
          <p className="text-sm text-gray-400">
            Fast, trusted home services within 10 minutes. We're here when you need us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/"><span className="hover:text-yellow-400 cursor-pointer">Home</span></Link></li>
            <li><Link href="/register"><span className="hover:text-yellow-400 cursor-pointer">Book a Service</span></Link></li>
            <li><Link href="/sp-register"><span className="hover:text-yellow-400 cursor-pointer">Become a Partner</span></Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>Email: shubham will do this</li>
            <li>Phone: +91 subham will do this</li>
            <li>Location: New Delhi, India</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-2xl text-yellow-400">
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HelpuiT. All rights reserved.
          <p className="mt-2">
            Made with 💗 by HelpuiT </p>
      </div>
    </footer>
  );
};

export default Footer; // ✅ Important for importing elsewhere
