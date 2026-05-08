import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Engineer</h4>
                <h5>Ubiqedge Technology PVT. LTD.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              uilding AI-powered products at Ubiqedge
              as an SDE-2, focused on scalable platforms, automation, and real-world AI solutions.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Faclone Labs</h4>
                <h5>Front-End Developer</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Senior Lead Software Engineer (Feb 2024 – May 2024). Lead Software
              Engineer (Feb 2021 – Feb 2024). Software Engineer II (Dec 2017 –
              Feb 2021): internationalization, globalization, and localization for
              Adobe Technical Communication Suite; functional and linguistic testing
              strategy; in-house tooling; collaboration with product and engineering
              for high-quality localized releases.
            </p>
          </div> */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>Faclone-Labs</h5>
              </div>
              <h4>2023-24</h4>
            </div>
            <p>
              Worked as a Front-End Developer at Faclone Labs
            , building responsive web applications and delivering scalable, user-focused interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Back-End Developer</h4>
                <h5>Trell</h5>
              </div>
              <h4>2022-23</h4>
            </div>
            <p>
              Contributed as a Backend Developer at Trell
            , developing scalable microservices, REST APIs, and backend systems to support a fast-growing social commerce platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
