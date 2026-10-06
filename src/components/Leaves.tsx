import type { CSSProperties } from "react";

const leaves = [
  { x: "5%",  size: 26, dur: 30, delay: -6,  drift: "9vw",  spin: "320deg", op: 0.35, sway: "5s", color: "text-sage" },
  { x: "16%", size: 18, dur: 38, delay: -22, drift: "-6vw", spin: "-240deg", op: 0.3,  sway: "6s", color: "text-moss" },
  { x: "30%", size: 22, dur: 34, delay: -12, drift: "8vw",  spin: "280deg", op: 0.3,  sway: "4.5s", color: "text-sage" },
  { x: "45%", size: 16, dur: 42, delay: -30, drift: "-7vw", spin: "-300deg", op: 0.28, sway: "5.5s", color: "text-moss" },
  { x: "60%", size: 24, dur: 32, delay: -2,  drift: "7vw",  spin: "260deg", op: 0.33, sway: "5s", color: "text-sage" },
  { x: "72%", size: 18, dur: 40, delay: -18, drift: "-8vw", spin: "-280deg", op: 0.3,  sway: "6.5s", color: "text-sun" },
  { x: "85%", size: 28, dur: 36, delay: -9,  drift: "6vw",  spin: "300deg", op: 0.32, sway: "5s", color: "text-moss" },
  { x: "94%", size: 20, dur: 44, delay: -26, drift: "-5vw", spin: "-260deg", op: 0.28, sway: "4s", color: "text-sage" },
];

export default function Leaves() {
  return (
    <div aria-hidden className="leaves">
      {leaves.map((l, i) => (
        <span
          key={i}
          className="leaf"
          style={
            {
              "--x": l.x,
              "--size": `${l.size}px`,
              "--dur": `${l.dur}s`,
              "--delay": `${l.delay}s`,
              "--drift": l.drift,
              "--spin": l.spin,
              "--op": l.op,
              "--sway": l.sway,
            } as CSSProperties
          }
        >
          <svg viewBox="0 0 24 24" className={`leaf-svg h-full w-full ${l.color}`} fill="currentColor">
            <path d="M12 2C6 6 4 12 6 18c1 2 3 3 6 4 3-1 5-2 6-4 2-6 0-12-6-16z" />
            <path d="M12 6v14" stroke="#f6f1e7" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
          </svg>
        </span>
      ))}
    </div>
  );
}
