/*
 * Per-route SEO metadata, consumed by scripts/prerender.mjs at build time.
 *
 * WHY THIS EXISTS
 * SEOHead sets the title and description in a useEffect, which only runs in
 * the browser. Every route therefore served the homepage's title, description
 * and canonical in its raw HTML. Crawlers and social scrapers that do not run
 * JavaScript saw nine identical pages, and the audit's duplicate-title and
 * duplicate-description penalties fired on all of them.
 *
 * Values are copied verbatim from the SEOHead calls in each page component,
 * so what the prerender writes matches what the client sets.
 */

export const SITE = 'https://www.breakthroughcharleston.com';
export const DEFAULT_OG_IMAGE = `${SITE}/og-image.jpg`;

export const routeMeta = {
  '/': {
    title: 'Premier Custom Tattoo Studio | Breakthrough Tattoo \u2013 North Charleston, SC',
    description:
      'Breakthrough Tattoo is the first and oldest tattoo studio in North Charleston, SC. Expert artists specializing in custom, traditional, realism, and fine line tattoos. Book your consultation today.',
  },
  '/artists': {
    title: 'Our Tattoo Artists | Breakthrough Tattoo \u2013 North Charleston, SC',
    description:
      'Meet the talented artists at Breakthrough Tattoo in North Charleston, SC. Specializing in custom, traditional, realism, fine line, neo-traditional, and cover-up tattoos.',
  },
  '/services': {
    title: 'Tattoo Services | Breakthrough Tattoo \u2013 North Charleston, SC',
    description:
      'Explore Breakthrough Tattoo\'s full range of services in North Charleston, SC — custom tattoos, traditional, realism, fine line, neo-traditional, cover-ups, and more.',
  },
  '/gallery': {
    title: 'Tattoo Gallery | Breakthrough Tattoo \u2013 North Charleston, SC',
    description:
      'Browse real tattoo work from Breakthrough Tattoo artists in North Charleston, SC — custom, traditional, realism, fine line, Japanese, and more. Live from our Instagram.',
  },
  '/book': {
    title: 'Book an Appointment | Breakthrough Tattoo \u2013 North Charleston, SC',
    description:
      'Book your tattoo consultation at Breakthrough Tattoo in North Charleston, SC. Request an appointment with our expert artists online.',
  },
  '/contact': {
    title: 'Contact Us | Breakthrough Tattoo \u2013 North Charleston, SC',
    description:
      'Contact Breakthrough Tattoo in North Charleston, SC. Located at 3025 Ashley Phosphate Road. Call (843) 725-9119 or send us a message.',
  },
  '/faq': {
    title: 'FAQ – Frequently Asked Questions | Breakthrough Tattoo \u2013 North Charleston, SC',
    description:
      'Answers to common questions about getting a tattoo at Breakthrough Tattoo in North Charleston, SC — booking, pricing, aftercare, cover-ups, and more.',
  },
  '/privacy': {
    title: 'Privacy Policy | Breakthrough Tattoo \u2013 North Charleston, SC',
    description:
      'Privacy Policy for Breakthrough Tattoo in North Charleston, SC. Learn how we collect, use, and protect your personal information.',
    robots: 'noindex, follow',
  },
  '/sitemap': {
    title: 'Sitemap | Breakthrough Tattoo \u2013 North Charleston, SC',
    description:
      'Full sitemap for Breakthrough Tattoo — North Charleston\'s premier custom tattoo studio.',
    robots: 'noindex, follow',
  },
};
