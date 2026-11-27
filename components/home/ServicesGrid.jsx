import Link from 'next/link';
import Icon from './Icon';

const SERVICES = [
  { icon: 'pen', title: 'Ghost Writing', text: 'Expert ghostwriters who capture your voice and turn your ideas into a compelling, finished book.', href: '/ghost-writing' },
  { icon: 'edit', title: 'Editing & Proofreading', text: 'Developmental edits, line edits and a final proofread so every page reads clean and professional.', href: '/book-proofreading' },
  { icon: 'book', title: 'Book Publishing', text: 'Formatting, ISBNs and publishing on Amazon KDP, Barnes & Noble and other major stores.', href: '/book-publishing' },
  { icon: 'megaphone', title: 'Book Marketing', text: 'Launch plans, author branding and promotion that put your book in front of the right readers.', href: '/book-promotion' },
  { icon: 'palette', title: 'Book Cover Design', text: 'Eye-catching covers designed for your genre that stand out on shelves and in search results.', href: '/book-cover-design' },
  { icon: 'headphones', title: 'Audio Books', text: 'Professional narration and production to publish your book on Audible and audio platforms.', href: '/audio-book' },
  { icon: 'layout', title: 'eBook Writing', text: 'Well-structured eBooks written and formatted for Kindle, Apple Books and every reading device.', href: '/ebook-writing' },
  { icon: 'video', title: 'Book Video Trailers', text: 'Short, cinematic trailers that bring your story to life on social media and your author page.', href: '/book-video' },
];

/* Everything we do, as cards that link to the service pages. */
export default function ServicesGrid() {
  return (
    <section className="ph-sec ph-sec--cream">
      <div className="ph-wrap">
        <div className="ph-head">
          <span className="ph-eyebrow">What we do</span>
          <h2 className="ph-h2">Book writing, publishing and marketing services for authors</h2>
          <p>One team for every stage of your book, so nothing gets lost between writers, designers and publishers.</p>
        </div>
        <div className="ph-services">
          {SERVICES.map((s) => (
            <Link key={s.title} href={s.href} className="ph-service">
              <span className="ph-service__icon"><Icon name={s.icon} size={26} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="ph-service__more">Learn more <Icon name="arrow" size={16} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
