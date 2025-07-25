// app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Cielo Stack
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          <Link href="/work" className="text-gray-700 hover:text-blue-600 transition-colors">Our Work</Link>
          <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">Team</Link>
          <Link href="/careers" className="text-gray-700 hover:text-blue-600 transition-colors">Careers</Link>
        </div>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block">
          Get Started
        </Link>
      </div>
    </nav>
  );
}