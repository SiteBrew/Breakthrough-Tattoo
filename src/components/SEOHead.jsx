import { useEffect } from 'react'

export default function SEOHead({ title, description, canonical, type = 'website' }) {
  useEffect(() => {
    if (title) document.title = `${title} | Breakthrough Tattoo – North Charleston, SC`
    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', description)
    }
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (link) link.setAttribute('href', canonical)
    }
  }, [title, description, canonical])

  return null
}
