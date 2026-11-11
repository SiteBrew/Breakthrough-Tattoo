import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { useEffect } from 'react'

const residentArtists = [
  {
    name: 'Tré Smith',
    specialty: 'Tattoo Artist',
    instagram: '@arsonist_saga',
    bio: `Tré Smith is one of Charleston's most sought-after tattoo artists, known for bold compositions and meticulous execution. His portfolio spans a wide range of styles, bringing creativity and technical mastery to every piece he creates.`,
    styles: ['Neo-Traditional', 'Color Work', 'Illustrative', 'Custom Design', 'Japanese Style'],
    schedule: 'Mon · Wed · Fri · Sat · Sun',
  },
  {
    name: 'Joshua Crosby',
    specialty: 'Tattoo Artist',
    instagram: '@psychicselfdefense',
    bio: `Joshua Crosby brings a unique artistic perspective to his tattoo work, blending dark imagery with fine technical skill. His distinct style sets him apart as one of the studio's most sought-after artists.`,
    styles: ['Dark Art', 'Blackwork', 'Illustrative', 'Custom Design', 'Japanese Style'],
    schedule: 'Mon · Thu · Fri · Sat',
  },
  {
    name: 'Zack Walkama',
    specialty: 'Tattoo Artist',
    instagram: '@znwtattoos',
    bio: `Zack Walkama delivers clean, precise tattoo work with a commitment to lasting quality. His attention to detail and adaptable style make him a go-to artist for a wide range of custom projects.`,
    styles: ['Custom Design', 'Fine Line', 'Black & Grey', 'Traditional', 'Japanese Style'],
    schedule: 'Wed · Thu · Fri · Sat · Sun',
  },
  {
    name: 'Chaz Protatz',
    specialty: 'Tattoo Artist',
    instagram: '@protatz',
    bio: `Chaz Protatz is known for his bold, confident line work and strong artistic vision. Whether working on large-scale pieces or intricate custom designs, Chaz brings energy and precision to every session.`,
    styles: ['Bold Linework', 'Traditional', 'Custom Design', 'Illustrative', 'Japanese Style'],
    schedule: 'Contact for availability',
  },
  {
    name: 'Ripley Bangcuyo',
    specialty: 'Tattoo Artist',
    instagram: '@grimmevil_',
    bio: `Ripley Bangcuyo brings a dark, imaginative edge to their tattoo work. Specializing in macabre and illustrative styles, Ripley's pieces are rich with atmosphere, texture, and artistic depth.`,
    styles: ['Dark Art', 'Horror', 'Illustrative', 'Custom Design', 'Japanese Style'],
    schedule: 'Mon · Tue · Thu · Sat · Alt. Sundays',
  },
  {
    name: 'Nate Moore',
    specialty: 'Tattoo Artist',
    instagram: '@droopedeyes',
    bio: `Nate Moore is a talented artist with a laid-back approach and a sharp eye for detail. His work spans a variety of styles, and his ability to connect with clients ensures every piece feels personal and intentional.`,
    styles: ['Custom Design', 'Black & Grey', 'Illustrative', 'Traditional', 'Japanese Style'],
    schedule: 'Tue · Wed · Fri · Sat · Alt. Sundays',
  },
]

const guestArtists = [
  {
    name: 'Tony Gacci',
    specialty: 'Guest Artist',
    instagram: '@tonygacci',
    bio: `Tony Gacci is a versatile and skilled tattoo artist with a strong eye for composition and detail. Catch him at Breakthrough Tattoo before he relocates to Greenville this summer — book directly through his website.`,
    styles: ['Custom Design', 'Traditional', 'Black & Grey', 'Color Work', 'Japanese Style'],
    note: 'Relocating to Greenville · July 2026',
    website: 'https://www.tonygacci.com',
  },
]

export default function Artists() {
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
      <SEOHead
        title="Our Tattoo Artists"
        description="Meet the talented artists at Breakthrough Tattoo in North Charleston, SC. Specializing in custom, traditional, realism, fine line, neo-traditional, and cover-up tattoos."
        canonical="https://www.breakthroughcharleston.com/artists"
      />

      {/* Page Header */}
      <section className="pt-40 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[100px]" />
        </div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-label">The Team</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Our <span className="gold-text">Artists</span>
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collective of world-class tattoo artists, each with a unique style and specialty.
            Together, we cover every vision — from classic American traditional to hyper-realistic portraiture.
          </p>
        </div>
      </section>

      {/* Resident Artists Grid */}
      <section className="py-20 bg-brand-black" aria-label="Resident artist profiles">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
            {residentArtists.map((artist, i) => (
              <article
                key={artist.name}
                className="card-dark overflow-hidden group reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex flex-col">
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="font-heading text-2xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
                        {artist.name}
                      </h2>
                      <span className="text-gray-600 text-xs shrink-0 pt-1">{artist.instagram}</span>
                    </div>
                    <span className="section-label" style={{ fontSize: '0.6rem', marginBottom: '0.75rem' }}>
                      {artist.specialty}
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                      {artist.bio}
                    </p>

                    {/* Styles */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {artist.styles.map((style) => (
                        <span key={style} className="text-xs px-2.5 py-1 border border-brand-border text-gray-400 font-accent tracking-wider">
                          {style}
                        </span>
                      ))}
                    </div>

                    {/* Schedule + Book */}
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                        <span className="text-gray-400 text-xs">{artist.schedule}</span>
                      </div>
                      <Link to="/book" className="text-brand-gold text-xs font-semibold tracking-widest uppercase hover:text-brand-gold-light transition-colors">
                        Book with {artist.name.split(' ')[0]} →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Artists */}
      <section className="py-16 bg-brand-dark border-y border-brand-border" aria-label="Guest artists">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="section-label">Guest Artists</span>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Currently Visiting
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Breakthrough Tattoo regularly hosts talented guest artists. Follow us on Instagram to stay updated on upcoming appearances and limited booking windows.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {guestArtists.map((artist, i) => (
              <article
                key={artist.name}
                className="card-dark overflow-hidden group reveal opacity-0 translate-y-8 transition-all duration-700 border border-brand-gold/20"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex flex-col">
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <h2 className="font-heading text-2xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
                          {artist.name}
                        </h2>
                        <span className="text-xs px-2 py-0.5 border border-brand-gold/40 text-brand-gold font-accent tracking-wider">
                          Guest
                        </span>
                      </div>
                      <span className="text-gray-600 text-xs shrink-0 pt-1">{artist.instagram}</span>
                    </div>
                    {artist.note && (
                      <p className="text-brand-gold/70 text-xs font-accent tracking-wider mb-3">⚑ {artist.note}</p>
                    )}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {artist.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {artist.styles.map((style) => (
                        <span key={style} className="text-xs px-2.5 py-1 border border-brand-border text-gray-400 font-accent tracking-wider">
                          {style}
                        </span>
                      ))}
                    </div>
                    {artist.website && (
                      <a
                        href={artist.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-gold text-xs font-semibold tracking-widest uppercase hover:text-brand-gold-light transition-colors"
                      >
                        Book via Website →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center reveal opacity-0 translate-y-8 transition-all duration-700">
            <a
              href="https://www.instagram.com/breakthroughtattoo_charleston/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Follow on Instagram for Guest Updates
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-3xl mx-auto px-6 text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Found Your Artist?
          </h2>
          <p className="text-gray-400 mb-8">Book a consultation and start designing your next masterpiece.</p>
          <Link to="/book" className="btn-primary">Book an Appointment</Link>
        </div>
      </section>
    </>
  )
}
