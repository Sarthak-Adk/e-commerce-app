import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Build Your Dream Store 🛍️
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl">
          Discover amazing products at the best prices. Fast delivery, secure payments, and modern shopping experience.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Start Shopping
          </button>
          <button className="border border-black px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-20">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">🚚 Fast Delivery</h3>
          <p className="text-gray-600 mt-2">Get your products delivered quickly and safely.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">🔒 Secure Payment</h3>
          <p className="text-gray-600 mt-2">Your transactions are safe and encrypted.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">💎 Best Quality</h3>
          <p className="text-gray-600 mt-2">We provide only verified high-quality products.</p>
        </div>
      </section>

    </div>
  );
}