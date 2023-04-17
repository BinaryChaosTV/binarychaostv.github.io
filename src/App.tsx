import { useState } from "react";
// Page Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Images
import headshot from "./assets/images/headshot.png";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero__container">
            <picture className="headshot">
              <img src={headshot} alt="Headshot of myself" />
            </picture>
            <h1 className="hero__title">Hi there! I'm Gabriel 👋🏻</h1>
            <p className="sr-only">HTML, CSS, JavaScript, VueJS, SASS</p>
            <ul className="stack">
              <li>
                <FontAwesomeIcon
                  icon={icon({ name: "html5", style: "brands" })}
                  size="2x"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={icon({ name: "css3", style: "brands" })}
                  size="2x"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={icon({ name: "sass", style: "brands" })}
                  size="2x"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={icon({ name: "js", style: "brands" })}
                  size="2x"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={icon({ name: "vuejs", style: "brands" })}
                  size="2x"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={icon({ name: "react", style: "brands" })}
                  size="2x"
                />
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
