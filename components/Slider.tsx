"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Big Sale 🛍️",
    desc: "Up to 50% off on all products",
    image: "/images/slide1.jpg",
  },
  {
    id: 2,
    title: "New Arrivals ✨",
    desc: "Check out the latest trends",
    image: "/images/slide2.jpg",
  },
  {
    id: 3,
    title: "Fast Delivery 🚚",
    desc: "Get your order in 2-3 days",
    image: "/images/slide3.jpg",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full"
        >
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              {slides[index].title}
            </h2>
            <p className="mt-4 text-lg">{slides[index].desc}</p>
            <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg">
              Shop Now
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-full"
      >
        ⬅
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-full"
      >
        ➡
      </button>
    </div>
  );
}