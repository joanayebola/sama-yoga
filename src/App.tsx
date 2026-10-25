import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Intro from "./components/Intro";
import Band from "./components/Band";
import Practices from "./components/Practices";
import Schedule from "./components/Schedule";
import Teachers from "./components/Teachers";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import { initReveals, initParallax } from "./lib/anim";
import { IMG } from "./lib/images";

export default function App() {
  useEffect(() => {
    initReveals();
    initParallax();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Band
          src={IMG.bandStudio}
          alt="A person seated in meditation on a wooden deck as the sun rises through palm trees"
          caption="The first breath of the day is the easiest one."
        />
        <Practices />
        <Schedule />
        <Teachers />
        <Pricing />
        <Testimonials />
        <Visit />
        <Band
          src={IMG.bandLandscape}
          alt="A still river winding through a green valley beneath mountains at dawn"
          caption="Move slowly. Breathe deeply."
        />
      </main>
      <Footer />
    </>
  );
}
