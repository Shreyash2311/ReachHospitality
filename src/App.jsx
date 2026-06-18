import { AnimatePresence } from 'framer-motion';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';
import WhatWeOffer from './components/WhatWeOffer';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <AnimatePresence>
      <div style={{ backgroundColor: '#0A1628', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <WhatWeDo />
        <WhoWeAre />
        <WhatWeOffer />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </AnimatePresence>
  );
}
