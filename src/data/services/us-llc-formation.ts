import type { Service } from './types';

const service: Service = {
  slug: 'us-llc-formation',
  name: 'US LLC Formation',
  summary: 'Form a US LLC as a non-resident, with EIN application and US banking guidance.',
  seoTitle: 'US LLC Formation for Non-Residents',
  seoDescription:
    'US LLC formation for non-residents: state selection, filing, registered agent via partner, EIN application support and US banking guidance.',
  h1: 'US LLC formation for non-residents',
  intro:
    'Set up a US limited liability company from anywhere in the world. We help you choose the right state, prepare the filing, obtain your EIN and get ready for US banking and payment platforms.',
  notice:
    'Registered-agent service is provided via our partner. We are not a law firm and do not provide legal or US tax advice; where needed we will recommend you speak to a licensed US professional.',
  isSetupService: true,
  whoFor: [
    'Non-US founders selling to US customers or using US marketplaces',
    'Software, e-commerce and service businesses that need US payment processing',
    'Founders who want a simple, low-maintenance US entity',
    'Existing businesses adding a US presence',
  ],
  included: [
    { title: 'State selection', text: 'A clear comparison of suitable states (for example Wyoming, Delaware or New Mexico) based on your plans, costs and ongoing requirements.' },
    { title: 'Formation filing', text: 'Preparation and filing of the Articles of Organization (or Certificate of Formation) with the chosen state.' },
    { title: 'Registered agent via partner', text: 'Every LLC needs a registered agent in its formation state. We arrange this through our partner.' },
    { title: 'Operating agreement', text: 'A standard single- or multi-member operating agreement template prepared for your LLC.' },
    { title: 'EIN application support', text: 'Preparation of Form SS-4 and support through the IRS process for applicants without an SSN or ITIN.' },
    { title: 'Banking & compliance guidance', text: 'Guidance on US banking and payment options, plus a calendar of ongoing state and federal filings.' },
  ],
  process: [
    { title: 'Free consultation', text: 'We understand your business model and recommend a state.' },
    { title: 'Proposal & advance', text: 'Fixed quote; work starts after the 60% advance.' },
    { title: 'State filing', text: 'We prepare and file your formation documents via our partner.' },
    { title: 'EIN & handover', text: 'We support your EIN application and hand over documents and next steps.' },
  ],
  pricingNote: 'Fixed one-time fee depending on the state chosen. State filing and partner fees are passed on at cost.',
  faqs: [
    { q: 'Can a non-US resident form an LLC?', a: 'Yes. US states generally do not require LLC members or managers to be US citizens or residents. You will need a registered agent with an address in the formation state, which we arrange via our partner.' },
    { q: 'Which state is best for a non-resident LLC?', a: 'It depends on where you will operate, your budget for annual fees and how you plan to raise money. Wyoming, Delaware and New Mexico are common choices for non-residents. We compare the options for your situation during the consultation.' },
    { q: 'How do I get an EIN without an SSN?', a: 'Non-residents without an SSN or ITIN cannot use the IRS online application, so the EIN is requested using Form SS-4 by fax, mail or the IRS line for international applicants. We prepare the form and guide you through the process.' },
    { q: 'Do you act as my registered agent?', a: 'No. Registered-agent service is provided via our partner, who holds the required address in your formation state. We coordinate the arrangement for you.' },
    { q: 'Will my LLC need to file anything every year?', a: 'Most states require an annual report or fee, and foreign-owned single-member LLCs usually have a federal information filing (Form 5472 with a pro forma Form 1120). Requirements change, so we give you a current checklist and recommend a US tax professional where needed.' },
    { q: 'Can you help me open a US bank account?', a: 'We guide you on banks and financial platforms that accept non-resident owners and help you prepare the documents they request. Approval is always at the provider\'s discretion.' },
  ],
  related: ['bookkeeping-accounting', 'financial-modelling', 'uk-company-formation'],
  serviceType: 'Company formation',
  areaServed: ['US'],
};

export default service;
