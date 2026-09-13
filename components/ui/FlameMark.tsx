// The brand mark — a flame in TRACKERS4BL's signature plum/purple, the
// same palette as BLOOM. Fixed colors on purpose: the mark stays constant
// as shoppers toggle between product themes, so it always reads as the
// site's identity rather than the active product's.
export function FlameMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 116" className={className} aria-hidden="true">
      <path
        d="M50 4
           C41 20 27 30 27 48
           C27 56 30 62 35 66
           C30 60 28 53 31 46
           C24 54 21 66 26 78
           C31 90 42 98 55 98
           C70 98 82 87 84 72
           C86 60 81 49 72 42
           C76 50 76 58 71 64
           C74 55 72 44 64 36
           C60 46 52 50 48 58
           C56 46 58 30 50 4 Z"
        fill="#7B3F9E"
      />
      <path
        d="M50 34
           C45 44 38 50 39 60
           C40 68 46 74 54 74
           C62 74 68 67 67 58
           C66 52 62 48 58 46
           C61 51 61 56 57 59
           C59 51 55 42 50 34 Z"
        fill="#F2A6C4"
      />
    </svg>
  );
}
