import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'What We Do',   href: '#what-we-do'    },
  { label: 'Who We Are',   href: '#who-we-are'    },
  { label: 'Our Clients',  href: '#clients'       },
  { label: 'Services',     href: '#what-we-offer' },
  { label: 'Testimonials', href: '#testimonials'  },
  { label: 'Contact',      href: '#contact'       },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background:     scrolled ? 'rgba(10, 22, 40, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)'              : 'none',
        borderBottom:   scrolled ? '1px solid rgba(201, 168, 76, 0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10 flex items-center justify-between h-20">

        {/* ── Logo ── */}
        <a href="#" className="flex items-baseline gap-1 shrink-0">
          <span style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            color: '#C9A84C', fontWeight: 600,
            fontSize: '1.4rem', letterSpacing: '0.18em',
          }}>
            REACH
          </span>
          <span style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#F8F4EF', fontWeight: 300,
            fontSize: '1rem', letterSpacing: '0.06em',
            opacity: 0.85, marginLeft: '6px',
          }}>
            Hospitality
          </span>
        </a>

        {/* ── Desktop nav — visible from 1280px ── */}
        <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors duration-300"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(248, 244, 239, 0.7)',
              }}
              onMouseEnter={e => e.target.style.color = '#C9A84C'}
              onMouseLeave={e => e.target.style.color = 'rgba(248, 244, 239, 0.7)'}
            >
              {link.label}
            </a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(201, 168, 76, 0.1)' }}
            whileTap={{ scale: 0.97 }}
            className="whitespace-nowrap transition-all duration-300"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              border: '1px solid #C9A84C',
              padding: '8px 20px',
              marginLeft: '4px',
            }}
          >
            Partner With Us
          </motion.a>
        </div>

        {/* ── Hamburger — visible below 1280px ── */}
        <button
          className="xl:hidden flex flex-col justify-center gap-1.5 p-2 ml-4"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: '#C9A84C',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translateY(8px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translateY(-8px)'
                  : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="xl:hidden flex flex-col px-6 pb-6 pt-2 gap-1"
          style={{ background: 'rgba(6, 14, 26, 0.98)', borderTop: '1px solid rgba(201, 168, 76, 0.12)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b text-xs tracking-widest uppercase"
              style={{
                color: 'rgba(248, 244, 239, 0.7)',
                borderColor: 'rgba(201, 168, 76, 0.08)',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 py-3 text-xs tracking-widest uppercase text-center border"
            style={{
              color: '#C9A84C',
              borderColor: '#C9A84C',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Partner With Us
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
