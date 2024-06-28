import React from "react";
import professorXu from "../images/professorXu.png";

function About() {
  return (
    <>
      <div id="profile" className="profile-border">
        <div className="container professor">
          <img src={professorXu} alt="Professor Xu" />
          <div className="professorDescription">
            <h3>
              <b>Wenyao Xu</b>
            </h3>
            <p>Professor and Associate Department Chair</p>
            <a href="https://engineering.buffalo.edu/computer-science-engineering.html">
              Department of Computer Science & Engineering
            </a>
            <br />
            <a href="https://www.buffalo.edu">
              University at Buffalo, the State University of New York (SUNY)
            </a>
            <hr />
            <p>
              <b>Office: </b> 330 Davis Hall Buffalo, NY 14260-2500
            </p>
            <p>
              <b>Phone: </b> (716) 645-4748
            </p>
            <p>
              <b>ORCID: </b> 0000-0001-6444-9411
            </p>
            <p>
              <b>Email: </b> wenyaoxu@buffalo.edu
            </p>
          </div>
        </div>
      </div>

      <div className="content-profile">
        <p>
          <b>Update: </b>Our team is actively looking for postdoctoral
          researchers, doctoral candidates and undergraduate students in the
          area of Wireless Sensing, Digital Health and Biometrics.
        </p>
        <b>Biography:</b>
        <p>
          Dr. Xu is a Professor of{" "}
          <a href="https://engineering.buffalo.edu/computer-science-engineering.html">
            Computer Science and Engineering Department{" "}
          </a>
          in the{" "}
          <a href="https://www.buffalo.edu/">
            State University of New York (SUNY) at Buffalo
          </a>
          , where he founds and directs the{" "}
          <a href="https://ub-esc.vercel.app">
            ESC (Embedded Sensing and Computing) Group
          </a>
          . He has published over 200 technical papers, co-authored 2 books and
          is a named inventor on many international and U.S. patents. He
          received the Ph.D. degree from{" "}
          <a href="http://www.ucla.edu">
            University of California, Los Angeles (UCLA)
          </a>
          . He received both M.S. degree and B.S. degree from{" "}
          <a href="https://www.zju.edu.cn/english/">Zhejiang University</a>{" "}
          (both with honor), China.
        </p>
        <b>Research Overview:</b>
        <p>
          Our group has focused on exploring novel Embedded Sensing and
          Computing technologies to build up innovative Internet-of-Things (IoT)
          systems for high-impact real-world applications in the fields of
          healthcare, security and advanced manufacturing. Results has been
          published in peer-reviewed top research venues across multiple
          disciplines, including Computer Science (e.g., ACM SenSys, MobiSys,
          MobiCom, UbiComp, ASPLOS, ISCA, HPCA, Oakland, NDSS and CCS),
          Biomedical Engineering (e.g., IEEE TBME, TBioCAS, and JBHI), and
          Medicine (e.g., LANCET, Advanced Science). Our group won 14 best
          paper/article awards, 3 best paper award nominations and 2
          international best design awards. Our inventions have been filed
          within U.S. and internationally as patents, and have been licensed to
          industrial players. Our research has been reported in various
          high-impact media outlets, including the Discovery Channel, Cable News
          Network, the Wall Street Journal, National Public Radio, Los Angeles
          Times, and the National Science Foundation's News.
        </p>
        <p>Selected research projects are as below:</p>
        <ul>
          <li>
            <b>Smart Health:</b>
            <ul>
              <li>
                mRehab: Scalable mHealth Technologies using 3D Printing for
                Stroke Rehabilitation.{" "}
                <a href="https://cse.buffalo.edu/~wenyaoxu/project/mrehab.html">
                  Project Website
                </a>
              </li>
              <li>
                EarlySee: Pervasive Autism Screening in Infancy and Toddlerhood.{" "}
                <a href="https://cse.buffalo.edu/~wenyaoxu/project/asd.html">
                  Project Website
                </a>
              </li>
              <li>
                mPD: Passive Daily-life Activity Monitoring for Parkinson
                Disease Screening and Self-management
              </li>
              <li>
                mCalm: Closed-loop and Just-in-time Mental Health Intervention
                using Mobile and IoT Technologies
              </li>
            </ul>
          </li>
          <li>
            <b>Cybersecurity:</b>
            <ul>
              <li>
                Emerging Biometrics: Secure (e.g., cancelable) and Practical
                Biometric Systems in Ecological Environments
              </li>
              <li>
                Biometrics Education: A Research Experiences for Undergraduate
                Site on Biometrics.{" "}
                <a href="https://reubiometrics.cse.buffalo.edu">
                  Project Website
                </a>
              </li>
              <li>
                Secure and Dependable 3D Printing: Investigating the
                Vulnerabilities of 3D Printing Systems
              </li>
              <li>
                mmWave Radar Security in Autonomous Vehicles: Vulnerability
                Identification and mitigation
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* Back on top */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          style={{ display: "flex", justifyContent: "center" }}
          href="#profile"
          className="backontop"
        >
          Back on top
        </a>
      </div>
    </>
  );
}

export default About;
