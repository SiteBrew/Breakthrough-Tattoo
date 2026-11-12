import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const ELFSIGHT_WIDGET_ID = "a46b837f-3483-4ebb-b124-98e44b633718"

function InstagramIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

// Live Elfsight feed (active after client setup)
function ElfsightFeed() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ELFSIGHT_WIDGET_ID) return
    if (!document.getElementById('elfsight-platform-script')) {
      const script = document.createElement('script')
      script.id = 'elfsight-platform-script'
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      document.body.appendChild(script)
    } else if (window.eapps) {
      window.eapps.AppsManager.reload()
    }
  }, [])

  return (
    <div ref={ref} className={`elfsight-app-${ELFSIGHT_WIDGET_ID} w-full`} />
  )
}

// Setup guide shown before the widget ID is configured
function SetupGuide() {
  const steps = [
    {
      num: '1',
      title: 'Create a free Elfsight account',
      detail: 'Go to elfsight.com and sign up — the free plan shows up to 200 post views/month, plenty to get started.',
      link: 'https://elfsight.com',
      linkLabel: 'Go to Elfsight →',
    },
    {
      num: '2',
      title: 'Create an Instagram Feed widget',
      detail: 'Click "Create Widget" → choose "Instagram Feed" → connect the @breakthroughtattoo_charleston account → choose a grid layout.',
      link: null,
    },
    {
      num: '3',
      title: 'Copy your Widget ID',
      detail: 'After saving, click "Add to website" → copy the script snippet. Your Widget ID looks like: elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      link: null,
    },
    {
      num: '4',
      title: 'Paste the ID into Gallery.jsx',
      detail: 'Open src/pages/Gallery.jsx and set ELFSIGHT_WIDGET_ID to your ID (the part after "elfsight-app-"). Photos will appear instantly.',
      link: null,
      code: 'const ELFSIGHT_WIDGET_ID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"',
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero message */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 rounded-full border-2 border-brand-gold/40 flex items-center justify-center mx-auto mb-6 text-brand-gold">
          <InstagramIcon size={36} />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Connect Your <span className="gold-text">Instagram Feed</span>
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
          Instagram disabled public photo embeds in 2023. To display real photos here,
          the studio needs to connect their Instagram account through{' '}
          <a href="https://elfsight.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
            Elfsight
          </a>{' '}
          — a free tool that shows a live photo grid from any public Instagram profile.
          Setup takes about 5 minutes.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.num} className="card-dark p-6 flex gap-5">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center shrink-0 mt-0.5">
              <span className="font-accent text-brand-gold font-bold text-sm">{step.num}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-lg font-semibold text-white mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{step.detail}</p>
              {step.code && (
                <code className="block bg-black border border-brand-border text-brand-gold text-xs px-4 py-3 font-mono leading-relaxed break-all">
                  {step.code}
                </code>
              )}
              {step.link && (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold text-xs font-semibold tracking-widest uppercase hover:text-brand-gold-light transition-colors"
                >
                  {step.linkLabel}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Alternative note */}
      <div className="mt-8 p-6 border border-brand-gold/20 bg-brand-gold/5">
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-brand-gold font-semibold">Alternative — upload photos directly:</span>{' '}
          If you'd prefer to skip Elfsight, the client can save photos from their Instagram,
          drop the files into <code className="text-brand-gold bg-black px-1.5 py-0.5 text-xs">/public/gallery/</code>,
          and we can wire the gallery to display them as a local image grid — no third-party service needed.
        </p>
      </div>
    </div>
  )
}

export default function Gallery() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-6')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SEOHead />

      {/* ── HEADER ── */}
      <section className="pt-40 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-label">Portfolio</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Our <span className="gold-text">Work</span>
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Real tattoos, real artists.{' '}
            <a
              href="https://www.instagram.com/breakthroughtattoo_charleston/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-gold-light transition-colors"
            >
              @breakthroughtattoo_charleston
            </a>
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <a
              href="https://www.instagram.com/breakthroughtattoo_charleston/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs flex items-center gap-2"
            >
              <InstagramIcon size={14} />
              Follow on Instagram
            </a>
            <Link to="/book" className="btn-primary text-xs">Book Now</Link>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM FEED or SETUP GUIDE ── */}
      <section id="instagram-feed" className="py-16 bg-brand-black" aria-label="Instagram photo feed">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {ELFSIGHT_WIDGET_ID ? (
            <>
              {/* Live feed header */}
              <div className="text-center mb-10 reveal opacity-0 translate-y-6 transition-all duration-700">
                <span className="section-label">@breakthroughtattoo_charleston</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                  Fresh Ink, <span className="gold-text">Every Day</span>
                </h2>
                <div className="w-12 h-px bg-brand-gold mx-auto mt-5" />
              </div>
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200">
                <ElfsightFeed />
              </div>
              <div className="text-center mt-10 reveal opacity-0 translate-y-6 transition-all duration-700">
                <a
                  href="https://www.instagram.com/breakthroughtattoo_charleston/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View All on Instagram
                </a>
              </div>
            </>
          ) : (
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <SetupGuide />
            </div>
          )}
        </div>
      </section>

      {/* ── ARTIST INSTAGRAM LINKS ── */}
      <section className="py-16 bg-brand-dark border-y border-brand-border" aria-label="Follow our artists on Instagram">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="section-label">Follow the Artists</span>
            <h2 className="font-heading text-3xl font-bold text-white">
              Each Artist on <span className="gold-text">Instagram</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Tré Smith',       handle: 'arsonist_saga',      initials: 'TS', specialty: 'Tattoo Artist' },
              { name: 'Joshua Crosby',  handle: 'psychicselfdefense', initials: 'JC', specialty: 'Tattoo Artist' },
              { name: 'Tony Gacci',     handle: 'tonygacci',          initials: 'TG', specialty: 'Tattoo Artist' },
              { name: 'Zack Walkama',   handle: 'znwtattoos',         initials: 'ZW', specialty: 'Tattoo Artist' },
              { name: 'Chaz Protatz',   handle: 'protatz',            initials: 'CP', specialty: 'Tattoo Artist' },
              { name: 'Ripley Bangcuyo',handle: 'grimmevil_',         initials: 'RB', specialty: 'Tattoo Artist' },
              { name: 'Nate Moore',     handle: 'droopedeyes',        initials: 'NM', specialty: 'Tattoo Artist' },
            ].map((artist, i) => (
              <a
                key={artist.name}
                href={`https://www.instagram.com/${artist.handle}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark p-4 text-center group reveal opacity-0 translate-y-6 transition-all duration-700 block"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p className="text-white text-sm font-semibold font-heading leading-tight group-hover:text-brand-gold transition-colors duration-300">
                  {artist.name}
                </p>
                <p className="text-brand-gold text-xs mt-1 font-accent tracking-wide">{artist.specialty}</p>
                <p className="text-gray-600 text-xs mt-2">@{artist.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-3xl mx-auto px-6 text-center reveal opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Inspired? Let's Create Yours.
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            See something you love? Book a consultation and our artists will design
            something completely custom — just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-primary">Book an Appointment</Link>
            <Link to="/artists" className="btn-outline">Meet the Artists</Link>
          </div>
        </div>
      </section>
    </>
  )
}
