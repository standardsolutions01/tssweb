/**
 * The shape of one service page. Each service has its own file in this
 * folder (e.g. uk-company-formation.ts). To edit the wording on a service
 * page, edit that file — the design is applied automatically by
 * src/layouts/ServiceLayout.astro.
 */
export interface Service {
  /** URL: thestandardsolutions.com/<slug>/  — don't change after launch (breaks Google links) */
  slug: string;
  /** Short name used in menus and cards */
  name: string;
  /** One-line summary used on cards (home page, menus, related services) */
  summary: string;
  /** Google search result title (brand is added automatically) — keep under ~38 characters */
  seoTitle: string;
  /** Google search result description — keep under 155 characters */
  seoDescription: string;
  /** Main page heading — contains the main keyword */
  h1: string;
  /** Paragraph under the main heading */
  intro: string;
  /** Optional compliance / scope notice shown under the intro */
  notice?: string;
  /** true = one-time setup service (shows the 60% / 40% payment terms) */
  isSetupService: boolean;
  whoFor: string[];
  included: { title: string; text: string }[];
  process: { title: string; text: string }[];
  /** Short line shown in the pricing box */
  pricingNote: string;
  faqs: { q: string; a: string }[];
  /** Slugs of related services to link to at the bottom */
  related: string[];
  /** Used for Google structured data */
  serviceType: string;
  areaServed: string[];
}
