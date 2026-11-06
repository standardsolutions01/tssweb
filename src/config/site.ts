/**
 * ============================================================
 *  SITE SETTINGS — the ONE place to change business details
 * ============================================================
 *
 *  Change a value here and it updates on EVERY page
 *  (header, footer, contact page, policies, WhatsApp button,
 *  structured data for Google, etc.).
 *
 *  Rules:
 *   - Keep the quote marks around each value.
 *   - Never put passwords or API keys in this file — the repo is public.
 */

export const SITE = {
  /** Full brand name */
  name: 'The Standard Solutions',
  /** Short brand name */
  shortName: 'TSS',
  tagline: 'Simplifying your finances — one ledger at a time',
  /** Live website address (no trailing slash) */
  url: 'https://thestandardsolutions.com',
  /** Default description used when a page doesn't set its own */
  description:
    'Company formation, bookkeeping and finance support for founders in the UK, US, UAE, Australia and Pakistan — one partner from registration to reporting.',
  locale: 'en_GB',
  /** Headline figures — only use numbers the owner has confirmed */
  clientsServed: '140+',
  yearsExperience: '8+',
};

export const CONTACT = {
  /** Public email — shown on the site and in the policies */
  email: 'thestandardsolutions01@gmail.com',
  /** WhatsApp / phone number as people should SEE it */
  phoneDisplay: '+92 324 344 8929',
  /** Same number for links: digits only, with country code, no "+" or spaces */
  whatsappDigits: '923243448929',
  /** Message pre-filled when someone taps the WhatsApp button */
  whatsappMessage: 'Hello TSS, I would like to discuss your services.',
  /** Public location (the full address is ONLY used in the policies) */
  locationPublic: 'Islamabad, Pakistan',
  city: 'Islamabad',
  countryCode: 'PK',
};

/** Legal details — used ONLY on the Privacy Policy and Terms pages */
export const LEGAL = {
  tradingName: 'The Standard Solutions',
  entityType: 'sole proprietorship',
  proprietor: 'Syed M. Armagham Zia',
  registrationNumber: 'D483246-0',
  fullAddress: '76-B, Street 19, Gulzar e Quaid, Rawalpindi, Pakistan',
  /** Shown as "Effective date" on the policies — change when policies change */
  policiesLastUpdated: '2 November 2026',
};

/**
 * External links. All of these open in a NEW TAB automatically
 * (see src/components/ExternalLink.astro).
 */
export const LINKS = {
  /** Google Calendar booking page — "Book a Strategy Call" buttons */
  booking: 'https://calendar.app.google/c4nvozuR6xpmG2p29',
  /** Google Form — "Send an Enquiry" / "Request a Quote" buttons */
  enquiryForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSfz_0F4EbbelYF1gZ20lDCq_YvOwpeyncLVYcTd2ROJcIjvQA/viewform',
  /** Social profiles — leave empty ('') until they exist; empty ones are hidden */
  linkedinCompany: '',
  facebook: '',
  instagram: '',
};

/** Card payments (Safepay) — switch to true and add the link when ready */
export const PAYMENTS = {
  safepayEnabled: false,
  safepayLink: '',
};

/** Helper: full WhatsApp click-to-chat link */
export const whatsappUrl = `https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`;

/** Markets served — shown on the home page and used for Google structured data */
export const MARKETS = [
  { name: 'United Kingdom', code: 'GB', note: 'Primary market' },
  { name: 'United Arab Emirates', code: 'AE', note: '' },
  { name: 'Australia', code: 'AU', note: 'Bookkeeping & advisory' },
  { name: 'United States', code: 'US', note: '' },
  { name: 'Pakistan', code: 'PK', note: '' },
];

/** Main navigation (header) */
export const NAV = [
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

/** Footer disclaimer — required wording, do not remove */
export const DISCLAIMER =
  'The Standard Solutions provides accounting, bookkeeping and business-formation support services. We are not a law firm and do not provide legal advice.';
