import { IMG } from "../lib/images";

export default function Visit() {
  return (
    <section className="section" id="visit" aria-labelledby="visit-heading">
      <div className="wrap visit-grid">
        <div className="visit-media" data-reveal>
          <img
            src={IMG.visit}
            alt="A calm, sunlit room with a low bed of cushions and morning light through sheer curtains"
            loading="lazy"
          />
        </div>

        <div data-reveal>
          <p className="eyebrow">Visit</p>
          <h2
            id="visit-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.18,
              margin: "1.1rem 0 2.2rem",
            }}
          >
            Come and sit in the room <em style={{ color: "var(--sage-deep)" }}>before</em> you
            commit to anything.
          </h2>

          <div className="visit-details">
            <div>
              <h3>Find us</h3>
              <address>
                214 Willow Lane
                <br />
                Open twenty minutes before every class
              </address>
            </div>
            <div>
              <h3>Hours</h3>
              <p>
                Monday – Friday · 6:45 – 19:30
                <br />
                Saturday – Sunday · 8:30 – 17:30
              </p>
            </div>
            <div>
              <h3>Write to us</h3>
              <p>
                <a href="mailto:hello@sama.yoga">hello@sama.yoga</a>
              </p>
            </div>
          </div>

          <div className="visit-cta" style={{ marginTop: "2.4rem" }}>
            <a className="btn btn-solid" href="mailto:hello@sama.yoga?subject=Booking%20a%20class">
              Book a class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
