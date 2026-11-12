import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mreowedk'

const artists = ['No Preference', 'Tré Smith', 'Joshua Crosby', 'Zack Walkama', 'Chaz Protatz', 'Ripley Bangcuyo', 'Nate Moore']
const tattooStyles = ['Custom Design', 'American Traditional', 'Realism / Portrait', 'Fine Line', 'Neo-Traditional', 'Black & Grey', 'Cover-Up', 'Touch-Up / Rework', 'Other']
const placements = ['Arm / Sleeve', 'Leg / Thigh', 'Back', 'Chest', 'Rib', 'Hand / Finger', 'Neck', 'Foot / Ankle', 'Other']
const sizes = ['Tiny (under 2")', 'Small (2–4")', 'Medium (4–8")', 'Large (8"+)', 'Half Sleeve', 'Full Sleeve', 'Back Piece', 'Other / Not Sure']

export default function Book() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    artist: '',
    style: '',
    placement: '',
    size: '',
    description: '',
    references: '',
    firstTattoo: '',
    heardFrom: '',
  })
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
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone || 'Not provided',
          preferred_artist: form.artist || 'No preference',
          tattoo_style: form.style,
          placement: form.placement,
          size: form.size,
          first_tattoo: form.firstTattoo || 'Not answered',
          heard_from: form.heardFrom || 'Not provided',
          description: form.description,
          references: form.references || 'None provided',
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

  const steps = [
    { num: 1, label: 'Your Info' },
    { num: 2, label: 'Tattoo Details' },
    { num: 3, label: 'Description' },
  ]

  if (submitted) {
    return (
      <>
        <SEOHead title="Appointment Booked" description="Your tattoo consultation request has been received. We'll be in touch shortly." />
        <section className="min-h-screen flex items-center justify-center bg-brand-dark px-6 pt-20">
          <div className="max-w-xl w-full text-center">
            <div className="w-20 h-20 rounded-full border-2 border-brand-gold flex items-center justify-center mx-auto mb-8">
              <span className="text-brand-gold text-3xl">✓</span>
            </div>
            <span className="section-label">Request Received</span>
            <h1 className="font-heading text-4xl font-bold text-white mb-4">
              You're on Your Way!
            </h1>
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <p className="text-gray-400 leading-relaxed mb-4">
              Thanks <strong className="text-white">{form.firstName}</strong>! Your consultation request has been received.
              A member of our team will reach out within <strong className="text-white">24–48 hours</strong> to confirm
              your appointment and discuss the details.
            </p>
            <p className="text-gray-500 text-sm mb-10">
              In the meantime, follow us on Instagram{' '}
              <a
                href="https://www.instagram.com/breakthroughtattoo_charleston/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:underline"
              >
                @breakthroughtattoo_charleston
              </a>{' '}
              for daily portfolio updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">Back to Home</Link>
              <Link to="/gallery" className="btn-outline">Browse Gallery</Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <SEOHead />

      {/* Header */}
      <section className="pt-40 pb-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-label">Get Started</span>
          <h1 className="font-heading text-5xl md:text-6xl font-black text-white mb-6">
            Book Your <span className="gold-text">Session</span>
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-6" />
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Fill out the form below to request a consultation. We'll review your submission
            and reach out within 24–48 hours to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 bg-brand-dark" aria-label="Booking form">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center gap-4">
                <div className={`flex items-center gap-2 cursor-pointer group`} onClick={() => step > s.num && setStep(s.num)}>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                    step === s.num
                      ? 'bg-brand-gold border-brand-gold text-black'
                      : step > s.num
                      ? 'bg-brand-gold/20 border-brand-gold text-brand-gold'
                      : 'border-brand-border text-gray-600'
                  }`}>
                    {step > s.num ? '✓' : s.num}
                  </div>
                  <span className={`text-xs font-semibold tracking-widest uppercase hidden sm:block ${
                    step === s.num ? 'text-white' : step > s.num ? 'text-brand-gold' : 'text-gray-600'
                  }`}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-12 h-px ${step > s.num ? 'bg-brand-gold/40' : 'bg-brand-border'}`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="card-dark p-8 md:p-10">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-white mb-6">Your Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="First Name" required>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                      placeholder="First name"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Last Name" required>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                      placeholder="Last name"
                      className="form-input"
                    />
                  </Field>
                </div>
                <Field label="Email Address" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Phone Number">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="(xxx) xxx-xxxx"
                    className="form-input"
                  />
                </Field>
                <Field label="How did you hear about us?">
                  <select value={form.heardFrom} onChange={(e) => update('heardFrom', e.target.value)} className="form-input">
                    <option value="">Select one</option>
                    {['Instagram', 'Facebook', 'Google Search', 'Friend / Referral', 'Walk-By', 'Yelp', 'Other'].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!form.firstName || !form.lastName || !form.email}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Tattoo Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-white mb-6">Tattoo Details</h2>
                <Field label="Preferred Artist">
                  <select value={form.artist} onChange={(e) => update('artist', e.target.value)} className="form-input">
                    <option value="">Select an artist</option>
                    {artists.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </Field>
                <Field label="Tattoo Style" required>
                  <select required value={form.style} onChange={(e) => update('style', e.target.value)} className="form-input">
                    <option value="">Select a style</option>
                    {tattooStyles.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Placement on Body" required>
                  <select required value={form.placement} onChange={(e) => update('placement', e.target.value)} className="form-input">
                    <option value="">Select placement</option>
                    {placements.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </Field>
                <Field label="Approximate Size" required>
                  <select required value={form.size} onChange={(e) => update('size', e.target.value)} className="form-input">
                    <option value="">Select size</option>
                    {sizes.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Is this your first tattoo?">
                  <div className="flex gap-6 mt-2">
                    {['Yes', 'No'].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="firstTattoo"
                          value={opt}
                          checked={form.firstTattoo === opt}
                          onChange={(e) => update('firstTattoo', e.target.value)}
                          className="accent-brand-gold"
                        />
                        <span className="text-gray-300 text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                </Field>
                <div className="flex justify-between pt-4">
                  <button type="button" onClick={() => setStep(1)} className="btn-outline">← Back</button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!form.style || !form.placement || !form.size}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Description */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-white mb-6">Your Vision</h2>
                <Field label="Describe Your Tattoo Idea" required>
                  <textarea
                    required
                    value={form.description}
                    onChange={(e) => update('description', e.target.value)}
                    rows={6}
                    placeholder="Tell us about your idea — subject matter, colors, mood, any specific elements you want included..."
                    className="form-input resize-none"
                  />
                </Field>
                <Field label="Reference Images or Inspiration">
                  <textarea
                    value={form.references}
                    onChange={(e) => update('references', e.target.value)}
                    rows={3}
                    placeholder="Link to inspiration images (Instagram, Pinterest, Google Images, etc.) or describe your references..."
                    className="form-input resize-none"
                  />
                </Field>

                {/* Summary */}
                <div className="bg-brand-black rounded border border-brand-border p-5 space-y-2">
                  <p className="font-accent text-xs tracking-widest uppercase text-brand-gold mb-3">Summary</p>
                  {[
                    ['Name', `${form.firstName} ${form.lastName}`],
                    ['Email', form.email],
                    ['Artist', form.artist || 'No preference'],
                    ['Style', form.style],
                    ['Placement', form.placement],
                    ['Size', form.size],
                  ].map(([label, val]) => (
                    <div key={label} className="flex flex-wrap justify-between gap-x-4 gap-y-0.5 text-sm">
                      <span className="text-gray-500 shrink-0">{label}</span>
                      <span className="text-gray-300 text-right break-all">{val}</span>
                    </div>
                  ))}
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded px-4 py-3">{error}</p>
                )}
                <div className="flex justify-between pt-4">
                  <button type="button" onClick={() => setStep(2)} className="btn-outline">← Back</button>
                  <button
                    type="submit"
                    disabled={!form.description || submitting}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {submitting ? 'Sending…' : 'Submit Request'}
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* What to expect */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: '◈', title: 'Free Consultation', desc: 'All initial consultations are complimentary — no commitment required.' },
              { icon: '✦', title: '24–48hr Response', desc: 'Our team will reach out promptly to confirm and schedule.' },
              { icon: '◎', title: 'Walk-Ins Welcome', desc: 'Spontaneous? Walk-ins are welcome based on artist availability.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 card-dark">
                <span className="text-brand-gold text-xl block mb-3">{item.icon}</span>
                <h3 className="font-heading text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block font-accent text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">
        {label}{required && <span className="text-brand-gold ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}
