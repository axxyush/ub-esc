import React from "react";
import heroImg from "../images/heroImg.jpg";

function Hero() {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">
          UB Embedded Sensing and Computing (ESC)
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The Embedded Sensing and Computing (ESC) group at the University at
            Buffalo researches the intersection of hardware, operating systems,
            algorithms, and human factors, focusing on healthcare,
            manufacturing, and cybersecurity applications. Our work spans
            foundational hardware/software development to practical system
            implementation.
          </p>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container px-5">
            <img
              src={heroImg}
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
