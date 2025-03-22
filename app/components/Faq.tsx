"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How to start investing in stocks?",
    answer: "Invest time in studying online tutorials to speed up the process of understanding how the platform works. Then once you are confident that you know your way around, buy your first stock.",
  },
  {
    question: "What does it mean to invest in stocks?",
    answer:
      "Investing means losing money. If you invest, your portfolio will decline in value from time to time. This should be expected, but do your best to increase your ability to tolerate that volatility.",
  },
  {
    question: "Do you need a lot of time to trade stocks?",
    answer: "If you are trading in stocks then you do not need to spend a lot of time on fundamentals. Rather, here you should read charts, trends, patterns, etc, and get more involved in the day-to-day market activity. ",
  },
  {
    question: "What's going on with the stock market?",
    answer: "Stock market is facing volatility as earnings season continues, with tech giants like Alphabet and Advanced Micro Devices (AMD) disappointing investors. The S&P 500 and Nasdaq dropped, while Dow Jones remained steady. China’s mild response to U.S. tariffs didn’t ease concerns, as analysts warn of a prolonged trade war.",
  },
  {
    question: "How do I choose a stock market brokerage account?",
    answer: "First, determine the type of brokerage account you need. For most people who are just trying to learn stock market investing, this means choosing between a standard brokerage account and an individual retirement account (IRA). Both account types will allow you to buy stocks, mutual funds, and ETFs.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-6 py-20"
    >
      {/* Heading */}
      <h4 className="text-green-400 font-semibold text-sm">FAQ</h4>
      <h2 className="text-4xl font-bold text-white mt-2">Frequently Asked Questions</h2>

      {/* FAQ List */}
      <div className="mt-8 space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-600 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center py-4">
              <h3 className="text-lg font-medium text-white">{faq.question}</h3>
              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold text-gray-400"
              >
                {openIndex === index ? "✖" : "+"}
              </motion.span>
            </div>

            {/* Answer with animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-gray-300 text-sm pb-4"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Faq;

