"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-white overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 grid grid-cols-12 gap-2 opacity-10">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="bg-gradient-to-b from-indigo-100 to-white h-full"></div>
                ))}
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-full max-w-6xl px-6 flex flex-col lg:flex-row items-center"
            >
                {/* Left Side Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-5xl font-bold text-gray-900"
                    >
                        The Future of <br /> Product Analytics
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 text-lg text-gray-600"
                    >
                        Simplify analytics with automated reports and real-time data for smarter decisions.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* Right Side - Animated Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
                >
                    <div className="bg-white shadow-lg rounded-xl p-6 w-80">
                        <h3 className="text-xl font-semibold text-gray-900">Sales Analytics</h3>
                        <p className="text-sm text-gray-500 mt-1">Great results with <span className="text-green-500">+12%</span> vs last month</p>
                        <div className="mt-4">
                            <div className="flex justify-between text-gray-800">
                                <span>Amazon</span>
                                <span className="font-bold">$61,342</span>
                            </div>
                            <div className="flex justify-between text-gray-800 mt-2">
                                <span>eBay</span>
                                <span className="font-bold">$44,768</span>
                            </div>
                        </div>
                        <div className="mt-4 h-60 bg-indigo-100 rounded-lg flex items-center justify-center p-4">
                            <Image
                                src="/images/hero1.png" // Replace with actual image
                                alt="Feature Preview"
                                width={180} // Adjusted for better fit
                                height={450} // Adjusted for better fit
                                className="rounded-lg shadow-lg object-contain"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-10 flex space-x-6"
            >
                <p className="text-gray-500 text-sm">🔥 Trusted by:</p>
                <Image src="/images/icon1.png" alt="Descript" width={30} height={10} />
                <Image src="/slack.png" alt="increase" width={80} height={20} />
                <Image src="/hotjar.png" alt="payment" width={80} height={20} />
                <Image src="/segment.png" alt="today" width={80} height={20} />
                <Image src="/square.png" alt="total" width={80} height={20} />
                <Image src="/lattice.png" alt="nifty" width={80} height={20} />
            </motion.div>
        </section>
    );
};

export default Hero;
