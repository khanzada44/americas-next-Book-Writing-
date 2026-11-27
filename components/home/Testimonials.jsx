import Icon from './Icon';
import { brand } from './brand';

const REVIEWS = [
  { 
    name: 'Sarah T.', 
    role: 'Novelist', 
    avatar: '/assets/img/user-4.webp',
    text: `${brand.name} created a gem from my book idea! The writers captured the heart of my story, and the editing and publishing went smoothly. I am thrilled with the finished book.` 
  },
  { 
    name: 'John M.', 
    role: 'Business author', 
    avatar: '/assets/img/user-2.webp',
    text: 'The professionalism and creativity of their ghostwriters improved my project. They understood my idea and delivered a book beyond my expectations.' 
  },
  { 
    name: 'Emily S.', 
    role: 'First-time author', 
    avatar: '/assets/img/user-3.webp',
    text: 'Their book writing experts helped me realize my goal of becoming an author. Their attention to detail is admirable, and I love the final version.' 
  },
  { 
    name: 'Tina K.', 
    role: 'Memoir author', 
    avatar: '/assets/img/user-1.webp',
    text: 'Every word reflects their love for storytelling. The process was interactive and positive, and I am so excited my book is published.' 
  },
];

/* What authors say: four review cards. */
export default function Testimonials() {
  return (
    <section className="ph-sec">
      <div className="ph-wrap">
        <div className="ph-head">
          <span className="ph-eyebrow">Author stories</span>
          <h2 className="ph-h2">Hesitant to hire us? Hear it from our authors</h2>
        </div>
        <div className="ph-reviews">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="ph-review">
              <span className="ph-review__quote"><Icon name="quote" size={28} /></span>
              <span className="ph-stars">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={15} fill="currentColor" />)}</span>
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <img className="ph-avatar" src={r.avatar} alt={r.name} />
                <span><strong>{r.name}</strong><small>{r.role}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}