// Ini sekarang adalah Komponen Server React secara default
// import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '../components/sections/About';
import Skills from '@/components/sections/Skills';
import Superiority from '@/components/sections/Superiority';
import Portfolio from '@/components/sections/Portfolio';
import WorkExperience from '../components/sections/WorkExperience';
import Testimonial from '@/components/sections/Testimonial';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    // Kelas 'min-h-screen bg-white' diambil dari App.jsx
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skillset Section */}
      <Skills />

      {/* Experience/Superiority Section */}
      <Superiority />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Work Experience Section */}
      <WorkExperience />

      {/* Testimonial Section */}
      <Testimonial />

      {/* FAQ Section */}
      <Faq />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}