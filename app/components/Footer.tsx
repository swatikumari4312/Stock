"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      className="bg-white dark:bg-[#0B0F29] border-t border-gray-200 dark:border-gray-700 py-10 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Solutions */}
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Solutions</h4>
          <ul className="space-y-2 text-gray-500 dark:text-gray-300">
            <li><Link href="#">Feature Report</Link></li>
            <li><Link href="#">Qualification Bot</Link></li>
            <li><Link href="#">Integrations</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-gray-500 dark:text-gray-300">
            <li><Link href="#">Customers</Link></li>
            <li><Link href="#">Documentation</Link></li>
            <li><Link href="#">Benchmarks</Link></li>
            <li><Link href="#">Joule vs Other app</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Company</h4>
          <ul className="space-y-2 text-gray-500 dark:text-gray-300">
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Changelog</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Legal</h4>
          <ul className="space-y-2 text-gray-500 dark:text-gray-300">
            <li><Link href="#">Terms and Condition</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Security</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 text-gray-500 dark:text-gray-400 text-sm">
        <p>© 2025 Alytics Inc. All rights reserved.</p>

        <div className="flex space-x-4">
          <Link href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <FaFacebookF className="text-gray-600 dark:text-gray-300" />
          </Link>
          <Link href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <FaLinkedinIn className="text-gray-600 dark:text-gray-300" />
          </Link>
          <Link href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <FaTwitter className="text-gray-600 dark:text-gray-300" />
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
