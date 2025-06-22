'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-500">
          HelpuiT
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 items-center">
          <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link href="/services" className="hover:text-yellow-500">Services</Link></li>
          <li><Link href="/About" className="hover:text-yellow-500">About</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
          <li>
            <Link href="/register">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow transition">
                Book Now
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 text-sm font-medium text-gray-700">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-500">Home</Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="block hover:text-yellow-500">Services</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-500">About</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-500">Contact</Link>
          <Link href="/register" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow transition">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
