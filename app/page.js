'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from "./components/Navbar/page";

const bgImage = '/herobg.jpg';

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <main className="bg-gray-50 text-gray-800">
     <Navbar /> 
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
            <span className="text-yellow-400">Service in 10 Minutes</span><br />
            Right at Your Doorstep
          </h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow-md text-gray-200 mb-6">
            Connect with reliable, background-verified experts in minutes.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/register">
              <button className="bg-blue-400 hover:bg-sky-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition-transform hover:scale-105">
                Book a Service
              </button>
            </Link>
            <Link href="/sp-register">
              <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition hover:scale-105">
                Become a Partner
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-4">
          {[
            ['electrician.png', 'Electrician', 'Electrical repairs, installations, and troubleshooting.'],
            ['plumber.webp', 'Plumber', 'Leak fixes, pipe installations, and bathroom solutions.'],
            ['carpenter.webp', 'Carpenter', 'Furniture assembly, repairs, and custom woodwork.'],
            ['cleaner.webp', 'Cleaner', 'Home, office, and deep cleaning services.'],
          ].map(([img, title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 hover:bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center"
            >
              <div className="w-28 h-28 relative mb-4">
                <Image
                  src={`/${img}`}
                  alt={title}
                  fill
                  className="object-contain rounded-md"
                  sizes="112px"
                  priority={i === 0}
                />
              </div>
              <h3 className="text-lg font-semibold mt-2">{title}</h3>
              <p className="text-sm text-gray-500 mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose HelpuiT */}
      <section className="py-20 bg-indigo-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose HelpuiT?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {[
            ['⏱️', '10-Min Arrival', 'We connect you instantly to a local expert who reaches you in 10 minutes'],
            ['✅', 'Verified Experts', 'All helpers are vetted and background-checked and trained for safe and quality service.'],
            ['📍', 'Smart Location', 'Smart location detection to assign the nearest available helper.'],
            ['💰', 'No Hidden Fees', 'Upfront pricing with no surprises. Pay only for what you book.'],
          ].map(([icon, title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 5, scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-lg transition-transform transform perspective-1000 cursor-pointer hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl mx-auto px-4">
          {[
            ['📲', 'Book a Service', 'Choose the service you need and fill in your details.'],
            ['📍', 'We Assign a Helper', 'Nearest available professional is notified instantly.'],
            ['🚪', 'Helper Arrives', 'Help at your doorstep in 10 minutes, guaranteed.'],
          ].map(([icon, title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-xl shadow hover:shadow-md"
            >
              <div className="text-5xl mb-3">{icon}</div>
              <h4 className="font-semibold mb-1">{title}</h4>
              <p className="text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-700 text-center text-white">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Need Help Right Now?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Your solution is just a click away. Book a verified professional and get help in under 10 minutes.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          <Link href="/register">
            <button className="bg-white text-blue-700 px-8 py-4 text-lg rounded-xl hover:bg-gray-100 transition shadow-md font-semibold border border-blue-700">
              Book a Service Now
            </button>
          </Link>
          <span className="text-blue-100 font-medium hidden md:inline">or</span>
          <Link href="/sp-register">
            <button className="bg-blue-700 text-white px-8 py-4 text-lg rounded-xl hover:bg-blue-800 transition shadow-md font-semibold border border-white">
              Become a Partner
            </button>
          </Link>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-indigo-100 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              name: "Harsh",
              avatar: "/avatar1.png",
              text: "Booked an electrician and he arrived in 8 minutes! Super professional and fixed my issue quickly.",
            },
            {
              name: "Suteekshn",
              avatar: "/avatar2.png",
              text: "Very reliable service. The plumber was polite and the pricing was transparent. Highly recommend!",
            },
            {
              name: "Krish",
              avatar: "/avatar3.png",
              text: "I love how easy it is to book and get help so fast. The cleaner did a fantastic job!",
            },
          ].map(({ name, avatar, text }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-4">
                <Image
                  src={avatar}
                  alt={name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">&quot;{text}&quot;</p>
              <span className="font-semibold text-indigo-700">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 
