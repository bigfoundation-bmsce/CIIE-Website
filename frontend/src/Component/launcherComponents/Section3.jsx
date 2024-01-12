import React from "react";

const Section3 = () => {
  return (
    <section className="cta-2-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="cta-content">
              <h1
                className="title"
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Central-Hub For Startups
              </h1>
              <br />
              <blockquote>
                <p>
                  <h3
                    className="title"
                    style={{
                      fontSize: "28px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    We’ve got you covered from Ideas to Executions, Pitch to
                    Investments, MVP to Your First Paying Customer. We are the
                    startup launchpad. This is your chance to get creative. We
                    are here to turn your vision into value
                  </h3>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-dot">
        <img src="/cta-dot-2.png" alt="cta" />
      </div>
      <div className="cta-dot-2">
        <img src="/cta-dot.png" alt="cta" />
      </div>
    </section>
  );
};

export default Section3;
