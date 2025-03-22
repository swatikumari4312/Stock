"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-6 left-0 right-0 flex items-center justify-between max-w-6xl mx-auto px-6 md:px-12 z-50"
    >
      {/* Logo */}
      <h1 className="text-xl font-semibold text-gray-800">🔹MarketWatch</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/features" className="text-gray-600 hover:text-gray-800">
          Features
        </Link>
        <Link href="/customers" className="text-gray-600 hover:text-gray-800">
          Customers
        </Link>
        <Link href="/pricing" className="text-gray-600 hover:text-gray-800">
          Pricing
        </Link>
        <Link href="/changelog" className="text-gray-600 hover:text-gray-800">
          Changelog
        </Link>
        <button className="px-4 py-2 text-black border border-gray-700 rounded-md">
          Log In
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-md">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden"
        >
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link href="/features" className="text-gray-600 hover:text-gray-800">
              Features
            </Link>
            <Link href="/customers" className="text-gray-600 hover:text-gray-800">
              Customers
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-800">
              Pricing
            </Link>
            <Link href="/changelog" className="text-gray-600 hover:text-gray-800">
              Changelog
            </Link>
            <button className="px-4 py-2 text-sm border border-gray-700 rounded-md w-32">
              Log In
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-md w-32">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
