import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Collections from './components/Collections.jsx';
import About from './components/About.jsx';
import Craftsmanship from './components/Craftsmanship.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Collections />
        <About />
        <Craftsmanship />
        <WhyChoose />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
