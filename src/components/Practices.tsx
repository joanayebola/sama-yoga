import { IMG } from "../lib/images";

const CLASSES = [
  {
    name: "Hatha",
    img: IMG.hatha,
    alt: "A woman holding a grounded yoga pose on a mat beside a bright window",
    duration: "75 min",
    intensity: "Gentle",
    text: "Foundational postures held long enough to understand them. Alignment, breath, and space between efforts.",
  },
  {
    name: "Vinyasa Flow",
    img: IMG.vinyasa,
    alt: "A woman in tree pose on a beach, arms raised toward the sky",
    duration: "60 min",
    intensity: "Moderate",
    text: "Breath-led sequences that link movement to movement — steady, warming, and quietly demanding.",
  },
  {
    name: "Yin",
    img: IMG.yin,
    alt: "A woman in a deep forward fold on a mat in soft light at home",
    duration: "75 min",
    intensity: "Restful",
    text: "Long, supported stillness. Poses are held for minutes at a time while the room — and the mind — settles.",
  },
  {
    name: "Breathwork & Meditation",
    img: IMG.breathwork,
    alt: "Close view of hands resting in a meditation mudra, in black and white",
    duration: "45 min",
    intensity: "Restful",
    text: "Guided breathing and seated meditation. The simplest practice we teach, and for many, the hardest.",
  },
  {
    name: "Sunrise Flow",
    img: IMG.sunrise,
    alt: "A small group practising tree pose together on the sand in morning light",
    duration: "60 min",
    intensity: "Moderate",
    text: "An early, energising flow to begin the day — in the studio in winter, on the shore when the light allows.",
  },
  {
    name: "Prenatal",
    img: IMG.prenatal,
    alt: "A woman resting cross-legged on a soft blanket in warm sunlight",
    duration: "60 min",
    intensity: "Gentle",
    text: "Gentle movement, breath and deep rest for every stage of pregnancy, led by teachers trained in prenatal care.",
  },
];

export default function Practices() {
  return (
    <section className="section practices" id="practices" aria-labelledby="practices-heading">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Practices</p>
          <h2 id="practices-heading">
            Six ways to <em>slow down</em>
          </h2>
          <p>
            Every class ends with rest. Arrive as you are — mats, props and
            tea are waiting.
          </p>
        </div>

        <div className="cards">
          {CLASSES.map((c, i) => (
            <article className="card" key={c.name} data-reveal data-delay={(i % 3) * 0.08}>
              <div className="card-media">
                <img src={c.img} alt={c.alt} loading="lazy" />
              </div>
              <div className="card-body">
                <h3>{c.name}</h3>
                <div className="card-meta">
                  <span>{c.duration}</span>
                  <span className="intensity">{c.intensity}</span>
                </div>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
