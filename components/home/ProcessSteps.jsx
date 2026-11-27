const STEPS = [
  { title: 'Free consultation', text: 'Tell us about your idea, goals and timeline. We match you with the right writer and plan.' },
  { title: 'Outline & writing', text: 'Your writer builds the outline with you, then drafts chapter by chapter with your feedback.' },
  { title: 'Editing & design', text: 'Editors polish every page while designers create your cover and interior layout.' },
  { title: 'Publish & promote', text: 'We publish your book on major stores and help you launch it to the right readers.' },
];

/* How it works: four numbered steps on a line. */
export default function ProcessSteps() {
  return (
    <section className="ph-sec ph-sec--navy">
      <div className="ph-wrap">
        <div className="ph-head ph-head--light">
          <span className="ph-eyebrow ph-eyebrow--light">How it works</span>
          <h2 className="ph-h2">From first idea to published author in 4 steps</h2>
        </div>
        <ol className="ph-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="ph-step">
              <span className="ph-step__n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
