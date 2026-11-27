'use client';

import { useEffect, useState } from 'react';

/*
 * "Our published work" section: heading, text, sliding book covers with a Kindle in the middle,
 * arrows, and buttons.
 * Usage:
 *   <KindleShowcase />
 *   <KindleShowcase books={[{ src: '/x.webp', alt: 'Title' }, ...]} interval={2800} />
 *   <KindleShowcase title="..." text="..." kindle={false} />   (kindle={false}: covers only)
 * Use 7 or more covers so no cover is on screen twice.
 */
const DEFAULT_BOOKS = [
  { src: 'https://globalpublishinghq.com/images/1.webp', alt: 'Fantasy book cover' },
  { src: 'https://globalpublishinghq.com/images/2.webp', alt: 'Romance book cover' },
  { src: 'https://globalpublishinghq.com/images/3.webp', alt: 'Mystery book cover' },
  { src: 'https://globalpublishinghq.com/images/4.webp', alt: 'Sci-fi book cover' },
  { src: 'https://globalpublishinghq.com/images/5.webp', alt: 'Self-help book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Historical fiction book cover' },
  { src: 'https://globalpublishinghq.com/images/7.webp', alt: 'Fantasy book cover' },
  { src: 'https://globalpublishinghq.com/images/8.webp', alt: 'Romance book cover' },
  { src: 'https://globalpublishinghq.com/images/9.webp', alt: 'Mystery book cover' },
  { src: 'https://globalpublishinghq.com/images/6.webp', alt: 'Sci-fi book cover' },
];

const POINTS = ['Amazon KDP & Kindle ready', 'eBook, paperback & hardcover', 'Worldwide distribution'];

// place of each cover (sizes in design pixels, scaled to the screen width)
const SLOTS = {
  '-3': { x: -700, w: 236, h: 356, z: 1, o: 0 },
  '-2': { x: -498, w: 236, h: 356, z: 2, o: 1 },
  '-1': { x: -309, w: 252, h: 396, z: 3, o: 1 },
  '0': { x: 0, w: 250, h: 372, z: 1, o: 1 },
  '1': { x: 309, w: 252, h: 396, z: 3, o: 1 },
  '2': { x: 498, w: 236, h: 356, z: 2, o: 1 },
  '3': { x: 700, w: 236, h: 356, z: 1, o: 0 },
};
// without the Kindle the middle cover is the biggest and on top
const CENTER_NO_KINDLE = { x: 0, w: 280, h: 420, z: 4, o: 1 };
const SCREEN_W = 250;
const SCREEN_GAP = 36; // black space between covers inside the Kindle

const mod = (n, m) => ((n % m) + m) % m;

