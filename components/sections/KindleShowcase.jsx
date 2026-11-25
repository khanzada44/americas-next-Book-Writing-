'use client';

import { useEffect, useState } from 'react';

/*
 * Book covers that slide left one by one; the middle cover shows inside a Kindle.
 * Usage:  <KindleShowcase />   or   <KindleShowcase books={[{ src: '/x.webp', alt: 'Title' }, ...]} interval={2800} />
 * Use 7 or more covers so no cover is on screen twice.
 */
const DEFAULT_BOOKS = [
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Fantasy book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Romance book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Mystery book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Sci-fi book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Self-help book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Historical fiction book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Fantasy book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Romance book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Mystery book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Sci-fi book cover' },
];

// place of each cover around the Kindle (sizes in design pixels, scaled to the screen width)
const SLOTS = {
  '-3': { x: -700, w: 236, h: 356, z: 1, o: 0 },
  '-2': { x: -498, w: 236, h: 356, z: 2, o: 1 },
  '-1': { x: -309, w: 252, h: 396, z: 3, o: 1 },
  '0': { x: 0, w: 250, h: 372, z: 1, o: 1 },
  '1': { x: 309, w: 252, h: 396, z: 3, o: 1 },
  '2': { x: 498, w: 236, h: 356, z: 2, o: 1 },
  '3': { x: 700, w: 236, h: 356, z: 1, o: 0 },
};
const SCREEN_W = 250;
const SCREEN_GAP = 36; // black space between covers inside the Kindle

const mod = (n, m) => ((n % m) + m) % m;

export default function KindleShowcase({ books = DEFAULT_BOOKS, interval = 2800 }) {
  const [step, setStep] = useState(0); // grows forever; the cover is books[step % length]

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => {
      if (!document.hidden) setStep((s) => s + 1);
    }, interval);
    return () => clearInterval(id);
  }, [interval]);

  const around = [];
  for (let k = step - 3; k <= step + 3; k++) around.push(k);
  const book = (k) => books[mod(k, books.length)];

  return (
    <section className="ks" aria-label="Books we have published">
      <style>{CSS}</style>
      <div className="ks-stage">
        {/* covers around the Kindle */}
        {around.map((k) => {
          const s = SLOTS[String(k - step)];
          const b = book(k);
          const side = k - step === -1 || k - step === 1;
          return (
            <img
              key={k}
              className="ks-cover"
              src={b.src}
              alt={k === step ? '' : b.alt}
              aria-hidden={k === step || undefined}
              loading="lazy"
              onClick={side ? () => setStep(k) : undefined}
              style={{
                '--x': s.x,
                '--w': s.w,
                '--h': s.h,
                zIndex: s.z,
                opacity: s.o,
                cursor: side ? 'pointer' : 'default',
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

const CSS = `
.ks{--u:calc(100cqw/1272);container-type:inline-size;position:relative;overflow:hidden;padding:24px 0}
.ks-stage{position:relative;height:calc(540*var(--u));min-height:300px}
@media (max-width:700px){.ks{--u:calc(100vw/600)}.ks-stage{min-height:0;height:calc(470*var(--u))}}
.ks-cover{position:absolute;left:50%;top:50%;display:block;object-fit:cover;
  width:calc(var(--w)*var(--u));height:calc(var(--h)*var(--u));
  transform:translate(calc(-50% + var(--x)*var(--u)),-50%);
  box-shadow:0 10px 24px rgba(0,0,0,.18);
  transition:transform .9s cubic-bezier(.65,0,.35,1),width .9s cubic-bezier(.65,0,.35,1),height .9s cubic-bezier(.65,0,.35,1),opacity .6s ease}
.ks-kindle{position:absolute;left:50%;top:50%;z-index:10;transform:translate(-50%,-50%);
  width:calc(322*var(--u));height:calc(448*var(--u));box-sizing:border-box;
  border-radius:calc(24*var(--u));background:#0b0b0b;
  border:calc(3*var(--u)) solid #8d8d8d;
  box-shadow:inset 0 0 0 calc(2*var(--u)) #2a2a2a,0 calc(18*var(--u)) calc(30*var(--u)) rgba(0,0,0,.28)}
.ks-brand{position:absolute;top:calc(9*var(--u));left:50%;transform:translateX(-50%);
  display:flex;flex-direction:column;align-items:center;color:#e9e9e9;
  font:600 calc(13*var(--u))/1 Arial,Helvetica,sans-serif;letter-spacing:.02em}
.ks-brand svg{width:calc(22*var(--u));height:auto;margin-top:calc(1*var(--u))}
.ks-screen{position:absolute;left:calc(33*var(--u));right:calc(33*var(--u));top:calc(34*var(--u));bottom:calc(38*var(--u));
  overflow:hidden;background:#000}
.ks-strip{position:absolute;inset:0;transform:translateX(calc(var(--pos)*${SCREEN_W + SCREEN_GAP}*var(--u)*-1));
  transition:transform .9s cubic-bezier(.65,0,.35,1)}
.ks-strip img{position:absolute;top:0;left:calc(var(--k)*${SCREEN_W + SCREEN_GAP}*var(--u));
  width:100%;height:100%;object-fit:cover;display:block}
@media (prefers-reduced-motion:reduce){.ks-cover,.ks-strip{transition:none}}
`;