import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import all client images
import img1  from '../assets/images/Clients-Page-1070x2048.jpg';
import img2  from '../assets/images/Clients-Page-1070x2048 (1).jpg';
import img3  from '../assets/images/Clients-Page-1070x2048 (2).jpg';
import img4  from '../assets/images/Clients-Page-1070x2048 (3).jpg';
import img5  from '../assets/images/Clients-Page-1070x2048 (4).jpg';
import img6  from '../assets/images/Clients-Page-1070x2048 (5).jpg';
import img7  from '../assets/images/Clients-Page-1070x2048 (6).jpg';
import img8  from '../assets/images/Clients-Page-1070x2048 (7).jpg';
import img9  from '../assets/images/Clients-Page-1070x2048 (8).jpg';
import img10 from '../assets/images/Clients-Page-1070x2048 (9).jpg';
import img11 from '../assets/images/Clients-Page-1070x2048 (10).jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

// Duplicate for seamless infinite loop
const track = [...images, ...images];

export default function Clients() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax on the headline
  const headlineY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#F8F4EF' }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="text-center mb-14 px-6"
        style={{ y: headlineY }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4 font-light"
          style={{ color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Portfolio
        </p>
        <h2
          className="text-4xl lg:text-5xl font-medium"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#0A1628' }}
        >
          Properties We've Elevated
        </h2>
        <p
          className="mt-4 text-base font-light max-w-xl mx-auto"
          style={{ color: '#5A6B7A', fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          A selection of the hotels, resorts, and luxury properties we've partnered with across the country.
        </p>
      </motion.div>

      {/* Marquee row 1 — scrolls left */}
      <div className="relative mb-4">
        <MarqueeRow items={track} direction="left" speed={38} />
      </div>

      {/* Marquee row 2 — scrolls right (offset) */}
      <div className="relative">
        <MarqueeRow items={[...track].reverse()} direction="right" speed={44} />
      </div>

      {/* Fade edges */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-24 lg:w-40 z-10"
        style={{
          background: 'linear-gradient(to right, #F8F4EF, transparent)',
          position: 'relative',
          marginTop: '-100%',
          display: 'none',
        }}
      />
    </section>
  );
}

function MarqueeRow({ items, direction, speed }) {
  const animProps =
    direction === 'left'
      ? { x: ['0%', '-50%'] }
      : { x: ['-50%', '0%'] };

  return (
    <div className="overflow-hidden">
      {/* Fade left */}
      <div
        className="pointer-events-none absolute left-0 z-10 h-full w-24 lg:w-40"
        style={{ background: 'linear-gradient(to right, #F8F4EF 10%, transparent 100%)' }}
      />
      {/* Fade right */}
      <div
        className="pointer-events-none absolute right-0 z-10 h-full w-24 lg:w-40"
        style={{ background: 'linear-gradient(to left, #F8F4EF 10%, transparent 100%)' }}
      />

      <motion.div
        animate={animProps}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="flex gap-4"
        style={{ width: 'max-content' }}
      >
        {items.map((src, i) => (
          <ClientCard key={i} src={src} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

function ClientCard({ src, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, zIndex: 20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative flex-shrink-0 overflow-hidden cursor-pointer"
      style={{
        width: '180px',
        height: '300px',
        borderTop: '2px solid rgba(201, 168, 76, 0.4)',
      }}
    >
      <img
        src={src}
        alt={`Client property ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ objectPosition: 'center top' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.0)')}
      />
      {/* Subtle dark overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 60%)', opacity: 1 }}
      />
    </motion.div>
  );
}
