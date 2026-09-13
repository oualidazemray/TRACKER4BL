import { redirect } from 'next/navigation';

// The root currently has just one product line, so it points straight at
// it. Once a second, differently-designed line (e.g. /0to1000) exists,
// this becomes a real hub page linking out to each — no route changes
// needed for either line at that point.
export default function RootPage() {
  redirect('/trackers');
}
