import React from 'react'

const Section1 = () => {
  return (
    <div className="banner-slide-3">
        <div
          className="banner-3-area bg_cover d-flex align-items-center"
          style={{ backgroundImage: "url(/banner-base.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-content">
                  <h1
                    data-animation="fadeInLeft"
                    data-delay="0.5s"
                    className="title"
                    style={{ paddingBottom: "20px" }}
                  >
                    Startup Launchpad
                  </h1>
                  <h4 data-animation="fadeInLeft" data-delay="0.5s">
                    Cohort-2
                  </h4>
                  <a
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                    className="title"
                    style={{
                      fontWeight: "normal",
                      fontSize: "30px",
                      lineHeight: "1.5em",
                      paddingBottom: "4px",
                    }}
                  >
                    A lightning-fast path to build your first startup from Idea
                    to Investments
                  </a>
                  <a
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                    className="title"
                    style={{
                      fontWeight: "normal",
                      fontSize: "30px",
                      lineHeight: "1.5em",
                      paddingBottom: "4px",
                    }}
                  >
                    Get This Amazing Opportunity To Win Upto Rs 2,50,000/-
                  </a>
                  <a
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                    className="main-btn main-btn-2"
                    style={{ marginTop: "4px" }}
                    href="#form"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-line">
            <img src="/banner-line.png" alt="line" />
          </div>
          <div className="banner-dot">
            <img src="/banner-dot.png" alt="line" />
          </div>
          <div className="banner-thumb">
            <img src="/idea-summit.jpg" alt="line" />
          </div>
        </div>
      </div>
  )
}

export default Section1
