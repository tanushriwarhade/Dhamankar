import React, { useState } from 'react';
import { PitchBanner } from './components/PitchBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveRateCalculator } from './components/LiveRateCalculator';
import { ProductCatalog } from './components/ProductCatalog';
import { CustomSilversmithing } from './components/CustomSilversmithing';
import { TrustHallmark } from './components/TrustHallmark';
import { CustomerReviews } from './components/CustomerReviews';
import { StoreLocationHours } from './components/StoreLocationHours';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InquiryModal } from './components/InquiryModal';

export function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'mr'
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-zinc-200 selection:text-zinc-950 antialiased">
      {/* Client Pitch Presentation Bar */}
      <PitchBanner lang={lang} />

      {/* Main Navbar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenInquiry={() => setIsInquiryOpen(true)} 
      />

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero 
          lang={lang} 
          onOpenInquiry={() => setIsInquiryOpen(true)} 
        />

        {/* Live Pune Silver Rate & Transparent Estimator */}
        <LiveRateCalculator lang={lang} />

        {/* Pure Silver Showcase Catalog */}
        <ProductCatalog 
          lang={lang} 
          onOpenInquiry={() => setIsInquiryOpen(true)} 
        />

        {/* Bespoke Silversmithing & Temple Artistry */}
        <CustomSilversmithing 
          lang={lang} 
          onOpenInquiry={() => setIsInquiryOpen(true)} 
        />

        {/* Hallmarking Purity & Silver Care Guide */}
        <TrustHallmark lang={lang} />

        {/* Google Reviews & Reputation Booster */}
        <CustomerReviews lang={lang} />

        {/* Showroom Location, Map & Timings */}
        <StoreLocationHours lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating 1-Click WhatsApp Button */}
      <FloatingWhatsApp lang={lang} />

      {/* Quote / Custom Consultation Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;

