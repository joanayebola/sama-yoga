export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <a className="wordmark" href="#top">
            Sama
          </a>
          <nav aria-label="Footer">
            <ul>
              <li>
                <a href="#practices">Practices</a>
              </li>
              <li>
                <a href="#schedule">Schedule</a>
              </li>
              <li>
                <a href="#teachers">Teachers</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#visit">Visit</a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="concept-line">
          Concept website built as a frontend showcase — photography via Unsplash.
        </p>
      </div>
    </footer>
  );
}
