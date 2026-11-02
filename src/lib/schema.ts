/**
 * Structured data ("schema markup") helpers.
 * This is invisible to visitors; it helps Google understand the business,
 * services, FAQs and breadcrumbs, and can produce richer search results.
 */
import { SITE, CONTACT, MARKETS } from '../config/site';
import type { Service } from '../data/services/types';

const abs = (path: string) => new URL(path, SITE.url).toString();

export const ORG_ID = `${SITE.url}/#organization`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    slogan: SITE.tagline,
    description: SITE.description,
    url: SITE.url + '/',
    logo: abs('/images/logo-full.png'),
    image: abs('/images/og-image.png'),
    email: CONTACT.email,
    telephone: CONTACT.phoneDisplay.replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      addressLocality: CONTACT.city,
      addressCountry: CONTACT.countryCode,
    },
    areaServed: MARKETS.map((m) => ({ '@type': 'Country', name: m.name })),
    knowsAbout: ['Company formation', 'Bookkeeping', 'Accounting', 'Financial modelling', 'Fractional CFO'],
  };
}

export function serviceSchema(s: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    description: s.seoDescription,
    url: abs(`/${s.slug}/`),
    provider: { '@id': ORG_ID },
    areaServed: s.areaServed.map((code) => ({
      '@type': 'Country',
      name: MARKETS.find((m) => m.code === code)?.name ?? code,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function articleSchema(a: { title: string; description: string; path: string; published: Date; updated?: Date }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.description,
    url: abs(a.path),
    mainEntityOfPage: abs(a.path),
    datePublished: a.published.toISOString(),
    dateModified: (a.updated ?? a.published).toISOString(),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: abs('/images/og-image.png'),
  };
}
