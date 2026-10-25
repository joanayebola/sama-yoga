import { useEffect, useRef } from "react";
import { initBreath } from "../lib/anim";
import { IMG } from "../lib/images";

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (orbRef.current && wordsRef.current) {
      initBreath(orbRef.current, wordsRef.current);
    }
  }, []);

  return (
    <section className="hero" id="top">
      {/* The breath orb: the one signature motion on the page. */}
      <div className="breath-orb" ref={orbRef} aria-hidden="true" />
      <div className="breath-word" ref={wordsRef} aria-hidden="true">
        <span>inhale</span>
        <span>exhale</span>
      </div>

      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow">Yoga &amp; breathwork studio</p>
          <h1>
            Move slowly.
            <br />
            <em>Breathe deeply.</em>
          </h1>
          <p className="hero-sub">
            A quiet studio for unhurried practice — small classes, patient
            teachers, and room to arrive exactly as you are.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-solid" href="mailto:hello@sama.yoga?subject=Booking%20a%20class">
              Book a class
            </a>
            <a className="btn btn-ghost" href="#practices">
              Explore practices
            </a>
          </div>
        </div>

        <div className="hero-media" data-reveal>
          <img
            src={IMG.hero}
            alt="A yogi in a deep lunge on a rock, silhouetted against a sunset over the sea"
          />
        </div>
      </div>
    </section>
  );
}
