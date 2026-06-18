import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80&fit=crop&auto=format"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          onError={e => { e.target.style.display = 'none'; }}
        />
        {/* Dark overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(6,14,26,0.72) 0%, rgba(10,22,40,0.60) 50%, rgba(6,14,26,0.90) 100%)',
          }}
        />
      </motion.div>

      {/* Gold line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: 'rgba(201, 168, 76, 0.35)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-xs tracking-[0.35em] uppercase mb-6 font-light"
            style={{ color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Jackson, WY &nbsp;·&nbsp; Hotel & Resort Consulting
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F8F4EF' }}
          >
            Elevating Hospitality.
            <br />
            <span style={{ color: '#C9A84C' }}>Maximizing Returns.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'rgba(248, 244, 239, 0.72)', fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            26+ years of strategic partnership across hotels, resorts, and luxury properties.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(201, 168, 76, 0.35)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #D4B86A 50%, #A8862E 100%)',
                color: '#0A1628',
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '0.14em',
              }}
            >
              Partner With Us
            </motion.a>
            <motion.a
              href="#what-we-do"
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(201, 168, 76, 0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-sm tracking-widest uppercase font-light border transition-all duration-300"
              style={{
                borderColor: 'rgba(248, 244, 239, 0.45)',
                color: '#F8F4EF',
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '0.14em',
              }}
            >
              Explore Our Services
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(201, 168, 76, 0.6)', fontFamily: 'Inter, system-ui, sans-serif' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(201, 168, 76, 0.6), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
