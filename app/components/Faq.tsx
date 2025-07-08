'use client'
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How to start investing in stocks?",
    answer: "Start by researching, opening a brokerage account, and investing in diversified assets.",
  },
  {
    question: "What does it mean to invest in stocks?",
    answer: "Investing in stocks means buying shares of a company to earn returns over time.",
  },
  {
    question: "Do you need a lot of time to trade stocks?",
    answer: "Not necessarily. Long-term investing requires minimal time, while active trading requires more.",
  },
  {
    question: "What's going on with the stock market?",
    answer: "Market trends change daily based on economic factors and investor sentiment.",
  },
  {
    question: "How do I choose a stock market brokerage account?",
    answer: "Consider fees, features, customer support, and ease of use before selecting a broker.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12">
      <h2 className="text-green-400 text-lg font-semibold">FAQ</h2>
      <h1 className="text-3xl font-bold mt-2">Frequently Asked Questions</h1>
      
      <div className="w-full max-w-2xl mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600">
            <button
              className="w-full flex justify-between items-center text-lg font-medium text-gray-200 py-4 px-6 hover:bg-gray-800 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && (
              <div className="px-6 py-3 text-gray-300 bg-gray-900">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


