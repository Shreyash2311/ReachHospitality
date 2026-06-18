import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import img1  from '../assets/images/1.jpg';
import img2  from '../assets/images/2.jpg';
import img3  from '../assets/images/3.jpg';
import img4  from '../assets/images/4.jpg';
import img5  from '../assets/images/5.jpg';
import img6  from '../assets/images/6.jpg';
import img7  from '../assets/images/7.jpg';
import img8  from '../assets/images/8.jpg';
import img9  from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg';

const clients = [
  { src: img1,  name: 'Snow King Hotel',                  location: 'Jackson Hole, WY' },
  { src: img2,  name: 'Snake River Lodge & Spa',          location: 'Jackson Hole, WY' },
  { src: img3,  name: 'The Lodge at Whitefish Lake',       location: 'Whitefish, MT'    },
  { src: img4,  name: 'Snake River Roasting Co',          location: 'Jackson Hole, WY' },
  { src: img5,  name: 'The Firebrand',                    location: 'Whitefish, MT'    },
  { src: img6,  name: 'Brasada Ranch',                    location: 'Powell Butte, OR' },
  { src: img7,  name: 'Inn at Arch Rock',                 location: 'Depoe Bay, OR'    },
  { src: img8,  name: 'WSCY',                             location: 'Jackson Hole, WY' },
  { src: img9,  name: "Pinky G's Pizzeria",               location: 'Jackson, WY'      },
  { src: img10, name: 'Hotel Terra',                      location: 'Jackson Hole, WY' },
  { src: img11, name: 'Jackson Hole Central Reservations',location: 'Jackson, WY'      },
];

// Two staggered rows — row 1 gets first 6, row 2 gets last 5 + wrap
const row1 = [...clients.slice(0, 6), ...clients.slice(0, 6)];
const row2 = [...clients.slice(5), ...clients.slice(0, 3), ...clients.slice(5), ...clients.slice(0, 3)];

export default function Clients() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Header */}
      <motion.div
        style={{ y: headlineY }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="text-center mb-14 px-6"
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4 font-light"
          style={{ color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Our Clients
        </p>
        <h2
          className="text-4xl lg:text-5xl font-medium mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F8F4EF' }}
        >
          Properties We've Elevated
        </h2>
        <p
          className="text-base font-light max-w-xl mx-auto"
          style={{ color: 'rgba(248, 244, 239, 0.55)', fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          From boutique mountain inns to luxury destination resorts — a selection of the properties we've partnered with.
        </p>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-3">
        <EdgeFade />
        <MarqueeRow items={row1} direction="left" duration={45} />
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <EdgeFade />
        <MarqueeRow items={row2} direction="right" duration={55} />
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="text-center mt-14 px-6"
      >
        <p
          className="text-sm font-light tracking-wider"
          style={{ color: 'rgba(248, 244, 239, 0.35)', fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          and many more across the United States
        </p>
      </motion.div>
    </section>
  );
}

function EdgeFade() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-0 top-0 h-full z-10"
        style={{
          width: '120px',
          background: 'linear-gradient(to right, #0A1628 20%, transparent 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full z-10"
        style={{
          width: '120px',
          background: 'linear-gradient(to left, #0A1628 20%, transparent 100%)',
        }}
      />
    </>
  );
}

function MarqueeRow({ items, direction, duration }) {
  const xAnim = direction === 'left'
    ? { x: ['0%', '-50%'] }
    : { x: ['-50%', '0%'] };

  return (
    <div className="overflow-hidden">
      <motion.div
        animate={xAnim}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
        className="flex gap-3"
        style={{ width: 'max-content' }}
      >
        {items.map((client, i) => (
          <ClientCard key={`${client.name}-${i}`} client={client} />
        ))}
      </motion.div>
    </div>
  );
}

function ClientCard({ client }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 30 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative flex-shrink-0 group cursor-pointer overflow-hidden"
      style={{
        width: '220px',
        height: '220px',
        backgroundColor: '#F8F4EF',
        border: '1px solid rgba(201, 168, 76, 0.15)',
      }}
    >
      {/* Image — contain so all logos/text stay fully visible */}
      <img
        src={client.src}
        alt={`${client.name} — REACH Hospitality client`}
        loading="lazy"
        className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Hover overlay with name + location */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.4) 60%, transparent 100%)',
        }}
      >
        <p
          className="text-sm font-medium leading-tight"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F8F4EF' }}
        >
          {client.name}
        </p>
        <p
          className="text-xs font-light mt-0.5 tracking-wider"
          style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#C9A84C' }}
        >
          {client.location}
        </p>
      </div>

      {/* Gold bottom border accent — always visible */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: '#C9A84C' }}
      />
    </motion.div>
  );
}
