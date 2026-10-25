const TIERS = [
  {
    name: "Drop-in",
    price: "$22",
    per: "per class",
    text: "One class, whenever the week allows. Mat, props and tea included.",
    featured: false,
  },
  {
    name: "5-class pass",
    price: "$95",
    per: "valid 3 months",
    text: "Five classes to use slowly. Shareable with a friend — practice travels well.",
    featured: false,
  },
  {
    name: "Monthly",
    price: "$140",
    per: "per month",
    text: "Unlimited regular classes for a month, plus one guest pass. Our most-chosen rhythm.",
    featured: true,
  },
  {
    name: "Unlimited",
    price: "$180",
    per: "per month",
    text: "Every class, every workshop, priority booking and a monthly one-to-one.",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Pricing</p>
          <h2 id="pricing-heading">
            Simple, <em>honest</em> pricing
          </h2>
          <p>
            No joining fees, no contracts that outstay their welcome. Pause
            or cancel a membership whenever life changes.
          </p>
        </div>

        <div className="tiers">
          {TIERS.map((t, i) => (
            <article
              className={`tier${t.featured ? " tier-featured" : ""}`}
              key={t.name}
              data-reveal
              data-delay={(i % 4) * 0.08}
            >
              <h3>{t.name}</h3>
              <p className="price">
                {t.price} <small>{t.per}</small>
              </p>
              <p>{t.text}</p>
              <a
                className="btn btn-ghost"
                href={`mailto:hello@sama.yoga?subject=${encodeURIComponent(t.name)}`}
              >
                Choose {t.name}
              </a>
            </article>
          ))}
        </div>

        <p className="tier-note" data-reveal>
          Students and caregivers: talk to us — there is always a
          pay-what-you-can mat in the room.
        </p>
      </div>
    </section>
  );
}
