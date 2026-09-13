// Content shared across every product. Anything that would otherwise be
// copy-pasted into each product file (how-it-works, general FAQ, footer,
// license note) lives here once. Product files only add what's specific
// to them — see faq merging in content/products/index.ts.

export type HowItWorksStep = {
  step: number;
  title: string;
  body: string;
};

export const brand = {
  name: 'TORLIMORLI',
  contactEmail: 'hello@torlimorli.com',
  copyrightLine: '© 2026 TORLIMORLI. All rights reserved.',
  shortDescription:
    'Small, beautifully designed digital tools — habit trackers, planners, and more — built to turn everyday effort into visible progress.',
};

// Placeholder handles — swap for real profiles when they exist.
export const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
];

export const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Buy',
    body: 'Get instant access after checkout — no account, no app to install.',
  },
  {
    step: 2,
    title: 'Make a copy',
    body: 'Open the link, click "File → Make a copy" to save it to your own Google Drive.',
  },
  {
    step: 3,
    title: 'Start ticking',
    body: 'Check off your habits each day and watch every stat update itself.',
  },
];

export const sharedFaq = [
  {
    q: 'What do I need to use this?',
    a: 'A free Google account and the Google Sheets app (or a browser). Nothing to install, no subscription.',
  },
  {
    q: 'How do I get it after I buy?',
    a: "You'll get instant access to the sheet. Click \"Make a copy\" and it's yours to keep, forever.",
  },
  {
    q: 'Does it work on my phone?',
    a: 'Yes. It works in the Google Sheets app on phone, tablet, and laptop, and stays in sync across all of them.',
  },
  {
    q: 'Is this a one-time payment?',
    a: 'Yes. One payment, no subscription, no recurring charges.',
  },
  {
    q: 'Can I get a refund?',
    a: "Since it's an instant digital download, all sales are final. Reach out if something isn't working and we'll help.",
  },
];

export const licenseNote =
  'For personal use only. No resale, redistribution, or sharing of this file or its contents.';
