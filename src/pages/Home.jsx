import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { useEffect, useRef } from 'react'

const tattooStyles = [
  {
    icon: '✦',
    title: 'Custom Design',
    description: 'One-of-a-kind artwork crafted to tell your unique story. Every tattoo begins with a conversation.',
  },
  {
    icon: '◈',
    title: 'Traditional',
    description: 'Bold lines, vibrant colors, and timeless imagery rooted in the foundations of tattooing.',
  },
  {
    icon: '◎',
    title: 'Realism',
    description: 'Hyper-detailed portraits and photo-realistic pieces that push the boundaries of skin as canvas.',
  },
  {
    icon: '◇',
    title: 'Fine Line',
    description: 'Delicate, precise work with a minimalist aesthetic. Elegant and enduring.',
  },
  {
    icon: '⬡',
    title: 'Neo-Traditional',
    description: 'Classic motifs reimagined with contemporary flair — vivid color meets modern technique.',
  },
  {
    icon: '◉',
    title: 'Cover-Ups',
    description: 'Expert transformations that breathe new life into old or unwanted tattoos.',
  },
]

const artists = [
  {
    name: 'Tré Smith',
    specialty: 'Tattoo Artist',
    bio: 'Known for bold compositions and meticulous execution, Tré brings creativity and technical mastery to every piece.',
    color: 'from-amber-900/30 to-transparent',
  },
  {
    name: 'Joshua Crosby',
    specialty: 'Tattoo Artist',
    bio: 'Joshua brings a unique artistic perspective, blending dark imagery with fine technical skill and a distinct personal style.',
    color: 'from-stone-800/50 to-transparent',
  },
  {
    name: 'Tony Gacci',
    specialty: 'Tattoo Artist',
    bio: 'A versatile artist with a strong eye for composition, Tony is dedicated to bringing every client vision to life.',
    color: 'from-zinc-800/50 to-transparent',
  },
  {
    name: 'Zack Walkama',
    specialty: 'Tattoo Artist',
    bio: 'Clean, precise work with a commitment to lasting quality. Zack adapts effortlessly to any style or custom project.',
    color: 'from-gray-800/50 to-transparent',
  },
]

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '20K+', label: 'Tattoos Completed' },
  { value: '8+', label: 'Resident Artists' },
  { value: '5★', label: 'Average Rating' },
]

const testimonials = [
  {
    text: "Best tattoo shop in the Charleston area, hands down. The artists here are incredibly talented and the studio is immaculate. My piece came out better than I ever imagined.",
    author: "Sarah M.",
    location: "Charleston, SC",
    rating: 5,
  },
  {
    text: "I drove 3 hours to get tattooed at Breakthrough and I'd do it again in a heartbeat. Professional, clean, and the level of artistry is unmatched.",
    author: "Derek T.",
    location: "Columbia, SC",
    rating: 5,
  },
  {
    text: "Tré covered up an old tattoo I'd been embarrassed by for years. The new piece is stunning. He completely transformed it. I can't stop showing it off.",
    author: "Michelle R.",
    location: "Mount Pleasant, SC",
    rating: 5,
  },
]

