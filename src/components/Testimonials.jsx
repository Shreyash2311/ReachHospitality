import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const testimonials = [
  {
    quote: 'He engaged with his team and was hands-on involved in every department… We need more David Kingston\'s in our hospitality world.',
    name: 'Allison Knuebuhl',
    title: 'Owner',
  },
  {
    quote: 'David is knowledgeable, honest, hard-working, and committed. A true and valued hospitality professional.',
    name: 'Brian McCartin',
    title: 'President & CEO',
  },
  {
    quote: 'David is strategic minded and builds psychologically safe work climates for collaborative teamwork.',
    name: 'Stephan Earnhart',
    title: 'Managing Director',
  },
  {
    quote: 'His attention to operating excellence and shareholder return has created a business professional that will impact your investment from day one!',
    name: 'Todd Cooley',
    title: 'Regional Manager',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 lg:py-36" style={{ backgroundColor: '#0A1628' }}>
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
            Client Voices
          </p>
          <h2
            className="text-4xl lg:text-5xl font-medium"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F8F4EF' }}
          >
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="flex flex-col p-8 transition-all duration-300"
              style={{
                backgroundColor: '#F8F4EF',
                borderLeft: '3px solid #C9A84C',
              }}
            >
              {/* Quote mark */}
              <div
                className="text-5xl font-medium leading-none mb-4 select-none"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: 'rgba(201, 168, 76, 0.35)' }}
              >
                "
              </div>
              <p
                className="text-base leading-relaxed flex-1 mb-6 italic"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#2A3A4A', fontStyle: 'italic' }}
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px" style={{ backgroundColor: '#C9A84C' }} />
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#0A1628' }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs font-light tracking-wider"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#8A9BB0' }}
                  >
                    {t.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
