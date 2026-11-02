import type { Service } from './types';

const service: Service = {
  slug: 'financial-modelling',
  name: 'Pro Forma & Financial Models',
  summary: 'Investor- and bank-ready pro forma statements, projections and startup financial models.',
  seoTitle: 'Pro Forma Statements & Startup Financial Models',
  seoDescription:
    'Pro forma financial statements and startup financial models for investors, banks and business plans. Integrated P&L, balance sheet and cash flow.',
  h1: 'Pro forma financial statements & startup financial models',
  intro:
    'Show investors, banks and partners exactly how your business will make money. We build clear, integrated financial models and pro forma statements with assumptions you can explain and defend.',
  isSetupService: true,
  whoFor: [
    'Startups raising pre-seed, seed or angel investment',
    'Businesses applying for bank loans or credit facilities',
    'Founders preparing a business plan or visa business plan',
    'Owners planning a new product, location or acquisition',
  ],
  included: [
    { title: 'Assumptions workshop', text: 'We work through your revenue drivers, costs, hiring plan and funding needs together.' },
    { title: 'Integrated three statements', text: 'Projected profit and loss, balance sheet and cash flow that link and balance.' },
    { title: 'Scenarios & sensitivity', text: 'Base, best and worst cases so readers can see what changes the outcome.' },
    { title: 'Key metrics', text: 'Runway, break-even, margins, unit economics and, for lenders, debt service cover.' },
    { title: 'Use of funds', text: 'A clear summary of how much you need, when, and what it will be spent on.' },
    { title: 'Editable Excel or Google Sheets', text: 'A clean, documented model you own and can update yourself.' },
  ],
  process: [
    { title: 'Free consultation', text: 'We agree the purpose, audience and timeline.' },
    { title: 'Proposal & advance', text: 'Fixed quote; work starts after the 60% advance.' },
    { title: 'Build & review', text: 'We build the model and review the assumptions with you.' },
    { title: 'Final delivery', text: 'You receive the final model, summary outputs and a walkthrough.' },
  ],
  pricingNote: 'Fixed fee based on complexity, number of scenarios and forecast period.',
  faqs: [
    { q: 'What are pro forma financial statements?', a: 'Pro forma statements show what your financials would look like based on stated assumptions — for example a new funding round, a loan, a new product or an acquisition. They are forward-looking or adjusted figures, not audited historical results.' },
    { q: 'How many years should a startup financial model cover?', a: 'Most investor and bank models cover three to five years, usually monthly for the first 12 to 24 months and annually after that. We match the period to what your audience expects.' },
    { q: 'Do I need historical accounts?', a: 'No, a pre-revenue startup can still have a strong model built on clear assumptions. If you do have historical figures, we use them as the starting point to make projections more credible.' },
    { q: 'Will I be able to edit the model myself?', a: 'Yes. You receive an editable Excel or Google Sheets model with inputs separated from calculations, plus a short walkthrough so you can update it.' },
    { q: 'Can you prepare a model for a bank loan application?', a: 'Yes. Bank-focused models emphasise cash flow, repayment capacity and conservative assumptions. We include the ratios lenders typically look at.' },
  ],
  related: ['fractional-cfo', 'bookkeeping-accounting', 'us-llc-formation'],
  serviceType: 'Financial modelling',
  areaServed: ['GB', 'US', 'AE', 'AU', 'PK'],
};

export default service;
