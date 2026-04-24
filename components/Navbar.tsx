"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import { Phone, Truck, CreditCard, Globe, ChevronDown, House, Search, ShoppingBag, Heart } from "@deemlol/next-icons";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={ref} className="w-full">

      {/* ================= TOP NAV ================= */}
      <section className="top_nav flex gap-4 items-center justify-center mx-22 py-4 relative">

        <div className="flex gap-2">
          <Phone />
          <p>+011 012 324</p>
        </div>

        <div>|</div>

        <div className="flex gap-2">
          <Truck />
          <Link href="">Shipping & Returns</Link>
        </div>

        <div>|</div>

        <div className="flex">
          <Image src="/icons/insurance.png" alt="" width={24} height={24} />
          <Link href="/trems">Terms</Link>
        </div>

        <div className="font-bold text-4 px-22">
          APT&IDLE
        </div>

        <div className="flex gap-2">
          <CreditCard />
          <Link href="/giftcard">Gift Cards</Link>
        </div>

        <div>|</div>

        <div>
          <Link href="/signIn">Sign In</Link>{" "}
          <span className="font-bold">or</span>{" "}
          <Link href="/signup">Registration</Link>
        </div>

        <div>|</div>

        {/* LANGUAGE DROPDOWN */}
        <div className="flex gap-2 relative">
          <Globe />
          <Link href="/language">English</Link>

          <button onClick={() => toggleMenu("language")}>
            <ChevronDown />
          </button>

          {activeMenu === "language" && (
            <div className="absolute top-8 right-0 w-32 bg-white border shadow-md rounded-md z-50">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Nepali</p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hindi</p>
            </div>
          )}
        </div>
      </section>

      <div className="border-2 border-gray-800"></div>

      {/* ================= BOTTOM NAV ================= */}
      <section className="buttom_nav flex gap-6 items-center justify-center mx-22 py-4 relative">

        {/* NEW ARRIVALS */}
        <div className="flex gap-2 relative">
          <House />
         

          <button className="flex" onClick={() => toggleMenu("new")}>
             <p>New Arrivals</p>
            <ChevronDown />
          </button>

          {activeMenu === "new" && (
            <div className="absolute top-8 bg-white border shadow-md rounded-md w-40 z-50">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Latest</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Trending</Link>
            </div>
          )}
        </div>

        {/* CATEGORIES */}
        <div className="flex relative">
         
          <button className="flex" onClick={() => toggleMenu("categories")}>
             <p>Categories</p>

            <ChevronDown />
          </button>

          {activeMenu === "categories" && (
            <div className="absolute top-8 bg-white border shadow-md rounded-md w-40 z-50">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Kids</Link>
            </div>
          )}
        </div>

        {/* SALES */}
        <div className="flex relative">
        
          <button className="flex" onClick={() => toggleMenu("sales")}>
            <p>Sales</p>
            <ChevronDown />
             

          </button>

          {activeMenu === "sales" && (
            <div className="absolute top-8 bg-white border shadow-md rounded-md w-40 z-50">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">50% Off</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Clearance</Link>
            </div>
          )}
        </div>

        {/* BRANDS */}
        <div className="flex relative">
          <button className="flex" onClick={() => toggleMenu("brands")}>
             <p>Brands</p>
            <ChevronDown />
          </button>

          {activeMenu === "brands" && (
            <div className="absolute top-8 bg-white border shadow-md rounded-md w-40 z-50">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Nike</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Adidas</Link>
            </div>
          )}
        </div>

        <Link href="/blogs">Blogs</Link>
        <Link href="/aboutus">About Us</Link>
        <Link href="/contactus">Contact Us</Link>

        {/* SEARCH */}
        <Search />

        {/* CART */}
        <div className="flex pl-10 relative">
          <ShoppingBag />
          <Link href="/product">Product</Link>
          <div className="px-2">-</div>
          <p className="font-bold">$1,700</p>

          <button onClick={() => toggleMenu("cart")}>
            <ChevronDown />
          </button>

          {activeMenu === "cart" && (
            <div className="absolute top-8 right-0 bg-white border shadow-md rounded-md w-48 z-50">
              <p className="px-4 py-2">Cart is empty</p>
              <Link href="/checkout" className="block px-4 py-2 hover:bg-gray-100">
                Checkout
              </Link>
            </div>
          )}
        </div>

        {/* WISHLIST */}
        <div className="flex relative">
          <Heart />
          <Link href="/wishlist">Wishlist</Link>
          <div className="px-2">-</div>
          <p className="font-bold">0 Items</p>
        </div>

      </section>
    </nav>
  );
}