"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative bg-[#14193E] text-white py-20 px-6 md:px-12"
      style={{
        backgroundColor: "#14193E", 
        backgroundImage: 'url("/images/bg.png")', // Change this to your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold"
      >
        From Data to Decision
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-center text-gray-300 mt-4 max-w-2xl mx-auto"
      >
        Let your team clearly understand customer experiences to make impactful changes.
      </motion.p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#1E244A] p-6 rounded-xl shadow-lg border border-gray-700"
        >
          <Image
            src="/images/card1.jpg" // Replace with your image path
            alt="Data Collection"
            width={500}
            height={500}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Automating Data Collection</h3>
          <p className="text-gray-400 text-sm">
            AI automates tasks like data cleaning and anomaly detection, freeing analysts to focus on strategic initiatives.
          </p>
          <div className="mt-4">
            <span className="text-blue-400 text-sm">Weekly Active: 253</span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#1E244A] p-6 rounded-xl shadow-lg border border-gray-700"
        >
          <Image
            src="/images/card2.jpg" // Replace with your image path
            alt="User Journey"
            width={500}
            height={500}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">AI-powered User Journey Mapping</h3>
          <p className="text-gray-400 text-sm">
            AI analyzes user journeys to identify points of friction or confusion, optimizing product flow for better user experience.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#1E244A] p-6 rounded-xl shadow-lg border border-gray-700"
        >
          <Image
            src="/images/card3.png" // Replace with your image path
            alt="Real-time Insights"
            width={500}
            height={500}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Real-time Insights</h3>
          <p className="text-gray-400 text-sm">
            AI provides real-time data analysis, offering immediate insights into user behavior for faster adjustments.
          </p>
          <div className="mt-4">
            <span className="text-green-400 text-sm">Daily Active Users: 14</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
