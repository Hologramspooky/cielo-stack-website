// app/about/page.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ValuesSection from '../components/about/ValuesSection';
import HowWeOperateSection from '../components/about/HowWeOperateSection'; // <-- Import the new component

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Section 1: Company Mission & Origin */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          From Idea to Launch—Faster Than Ever.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Cielo Stack was founded on a simple principle: great ideas deserve to be built, not just discussed. We are a team of passionate builders, designers, and strategists dedicated to helping visionary founders launch their MVPs in a fraction of the traditional time.
        </p>
      </section>

      {/* Section 2: Our Values */}
      <ValuesSection />

      {/* Section 3: How We Operate */}
      <HowWeOperateSection />

      <Footer />
    </main>
  );
}