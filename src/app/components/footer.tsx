// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Link href="/" className="text-2xl font-bold text-blue-400 mb-4 inline-block">
          Cielo Stack
        </Link>
        <p className="text-gray-400 mb-8">Bringing ideas to life in 30 days</p>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500">© {currentYear} Cielo Stack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}