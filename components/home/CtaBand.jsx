import Icon from './Icon';
import { brand } from './brand';

/* Big call to action between sections. */
export default function CtaBand() {
  return (
    <section className="ph-cta-wrap">
      <div className="ph-wrap">
        <div className="ph-cta">
          <div>
            <h2>Ready to become a best-selling author?</h2>
            <p>Join the authors who turned their ideas into published books with {brand.name}. Your consultation is free.</p>
          </div>
          <div className="ph-row">
            <button type="button" className="ph-btn ph-btn--accent" data-bs-toggle="modal" data-bs-target="#quote">
              Get Started <Icon name="arrow" size={18} />
            </button>
            <a className="ph-btn ph-btn--ghost" href={brand.phoneLink}><Icon name="phone" size={18} /> {brand.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
