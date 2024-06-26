import React from "react";
import vocallens from "../images/vocallens.png";

function Vocallens() {
  return (
    <>
      {/* Hero */}
      <div className="px-4 pt-5 container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 lh-1 fw-bold ">
              VocalLens: Revolutionizing Vocal Health Analysis
            </h1>
            <p className="lead">
              Empowering you to monitor your vocal health effortlessly with just
              a smartphone.
            </p>
            <div className="my-4 d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button className="downloadProject">Download</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={vocallens} alt="" width={620} />
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div
        id="about"
        className="position-relative overflow-hidden p-3 m-md-3 text-center"
      >
        <div className="col-md-8 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Welcome to VocalLens!</h1>
          <h3 className="fw-normal  mb-4 my-4">
            This project introduces a framework for screening Specific Language
            Impairment (SLI) in children by detecting phoneme-level
            mispronunciations. It translates these detections into symbolic
            sequences for precise assessment, achieving high accuracy with AUC
            over 0.71 and a recall rate up to 71.5% on the CHILDES dataset.
          </h3>
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
      </div>

      {/* How it Works */}
      <h2
        style={{ textAlign: "center" }}
        className="display-7 fw-bold  lh-1 mb-3"
      >
        How VocalLens Works
      </h2>
      <section>
        <div className="steps">
          <article className="card-steps">
            <div className="card-img">
              <div className="card-imgs pv delete">
                <img
                  style={{ height: "100%", marginLeft: "10%" }}
                  // src={stepone}
                  alt="Taking photo of oral cavity"
                />
              </div>
            </div>
            <div className="project-info">
              <div className="flex">
                <div className="project-title">Step 1</div>
              </div>
              <span className="lighter">
                Record a voice sample using the VocalLens app.
              </span>
            </div>
          </article>

          <article className="card-steps">
            <div className="card-img">
              <div className="card-imgs pv delete">
                <img
                  style={{ height: "100%", marginLeft: "10%" }}
                  // src={steptwo}
                  alt="Taking photo of oral cavity"
                />
              </div>
            </div>
            <div className="project-info">
              <div className="flex">
                <div className="project-title">Step 2</div>
              </div>
              <span className="lighter">
                The app analyzes the voice sample using advanced algorithms.
              </span>
            </div>
          </article>

          <article className="card-steps">
            <div className="card-img">
              <div className="card-imgs pv delete">
                <img
                  style={{ height: "100%", marginLeft: "10%" }}
                  // src={stepthree}
                  alt="Taking photo of oral cavity"
                />
              </div>
            </div>
            <div className="project-info">
              <div className="flex">
                <div className="project-title">Step 3</div>
              </div>
              <span className="lighter">
                Receive detailed results and suggestions for vocal care.
              </span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Vocallens;
