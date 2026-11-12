import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { useEffect } from 'react'

const services = [
  {
    title: 'Custom Tattoos',
    icon: '✦',
    description: 'The cornerstone of everything we do. Every custom tattoo begins with a detailed consultation where we get to know you, your story, and your vision. Your artist then creates an original design built around your ideas, body placement, and aesthetic goals. No two custom tattoos from Breakthrough are ever the same.',
    includes: ['In-depth design consultation', 'Custom artwork creation', 'Placement guidance', 'Sizing & scaling advice', 'Multiple revisions until perfect'],
    priceNote: 'Pricing based on size, complexity, and artist',
  },
  {
    title: 'American Traditional',
    icon: '◈',
    description: 'Bold black outlines, a limited yet powerful color palette, and iconic imagery — American Traditional tattooing is the bedrock of the craft. Our traditional artists honor this heritage while bringing their own mastery to classic motifs: eagles, roses, anchors, daggers, and more.',
    includes: ['Classic flash designs available', 'Bold, long-lasting linework', 'Time-tested color fills', 'Traditional iconography'],
    priceNote: 'Starting at $150 for small pieces',
  },
  {
    title: 'Realism & Portraiture',
    icon: '◎',
    description: "Our realism artists create tattoos that push the boundaries of what's possible on skin. Whether you want a lifelike portrait of a loved one, a hyper-detailed animal, or a stunning landscape, our specialists translate your reference photos into breathtaking permanent artwork with photographic accuracy.",
    includes: ['Portrait consultations', 'Photo reference review', 'Black & grey or full color', 'Touch-up included at 4–6 weeks'],
    priceNote: 'Portraits starting at $400',
  },
  {
    title: 'Fine Line & Minimalist',
    icon: '◇',
    description: 'For those who appreciate restraint and elegance, our fine line artists deliver precision work with single-needle techniques and delicate linework. From tiny botanicals to intricate geometric compositions, fine line tattoos make a powerful statement through subtlety.',
    includes: ['Single-needle & fine needle options', 'Script & lettering', 'Botanical & floral designs', 'Geometric patterns'],
    priceNote: 'Starting at $100 for small fine line pieces',
  },
  {
    title: 'Neo-Traditional',
    icon: '⬡',
    description: "Neo-traditional tattooing takes the foundational elements of classic tattooing — bold lines, strong composition — and infuses them with contemporary color theory, illustrative depth, and modern design sensibility. The result is work that's timeless yet thoroughly current.",
    includes: ['Vivid, modern color palettes', 'Dynamic compositions', 'Illustrative depth & texture', 'Classic subject matter reimagined'],
    priceNote: 'Pricing based on size and complexity',
  },
  {
    title: 'Black & Grey',
    icon: '◉',
    description: 'Black and grey tattooing is its own art form — and our artists have mastered it. From silky smooth gradients to rich, velvety textures, black and grey work at Breakthrough achieves the full tonal range and depth that separates good tattoos from great ones.',
    includes: ['Full tonal range', 'Smooth gradient mastery', 'Single needle to magnum techniques', 'Works beautifully on all skin tones'],
    priceNote: 'Pricing based on size and placement',
  },
  {
    title: 'Cover-Ups',
    icon: '◫',
    description: "Don't live with a tattoo you regret. Our cover-up specialists can transform outdated, faded, or unwanted tattoos into stunning new artwork. The process requires skill, creativity, and experience — all of which our artists have in abundance. Before any cover-up, we offer a free assessment to discuss what's possible.",
    includes: ['Free cover-up assessment', 'Custom redesign consultation', 'Laser fading referrals if needed', 'Multiple session planning'],
    priceNote: 'Free consultation — pricing based on complexity',
  },
  {
    title: 'Touch-Ups & Reworks',
    icon: '◑',
    description: "Existing tattoos can fade, blur, or simply need refreshing over time. Breakthrough offers professional touch-ups for tattoos done in our studio and select rework services for tattoos done elsewhere. We'll assess your existing piece and recommend the best approach for restoration.",
    includes: ['Color refreshing', 'Linework repair', 'Faded tattoo restoration', 'Blur correction'],
    priceNote: 'Touch-ups on Breakthrough work often complimentary',
  },
]

export default function Services() {
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

  return (
    <>
      <SEOHead />

      {/* Header */}
      <section className="pt-40 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-label">What We Offer</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Our <span className="gold-text">Services</span>
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From classic flash to custom masterpieces — we offer every major tattoo style and specialty,
            executed with world-class precision and care.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-brand-black" aria-label="Services offered">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="card-dark p-6 md:p-10 group reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  {/* Left: Icon + Title */}
                  <div>
                    <span className="text-brand-gold text-3xl block mb-4">{service.icon}</span>
                    <h2 className="font-heading text-2xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300 mb-2">
                      {service.title}
                    </h2>
                    <div className="w-8 h-px bg-brand-gold/40 mb-4" />
                    <p className="text-brand-gold text-xs font-accent tracking-widest uppercase">
                      {service.priceNote}
                    </p>
                  </div>

                  {/* Middle: Description */}
                  <div>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Right: Includes + CTA */}
                  <div>
                    <h3 className="font-accent text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">Includes</h3>
                    <ul className="space-y-2 mb-6">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <span className="text-brand-gold mt-0.5 shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link to="/book" className="text-brand-gold text-xs font-semibold tracking-widest uppercase hover:text-brand-gold-light transition-colors">
                      Book Now →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Deposit Info */}
      <section className="py-20 bg-brand-dark border-y border-brand-border" aria-label="Pricing and deposit information">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="section-label">Transparency Matters</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Pricing & <span className="gold-text">Deposits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'How Pricing Works',
                items: [
                  'Hourly rates vary by artist and project complexity',
                  'Large pieces (sleeves, back pieces) may be quoted as a day rate',
                  'Minimum charge applies to all tattoos',
                  'Free consultations — no cost to discuss your idea',
                  'Final quote given after design is complete',
                ],
              },
              {
                title: 'Deposits & Booking',
                items: [
                  'Non-refundable deposit required to secure your appointment',
                  'Deposit goes toward the total cost of your tattoo',
                  'Rescheduling allowed with 48-hour notice',
                  'Deposits forfeited for no-shows or last-minute cancellations',
                  'Walk-ins welcome based on artist availability',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="card-dark p-8 reveal opacity-0 translate-y-8 transition-all duration-700">
                <h3 className="font-heading text-xl font-semibold text-white mb-5">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <span className="text-brand-gold mt-0.5 shrink-0">◈</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-3xl mx-auto px-6 text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Book a free consultation and let's discuss your vision. Our artists are passionate
            about bringing your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-primary">Book a Consultation</Link>
            <Link to="/faq" className="btn-outline">Read Our FAQ</Link>
          </div>
        </div>
      </section>
    </>
  )
}
