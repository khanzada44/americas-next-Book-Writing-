import Icon from './Icon';

const BENEFITS = [
  { icon: 'clock', title: 'Time efficiency', text: 'Streamlined writing and editing get your book finished on schedule, saving you valuable time.', img: '/assets/img/Professional-Expertise.webp', big: true },
  { icon: 'target', title: 'Customized approach', text: 'Every plan is tailored to your goals, voice and genre.' },
  { icon: 'award', title: 'Professional expertise', text: 'Seasoned writers, editors and designers with years of publishing experience.' },
  { icon: 'edit', title: 'Editing & proofreading', text: 'Careful edits so your manuscript is polished and error-free.' },
  { icon: 'insight', title: 'Industry insights', text: 'Guidance on publishing trends so you make informed decisions.', img: '/assets/img/Industry-Insights.webp', big: true },
  { icon: 'lock', title: 'Confidentiality & ownership', text: 'Your ideas stay private and you keep full rights and royalties to your book.', wide: true },
];

/* Why authors choose us: a bento grid, two cards with photos. */
export default function WhyUs() {
  return (
    <section className="ph-sec">
      <div className="ph-wrap">
        <div className="ph-head">
          <span className="ph-eyebrow">Why authors choose us</span>
          <h2 className="ph-h2">Benefits of partnering with the #1 book writing company in USA</h2>
        </div>
        <div className="ph-bento">
          {BENEFITS.map((b) => (
            <article key={b.title} className={`ph-benefit${b.big ? ' ph-benefit--photo' : ''}${b.wide ? ' ph-benefit--wide' : ''}`}
              style={b.img ? { backgroundImage: `linear-gradient(180deg,rgba(6,3,64,.15),rgba(6,3,64,.92)),url('${b.img}')` } : undefined}>
              <span className="ph-benefit__icon"><Icon name={b.icon} size={22} /></span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
