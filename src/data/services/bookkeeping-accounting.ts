import type { Service } from './types';

const service: Service = {
  slug: 'bookkeeping-accounting',
  name: 'Bookkeeping & Accounting',
  summary: 'Monthly bookkeeping, reconciliations and management reports in Xero, QuickBooks or Zoho Books.',
  seoTitle: 'Outsourced Bookkeeping Services UK',
  seoDescription:
    'Outsourced bookkeeping services for UK, US, UAE, Australian and Pakistani businesses. Xero, QuickBooks and Zoho Books, monthly closes and clear reports.',
  h1: 'Outsourced bookkeeping services for UK and international businesses',
  intro:
    'Accurate, up-to-date books every month — without hiring in-house. We keep your records clean in Xero, QuickBooks Online or Zoho Books, reconcile every account and send you reports you can actually use.',
  notice:
    'In Australia we provide bookkeeping and advisory services only. BAS and tax lodgements are handled by your registered tax or BAS agent, with whom we are happy to work.',
  isSetupService: false,
  whoFor: [
    'UK small businesses and limited companies',
    'Accounting practices that need reliable outsourced bookkeeping support',
    'Startups and e-commerce businesses with growing transaction volumes',
    'US, UAE, Australian and Pakistani businesses using cloud accounting',
  ],
  included: [
    { title: 'Transaction processing', text: 'Bank feeds, sales and purchase invoices, receipts and expense claims recorded and categorised correctly.' },
    { title: 'Reconciliations', text: 'Bank, card, payment-platform and control-account reconciliations completed every month.' },
    { title: 'Month-end close', text: 'Accruals, prepayments, depreciation and journals so your numbers are complete and consistent.' },
    { title: 'Management reports', text: 'Profit and loss, balance sheet and cash summary with short commentary each month.' },
    { title: 'VAT-ready records', text: 'Records kept ready for UK or UAE VAT returns, with return preparation support for review by you or your accountant.' },
    { title: 'Clean-up & migration', text: 'Catch-up bookkeeping for past periods and migration between Xero, QuickBooks and Zoho Books.' },
  ],
  process: [
    { title: 'Free consultation', text: 'We review your current set-up, volume and software.' },
    { title: 'Proposal', text: 'You receive a monthly fee based on scope and volume.' },
    { title: 'Onboarding', text: 'Secure access, chart of accounts review and any clean-up.' },
    { title: 'Monthly cycle', text: 'Books closed and reports sent on an agreed date each month.' },
  ],
  pricingNote: 'Monthly fee based on transaction volume and scope. Clean-up work is quoted separately.',
  faqs: [
    { q: 'Which accounting software do you work with?', a: 'We work in Xero, QuickBooks Online and Zoho Books, and can support MYOB, FreshBooks and common add-ons such as Bill.com, Ramp, Expensify and Stripe. Our team includes a Certified Xero Advisor and an Advanced QuickBooks ProAdvisor.' },
    { q: 'How do you access my accounting system securely?', a: 'You invite us as a user with our own login, so you never need to share your password. You can see everything we do and remove access at any time.' },
    { q: 'Can you catch up on months or years of missed bookkeeping?', a: 'Yes. We regularly bring records up to date, reconcile historical periods and get books ready for year-end or for your accountant.' },
    { q: 'Do you work with UK accounting firms?', a: 'Yes. We support accounting practices with outsourced bookkeeping so their team can focus on review, tax and advisory work. We follow your processes and checklists.' },
    { q: 'How quickly will I get my monthly reports?', a: 'We agree a monthly close date during onboarding — usually within the first two weeks of the following month, depending on when we receive your documents.' },
    { q: 'Do you file tax returns in Australia?', a: 'No. In Australia we provide bookkeeping and advisory only. We are not a registered tax agent or BAS agent, so lodgements are made by your registered agent; we keep your books ready for them.' },
  ],
  related: ['fractional-cfo', 'financial-modelling', 'uk-company-formation'],
  serviceType: 'Bookkeeping',
  areaServed: ['GB', 'US', 'AE', 'AU', 'PK'],
};

export default service;
