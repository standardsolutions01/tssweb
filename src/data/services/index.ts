/**
 * List of all services, in the order they appear on the site.
 * To add a new service: copy one of the files in this folder,
 * change the content, then add it to this list.
 */
import ukCompanyFormation from './uk-company-formation';
import usLlcFormation from './us-llc-formation';
import pakistanCompanyRegistration from './pakistan-company-registration';
import bookkeepingAccounting from './bookkeeping-accounting';
import financialModelling from './financial-modelling';
import fractionalCfo from './fractional-cfo';
import type { Service } from './types';

export const SERVICES: Service[] = [
  ukCompanyFormation,
  usLlcFormation,
  pakistanCompanyRegistration,
  bookkeepingAccounting,
  financialModelling,
  fractionalCfo,
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export type { Service };
