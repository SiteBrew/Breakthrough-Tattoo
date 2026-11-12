import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeMeta, SITE } from '../data/routeMeta'

/*
 * Title, description and canonical for the current route.
 *
 * SINGLE SOURCE OF TRUTH
 * This used to compose the title as `${title} | Breakthrough Tattoo – North
 * Charleston, SC`. That 44-character suffix left 16 characters for the page's
 * own words, so four routes shipped titles Google truncates (the homepage ran
 * to 73). It also meant the title existed in two places — here and in
 * routeMeta, which the prerender writes — and the two could drift apart.
 *
 * Both now read routeMeta, keyed by pathname, so the title a crawler reads in
 * the raw HTML is character-for-character the one the client sets on hydration.
 * The props remain for the few places that set a transient title (the booking
 * confirmation), which has no routeMeta entry of its own.
 */
export default function SEOHead({ title, description, canonical, type = 'website' }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/'
    const meta = routeMeta[path]

    /*
     * An explicit `title` prop is a transient, in-page state — the booking
     * confirmation, say — so it wins and gets a short brand suffix. The nine
     * real routes pass no title and take routeMeta's, which is what the
     * prerender already wrote into the HTML, so hydration changes nothing.
     */
    const nextTitle = title ? `${title} | Breakthrough Tattoo` : meta?.title
    if (nextTitle) document.title = nextTitle

    const nextDesc = description ?? meta?.description
    if (nextDesc) {
      const el = document.querySelector('meta[name="description"]')
      if (el) el.setAttribute('content', nextDesc)
    }

    const nextCanonical = canonical ?? (meta ? `${SITE}${path === '/' ? '/' : path}` : null)
    if (nextCanonical) {
      const link = document.querySelector('link[rel="canonical"]')
      if (link) link.setAttribute('href', nextCanonical)
    }
  }, [pathname, title, description, canonical])

  return null
}
