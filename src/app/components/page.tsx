// app/page.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CtaFooter from './components/CtaFooter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <CtaFooter />
      <Footer />
    </main>
  );
}