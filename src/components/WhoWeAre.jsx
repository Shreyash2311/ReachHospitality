import { motion } from 'framer-motion';

const stats = [
  { value: '26+', label: 'Years Experience' },
  { value: '100+', label: 'Properties' },
  { value: '4', label: 'Core Pillars' },
  { value: 'ROI', label: 'Measurable Returns' },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: '#C9A84C', fontFamily: 'Inter, system-ui, sans-serif' }}>
              Our Story
            </p>
            <h2
              className="text-4xl lg:text-5xl font-medium leading-tight mb-7"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F8F4EF' }}
            >
              26 Years. Countless Properties. One Focus.
            </h2>
            <p
              className="text-lg leading-relaxed font-light mb-12"
              style={{ color: 'rgba(248, 244, 239, 0.65)', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Our diverse experience spans small coastal inns, boutique hotels, group hotels, and luxury destination resorts. We bring corporate, regional, and property-level expertise to every engagement.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div
                    className="text-3xl font-medium mb-1"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#C9A84C' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase font-light"
                    style={{ color: 'rgba(248, 244, 239, 0.5)', fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80&fit=crop&auto=format"
                alt="Luxury resort exterior — 26 years of hotel and resort consulting experience"
                width="900"
                height="1125"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Gold frame accent */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ border: '1px solid rgba(201, 168, 76, 0.25)' }}
              />
            </div>
            {/* Decorative gold offset border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full pointer-events-none"
              style={{ border: '1px solid rgba(201, 168, 76, 0.12)', zIndex: -1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
