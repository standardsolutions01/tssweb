import type { Service } from './types';

const service: Service = {
  slug: 'uk-company-formation',
  name: 'UK Company Formation',
  summary: 'Set up a UK limited company from Pakistan or anywhere abroad — no UK residency needed.',
  seoTitle: 'UK Company Formation for Non-Residents',
  seoDescription:
    'UK company formation for non-residents and Pakistani founders. Companies House filing via authorised partners, plus HMRC set-up and bookkeeping.',
  h1: 'UK company formation for non-residents',
  intro:
    'Launch a UK limited company without living in the UK. We prepare everything, guide you through identity verification and coordinate the filing with Companies House — then help you stay compliant once you are trading.',
  notice:
    'Companies House filings are made with and through our authorised formation partners. We are not a law firm and do not provide legal advice.',
  isSetupService: true,
  whoFor: [
    'Founders in Pakistan who want a UK company to sell to UK and European customers',
    'Freelancers and agencies who need a UK entity for contracts, invoicing or payment platforms',
    'Overseas businesses opening a UK subsidiary',
    'Anyone who wants a clear, step-by-step process and an accountant on hand from day one',
  ],
  included: [
    { title: 'Structure & name check', text: 'Company name availability check, choosing share structure, directors, shareholders and people with significant control (PSC).' },
    { title: 'Document preparation', text: 'Incorporation details, model articles of association, statement of capital, SIC codes and registered email address.' },
    { title: 'Identity verification guidance', text: 'Step-by-step help completing the identity verification Companies House now requires for directors and PSCs.' },
    { title: 'Registered office address', text: 'A UK registered office address arranged through our partner network, if you do not have one.' },
    { title: 'Filing via authorised partner', text: 'Submission to Companies House through our authorised formation partner, with progress updates until approval.' },
    { title: 'Post-incorporation handover', text: 'Certificate of incorporation, HMRC Corporation Tax registration guidance, key deadline calendar and banking guidance.' },
  ],
  process: [
    { title: 'Strategy call', text: 'A free 30-minute call. We confirm your goals, structure and the information we need.' },
    { title: 'Proposal & advance', text: 'You receive a fixed quote. Work starts after the 60% advance.' },
    { title: 'Preparation & ID checks', text: 'We prepare documents and guide directors through verification.' },
    { title: 'Filing & handover', text: 'Our partner files with Companies House; you receive all documents and next steps.' },
  ],
  pricingNote: 'Fixed one-time fee, quoted after a short strategy call. Official government fees are passed on at cost.',
  faqs: [
    { q: 'Can I form a UK company if I live in Pakistan?', a: 'Yes. There is no UK residency or nationality requirement for directors or shareholders of a UK private limited company. You will need a UK registered office address, and each director and PSC must complete identity verification.' },
    { q: 'How long does UK company formation take?', a: 'Once identity verification is complete and documents are ready, Companies House often approves online applications within one working day. Preparation and verification can add a few days, so we suggest allowing about one to two weeks overall.' },
    { q: 'Do I need a UK address?', a: 'The company needs a registered office address in the UK. If you do not have one, we can arrange one through our partner network. Directors can use a service address and do not need to live in the UK.' },
    { q: 'Do you file with Companies House yourselves?', a: 'Filings are made with and through our authorised formation partners. We handle the preparation, coordination and follow-up so you deal with one point of contact.' },
    { q: 'Can you help me open a UK bank account?', a: 'We give practical guidance on business banking options that accept non-resident directors and help you prepare the documents they usually request. Approval is always at the bank\'s discretion.' },
    { q: 'What happens after the company is formed?', a: 'You will need to register for Corporation Tax, keep proper records, file annual accounts and a confirmation statement, and consider VAT and payroll. Our bookkeeping service covers these from day one.' },
  ],
  related: ['bookkeeping-accounting', 'financial-modelling', 'fractional-cfo'],
  serviceType: 'Company formation',
  areaServed: ['GB', 'PK'],
};

export default service;
