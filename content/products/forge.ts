import type { Product } from '@/types/product';

export const forge: Product = {
  slug: 'forge',
  name: 'FORGE',
  audience: 'for men',
  category: 'Habit Trackers',
  coverImage: '/imgs/men.jpg',
  tagline: 'Tick a box. Feed the fire.',
  shortDescription:
    'A Google Sheets habit tracker where a fire builds under each day as you tick your habits off.',
  longDescription:
    'FORGE turns your habit tracking into something you actually want to open. Tick your habits off each day and a fire builds underneath it — from cold to blazing — so your progress is something you can see, not just a row of checkmarks. Sixteen tabs cover a full year: a year overview, goal planning, and one tracker for every month, with every count, percentage, and chart calculating itself as you go.',

  format: 'google-sheets',
  status: 'live',

  badge: 'New',
  previewType: 'blaze',

  theme: {
    ink: '#0B2545',
    primary: '#134074',
    secondary: '#2A79B8',
    light: '#6FB1E8',
    pale: '#E8F3FB',
    accent: '#A8D4F0',
    soft: '#DCEDF8',
    tint: '#F2F8FC',
  },

  pricing: {
    price: 5,
    guidePrice: 1,
    currency: 'USD',
    checkoutUrl: 'https://payhip.com/b/zD8s0',
  },

  hero: {
    headline: 'Tick a box. Feed the fire.',
    subhead:
      'A habit tracker that builds a fire under every day you show up — right inside Google Sheets.',
  },

  stages: [
    { image: '/forge/flame-1.png', label: 'cold', percent: '0%' },
    { image: '/forge/flame-2.png', label: 'spark', percent: '1-39%' },
    { image: '/forge/flame-3.png', label: 'catching', percent: '40-69%' },
    { image: '/forge/flame-4.png', label: 'burning', percent: '70-99%' },
    { image: '/forge/flame-5.png', label: 'blazing', percent: '100%' },
  ],

  features: [
    {
      title: 'A fire for every day',
      body: 'Your fire builds in five stages as you check off more habits — a visual you actually want to look at.',
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
    { src: '/forge/screenshot-month.png', alt: 'FORGE monthly tracker tab with fire building under each day' },
    { src: '/forge/screenshot-year.png', alt: 'FORGE year overview tab showing all twelve months' },
    { src: '/forge/screenshot-goals.png', alt: 'FORGE goal planning tab' },
  ],

  faq: [
    {
      q: 'If I miss a day, does the fire go out for good?',
      a: 'No — each month starts fresh with its own fires, so one off day never sinks the rest of the month.',
    },
    {
      q: 'Can I change the habits I track?',
      a: 'Yes, the settings tab lets you rename and rearrange every habit before you start.',
    },
  ],

  seo: {
    title: 'FORGE — Habit Tracker for Men | TORLIMORLI',
    description:
      'A Google Sheets habit tracker where a fire builds under each day you tick your habits off. 16 tabs, auto-calculating stats, instant access.',
    ogImage: '/forge/og-image.png',
  },
};
