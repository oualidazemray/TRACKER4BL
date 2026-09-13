import type { Product } from '@/types/product';

export const bloom: Product = {
  slug: 'bloom',
  name: 'BLOOM',
  audience: 'for women',
  category: 'Habit Trackers',
  tagline: 'Tick a box. Watch your flower grow.',
  shortDescription:
    'A Google Sheets habit tracker where a flower grows under each day as you tick your habits off.',
  longDescription:
    'BLOOM turns your habit tracking into something you actually want to open. Tick your habits off each day and a flower grows underneath it — from bare soil to full bloom — so your progress is something you can see, not just a row of checkmarks. Sixteen tabs cover a full year: a year overview, goal planning, and one tracker for every month, with every count, percentage, and chart calculating itself as you go.',

  format: 'google-sheets',
  status: 'live',

  badge: 'New',
  previewType: 'organic',

  theme: {
    ink: '#3E2136',
    primary: '#7B3F9E',
    secondary: '#A66BC9',
    light: '#D9B3F0',
    pale: '#F0E2FA',
    accent: '#F2A6C4',
    soft: '#FBDCE8',
    tint: '#FDF0F5',
  },

  pricing: {
    price: 5,
    guidePrice: 1,
    currency: 'USD',
    checkoutUrl: 'https://payhip.com/b/eFJ8q',
  },

  hero: {
    headline: 'Tick a box. Watch your flower grow.',
    subhead:
      'A habit tracker that grows a flower under every day you show up for yourself — right inside Google Sheets.',
  },

  stages: [
    { image: '/bloom/flower-1.png', label: 'nothing ticked', percent: '0%' },
    { image: '/bloom/flower-2.png', label: 'just starting', percent: '1-39%' },
    { image: '/bloom/flower-3.png', label: 'growing', percent: '40-69%' },
    { image: '/bloom/flower-4.png', label: 'almost there', percent: '70-99%' },
    { image: '/bloom/flower-5.png', label: 'perfect day', percent: '100%' },
  ],

  features: [
    {
      title: 'A flower for every day',
      body: 'Your flower grows in five stages as you check off more habits — a visual you actually want to look at.',
    },
    {
      title: '12 monthly tabs',
      body: 'One tracker per month, so the year never feels like one overwhelming grid.',
    },
    {
      title: 'Year overview',
      body: 'See your whole year at a glance — every month, every streak, in one place.',
    },
    {
      title: 'Goal planning tab',
      body: 'Set what you\'re working toward before the month starts, and check back in as you go.',
    },
    {
      title: 'Auto-calculating stats',
      body: 'Completion percentages and charts update themselves — no formulas to touch, ever.',
    },
    {
      title: 'Built-in instructions',
      body: 'A dedicated tab walks you through setup in under two minutes.',
    },
  ],

  screenshots: [
    { src: '/bloom/screenshot-month.png', alt: 'BLOOM monthly tracker tab with flowers growing under each day' },
    { src: '/bloom/screenshot-year.png', alt: 'BLOOM year overview tab showing all twelve months' },
    { src: '/bloom/screenshot-goals.png', alt: 'BLOOM goal planning tab' },
  ],

  faq: [
    {
      q: 'Does my flower reset every month?',
      a: 'Yes — each month starts fresh with its own set of flowers, so a slow month never weighs down the next one.',
    },
    {
      q: 'Can I change the habits I track?',
      a: 'Yes, the settings tab lets you rename and rearrange every habit before you start.',
    },
  ],

  seo: {
    title: 'BLOOM — Habit Tracker for Women | TRACKERS4BL',
    description:
      'A Google Sheets habit tracker where a flower grows under each day you tick your habits off. 16 tabs, auto-calculating stats, instant access.',
    ogImage: '/bloom/og-image.png',
  },
};
