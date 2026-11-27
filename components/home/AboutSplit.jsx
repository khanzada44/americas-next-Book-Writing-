import Icon from './Icon';
import { brand } from './brand';

const POINTS = [
  'Professional book writing at affordable rates',
  'Writers, editors and designers under one roof',
  'Tools and guidance to grow as an author',
  'A team that cares about your story',
];

/* Who we are: photo on one side, short story and points on the other. */
export default function AboutSplit() {
  return (
    <section className="ph-sec">
      <div className="ph-wrap ph-about">
        <div className="ph-about__media">
          <img src="/assets/img/01-1.png" alt="Happy author holding her book idea" loading="lazy" />
          <div className="ph-about__chip">
            <Icon name="pen" size={20} />
            <span>From idea<br />to published book</span>
          </div>
        </div>
        <div className="ph-about__copy">
          <span className="ph-eyebrow">Leading book writing experts</span>
          <h2 className="ph-h2">Professional book writing that turns ideas into best-sellers</h2>
          <p>
            Everyone has a story worth telling. At {brand.name}, our ghostwriters, editors and book consultants work with
            you at every step, so your book keeps your voice and reaches the readers it was written for.
          </p>
          <p>
            Whether you have a rough idea or a half-finished manuscript, we plan, write, polish and publish it with you,
            and keep you involved in every decision.
          </p>
          <ul className="ph-checks">
            {POINTS.map((p) => (
              <li key={p}><Icon name="check" size={16} /> {p}</li>
            ))}
          </ul>
          <div className="ph-row">
            <button type="button" className="ph-btn ph-btn--dark" data-bs-toggle="modal" data-bs-target="#quote">
              Get a Free Quote
            </button>
            <button type="button" className="ph-btn ph-btn--line chat">Live Chat</button>
          </div>
        </div>
      </div>
    </section>
  );
}
