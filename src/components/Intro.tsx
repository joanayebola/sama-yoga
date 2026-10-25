export default function Intro() {
  return (
    <section className="section" aria-labelledby="intro-heading">
      <div className="wrap intro-grid">
        <div data-reveal>
          <p className="eyebrow">Our philosophy</p>
          <h2 id="intro-heading" style={{ marginTop: "1.1rem" }}>
            Practice that leaves you <em>quieter</em> than it found you.
          </h2>
          <p className="facts">est. 2019 · two rooms · all levels welcome</p>
        </div>

        <div className="intro-copy" data-reveal>
          <p>
            Sama is a Sanskrit word for balance — not the kind you perform,
            but the kind you return to. Our classes are deliberately small and
            deliberately unhurried. We would rather you did five poses with
            your whole attention than fifty with half of it.
          </p>
          <p>
            There are no mirrors in our rooms and no leaderboards on our
            walls. Teachers offer variations for every body in the room, and
            rest is always an available pose. What we ask of you is simple:
            arrive a few minutes early, breathe, and let the hour be slow.
          </p>
          <blockquote className="pull-quote">
            “Yoga is the journey of the self, through the self, to the self —
            we simply keep the room quiet enough to hear it.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
