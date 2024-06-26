import React from "react";
import Projectitem from "./Projectitem";
import OralSpectra from "../images/OralSpectra.png";
import otomobile from "../images/otomobile.png";
import vocallens from "../images/vocallens.png";
import NoteMD from "../images/NoteMD.png";
import RFBio from "../images/RFbio.png";
import Omics from "../images/Omics.png";

function Projects() {
  return (
    <>
      <div className="album py-5 bg-body-tertiary">
        <h1
          style={{ marginBottom: "50px" }}
          className="display-5 fw-bold text-center text-dark"
        >
          Our Ongoing Projects
        </h1>

        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Projectitem
              title="OralHeal"
              description="A mobile spectral camera to assess the healing of oral wounds (e.g., extraction & implants)"
              img={OralSpectra}
            />
            <Projectitem
              title="OralSpectra"
              description="A mobile app that offers 3D scanning of teeth and tissue to identify common oral diseases."
              img={OralSpectra}
            />
            <Projectitem
              title="OtoMobile"
              description="A mobile system that evaluates hearing capability using auditory pupillary response (APR)."
              img={otomobile}
            />
            <Projectitem
              title="VocalLens"
              description="An analytical framework aimed at identifying the risk of specific language impairment (SLI)."
              img={vocallens}
              link="/vocallens"
            />
            <Projectitem
              title="BCIVocal"
              description="Technology that fuses brainwave and voice wave signals to produce high-quality audible speech."
              img={vocallens}
            />
            <Projectitem
              title="NoteMD"
              description="An AI system designed to convert audio recordings between patients and doctors into medical notes."
              img={NoteMD}
            />
            <Projectitem
              title="RFBio"
              description="A radio-frequency scanner developed to assess wounds underneath dressings."
              img={RFBio}
              link="/rfbio"
            />
            <Projectitem
              title="PA Omics"
              description="A new framework for analyzing photoacoustic raw signals and reconstructed data."
              img={Omics}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
