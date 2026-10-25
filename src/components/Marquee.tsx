const WORDS = ["hatha", "vinyasa", "yin", "breathwork", "meditation"];

/** The page's single marquee: one slow, quiet pass of the practice names. */
export default function Marquee() {
  // One track, two identical halves — the -50% keyframe loop stays seamless.
  const half = (ariaHidden: boolean) => (
    <span style={{ display: "inline-flex" }} aria-hidden={ariaHidden || undefined}>
      {Array.from({ length: 3 }).map((_, r) =>
        WORDS.map((w, i) => (
          <span key={`${r}-${i}`}>
            {w} <span className="dot">·</span>{" "}
          </span>
        ))
      )}
    </span>
  );

  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {half(false)}
        {half(true)}
      </div>
    </div>
  );
}
