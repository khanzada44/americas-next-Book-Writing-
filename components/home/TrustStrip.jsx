const LOGOS = [1, 2, 3, 4, 5, 6].map((n) => `/assets/img/Trusted-buisness/${n}.webp`);

/* "As featured in" logos, moving slowly in a loop. */
export default function TrustStrip() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section className="ph-trust" aria-label="Trusted by renowned businesses">
      <p className="ph-trust__label">Trusted by renowned businesses</p>
      <div className="ph-trust__mask">
        <div className="ph-trust__row">
          {row.map((src, i) => (
            <img key={i} src={src} alt={i < LOGOS.length ? 'Partner logo' : ''} aria-hidden={i >= LOGOS.length || undefined} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
