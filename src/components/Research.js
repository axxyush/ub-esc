import React from "react";
import r1 from "../images/r1.png";
import r2 from "../images/r2.jpg";
import r3 from "../images/r3.png";
import r4 from "../images/r4.png";
import r5 from "../images/r5.png";
import r6 from "../images/r6.png";
import r7 from "../images/r7.png";
import r8 from "../images/r8.png";
import r9 from "../images/r9.png";

function Research() {
  return (
    <>
      <div className="research-container">
        <h3
          className="display-6 fw-bold"
          style={{ color: "red", margin: "10px", marginBottom: "10px" }}
        >
          Smart Health: Applications and Technologies
        </h3>
        <div className="card-research-border">
          <div className="card-research">
            <img
              style={{ borderRadius: "150px", height: "250px" }}
              src={r1}
              alt="R1"
            />
            <div className="card-research-des">
              <h3>
                <b>Smart Insole: Ubiquitous Gait Sensing in Daily Life</b>
              </h3>
              <p>
                Gait is a key locomotion feature and has been applied in many
                healthcare and medical applications. In this project, we design
                and develop a revolutionary gait sensing device, called Smart
                Insole. Smart Insole looks like a normal insole and is equipped
                with an array of pressure and motion sensors inside. Through a
                mobile application on a smartphone, this transformative wearable
                system can provide real-time, high-fidelity and pervasive gait
                sensing services in daily life. To date, we have applied Smart
                Insole into a series of health applications in six domains:
              </p>
              <ul>
                <li>Medical Diagnosis (e.g., gait as a biomarker)</li>
                <li>Healthcare (e.g., daily life activity monitoring)</li>
                <li>Safety (e.g., fall detection, injury prevention)</li>
                <li>Sports (e.g., balance gaming)</li>
                <li>Biometrics (e.g, gait biometrics)</li>
                <li>Human-Computer Interface (e.g., action recognition)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-research-border">
          <div className="card-research">
            <div className="card-research-des">
              <h3>
                <b>Exploring Multi-biofeedbacks for Timely Autism Diagnosis</b>
              </h3>
              <p>
                Autism is a neurodevelopmental disorder, and 1.5% of children
                (one out 68 children) in the United States are diagnosed with
                autism as of 2014. The current screening for autism highly
                depends on the subjective judgment of parents and primary
                medical doctors. Specifically, screening for autism relies
                solely on observations conducted during a routine well visit,
                and the so-called "wait and watching" screening convention often
                results in a 9-24 month delay in pursuing an autism diagnostic
                assessment. It is an urgent demand to eliminate the current
                approach of “watch and wait” and move toward a rapid, precise,
                and objective screening method for autism. The goal of this
                project is to develop such a cost-effective, widely-accessible,
                and quantitative tool through multi-dimensional analysis, which
                enables (a) an efficient screening process, (b) shortening the
                amount of time necessary to receive a diagnosis, (c) providing a
                more natural screening environment for children and (d)
                beginning early intervention services of autism. This
                transformative screening solution of autism is expected to
                promote timely diagnosis and intervention for autism, which
                enables that children with autism can gain significantly better
                progress and eventually become indistinguishable from same-aged
                peers with typical development.
              </p>
            </div>
            <img style={{ height: "200px" }} src={r2} alt="R2" />
          </div>
        </div>
        <div className="card-research-border">
          <div className="card-research">
            <img
              style={{ height: "260px", borderRadius: "100px" }}
              src={r3}
              alt="R2"
            />
            <div className="card-research-des">
              <h3>
                <b>Wearable Ecosystem and Pervasive Health</b>
              </h3>
              <p>
                Pervasive healthcare technology is seeking new solutions to make
                medical resources, including medical facilities, medicine and
                professionals, accessible to anyone, anytime, anywhere. It
                enables reducing the medical cost, increasing the engagement
                between patients and doctors, and promoting inclusion and
                connectivity of individuals to the world. The ultimate goal of
                pervasive healthcare is to revolutionize the operational model
                of the medical system, a.k.a. “Pervasive healthcare will
                transform health related services from the system based on
                episodic examination, disease diagnosis and treatment to one
                with continuous monitoring, disease prediction and prevention."
              </p>
              <br />
              <p>
                To echo this trend, our team has prototyped a set of wearable
                sensors (see the figure on the left) to seamlessly and
                comprehensively acquire user's need and information. These
                technologies will make our healthcare system more effective and
                economic, which benefits both billions of individuals and the
                societies in which we live.
              </p>
            </div>
          </div>
        </div>
        <div className="card-research-border">
          <div className="card-research">
            <div className="card-research-des">
              <h3>
                <b>
                  Cooperative Sensing and Computing Architectures for
                  Next-Generation Wearables
                </b>
              </h3>
              <p>
                This project proposes a novel cooperative and adaptive sensing
                and Computing architecture for wearable frontends. The new
                architecture can provide dramatically enhance energy-efficiency,
                quality of service and usability towards next-generation
                wearable applications, especially towards medical and healthcare
                applications. Through a cross-level integration from devices,
                circuits, architectures and application, the proposed
                architecture possesses dynamics, intelligence, adaptivity and
                reconfigurability, which empowers its capability beyond sensing.
              </p>
            </div>
            <img style={{ height: "110px" }} src={r4} alt="R2" />
          </div>
        </div>
        <hr />
        <h3
          className="display-6 fw-bold"
          style={{ color: "red", margin: "10px", marginBottom: "10px" }}
        >
          Emerging Biometrics
        </h3>

        <div className="card-research-border">
          <div className="card-research">
            <img style={{ height: "130px" }} src={r5} alt="R5" />
            <div className="card-research-des">
              <h3>
                <b>Brain Password: an ERP-based secure biometrics</b>
              </h3>
              <p>
                Cryptographic systems often rely on the secrecy of cryptographic
                credentials; however, these are vulnerable to eavesdropping and
                can resist neither a user's intentional disclosure nor coercion
                attacks where the user is forced to reveal the credentials.
                Conventional biometric keys (e.g., fingerprint, iris, etc.),
                unfortunately, can still be surreptitiously duplicated or
                adversely revealed. The objective of this research is to
                investigate a new psychophysiological approach for secure and
                trustworthy user authentication via non-volitional components of
                the electroencephalogram (EEG) brainwave responses.
              </p>
            </div>
          </div>
        </div>
        <div className="card-research-border">
          <div className="card-research">
            <div className="card-research-des">
              <h3>
                <b>Heart Scan: a Non-contact Heart-based biometrics</b>
              </h3>
              <p>
                Most traditional security systems authenticate a user only at
                the initial log-in session. As a result, it is possible for
                another user, authorized or unauthorized, to access the system
                information, with or without the permission of the signed-on
                user, until the initial user logs out. This could be a critical
                security flaw even for high-security systems. Traditional
                one-time (e.g., password) or two-factor (e.g., password with
                fingerprint) authentication methods are no longer sufficient.
                Continuous authentication is a form of dynamic, risk-based
                authentication that changes the perspective of authentication
                from an event to a process, and has the potential to address the
                vulnerability of existing security systems by continuously
                verifying the user's identity during the session use. This
                interdisciplinary team explores a novel continuous
                authentication through a transformative non-contact heart-based
                biometrics. This project could transform the understanding of
                non-volatile components in cardiac motion, and convert this new
                knowledge and related technologies into improved security in
                increasingly vulnerable cyberspace.
              </p>
            </div>
            <img style={{ height: "150px" }} src={r6} alt="R6" />
          </div>
        </div>
        <div className="card-research-border">
          <div className="card-research">
            <img style={{ height: "130px" }} src={r7} alt="R7" />
            <div className="card-research-des">
              <h3>
                <b>Eye-based Biometrics for Mobile User Authentication</b>
              </h3>
              <p>
                As mobile technology grows rapidly, the smartphone has become
                indispensable for transmitting private user data, storing the
                sensitive corporate files, and conducting secure payment
                transactions. However, with mobile security research lagging,
                smartphones are extremely vulnerable to unauthenticated access.
                In this project, we propose, EyeVeri, a novel eye-movement-based
                authentication system for smartphoned security protection.
                Specifically, EyeVeri tracks human eye movement through the
                built-in front camera and applies the signal processing and
                pattern matching techniques to explore volitional and
                non-volitional gaze patterns for access authentication.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <h3
          className="display-6 fw-bold"
          style={{ color: "red", margin: "10px", marginBottom: "10px" }}
        >
          Advanced Technologies for 3D Printing
        </h3>
        <div className="card-research-border">
          <div className="card-research">
            <img style={{ height: "150px" }} src={r8} alt="R8" />
            <div className="card-research-des">
              <h3>
                <b> Accelerating 3D Printing in Mass Customization</b>
              </h3>
              <p>
                This project aims to develop a transformative computational
                paradigm of 3D printing in mass customization. The project will
                pursue two novel and complementary objectives:{" "}
              </p>
              <ul>
                <li>
                  Design a suite of quality-guaranteed geometric algorithms for
                  the scalable and time-efficient pre-fabrication computation
                  framework
                </li>
                <li>
                  Develop a low-complexity and efficient computing system to
                  facilitate and accelerate the use of these methods and
                  algorithms in Objective1.
                </li>
              </ul>
              <p>
                This new computer system focuses on domain-specific computing
                platforms as the next disruptive technology for
                power-performance-runtime efficiency improvement.
              </p>
            </div>
          </div>
        </div>
        <div className="card-research-border">
          <div className="card-research">
            <div className="card-research-des">
              <h3>
                <b> Securing 3D Printing Process</b>
              </h3>
              <p>
                Additive manufacturing, also known as 3D printing, has been
                increasingly applied to fabricate highly intellectual-property
                (IP) sensitive products. Compared with the conventional
                manufacturing techniques, 3D printing has the following
                advantages:
              </p>
              <ul>
                <li>
                  <b>Efficiency:</b> fast and cost-efficient production with
                  less waste material
                </li>
                <li>
                  <b>Creativity:</b> flexible with more complex geometries
                  construction
                </li>
                <li>
                  <b>Accessibility:</b> affordable price of 3D printers and
                  materials
                </li>
              </ul>
              <p>
                The global value of 3D printing is estimated to reach over 20.2
                billion dollars by 2021. However, the related IP protection
                issues in 3D printers are still under-explored. This project
                plans to explore vulnerabilities and mitigation opportunities in
                additive manufacturing process.
              </p>
            </div>
            <img style={{ height: "150px" }} src={r9} alt="R9" />
          </div>
        </div>
      </div>

      <hr />
      <h3
        className="display-6 fw-bold"
        style={{ color: "red", margin: "10px", marginBottom: "10px" }}
      >
        Sponsors:
      </h3>
      <div className="sponsor-images">
        <img
          className="sponsors"
          src="https://cse.buffalo.edu/~wenyaoxu/images/nsf.jpg"
          alt="NSF"
          style={{ marginLeft: "35px" }}
        />
        <img
          className="sponsors"
          src="https://cse.buffalo.edu/~wenyaoxu/images/nih.png"
          alt="National Institutes of Health"
          style={{ marginLeft: "35px" }}
        />

        <img
          className="sponsors"
          src="https://cse.buffalo.edu/~wenyaoxu/images/niosh.jpg"
          alt="NIOSH"
          style={{ marginLeft: "35px" }}
        />
        <img
          className="sponsors"
          src="https://cse.buffalo.edu/~wenyaoxu/images/afosr.jpg"
          alt="NIOSH"
          style={{ marginLeft: "35px" }}
        />
        <img
          className="sponsors"
          src="https://cse.buffalo.edu/~wenyaoxu/images/index.png"
          alt="NIOSH"
          style={{ marginLeft: "35px" }}
        />
      </div>

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

export default Research;
