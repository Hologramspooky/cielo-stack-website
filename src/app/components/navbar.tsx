// app/components/navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Cielo Stack
        </Link>
        
        {/* Consistent navigation for all pages */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={`transition-colors ${isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
            Home
          </Link>
          <Link href="/about" className={`transition-colors ${isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
            About
          </Link>
          <Link href="/team" className={`transition-colors ${isActive('/team') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
            Team
          </Link>
          <Link href="/work" className={`transition-colors ${isActive('/work') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
            Work
          </Link>
          <Link href="/careers" className={`transition-colors ${isActive('/careers') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
            Careers
          </Link>
          <Link href="/contact" className={`transition-colors ${isActive('/contact') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
            Contact
          </Link>
        </div>
        
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block">
          Get Started
        </Link>
      </div>
    </nav>
  );
}