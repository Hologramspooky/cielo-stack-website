// app/components/CtaFooter.tsx
import Link from 'next/link';

export default function CtaFooter() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your MVP?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Let's talk about your idea and see how we can bring it to life in 30 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-block">
            Get a Free Quote
          </Link>
          <Link href="/work" className="border-2 border-blue-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105 inline-block">
            See Our Past Work
          </Link>
        </div>
      </div>
    </section>
  );
}