export default function Home() {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <SEOHead
        title="Premier Custom Tattoo Studio"
        description="Breakthrough Tattoo is the first and oldest tattoo studio in North Charleston, SC. Expert artists specializing in custom, traditional, realism, and fine line tattoos. Book your consultation today."
        canonical="https://www.breakthroughcharleston.com/"
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-brand-black">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(201,168,76,0.15) 80px),
                repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(201,168,76,0.15) 80px)
              `,
            }}
          />
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-gold/5 blur-[120px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
          {/* Eyebrow */}
          <div className="animate-fade-in-up mb-6">
            <span className="section-label">North Charleston, South Carolina</span>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-12 h-px bg-brand-gold/40" />
              <span className="text-brand-gold/60 text-xs tracking-widest uppercase font-accent">Est. Since 2000s</span>
              <span className="w-12 h-px bg-brand-gold/40" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in-up delay-100">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] text-white mb-4 tracking-tight">
              Where Ink
              <br />
              <span className="gold-text italic">Becomes Art</span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="animate-fade-in-up delay-200 mt-8">
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The first and oldest tattoo studio in North Charleston. World-class artists. Uncompromising standards.
              Every tattoo, a masterpiece.
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center mt-12 w-full sm:w-auto px-4 sm:px-0">
            <Link to="/book" className="btn-primary text-center w-full sm:w-auto">
              Book Your Session
            </Link>
            <Link to="/gallery" className="btn-outline text-center w-full sm:w-auto">
              View Our Work
            </Link>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-in-up delay-400 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold gold-text">{stat.value}</div>
                <div className="text-gray-500 text-xs tracking-widest uppercase mt-1 font-accent">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── LOGO COLLAGE — desktop only ── */}
        <div className="hidden lg:block">
          {/* Oni demon — left edge, tall */}
          <div className="absolute top-20 left-4 w-48 xl:w-64 pointer-events-none select-none animate-fade-in delay-500"
               style={{ opacity: 0.18, transform: 'rotate(-10deg)' }}>
            <img src="/logos/logo-oni.png" alt="" className="w-full h-auto drop-shadow-[0_0_30px_rgba(201,168,76,0.3)]" />
          </div>
          {/* Cat demon — right edge, top */}
          <div className="absolute top-20 right-4 w-40 xl:w-52 pointer-events-none select-none animate-fade-in delay-500"
               style={{ opacity: 0.18, transform: 'rotate(9deg)', animationDelay: '0.6s' }}>
            <img src="/logos/logo-cat.png" alt="" className="w-full h-auto drop-shadow-[0_0_20px_rgba(201,168,76,0.25)]" />
          </div>
          {/* Skull — bottom left */}
          <div className="absolute bottom-28 left-12 w-32 xl:w-40 pointer-events-none select-none animate-fade-in"
               style={{ opacity: 0.15, transform: 'rotate(7deg)', animationDelay: '0.7s' }}>
            <img src="/logos/logo-skull.png" alt="" className="w-full h-auto drop-shadow-[0_0_20px_rgba(201,168,76,0.2)]" />
          </div>
          {/* Main horizontal logo — bottom right */}
          <div className="absolute bottom-20 right-8 w-48 xl:w-60 pointer-events-none select-none animate-fade-in delay-500"
               style={{ opacity: 0.18, transform: 'rotate(-5deg)' }}>
            <img src="/logos/logo-main.png" alt="" className="w-full h-auto drop-shadow-[0_0_25px_rgba(201,168,76,0.3)]" />
          </div>
          {/* B monogram — lower left accent */}
          <div className="absolute bottom-10 left-1/4 w-16 xl:w-20 pointer-events-none select-none animate-fade-in"
               style={{ opacity: 0.12, transform: 'rotate(-8deg)', animationDelay: '0.8s' }}>
            <img src="/logos/logo-b.png" alt="" className="w-full h-auto drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]" />
          </div>
        </div>

      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="bg-brand-gold py-3 mt-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Desktop: single row */}
          <div className="hidden sm:flex items-center justify-center gap-x-4 text-sm flex-nowrap overflow-hidden">
            <p className="font-accent text-black tracking-[0.12em] uppercase font-semibold whitespace-nowrap text-xs">
              North Charleston's First &amp; Oldest Tattoo Studio
            </p>
            <span className="text-black/30">|</span>
            <p className="text-black/70 font-medium whitespace-nowrap text-xs">3025 Ashley Phosphate Rd, Unit B1, N. Charleston</p>
            <span className="text-black/30">|</span>
            <a href="tel:+18437259119" className="text-black font-semibold hover:underline whitespace-nowrap text-xs">(843) 725-9119</a>
            <span className="text-black/30">|</span>
            <Link to="/book" className="bg-black text-brand-gold px-5 py-1 text-xs font-semibold tracking-widest uppercase hover:bg-gray-900 transition-colors whitespace-nowrap flex-shrink-0">
              Book Now
            </Link>
          </div>
          {/* Mobile: stacked */}
          <div className="flex sm:hidden flex-col items-center gap-1 text-center">
            <p className="font-accent text-black tracking-[0.12em] uppercase font-semibold text-xs">
              North Charleston's First &amp; Oldest Tattoo Studio
            </p>
            <div className="flex items-center gap-3">
              <a href="tel:+18437259119" className="text-black font-semibold text-xs">(843) 725-9119</a>
              <span className="text-black/30">|</span>
              <Link to="/book" className="bg-black text-brand-gold px-4 py-1 text-xs font-semibold tracking-widest uppercase">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO / ABOUT ── */}
      <section className="py-24 lg:py-32 bg-brand-dark" aria-label="About Breakthrough Tattoo">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <span className="section-label">About The Studio</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                A Legacy of
                <br />
                <em className="gold-text not-italic">Exceptional Ink</em>
              </h2>
              <div className="w-16 h-px bg-brand-gold mb-8" />
              <p className="text-gray-400 leading-relaxed mb-6 text-base">
                Breakthrough Tattoo is the first and oldest tattoo studio in North Charleston — a cornerstone of
                the city's tattoo culture since the beginning. Our studio is home to an elite collective of resident
                artists, each hand-selected for their technical mastery, creative vision, and unwavering commitment
                to client satisfaction.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10 text-base">
                Whether you're getting your first tattoo or adding to an extensive collection, we approach every
                project with the same dedication: meticulous execution, premium inks, hospital-grade sterilization,
                and artwork that stands the test of time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/artists" className="btn-primary">Meet Our Artists</Link>
                <Link to="/contact" className="btn-outline">Visit The Studio</Link>
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { icon: '◈', title: 'Custom Artwork', desc: 'Every design is created uniquely for you — no flash, no templates.' },
                  { icon: '✦', title: 'Clean & Safe', desc: 'State-licensed, single-use needles, autoclave sterilization.' },
                  { icon: '◎', title: 'Expert Artists', desc: 'Decades of combined experience across all major tattoo styles.' },
                  { icon: '◇', title: 'Free Consult', desc: 'We discuss your vision, placement, and design before any commitment.' },
                ].map((item) => (
                  <div key={item.title} className="card-dark p-6">
                    <span className="text-brand-gold text-xl block mb-3">{item.icon}</span>
                    <h3 className="font-heading text-white text-base font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 lg:py-32 bg-brand-black" aria-label="Tattoo services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="section-label">What We Do</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Styles & <span className="gold-text">Specialties</span>
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tattooStyles.map((style, i) => (
              <div
                key={style.title}
                className="card-dark p-8 group reveal opacity-0 translate-y-8 transition-all duration-700 relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-brand-gold text-2xl block mb-4 relative z-10">{style.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-white mb-3 relative z-10 group-hover:text-brand-gold-light transition-colors duration-300">
                  {style.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{style.description}</p>
                <div className="mt-6 relative z-10">
                  <Link to="/services" className="text-brand-gold text-xs tracking-widest uppercase hover:text-brand-gold-light transition-colors font-semibold">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal opacity-0 translate-y-8 transition-all duration-700">
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTISTS ── */}
      <section className="py-24 lg:py-32 bg-brand-dark" aria-label="Our tattoo artists">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="section-label">The Team</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Meet Our <span className="gold-text">Artists</span>
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
            <p className="text-gray-400 mt-6 max-w-xl mx-auto">
              Each artist at Breakthrough brings a distinct voice and specialty — united by a shared commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist, i) => (
              <div
                key={artist.name}
                className="card-dark group overflow-hidden reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Artist avatar placeholder */}
                <div className={`h-64 bg-gradient-to-b ${artist.color} bg-brand-card flex items-center justify-center relative overflow-hidden`}>
                  <div className="w-20 h-20 rounded-full border border-brand-gold/40 flex items-center justify-center">
                    <span className="font-heading text-3xl font-bold gold-text">
                      {artist.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {/* Decorative lines */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
                    {artist.name}
                  </h3>
                  <span className="section-label mt-1 mb-3" style={{ fontSize: '0.6rem' }}>{artist.specialty}</span>
                  <p className="text-gray-500 text-sm leading-relaxed">{artist.bio}</p>
                  <Link
                    to="/artists"
                    className="mt-5 text-brand-gold text-xs tracking-widest uppercase hover:text-brand-gold-light transition-colors font-semibold block"
                  >
                    View Portfolio →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal opacity-0 translate-y-8 transition-all duration-700">
            <Link to="/artists" className="btn-outline">All Artists</Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 lg:py-32 bg-brand-black" aria-label="How it works">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="section-label">The Process</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              How It <span className="gold-text">Works</span>
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: "Share your idea, reference images, and vision. We'll discuss placement, size, and style." },
              { step: '02', title: 'Custom Design', desc: 'Your artist creates a bespoke design crafted to your exact specifications.' },
              { step: '03', title: 'The Session', desc: 'Sit back in our clean, comfortable studio while your vision comes to life.' },
              { step: '04', title: 'Aftercare', desc: 'We provide complete aftercare instructions to ensure your tattoo heals perfectly.' },
            ].map((item, i) => (
              <div
                key={item.step}
                className="text-center reveal opacity-0 translate-y-8 transition-all duration-700 relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px border-t border-dashed border-brand-border" />
                )}
                <div className="w-16 h-16 rounded-full border border-brand-gold/40 flex items-center justify-center mx-auto mb-6 relative z-10 bg-brand-dark">
                  <span className="font-accent text-brand-gold font-bold">{item.step}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <Link to="/book" className="btn-primary">Start Your Journey</Link>
          </div>
        </div>
      </section>


      {/* ── LOCATION STRIP ── */}
      <section className="py-16 bg-brand-black border-y border-brand-border" aria-label="Studio location">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <span className="section-label">Address</span>
              <address className="not-italic text-white font-heading text-lg">
                3025 Ashley Phosphate Rd, Unit B1<br />
                North Charleston, SC 29418
              </address>
            </div>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <span className="section-label">Hours</span>
              <div className="text-gray-300 space-y-1">
                <p>Mon–Thu: 11am – 7pm</p>
                <p>Fri–Sat: 11am – 9pm</p>
                <p>Sunday: 1pm – 6pm</p>
              </div>
            </div>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <span className="section-label">Contact</span>
              <div className="space-y-2">
                <a href="tel:+18437259119" className="text-white hover:text-brand-gold transition-colors font-heading text-lg block">
                  (843) 725-9119
                </a>
                <a
                  href="https://www.google.com/maps?q=3025+Ashley+Phosphate+Road+North+Charleston+SC+29418"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold text-sm hover:text-brand-gold-light transition-colors underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 lg:py-32 bg-brand-dark relative overflow-hidden" aria-label="Book appointment">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="section-label">Ready to Begin?</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Next Tattoo
            <br />
            <span className="gold-text">Starts Here</span>
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Book a consultation with one of our expert artists and let's bring your vision to life.
            No commitment required — just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-primary">Book Your Appointment</Link>
            <Link to="/contact" className="btn-outline">Ask a Question</Link>
          </div>
          <p className="text-gray-600 text-xs mt-8 tracking-widest uppercase font-accent">
            Walk-ins welcome based on availability
          </p>
        </div>
      </section>
    </>
  )
}
