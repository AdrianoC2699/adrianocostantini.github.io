export default function OrbitRing() {
  const arrow = (
    <>
      <path
        d="M115.6 11.4 A90 90 0 0 1 186.9 123.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <polygon points="193.7,125.1 180.1,121.5 183.8,134.9" fill="currentColor" />
    </>
  );

  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className="orbit pointer-events-none absolute -left-6 -top-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)]"
    >
      <g className="text-moss">{arrow}</g>
      <g className="text-clay" transform="rotate(120 100 100)">{arrow}</g>
      <g className="text-sun" transform="rotate(240 100 100)">{arrow}</g>
    </svg>
  );
}
