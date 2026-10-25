import { IMG } from "../lib/images";

const TEACHERS = [
  {
    name: "Maya Ellison",
    img: IMG.teacherMaya,
    alt: "Portrait of Maya Ellison outdoors in soft natural light",
    speciality: "Hatha · Alignment",
    text: "Fifteen years of practice, taught at a pace that lets alignment actually land.",
  },
  {
    name: "Jonah Reyes",
    img: IMG.teacherJonah,
    alt: "Portrait of Jonah Reyes smiling against a pale wall",
    speciality: "Vinyasa · Sunrise Flow",
    text: "Former dancer. Builds sequences the way music is built — phrase, breath, rest.",
  },
  {
    name: "Priya Raman",
    img: IMG.teacherPriya,
    alt: "Portrait of Priya Raman smiling warmly at the camera",
    speciality: "Yin · Meditation",
    text: "Teaches stillness the way others teach movement: patiently, and in layers.",
  },
  {
    name: "Tomas Lindqvist",
    img: IMG.teacherTomas,
    alt: "Portrait of Tomas Lindqvist wearing glasses, against a grey backdrop",
    speciality: "Breathwork",
    text: "Twenty years of breath practice. Believes the exhale is where the work happens.",
  },
];

export default function Teachers() {
  return (
    <section className="section" id="teachers" aria-labelledby="teachers-heading">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Teachers</p>
          <h2 id="teachers-heading">
            Patient people, <em>deep practice</em>
          </h2>
          <p>
            Four teachers, no substitutes carousel. You will learn their cues;
            they will learn your name.
          </p>
        </div>

        <div className="teachers-grid">
          {TEACHERS.map((t, i) => (
            <article className="teacher" key={t.name} data-reveal data-delay={(i % 4) * 0.08}>
              <div className="teacher-media">
                <img src={t.img} alt={t.alt} loading="lazy" />
              </div>
              <h3>{t.name}</h3>
              <p className="speciality">{t.speciality}</p>
              <p>{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
