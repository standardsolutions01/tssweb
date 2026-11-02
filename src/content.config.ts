/**
 * BLOG — blog posts live in src/content/blog/ as Markdown (.md) files.
 * The file name becomes the URL: my-post.md → /blog/my-post/
 * Every post must start with the "frontmatter" fields below.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    /** Headline shown on the page (H1) */
    title: z.string(),
    /** Shorter title for Google (brand added automatically) — optional */
    seoTitle: z.string().optional(),
    /** Google description — max 155 characters */
    description: z.string().max(155),
    /** Category shown on cards and used for the Insights filter */
    category: z.enum(['Formation', 'Bookkeeping', 'CFO', 'Pakistan']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** true = hidden from the site */
    draft: z.boolean().default(false),
    /** FAQs shown at the end of the post and sent to Google */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    /** Service slugs to link to at the end of the post */
    related: z.array(z.string()).default([]),
  }),
});

/**
 * Policies (Terms, Privacy, Refund, Complaints) live in src/content/policies/.
 * They are the owner's approved wording — edit with care.
 * Contact details are written as tokens so they always match src/config/site.ts:
 *   {{EMAIL}}  {{PHONE}}  {{ADDRESS}}  {{PRINCIPAL}}
 */
const policies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/policies' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().max(155),
  }),
});

export const collections = { blog, policies };
