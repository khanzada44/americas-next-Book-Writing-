import Icon from './Icon';
import { brand } from './brand';

const FAQS = [
  { q: 'What exactly is ghostwriting?', a: 'A ghostwriter writes your book for you, in your voice and from your ideas. You are credited as the author and keep all rights and royalties.' },
  { q: 'What is proofreading, and why is it important?', a: 'Proofreading is the final check for spelling, grammar, punctuation and formatting mistakes. Even a few errors can hurt reviews, so it is the last step before publishing.' },
  { q: 'How long does it take to write a book?', a: 'It depends on the length of the book, the research it needs and how quickly you review chapters. We agree on a clear timeline with you in your free consultation.' },
  { q: 'Will I own the rights to my book?', a: 'Yes. You keep full ownership, credit and royalties, and your ideas stay confidential.' },
  { q: 'Can you publish my book on Amazon?', a: 'Yes. We format your book and publish it on Amazon KDP, Barnes & Noble and other major stores as eBook, paperback or hardcover.' },
];

/* Questions on the left (native open / close), enquiry form on the right. */
export default function FaqContact() {
  return (
    <section className="ph-sec ph-sec--cream">
      <div className="ph-wrap ph-faq">
        <div>
          <span className="ph-eyebrow">FAQ</span>
          <h2 className="ph-h2">Frequently asked questions</h2>
          <div className="ph-faq__list">
            {FAQS.map((f, i) => (
              <details key={f.q} className="ph-faq__item" open={i === 0}>
                <summary>{f.q}<span className="ph-faq__icon"><Icon name="plus" size={18} /></span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <form className="ph-form" method="post" data-lead="1" noValidate>
          <h3>Tell us about your book</h3>
          <p>Get a free quote and a call from a book consultant.</p>
          <input type="hidden" name="cta1" defaultValue="1" />
          <input type="hidden" name="subject" defaultValue="Home Page Form" data-add-page-url="1" />
          <input type="hidden" name="url" defaultValue="" />
          <input type="hidden" name="domain" defaultValue="" />
          <label><span>Your name</span><input type="text" name="name" required autoComplete="name" /></label>
          <label><span>Email</span><input type="email" name="email" required autoComplete="email" /></label>
          <label><span>Phone</span><input type="tel" name="phone" required autoComplete="tel" /></label>
          <label><span>About your book</span><textarea name="message" rows={4} /></label>
          <button type="submit" className="ph-btn ph-btn--dark ph-btn--block">Get My Free Quote <Icon name="arrow" size={18} /></button>
          <small className="ph-form__note">Prefer to talk? Call <a href={brand.phoneLink}>{brand.phone}</a></small>
        </form>
      </div>
    </section>
  );
}
