import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const sitePages = [
  {
    section: 'Main Pages',
    links: [
      { label: 'Home', path: '/', desc: 'Welcome to Breakthrough Tattoo — North Charleston\'s first and oldest tattoo studio.' },
      { label: 'Our Artists', path: '/artists', desc: 'Meet our resident tattoo artists and learn about their styles and specialties.' },
      { label: 'Services', path: '/services', desc: 'Explore our full range of tattoo services including custom work, cover-ups, and more.' },
      { label: 'Gallery', path: '/gallery', desc: 'Browse our Instagram portfolio and see the latest work from our artists.' },
    ],
  },
  {
    section: 'Booking & Contact',
    links: [
      { label: 'Book an Appointment', path: '/book', desc: 'Request a tattoo consultation online. We respond within 24–48 hours.' },
      { label: 'Contact Us', path: '/contact', desc: 'Get in touch with our team, find our address, and see our studio hours.' },
    ],
  },
  {
    section: 'Information',
    links: [
      { label: 'FAQ', path: '/faq', desc: 'Answers to common questions about booking, pricing, aftercare, and more.' },
      { label: 'Privacy Policy', path: '/privacy', desc: 'How we collect, use, and protect your personal information.' },
    ],
  },
]

export default function Sitemap() {
  return (
    <>
      <SEOHead
        title="Sitemap"
        description="Full sitemap for Breakthrough Tattoo — North Charleston's premier custom tattoo studio."
        canonical="https://www.breakthroughcharleston.com/sitemap"
      />

      <section className="pt-40 pb-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="section-label">Navigation</span>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
            Site <span className="gold-text">Map</span>
          </h1>
          <div className="w-16 h-px bg-brand-gold mb-6" />
          <p className="text-gray-400">A full directory of every page on the Breakthrough Tattoo website.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          {sitePages.map((group) => (
            <div key={group.section}>
              <h2 className="font-accent text-xs tracking-[0.3em] uppercase text-brand-gold mb-5">{group.section}</h2>
              <div className="space-y-3">
                {group.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 card-dark p-4 group hover:border-brand-gold/40 border border-transparent transition-all duration-300"
                  >
                    <span className="font-heading text-base font-semibold text-white group-hover:text-brand-gold transition-colors duration-300 shrink-0">
                      {link.label}
                    </span>
                    <span className="text-gray-500 text-sm">{link.desc}</span>
                    <span className="text-brand-gold/50 group-hover:text-brand-gold text-sm ml-auto shrink-0 hidden sm:block transition-colors duration-300">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-brand-border">
            <p className="text-gray-600 text-xs">
              Looking for our XML sitemap for search engines?{' '}
              <a href="/sitemap.xml" className="text-gray-500 hover:text-brand-gold transition-colors">
                /sitemap.xml
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
