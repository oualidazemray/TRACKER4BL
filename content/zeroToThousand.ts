// Content for the standalone /0to1000 landing page. This product line is
// deliberately not modeled as a `Product` (types/product.ts) — it's a
// single guide sold on its own page, not part of the trackers catalog,
// and its design has nothing to do with that theme.

export const zeroToThousand = {
  title: '$0 to $1,000 in a Month',
  subtitle:
    'The 9-step playbook to launch and sell your own AI-made digital product on Instagram & TikTok — for under $1.',
  price: 30,
  currency: 'EUR',
  checkoutUrl: 'https://payhip.com/b/3IJo2',
  coverImage: '/0to1000/cover.jpg',

  audience: [
    'Complete beginners — no coding, design, or marketing experience needed.',
    'Anyone with a phone, an internet connection, and one idea worth sharing.',
    'Creators who already post on Instagram or TikTok and want a product to sell, not just views.',
  ],

  outcomes: [
    'A finished digital product, priced and ready to sell.',
    'Your own landing page, live on the internet with a real domain — for about $1.',
    'A simple daily content habit that keeps bringing in buyers after launch.',
  ],

  steps: [
    {
      title: 'Pick a Topic',
      body: "You don't need an original idea — you need a proven one. Search \"ebook\" on Instagram and TikTok, copy what's already selling, or ask AI for ideas in your niche.",
    },
    {
      title: 'Structure It With AI',
      body: 'Give Claude or ChatGPT your topic and get a full outline in minutes, then have it write each section in your own voice.',
    },
    {
      title: 'Design It in Canva',
      body: 'Pick a template that matches your price point, keep the same fonts and colors on every page, export as a PDF.',
    },
    {
      title: 'Build the Landing Page',
      body: 'Ask ChatGPT or Claude to build a single-file HTML landing page in your cover’s colors — no developer required.',
    },
    {
      title: 'Upload to Gumroad',
      body: 'Create your product, upload the PDF, set your price, and generate a matching cover with one Gemini prompt.',
    },
    {
      title: 'Wire the Buy Button',
      body: 'Copy your Gumroad product link and paste it into every "Buy Now" button on your page.',
    },
    {
      title: 'Deploy to Netlify',
      body: 'Drag your whole project folder into Netlify. Your page goes live instantly on a free link.',
    },
    {
      title: 'Buy Your $1 Domain',
      body: 'Grab a domain from IONOS for about $1 the first year and connect it straight to your Netlify site.',
    },
    {
      title: 'Market It — Every Day',
      body: "Post two videos a day, say \"link in bio,\" and don't stop for at least a week. Then check your results.",
    },
  ],

  faq: [
    {
      q: 'Do I need any coding or design experience?',
      a: 'No. Every step is written for complete beginners — you just need a phone, an idea, and about a week of daily posting.',
    },
    {
      q: 'How much does it actually cost to launch?',
      a: 'About $1 total. Every AI tool, Canva, Gumroad, and Netlify have free tiers that are enough to launch — the domain is the only real cost.',
    },
    {
      q: 'How do I get the guide after I buy?',
      a: "You'll get instant access to the PDF. Nothing to install, no waiting.",
    },
    {
      q: "Do I need to already have followers on Instagram or TikTok?",
      a: "No. The guide covers exactly what to post and how often, starting from zero.",
    },
    {
      q: "What if I don't have a product idea yet?",
      a: 'The guide includes 50 ready-made ebook ideas across ten niches — and two done-for-you guides you can resell, keeping 100% of what you charge.',
    },
    {
      q: 'Is this a one-time payment?',
      a: 'Yes. One payment, no subscription, no recurring charges.',
    },
  ],
};
