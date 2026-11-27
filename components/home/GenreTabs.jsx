'use client';

import { useState } from 'react';
import Icon from './Icon';
import { brand } from './brand';

const GENRES = [
  {
    name: 'Self-Help',
    title: 'Unlock your potential with expertly crafted self-help books',
    text: 'Self-help books give readers practical tools to change their lives. Our writers turn your experience and advice into clear, motivating chapters people want to finish.',
    covers: ['/assets/img/category/r-9.png', '/assets/img/category/r-2.png'],
  },
  {
    name: 'Science Fiction',
    title: 'Explore new worlds with gripping science fiction',
    text: 'From space opera to near-future thrillers, we help you build believable worlds, sharp technology and characters readers follow to the last page.',
    covers: ['/assets/img/category/r-3.png', '/assets/img/category/r-4.png'],
  },
  {
    name: 'Historical Fiction',
    title: 'Travel through time with authentic historical fiction',
    text: 'Careful research and rich storytelling bring past eras to life, with details that feel true and drama that keeps the pages turning.',
    covers: ['/assets/img/category/r-5.png', '/assets/img/category/r-6.png'],
  },
  {
    name: 'Mystery & Thriller',
    title: 'Unravel intriguing mysteries with page-turning thrillers',
    text: 'Tight plotting, clever clues and steady tension: our writers craft mysteries that keep readers guessing until the final reveal.',
    covers: ['/assets/img/category/r-7.png', '/assets/img/category/r-8.png'],
  },
  {
    name: 'Fantasy',
    title: 'Embark on magical adventures with enchanting fantasy',
    text: 'Magic systems, kingdoms and unforgettable heroes: we help you shape an epic world and a story that pulls readers in.',
    covers: ['/assets/img/category/r-9.png', '/assets/img/category/r-10.png'],
  },
  {
    name: 'Romance',
    title: 'Win hearts with romance readers fall in love with',
    text: 'Chemistry, tension and satisfying endings: our romance writers know what readers of every sub-genre expect and love.',
    covers: ['/assets/img/category/r-4.png', '/assets/img/category/r-2.png'],
  },
];

/* Genres we write: tabs on top, the chosen genre's text and two covers below. */
export default function GenreTabs() {
  const [active, setActive] = useState(0);
  const g = GENRES[active];

  return (
    <section className="ph-sec ph-sec--cream">
      <div className="ph-wrap">
        <div className="ph-head">
          <span className="ph-eyebrow">Genres</span>
          <h2 className="ph-h2">Book writing genres we specialize in</h2>
        </div>

        <div className="ph-tabs" role="tablist" aria-label="Book genres">
          {GENRES.map((item, i) => (
            <button key={item.name} type="button" role="tab" id={`ph-tab-${i}`} aria-selected={i === active}
              aria-controls="ph-genre-panel" className={`ph-tab${i === active ? ' is-active' : ''}`} onClick={() => setActive(i)}>
              {item.name}
            </button>
          ))}
        </div>

        <div className="ph-genre" role="tabpanel" id="ph-genre-panel" aria-labelledby={`ph-tab-${active}`} key={g.name}>
          <div className="ph-genre__copy">
            <h3>{g.name}</h3>
            <h4>{g.title}</h4>
            <p>{g.text}</p>
            <p>At {brand.name}, our {g.name.toLowerCase()} writers plan, write and polish your book so it is ready for publishing.</p>
            <div className="ph-row">
              <button type="button" className="ph-btn ph-btn--dark" data-bs-toggle="modal" data-bs-target="#quote">
                Write My {g.name} Book
              </button>
              <a className="ph-btn ph-btn--line" href={brand.phoneLink}><Icon name="phone" size={18} /> {brand.phone}</a>
            </div>
          </div>
          <div className="ph-genre__covers">
            {g.covers.map((src, i) => (
              <img key={src} src={src} alt={`${g.name} book cover ${i + 1}`} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
