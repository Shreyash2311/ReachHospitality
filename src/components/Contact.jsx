import { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/mqeovzeo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName:  form.lastName,
          email:     form.email,
          message:   form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 lg:py-36" style={{ backgroundColor: '#060E1A' }}>
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
            Let's Connect
          </p>
          <h2
            className="text-4xl lg:text-5xl font-medium"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F8F4EF' }}
          >
            Ready to Optimize Your REACH?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left — contact info */}
          <motion.div variants={slideUp} className="flex flex-col gap-8">
            <p
              className="text-lg font-light leading-relaxed"
              style={{ color: 'rgba(248, 244, 239, 0.65)', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Whether you're looking to optimize operations, strengthen your team, or maximize your property's returns — we're here to partner with you every step of the way.
            </p>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 flex-shrink-0" style={{ color: '#C9A84C' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-light" style={{ color: 'rgba(248, 244, 239, 0.75)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    P.O. Box 3511<br />Jackson, WY 83001
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex-shrink-0" style={{ color: '#C9A84C' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <a
                  href="mailto:info@reachhospitality.com"
                  className="text-sm font-light transition-colors duration-300"
                  style={{ color: 'rgba(248, 244, 239, 0.75)', fontFamily: 'Inter, system-ui, sans-serif' }}
                  onMouseEnter={e => e.target.style.color = '#C9A84C'}
                  onMouseLeave={e => e.target.style.color = 'rgba(248, 244, 239, 0.75)'}
                >
                  info@reachhospitality.com
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex-shrink-0" style={{ color: '#C9A84C' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </div>
                <div className="flex gap-4 text-sm font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: 'rgba(248, 244, 239, 0.75)' }}
                    onMouseEnter={e => e.target.style.color = '#C9A84C'}
                    onMouseLeave={e => e.target.style.color = 'rgba(248, 244, 239, 0.75)'}
                  >
                    LinkedIn
                  </a>
                  <span style={{ color: 'rgba(248, 244, 239, 0.25)' }}>/</span>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: 'rgba(248, 244, 239, 0.75)' }}
                    onMouseEnter={e => e.target.style.color = '#C9A84C'}
                    onMouseLeave={e => e.target.style.color = 'rgba(248, 244, 239, 0.75)'}
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <motion.a
              href="mailto:info@reachhospitality.com"
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(201, 168, 76, 0.35)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 text-sm tracking-widest uppercase font-medium text-center transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #D4B86A 50%, #A8862E 100%)',
                color: '#0A1628',
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '0.14em',
                maxWidth: '260px',
              }}
            >
              Send Us a Message
            </motion.a>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={slideUp}>
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center"
              >
                <div style={{ color: '#C9A84C' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium" style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#F8F4EF' }}>
                  Message Sent
                </h3>
                <p className="text-sm font-light" style={{ color: 'rgba(248, 244, 239, 0.6)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Thank you — we'll be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest uppercase font-light" style={{ color: 'rgba(248, 244, 239, 0.5)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      First Name <span style={{ color: '#C9A84C' }}>*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      className="px-4 py-3.5 text-sm font-light outline-none transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(248, 244, 239, 0.06)',
                        border: '1px solid rgba(248, 244, 239, 0.12)',
                        color: '#F8F4EF',
                        fontFamily: 'Inter, system-ui, sans-serif',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(201, 168, 76, 0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(248, 244, 239, 0.12)'}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest uppercase font-light" style={{ color: 'rgba(248, 244, 239, 0.5)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Last Name <span style={{ color: '#C9A84C' }}>*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                      className="px-4 py-3.5 text-sm font-light outline-none transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(248, 244, 239, 0.06)',
                        border: '1px solid rgba(248, 244, 239, 0.12)',
                        color: '#F8F4EF',
                        fontFamily: 'Inter, system-ui, sans-serif',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(201, 168, 76, 0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(248, 244, 239, 0.12)'}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase font-light" style={{ color: 'rgba(248, 244, 239, 0.5)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Email Address <span style={{ color: '#C9A84C' }}>*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="px-4 py-3.5 text-sm font-light outline-none transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(248, 244, 239, 0.06)',
                      border: '1px solid rgba(248, 244, 239, 0.12)',
                      color: '#F8F4EF',
                      fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(201, 168, 76, 0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(248, 244, 239, 0.12)'}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase font-light" style={{ color: 'rgba(248, 244, 239, 0.5)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Message <span style={{ color: '#C9A84C' }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="px-4 py-3.5 text-sm font-light outline-none transition-all duration-300 resize-none"
                    style={{
                      backgroundColor: 'rgba(248, 244, 239, 0.06)',
                      border: '1px solid rgba(248, 244, 239, 0.12)',
                      color: '#F8F4EF',
                      fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(201, 168, 76, 0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(248, 244, 239, 0.12)'}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs" style={{ color: '#E57373', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Something went wrong — please try again or email us directly at info@reachhospitality.com
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={status !== 'submitting' ? { scale: 1.02, boxShadow: '0 0 32px rgba(201, 168, 76, 0.35)' } : {}}
                  whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                  className="px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 mt-2 flex items-center justify-center gap-2"
                  style={{
                    background: status === 'submitting'
                      ? 'rgba(201, 168, 76, 0.5)'
                      : 'linear-gradient(135deg, #C9A84C 0%, #D4B86A 50%, #A8862E 100%)',
                    color: '#0A1628',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    letterSpacing: '0.14em',
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 11-6.219-8.56"/>
                      </svg>
                      Sending…
                    </>
                  ) : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
