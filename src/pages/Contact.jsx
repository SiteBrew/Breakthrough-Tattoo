import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mreowedk'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          subject: form.subject || 'General Inquiry',
          message: form.message,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json()
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEOHead />

      {/* Header */}
      <section className="pt-40 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-label">Get in Touch</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Contact <span className="gold-text">Us</span>
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have questions? Ready to visit? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-brand-black" aria-label="Contact information and form">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">

              {/* Address */}
              <div className="card-dark p-8">
                <span className="text-brand-gold text-xl block mb-4">◈</span>
                <h2 className="font-heading text-xl font-bold text-white mb-4">Visit the Studio</h2>
                <address className="not-italic text-gray-400 space-y-1">
                  <p className="text-white font-medium">Breakthrough Tattoo</p>
                  <p>3025 Ashley Phosphate Rd, Unit B1</p>
                  <p>North Charleston, SC 29418</p>
                </address>
                <a
                  href="https://www.google.com/maps?q=3025+Ashley+Phosphate+Road+North+Charleston+SC+29418"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-brand-gold text-xs tracking-widest uppercase hover:text-brand-gold-light transition-colors font-semibold"
                >
                  Get Directions →
                </a>
              </div>

              {/* Phone */}
              <div className="card-dark p-8">
                <span className="text-brand-gold text-xl block mb-4">✦</span>
                <h2 className="font-heading text-xl font-bold text-white mb-4">Call or Text</h2>
                <a href="tel:+18437259119" className="text-gray-300 hover:text-brand-gold transition-colors text-lg">
                  (843) 725-9119
                </a>
                <a href="mailto:breakthroughtattoo.sc@gmail.com" className="text-gray-500 hover:text-brand-gold transition-colors text-sm mt-2 block">
                  breakthroughtattoo.sc@gmail.com
                </a>
              </div>

              {/* Hours */}
              <div className="card-dark p-8">
                <span className="text-brand-gold text-xl block mb-4">◎</span>
                <h2 className="font-heading text-xl font-bold text-white mb-4">Hours</h2>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Monday – Thursday', hours: '11:00 AM – 7:00 PM' },
                    { day: 'Friday – Saturday', hours: '11:00 AM – 9:00 PM' },
                    { day: 'Sunday', hours: '1:00 PM – 6:00 PM' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex flex-wrap justify-between gap-x-4 gap-y-0.5">
                      <span className="text-gray-400">{day}</span>
                      <span className="text-white font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-xs mt-4">Walk-ins welcome based on availability</p>
              </div>

              {/* Social */}
              <div className="card-dark p-8">
                <span className="text-brand-gold text-xl block mb-4">◇</span>
                <h2 className="font-heading text-xl font-bold text-white mb-4">Follow Us</h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/breakthroughtattoo_charleston/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-gold transition-colors text-sm"
                  >
                    <InstagramIcon />
                    @breakthroughtattoo_charleston
                  </a>
                </div>
                <div className="flex gap-4 mt-3">
                  <a
                    href="https://www.facebook.com/breakthroughtattoochs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-gold transition-colors text-sm"
                  >
                    <FacebookIcon />
                    Breakthrough Tattoo
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="card-dark p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center mb-6">
                    <span className="text-brand-gold text-2xl">✓</span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-3">Message Sent!</h2>
                  <p className="text-gray-400 max-w-md">
                    Thanks for reaching out, <strong className="text-white">{form.name}</strong>!
                    We'll get back to you within 24–48 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-gold text-xs tracking-widest uppercase hover:text-brand-gold-light transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="card-dark p-8 md:p-10">
                  <h2 className="font-heading text-2xl font-bold text-white mb-2">Send a Message</h2>
                  <p className="text-gray-500 text-sm mb-8">For booking inquiries, please use our <Link to="/book" className="text-brand-gold hover:underline">booking form</Link> for faster processing.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-accent text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">
                          Your Name <span className="text-brand-gold">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          placeholder="Full name"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block font-accent text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">
                          Email <span className="text-brand-gold">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="your@email.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-accent text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Phone (optional)</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="(843) xxx-xxxx"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="block font-accent text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">
                        Subject <span className="text-brand-gold">*</span>
                      </label>
                      <select
                        required
                        value={form.subject}
                        onChange={(e) => update('subject', e.target.value)}
                        className="form-input"
                      >
                        <option value="">Select a subject</option>
                        {[
                          'General Question',
                          'Tattoo Inquiry',
                          'Cover-Up Inquiry',
                          'Guest Artist Inquiry',
                          'Pricing Question',
                          'Other',
                        ].map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block font-accent text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">
                        Message <span className="text-brand-gold">*</span>
                      </label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        rows={6}
                        placeholder="How can we help you?"
                        className="form-input resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded px-4 py-3">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full text-center disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {submitting ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="py-0 bg-brand-black" aria-label="Studio location map">
        <div className="w-full h-72 bg-brand-card border-y border-brand-border flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-3">3025 Ashley Phosphate Rd, Unit B1, North Charleston, SC 29418</p>
            <a
              href="https://www.google.com/maps?q=3025+Ashley+Phosphate+Road+North+Charleston+SC+29418"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Get Tattooed?
          </h2>
          <p className="text-gray-400 mb-6">Skip the form — book your appointment directly.</p>
          <Link to="/book" className="btn-primary">Book an Appointment</Link>
        </div>
      </section>
    </>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
