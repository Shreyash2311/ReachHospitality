import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const navLinks = [
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'What We Offer', href: '#what-we-offer' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
        background: scrolled
          ? 'rgba(10, 22, 40, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1 group">
          <span
            className="text-2xl tracking-widest"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#C9A84C', fontWeight: 600 }}
          >
            REACH
          </span>
          <span
            className="text-lg tracking-wider ml-1"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#F8F4EF', fontWeight: 300, opacity: 0.85 }}
          >
            Hospitality
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-light tracking-widest uppercase transition-colors duration-300"
              style={{ color: 'rgba(248, 244, 239, 0.75)', fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.12em' }}
              onMouseEnter={e => e.target.style.color = '#C9A84C'}
              onMouseLeave={e => e.target.style.color = 'rgba(248, 244, 239, 0.75)'}
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(201, 168, 76, 0.12)' }}
            className="text-sm tracking-widest uppercase px-6 py-2.5 border transition-all duration-300"
            style={{
              borderColor: '#C9A84C',
              color: '#C9A84C',
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '0.12em',
              fontWeight: 400,
            }}
          >
            Partner With Us
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-px bg-gold-DEFAULT transition-all duration-300" style={{ backgroundColor: '#C9A84C', transform: mobileOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <span className="block w-6 h-px bg-gold-DEFAULT transition-all duration-300" style={{ backgroundColor: '#C9A84C', opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-6 h-px bg-gold-DEFAULT transition-all duration-300" style={{ backgroundColor: '#C9A84C', transform: mobileOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(10, 22, 40, 0.97)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm tracking-widest uppercase py-2 border-b"
              style={{ color: 'rgba(248, 244, 239, 0.75)', borderColor: 'rgba(201, 168, 76, 0.1)', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-sm tracking-widest uppercase px-6 py-3 border text-center mt-2"
            style={{ borderColor: '#C9A84C', color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Partner With Us
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
