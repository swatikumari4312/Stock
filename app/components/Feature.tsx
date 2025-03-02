"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Feature = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-20 px-6 md:px-12 bg-white dark:bg-[#0B0F29] overflow-x-hidden">
      {/* Heading */}
      <motion.h2
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeLeft}
        className="text-center text-4xl font-bold text-black dark:text-white"
      >
        Our features are simple and powerful
      </motion.h2>
      <motion.p
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeRight}
        className="text-center text-gray-500 dark:text-gray-300 mt-2"
      >
        Features are always developed by powerful AI.
      </motion.p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeLeft}
          className="flex flex-col justify-center space-y-4"
        >
          <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-lg w-fit text-sm">
            Track
          </span>
          <h3 className="text-3xl font-semibold text-black dark:text-white">
            Track the right metrics with zero setup
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Gain deep insights from your data with zero configuration. All the
            essential metrics are instantly available to help you.
          </p>
          <button className="px-4 py-2 w-fit text-sm text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition">
            Learn More
          </button>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeRight}
        >
          <Image
            src="/images/f1.png" // Replace with actual image
            alt="Feature Preview"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeRight}
        >
          <Image
            src="/images/f2.png"
            alt="Zoom Feature"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        {/* feature 3 */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeLeft}
          className="flex flex-col justify-center space-y-4"
        >
          <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-lg w-fit text-sm">
            Zoom
          </span>
          <h3 className="text-3xl font-semibold text-black dark:text-white">
            Zoom into your metrics
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Gain insightful perspectives by exploring comprehensive profiles instead of random IDs.
          </p>
          <button className="px-4 py-2 w-fit text-sm text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-500 hover:text-white transition">
            Learn More
          </button>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeLeft}
          className="flex flex-col justify-center space-y-4"
        >
          <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-lg w-fit text-sm">
            Optimized
          </span>
          <h3 className="text-3xl font-semibold text-black dark:text-white">
            Optimized to measure companies
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Enhancing company metrics through optimized measurement strategies for improved
            performance and strategic growth.
          </p>
          <button className="px-4 py-2 w-fit text-sm text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-500 hover:text-white transition">
            Learn More
          </button>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeRight}
        >
          <Image
            src="/images/f3.png"
            alt="Optimized Feature"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Feature;
