import type { Service } from './types';

const service: Service = {
  slug: 'fractional-cfo',
  name: 'Fractional CFO & Controller',
  summary: 'Part-time CFO and financial controller support — reporting, cash flow and decision-making.',
  icon: 'compass',
  menuLine: 'Part-time CFO and financial controller support.',
  seoTitle: 'Fractional CFO Services UK',
  seoDescription:
    'Fractional CFO services for UK and international businesses: financial controller support, cash flow forecasting, KPIs, board reporting and budgeting.',
  h1: 'Fractional CFO services for UK and international businesses',
  intro:
    'Senior finance support without a full-time salary. We act as your part-time CFO or financial controller — tightening month-end, forecasting cash and turning numbers into decisions.',
  isSetupService: false,
  whoFor: [
    'Growing businesses that have outgrown basic bookkeeping',
    'Founders who need investor or board-ready reporting',
    'Companies preparing to raise funds or take on debt',
    'Teams without an in-house finance lead',
  ],
  included: [
    { title: 'Financial controller support', text: 'Month-end close review, reconciliations oversight, controls and clean, reliable numbers.' },
    { title: 'Cash flow forecasting', text: 'Rolling 13-week and 12-month cash forecasts so you see problems before they arrive.' },
    { title: 'Budgets & variance analysis', text: 'Annual budgets with monthly actual-versus-budget reviews and clear explanations.' },
    { title: 'KPIs & dashboards', text: 'The handful of metrics that matter for your business, reported consistently.' },
    { title: 'Board & investor reporting', text: 'Concise monthly or quarterly packs for directors, investors and lenders.' },
    { title: 'Finance systems & process', text: 'Better workflows across Xero, QuickBooks, Zoho Books, Bill.com, Ramp and Stripe.' },
  ],
  process: [
    { title: 'Free consultation', text: 'We discuss where you are, where you are going and what is in the way.' },
    { title: 'Diagnostic', text: 'A short review of your numbers, systems and reporting.' },
    { title: 'Proposal', text: 'A monthly retainer based on the days and scope you need.' },
    { title: 'Ongoing partnership', text: 'Regular reporting, reviews and a finance partner on call.' },
  ],
  pricingNote: 'Monthly retainer based on scope and time commitment.',
  faqs: [
    { q: 'What is a fractional CFO?', a: 'A fractional CFO is a senior finance professional who works with your business part-time — for a set number of days or hours each month — giving you strategic finance support without the cost of a full-time hire.' },
    { q: 'What is the difference between a fractional CFO and a financial controller?', a: 'A financial controller focuses on accurate, timely numbers: month-end close, controls and reporting. A CFO focuses on forward-looking decisions: cash, funding, pricing and growth. Many smaller businesses need a blend of both, which is what we provide.' },
    { q: 'When does a business need a fractional CFO?', a: 'Common triggers include preparing to raise money, cash flow pressure, rapid growth, a board or investors asking for better reporting, or a founder spending too much time on finance.' },
    { q: 'Do you work remotely?', a: 'Yes. We work remotely with clients in the UK, US, UAE, Australia and Pakistan, with regular video calls and shared reporting. Meeting times are arranged around your time zone.' },
    { q: 'Can you work with our existing accountant?', a: 'Yes. We often work alongside a client\'s external accountant, who continues to handle statutory accounts and tax filings while we focus on management reporting and planning.' },
  ],
  related: ['bookkeeping-accounting', 'financial-modelling', 'uk-company-formation'],
  serviceType: 'Financial consulting',
  areaServed: ['GB', 'US', 'AE', 'AU', 'PK'],
};

export default service;
