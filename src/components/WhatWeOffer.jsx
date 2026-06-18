import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const pillars = [
  {
    tag: 'People',
    title: 'Team Excellence',
    items: ['Leadership Coaching', 'Team Development & Training', 'Succession Planning'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    tag: 'Product',
    title: 'Property Optimization',
    items: ['Management Company Accountability', 'Brand Selection & Optimization', 'Capital Plan & Project Management'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    tag: 'Profit',
    title: 'Financial Performance',
    items: ['Budget & Forecast Analysis', 'Financial Control Implementation', 'Procurement Programming'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
];

export default function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="py-28 lg:py-36" style={{ backgroundColor: '#F8F4EF' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif' }}>
            Services
          </p>
          <h2
            className="text-4xl lg:text-5xl font-medium"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#0A1628' }}
          >
            What We Offer
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.tag}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(10, 22, 40, 0.25)' }}
              className="flex flex-col p-8 transition-all duration-400 cursor-default"
              style={{
                backgroundColor: '#0A1628',
                borderTop: '2px solid #C9A84C',
              }}
            >
              <div className="mb-6" style={{ color: '#C9A84C' }}>{pillar.icon}</div>

              <span
                className="text-xs tracking-[0.3em] uppercase mb-2 font-light"
                style={{ color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {pillar.tag}
              </span>

              <h3
                className="text-xl font-medium mb-6"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F8F4EF' }}
              >
                {pillar.title}
              </h3>

              <ul className="flex flex-col gap-3 mt-auto">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-light leading-relaxed"
                    style={{ color: 'rgba(248, 244, 239, 0.65)', fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    <span className="mt-2 w-4 h-px flex-shrink-0" style={{ backgroundColor: '#C9A84C' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