function Arrow({ dir }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d={dir === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function KindleShowcase({
  books = DEFAULT_BOOKS,
  interval = 2800,
  kindle = true,
  eyebrow = 'Our Published Work',
  title = 'Books We Have Brought to Life',
  text = 'From the first draft to the Kindle store, our writers, editors and designers help authors publish books readers love. Here are a few of the titles we have worked on.',
  points = POINTS,
}) {
  const [step, setStep] = useState(0); // grows forever; the cover is books[step % length]
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => {
      if (!document.hidden) setStep((s) => s + 1);
    }, interval);
    return () => clearInterval(id);
  }, [interval, paused, step]);

  const around = [];
  for (let k = step - 3; k <= step + 3; k++) around.push(k);
  const book = (k) => books[mod(k, books.length)];
  const current = book(step);

  return (
    <section className="ks" aria-labelledby="ks-title">
      <style>{CSS}</style>

      <div className="ks-head">
        <span className="ks-eyebrow">{eyebrow}</span>
        <h2 id="ks-title" className="ks-title">{title}</h2>
        <p className="ks-text">{text}</p>
        {points && points.length ? (
          <ul className="ks-points">
            {points.map((p) => (
              <li key={p}>
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="ks-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {/* covers */}
        {around.map((k) => {
          const slot = k - step;
          const s = slot === 0 && !kindle ? CENTER_NO_KINDLE : SLOTS[String(slot)];
          const b = book(k);
          const side = slot === -1 || slot === 1;
          const hidden = slot === 0 && kindle; // the Kindle shows this one
          return (
            <img
              key={k}
              className="ks-cover"
              src={b.src}
              alt={hidden || Math.abs(slot) > 2 ? '' : b.alt}
              aria-hidden={hidden || Math.abs(slot) > 2 || undefined}
              loading="lazy"
              onClick={side ? () => setStep(k) : undefined}
              style={{ '--x': s.x, '--w': s.w, '--h': s.h, zIndex: s.z, opacity: s.o, cursor: side ? 'pointer' : 'default' }}
            />
          );
        })}

        {/* the Kindle, with its own strip of covers on the screen */}
        {kindle ? (
          <div className="ks-kindle">
            <span className="ks-brand" aria-hidden="true">


            </span>
            <div className="ks-screen">
              <div className="ks-strip" style={{ '--pos': step }}>
                {[step - 1, step, step + 1].map((k) => (
                  <img key={k} src={book(k).src} alt={k === step ? book(k).alt : ''} style={{ '--k': k }} />
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="ks-controls">
        <button type="button" className="ks-arrow" aria-label="Previous book" onClick={() => setStep((s) => s - 1)}>
          <Arrow dir="left" />
        </button>
        <p className="ks-now" aria-live="polite">{current.alt}</p>
        <button type="button" className="ks-arrow" aria-label="Next book" onClick={() => setStep((s) => s + 1)}>
          <Arrow dir="right" />
        </button>
      </div>

      <div className="ks-cta">
        <button type="button" className="ks-btn ks-btn--main" data-bs-toggle="modal" data-bs-target="#quote">
          Publish Your Book
        </button>
        <button type="button" className="ks-btn ks-btn--line chat">
          Talk to an Expert
        </button>
      </div>
    </section>
  );
}

// colours come from the site theme (--dark-color / --clr-1 in the old chat.php style), with fallbacks
const CSS = `
.ks{--u:calc(100cqw/1272);--ks-dark:rgb(var(--dark-color,6,3,64));--ks-acc:rgb(var(--clr-1,50,210,181));
  container-type:inline-size;position:relative;overflow:hidden;padding:72px 0 64px;
  background:radial-gradient(60% 55% at 50% 58%,rgba(var(--clr-1,50,210,181),.10),transparent 70%),#fff}
.ks-head{max-width:760px;margin:0 auto 8px;padding:0 16px;text-align:center}
.ks-eyebrow{display:inline-block;padding:6px 16px;border-radius:999px;font-size:13px;font-weight:700;letter-spacing:.12em;
  text-transform:uppercase;color:var(--ks-dark);background:rgba(var(--clr-1,50,210,181),.16)}
.ks-title{margin:16px 0 12px;font-size:clamp(28px,4vw,44px);line-height:1.15;font-weight:800;color:var(--ks-dark);text-wrap:balance}
.ks-text{margin:0 auto;max-width:620px;font-size:16px;line-height:1.7;color:#55566b}
.ks-points{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 22px;margin:20px 0 0;padding:0;list-style:none}
.ks-points li{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:600;color:var(--ks-dark)}
.ks-points svg{flex:none;padding:3px;border-radius:50%;color:#fff;background:var(--ks-acc);box-sizing:content-box}
.ks-stage{position:relative;height:calc(540*var(--u));min-height:300px}
@media (max-width:700px){.ks{--u:calc(100vw/600);padding:52px 0 48px}.ks-stage{min-height:0;height:calc(470*var(--u))}}
.ks-cover{position:absolute;left:50%;top:50%;display:block;object-fit:cover;border-radius:3px;
  width:calc(var(--w)*var(--u));height:calc(var(--h)*var(--u));
  transform:translate(calc(-50% + var(--x)*var(--u)),-50%);
  box-shadow:0 10px 24px rgba(0,0,0,.18);
  transition:transform .9s cubic-bezier(.65,0,.35,1),width .9s cubic-bezier(.65,0,.35,1),height .9s cubic-bezier(.65,0,.35,1),opacity .6s ease}
.ks-kindle{position:absolute;left:50%;top:50%;z-index:10;transform:translate(-50%,-50%);
  width:calc(322*var(--u));height:calc(448*var(--u));box-sizing:border-box;
  border-radius:calc(24*var(--u));background:#0b0b0b;border:calc(3*var(--u)) solid #8d8d8d;
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
.ks-controls{display:flex;align-items:center;justify-content:center;gap:18px;margin-top:6px;padding:0 16px}
.ks-arrow{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;
  color:var(--ks-dark);background:#fff;border:1.5px solid rgba(var(--dark-color,6,3,64),.18);
  transition:background .25s,color .25s,border-color .25s}
.ks-arrow:hover,.ks-arrow:focus-visible{color:#fff;background:var(--ks-dark);border-color:var(--ks-dark)}
.ks-now{min-width:180px;max-width:320px;margin:0;font-size:15px;font-weight:700;text-align:center;color:var(--ks-dark);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ks-cta{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:26px;padding:0 16px}
.ks-btn{font-family:inherit;min-height:50px;padding:0 28px;border-radius:999px;font-size:15px;font-weight:700;cursor:pointer;
  transition:transform .25s,box-shadow .25s,background .25s,color .25s}
.ks-btn--main{color:#fff;background:var(--ks-dark);border:0;box-shadow:0 12px 24px -12px rgba(var(--dark-color,6,3,64),.7)}
.ks-btn--main:hover{transform:translateY(-2px);background:var(--ks-acc);color:var(--ks-dark)}
.ks-btn--line{color:var(--ks-dark);background:transparent;border:1.5px solid var(--ks-dark)}
.ks-btn--line:hover{color:#fff;background:var(--ks-dark)}
@media (max-width:520px){.ks-btn{width:100%}.ks-now{min-width:0;flex:1}}
/* the site's style.css styles every button with !important; keep this section's own look */
.ks .ks-arrow{padding:0!important;border-radius:50%!important;border:1.5px solid rgba(var(--dark-color,6,3,64),.18)!important;background:#fff!important;color:var(--ks-dark)!important}
.ks .ks-arrow:hover,.ks .ks-arrow:focus-visible{background:var(--ks-dark)!important;color:#fff!important;border-color:var(--ks-dark)!important}
.ks .ks-btn{padding:0 28px!important;border-radius:999px!important;text-transform:none!important}
.ks .ks-btn--main{background:var(--ks-dark)!important;color:#fff!important}
.ks .ks-btn--main:hover{background:var(--ks-acc)!important;color:var(--ks-dark)!important}
.ks .ks-btn--line{background:transparent!important;color:var(--ks-dark)!important;border:1.5px solid var(--ks-dark)!important}
.ks .ks-btn--line:hover{background:var(--ks-dark)!important;color:#fff!important}
.ks .ks-points{margin:20px 0 0!important}
@media (prefers-reduced-motion:reduce){.ks-cover,.ks-strip,.ks-btn{transition:none}}
`;
