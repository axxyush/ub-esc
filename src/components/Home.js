import React from "react";

import Hero from "./Hero";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          style={{ display: "flex", justifyContent: "center" }}
          href="#top"
          className="backontop"
        >
          Back on top
        </a>
      </div>
    </>
  );
}

export default Home;
