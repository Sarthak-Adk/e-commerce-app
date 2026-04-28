"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "@deemlol/next-icons";


const slides = [
  {
    title: "UP TO 60% OFF",
    subtitle: "Last-minute Gift Guide",
    desc: "Kassia is a modern, coconut oil entrepreneur + super connector, with a story and a space waiting for her in London and New York.",
  },
  {
    title: "FLAT 40% DISCOUNT",
    subtitle: "Winter Collection",
    desc: "Discover premium winter outfits designed for comfort and elegance across global fashion hubs.",
  },
  {
    title: "NEW ARRIVALS",
    subtitle: "Exclusive Drop",
    desc: "Explore the latest fashion trends with our exclusive new season collection made for modern lifestyle.",
  },
];

function Hero() {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // ✅ mark client mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ auto slider ONLY after mount
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000); // (3 sec — you had 30000 = 30 sec)

    return () => clearInterval(interval);
  }, [isClient]);

  return (
    <div className="container flex justify-center px-22 gap-[180px] ">
      
      {/* LEFT */}
      <section className="pt-14">
        <div>
          <p className="text-gray-500 text-sm mb-2">
            {slides[active].subtitle}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {slides[active].title}
          </h1>

          <p className="text-gray-500 mt-4 max-w-md">
            {slides[active].desc}
          </p>
        </div>

        <button className="mt-6 bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition">
          Shop Now
        </button>

        {/* DOTS */}
       <div className="flex justify-between mt-8 items-center w-full">
  
  <div className="flex items-center gap-2">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setActive(i)}
        className={`w-2.5 h-2.5 rounded-full transition ${
          active === i ? "bg-black scale-125" : "bg-gray-300"
        }`}
      />
    ))}
  </div>

  <div className="flex items-center gap-1">
    <p className="text-xs text-gray-400">scroll down</p>
    <ChevronDown size={14} className="text-gray-400" />
  </div>
</div>

       
      </section>

      {/* RIGHT */}
      <section>
        <Image
          src="/images/hero_model.png"
          alt="model"
         width={500}
         height={500}
          priority
        />
      </section>
    </div>
  );
}

export default Hero;