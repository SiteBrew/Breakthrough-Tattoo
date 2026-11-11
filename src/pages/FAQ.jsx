import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const faqs = [
  {
    category: 'Booking & Appointments',
    questions: [
      {
        q: 'How do I book an appointment?',
        a: 'You can book through our online booking form, give us a call at (843) 725-9119, or stop by the studio in person. We recommend booking online for the quickest response. Walk-ins are also welcome based on artist availability.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'Our resident artists book out anywhere from 3–10 weeks depending on the artist and time of year. We recommend booking as early as possible, especially for larger projects. For last-minute needs, walk-ins and short-notice appointments may be available.',
      },
      {
        q: 'Is a deposit required?',
        a: 'Yes. A non-refundable deposit is required to secure your appointment. The deposit amount varies by project size and is applied to the final cost of your tattoo. Deposits are forfeited if you cancel with less than 48 hours notice or no-show.',
      },
      {
        q: 'Can I reschedule my appointment?',
        a: 'Yes, with at least 48 hours notice. We understand life happens. Your deposit will transfer to the new appointment date. Rescheduling with less than 48 hours may result in forfeiture of the deposit.',
      },
      {
        q: 'Do you accept walk-ins?',
        a: 'Absolutely! Walk-ins are welcome based on artist availability. For the best chance at getting a walk-in tattoo, we recommend stopping by earlier in the day. Smaller pieces are typically better suited for walk-in situations.',
      },
    ],
  },
  {
    category: 'Pricing',
    questions: [
      {
        q: 'How much does a tattoo cost?',
        a: 'Pricing depends on the size, placement, complexity, and which artist you choose. Each artist sets their own rate. We require a minimum charge for all tattoos. The best way to get an accurate quote is to schedule a free consultation.',
      },
      {
        q: 'Do you offer free consultations?',
        a: 'Yes! Consultations are always free and there is no obligation to book. We encourage every client — especially those with larger or more complex projects — to come in for a consultation before committing.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, major credit/debit cards, and digital payments. Cash is always appreciated. Please note that credit card transactions may include a small processing fee.',
      },
    ],
  },
  {
    category: 'Preparing for Your Tattoo',
    questions: [
      {
        q: 'How should I prepare for my appointment?',
        a: 'Eat a full meal beforehand and stay well-hydrated. Get a good night\'s sleep. Wear or bring loose, comfortable clothing that provides easy access to the area being tattooed. Avoid alcohol for 24 hours prior. Come with clean skin — avoid heavy lotions on the day of.',
      },
      {
        q: 'Can I bring a friend?',
        a: 'You\'re welcome to bring one support person. Due to limited space, we ask that additional guests stay in the waiting area. Please no large groups.',
      },
      {
        q: 'What if I\'m nervous about pain?',
        a: 'Pain tolerance varies widely by individual and placement. We\'ll always talk you through what to expect. Our artists are experienced in making clients feel comfortable and will take breaks as needed. If you\'re particularly anxious, let us know — we\'ve got you.',
      },
      {
        q: 'Can I bring reference images?',
        a: 'Please do! Reference images are extremely helpful. Save them to your phone or bring printouts. The more visual references you can provide, the better your artist can understand your vision.',
      },
    ],
  },
  {
    category: 'Tattoo Aftercare',
    questions: [
      {
        q: 'How do I care for my new tattoo?',
        a: 'Your artist will provide complete aftercare instructions after your session. Generally: keep the area clean, apply a thin layer of unscented moisturizer, avoid sun exposure and soaking in water (pools, ocean, baths) for 2–3 weeks, and don\'t pick or scratch the healing skin.',
      },
      {
        q: 'How long does healing take?',
        a: 'Surface healing typically takes 2–4 weeks. Full, deep healing can take 2–6 months. During this time, colors may appear dull before brightening back up. Proper aftercare is critical to the final appearance of your tattoo.',
      },
      {
        q: 'Do you offer free touch-ups?',
        a: 'We offer complimentary touch-ups on work done at our studio within 3–6 months of the original session, provided you\'ve followed aftercare instructions. Touch-ups on work done elsewhere are priced based on the work needed.',
      },
    ],
  },
  {
    category: 'Cover-Ups & Reworks',
    questions: [
      {
        q: 'Can you cover up my old tattoo?',
        a: 'In many cases, yes! Our cover-up specialists are highly experienced at assessing old tattoos and designing effective cover-up solutions. Schedule a free consultation and bring photos of the tattoo you want covered — we\'ll give you an honest assessment of what\'s possible.',
      },
      {
        q: 'Will I need laser removal before a cover-up?',
        a: 'Not always. It depends on the darkness, density, and size of the existing tattoo compared to your desired new design. We\'ll advise you honestly — sometimes a few laser sessions can significantly improve cover-up options and we can refer you to a trusted provider.',
      },
    ],
  },
  {
    category: 'Health & Safety',
    questions: [
      {
        q: 'What safety protocols do you follow?',
        a: 'We maintain the highest standards of cleanliness and safety. We use single-use, pre-sterilized needles, autoclave sterilized equipment, hospital-grade disinfectants, and fresh ink caps for every client. Our studio is state licensed and regularly inspected.',
      },
      {
        q: 'Are there any medical conditions that affect getting a tattoo?',
        a: 'Certain conditions (diabetes, blood thinners, skin conditions, pregnancy, etc.) may require medical clearance before tattooing. Please disclose any relevant medical conditions during your consultation. We take your health seriously.',
      },
      {
        q: 'What is the minimum age requirement?',
        a: 'You must be 18 years of age or older to get tattooed at Breakthrough Tattoo. No exceptions — valid government-issued photo ID required.',
      },
    ],
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState({})

  const toggle = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(cat =>
      cat.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a,
        },
      }))
    ),
  }

  return (
    <>
      <SEOHead
        title="FAQ – Frequently Asked Questions"
        description="Answers to common questions about getting a tattoo at Breakthrough Tattoo in North Charleston, SC — booking, pricing, aftercare, cover-ups, and more."
        canonical="https://www.breakthroughcharleston.com/faq"
      />

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <section className="pt-40 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-label">Got Questions?</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Frequently Asked <span className="gold-text">Questions</span>
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Everything you need to know before your tattoo appointment at Breakthrough.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-brand-black" aria-label="FAQ sections">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          {faqs.map((category, ci) => (
            <div key={category.category} className="reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${ci * 80}ms` }}>
              <h2 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-brand-gold">◈</span>
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((item, qi) => {
                  const key = `${ci}-${qi}`
                  const isOpen = openItems[key]
                  return (
                    <div key={qi} className="card-dark overflow-hidden">
                      <button
                        className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                      >
                        <h3 className={`font-heading text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-brand-gold' : 'text-white group-hover:text-brand-gold'}`}>
                          {item.q}
                        </h3>
                        <span className={`text-brand-gold text-xl shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 border-t border-brand-border pt-4">
                          <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-brand-dark border-y border-brand-border">
        <div className="max-w-3xl mx-auto px-6 text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="section-label">Still Unsure?</span>
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            We're Here to Help
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Can't find the answer you're looking for? Give us a call, stop by the studio,
            or send us a message — we're always happy to chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18437259119" className="btn-primary">(843) 725-9119</a>
            <Link to="/contact" className="btn-outline">Send a Message</Link>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Book?</h2>
          <p className="text-gray-400 mb-6">Schedule your free consultation today.</p>
          <Link to="/book" className="btn-primary">Book an Appointment</Link>
        </div>
      </section>
    </>
  )
}
