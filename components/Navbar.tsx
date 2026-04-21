import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      
      <h1 className="text-2xl font-bold">🛒 ShopNest</h1>

      <div className="flex gap-6 font-medium text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/about">About</Link>
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-lg">
        Login
      </button>

    </nav>
  );
}