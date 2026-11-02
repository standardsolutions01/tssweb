/**
 * CLIENT TESTIMONIALS
 * --------------------------------------------------------------
 * Only testimonials with `approved: true` appear on the website.
 * While all are `false`, the testimonials section is hidden.
 *
 * Before switching any to `true`:
 *   1. Replace the [PLACEHOLDER] quote with the client's real words.
 *   2. Get the client's written permission to publish their name,
 *      company name and quote (keep that permission on file).
 * Never invent or edit a quote — see the compliance rules in CLAUDE.md.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
  approved: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  { quote: '[PLACEHOLDER] Client statement to be supplied.', name: '[PLACEHOLDER] Director name', role: 'Director', company: 'IB Innovators Ltd', country: 'United Kingdom', approved: false },
  { quote: '[PLACEHOLDER] Client statement to be supplied.', name: '[PLACEHOLDER] Director name', role: 'Director', company: 'Apps Archs LLC', country: 'United States', approved: false },
  { quote: '[PLACEHOLDER] Client statement to be supplied.', name: '[PLACEHOLDER] Director name', role: 'Director', company: 'Techno Pross LLC', country: 'United Arab Emirates', approved: false },
  { quote: '[PLACEHOLDER] Client statement to be supplied.', name: '[PLACEHOLDER] Director name', role: 'Director', company: 'Boost Social Technologies (Pvt) Ltd', country: 'Pakistan', approved: false },
  { quote: '[PLACEHOLDER] Client statement to be supplied.', name: '[PLACEHOLDER] Director name', role: 'Director', company: '6Hexa (Pvt) Ltd', country: 'Pakistan', approved: false },
];

export const approvedTestimonials = TESTIMONIALS.filter((t) => t.approved);
