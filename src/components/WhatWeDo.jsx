import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M9 8h1m-1 4h1m-1 4h1M14 8h1m-1 4h1m-1 4h1M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14"/>
      </svg>
    ),
    title: 'Proactive Asset Management',
    desc: 'Protecting and growing your investment through vigilant oversight and strategic decisions.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Strategic Capital Planning',
    desc: 'Maximizing ROI through disciplined CapEx allocation and long-range property planning.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
      </svg>
    ),
    title: 'Creative Operational Efficiencies',
    desc: 'Unlocking cost efficiencies while elevating service standards across all departments.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
      </svg>
    ),
    title: 'Sales & Marketing Engagement',
    desc: 'Driving occupancy and revenue through targeted strategies and brand positioning.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-28 lg:py-36" style={{ backgroundColor: '#F8F4EF' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Two-column intro */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20"
        >
          <motion.div variants={fadeUp}>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif' }}>
              Our Approach
            </p>
            <h2
              className="text-4xl lg:text-5xl font-medium leading-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#0A1628' }}
            >
              We Listen First.
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center">
            <p
              className="text-lg leading-relaxed font-light"
              style={{ color: '#3D4F62', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              At REACH, we monitor the ever-changing hospitality world and partner with you to develop strategic action leading to increased service levels, cohesive team culture, and maximized profitability.
            </p>
          </motion.div>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-px mb-20 origin-left"
          style={{ backgroundColor: 'rgba(201, 168, 76, 0.3)' }}
        />

        {/* Four pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-4 p-6 border-t-2 transition-all duration-300"
              style={{ borderTopColor: '#C9A84C' }}
            >
              <div style={{ color: '#C9A84C' }}>{pillar.icon}</div>
              <h3
                className="text-base font-medium leading-snug"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#0A1628' }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed font-light"
                style={{ color: '#5A6B7A', fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
