import type { Metadata } from 'next';
import { zeroToThousand } from '@/content/zeroToThousand';
import { ZeroToThousandPage } from '@/components/wealth/ZeroToThousandPage';

export const metadata: Metadata = {
  title: `${zeroToThousand.title} — The 9-Step Playbook`,
  description: zeroToThousand.subtitle,
  openGraph: {
    title: zeroToThousand.title,
    description: zeroToThousand.subtitle,
    images: [{ url: zeroToThousand.coverImage }],
  },
};

export default function Page() {
  return <ZeroToThousandPage />;
}
