const QUOTES = [
  {
    text: (
      <>
        “I came for my back and stayed for my head. It is the only hour of my
        week that asks <em>nothing</em> of me.”
      </>
    ),
    by: "Elena M. — member since 2021",
  },
  {
    text: (
      <>
        “The teachers remember what your body did last week. That kind of
        attention is <em>rare</em>, and it changes how you practise.”
      </>
    ),
    by: "David O. — member since 2023",
  },
  {
    text: (
      <>
        “Yin on Sundays has quietly reorganised my life. I protect that hour
        the way I protect <em>sleep</em>.”
      </>
    ),
    by: "Sara K. — member since 2022",
  },
];

export default function Testimonials() {
  return (
    <section className="section" aria-labelledby="voices-heading">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Voices</p>
          <h2 id="voices-heading">
            From the <em>mats</em>
          </h2>
        </div>

        <div className="quotes">
          {QUOTES.map((q) => (
            <figure key={q.by} data-reveal>
              <blockquote>{q.text}</blockquote>
              <figcaption>{q.by}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
