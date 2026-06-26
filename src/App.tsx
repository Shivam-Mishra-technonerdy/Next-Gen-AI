import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { BentoFeatures } from './components/BentoFeatures';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col font-sans">
      {/* Premium Navbar */}
      <Navbar />

      {/* Main SaaS Landing Page Content */}
      <main className="flex-grow">
        
        {/* Premium AI Hero Section */}
        <Hero />

        {/* Trusted By Companies Section */}
        <Logos />

        {/* Bento Grid / Accordion Features Section */}
        <BentoFeatures />

        {/* Dynamic SaaS Pricing Section */}
        <Pricing />

        {/* Premium Testimonials Section */}
        <Testimonials />

        {/* Full-width Call-to-Action Section */}
        <CTA />

      </main>

      {/* Modern Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
