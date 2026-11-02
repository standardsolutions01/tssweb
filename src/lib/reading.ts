/** Estimated reading time in minutes (about 220 words per minute). */
export function readingMinutes(text: string | undefined): number {
  const words = (text ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
