import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import Link from "next/link"

const Footer = () => {
  return (
    <footer className=" px-6  mx-28 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Logo + Social */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            APT<span className="text-black">E</span>IDLE
          </h2>

          <p className="mb-4 text-sm">Join Us in Social Networks:</p>

          <div className="flex gap-4 mb-4">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaGoogle className="cursor-pointer hover:text-black" />
          </div>

          <p className="text-sm mb-2">📞 + 001 232 323</p>
          <p className="text-xs text-gray-500">
            © Workout Outlet, 2017
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
         <li>  <Link href="">Home</Link> </li>
       <li><Link href="">New Arrivals</Link>    </li>
         <li><Link href="">Categories</Link>   </li>
         <li><Link href="">Sales</Link>   </li>
          <li><Link href="">Brands</Link>  </li>
          <li><Link href=""> Sport</Link> </li>
          <li><Link href="">Blog</Link>  </li>
          <li><Link href="">About Us</Link></li>  
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Authenticity</li>
            <li>Delivery & Returns</li>
            <li>Gift Cards</li>
          </ul>

          <h3 className="font-semibold text-lg mt-6 mb-2">Work</h3>
          <ul className="text-sm space-y-1">
            <li>Monday - Friday: 9AM - 19PM</li>
            <li>Saturday: 9AM - 15PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Subscription */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscription</h3>
          <p className="text-sm mb-4">
            Subscribe to the newsletter and get the latest news,
            promotions and updates.
          </p>

          <input
            type="email"
            placeholder="e.g. mail@mail.com"
            className="w-full border border-gray-300 px-3 py-2 mb-3 outline-none"
          />

          <button className="border border-black px-6 py-2 cursor-pointer hover:bg-black hover:text-white transition">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;