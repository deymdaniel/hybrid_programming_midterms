"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white p-4 ">
      <ul className="flex space-x-4 justify-center">
        <Link href="/" className="hover:text-gray-300">
        Home
        </Link>
        <Link href="/products" className="hover:text-gray-300">
        Products
        </Link>
        <Link href="/dashboard" className="hover:text-gray-300">
        Dashboard
        </Link>
        <Link href="/posts" className="hover:text-gray-300">
        Posts
        </Link>
        <Link href="/todos" className="hover:text-gray-300">
        Todos
        </Link>
      </ul>
    </nav>
  );
}