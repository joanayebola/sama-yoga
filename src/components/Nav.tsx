import { useEffect, useRef } from "react";
import { initNav } from "../lib/anim";

const LINKS = [
  { href: "#practices", label: "Practices" },
  { href: "#schedule", label: "Schedule" },
  { href: "#teachers", label: "Teachers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) initNav(ref.current);
  }, []);

  return (
    <header className="nav" ref={ref}>
      <div className="wrap nav-inner">
        <a className="wordmark" href="#top" aria-label="Sama Yoga — home">
          Sama
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-solid" href="mailto:hello@sama.yoga?subject=Booking%20a%20class">
          Book a class
        </a>
      </div>
    </header>
  );
}
