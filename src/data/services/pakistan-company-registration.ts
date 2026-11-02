import type { Service } from './types';

const service: Service = {
  slug: 'pakistan-company-registration',
  name: 'Pakistan Company Registration',
  summary: 'SECP company registration, NTN and FBR set-up for local and overseas founders.',
  seoTitle: 'SECP Company Registration in Pakistan',
  seoDescription:
    'SECP company registration in Pakistan: name reservation, incorporation, NTN and FBR registration for SMC, private limited and overseas-owned companies.',
  h1: 'SECP company registration in Pakistan',
  intro:
    'Register your company with the Securities and Exchange Commission of Pakistan (SECP) and get set up with the Federal Board of Revenue (FBR) — handled end to end, with clear updates at every stage.',
  notice:
    'We provide registration and compliance support services. We are not a law firm and do not provide legal advice.',
  isSetupService: true,
  whoFor: [
    'Founders starting a single-member company (SMC) or private limited company',
    'Overseas Pakistanis and foreign investors setting up in Pakistan',
    'Sole proprietors and partnerships moving to a company structure',
    'Startups that need a clean set-up before raising investment',
  ],
  included: [
    { title: 'Structure advice', text: 'Help choosing between a single-member company, private limited company or other structure based on your plans.' },
    { title: 'Name reservation', text: 'Company name availability check and reservation through the SECP online portal.' },
    { title: 'Incorporation filing', text: 'Preparation of incorporation documents and memorandum and articles of association, and filing with SECP.' },
    { title: 'NTN & FBR registration', text: 'National Tax Number registration for the company with FBR and guidance on sales tax registration where relevant.' },
    { title: 'Bank account documents', text: 'A ready pack of the documents banks usually request to open a company account.' },
    { title: 'Compliance calendar', text: 'A simple calendar of annual SECP returns, tax filings and other recurring obligations.' },
  ],
  process: [
    { title: 'Free consultation', text: 'We confirm the structure, directors and shareholders.' },
    { title: 'Proposal & advance', text: 'Fixed quote; work starts after the 60% advance.' },
    { title: 'Name & incorporation', text: 'We reserve the name and file incorporation with SECP.' },
    { title: 'NTN & handover', text: 'We complete FBR registration and hand over all documents.' },
  ],
  pricingNote: 'Fixed one-time fee depending on structure. SECP and other official fees are passed on at cost.',
  faqs: [
    { q: 'How long does SECP company registration take?', a: 'Timelines depend on name approval and document completeness. Online incorporation is often completed within a few working days once all documents are in order. We give you a realistic timeline at the start.' },
    { q: 'Can an overseas Pakistani or foreign national register a company in Pakistan?', a: 'Yes. Overseas Pakistanis and foreign nationals can be directors and shareholders, although additional documents and security clearance steps can apply to foreign nationals. We explain what is needed for your case.' },
    { q: 'What is the difference between an SMC and a private limited company?', a: 'A single-member company (SMC) has one shareholder and is suited to solo founders. A private limited company has two or more shareholders. Both give limited liability; the right choice depends on ownership and future plans.' },
    { q: 'Do you register the company for NTN?', a: 'Yes. After incorporation we complete the company\'s National Tax Number registration with FBR and guide you on sales tax registration if your business needs it.' },
    { q: 'What ongoing compliance will my company have?', a: 'Companies typically file an annual return with SECP, maintain statutory records, file income tax returns and, where registered, sales tax returns. We give you a calendar and can handle bookkeeping so filings are easy.' },
  ],
  related: ['bookkeeping-accounting', 'financial-modelling', 'fractional-cfo'],
  serviceType: 'Company registration',
  areaServed: ['PK'],
};

export default service;
