import React from "react";

const Section4 = () => {
  return (
    <section className="get-to-know-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="get-to-know-thumb mr-70 animated wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <img src="/solution.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="get-to-know-content">
              <h1 className="title">Here is what you can gain from us:</h1>
              <br />
              <ul>
                <li>
                  <i className="fa fa-check"></i>We provide you with all the
                  tools and resources to build your idea
                </li>
                <li>
                  <i className="fa fa-check"></i>A community of vibrant
                  entrepreneurs to learn from and grow with
                </li>
                <li>
                  <i className="fa fa-check"></i>Direct Access to Our Esteemed
                  Alumni Network
                </li>
              </ul>
              <p className="title" style={{ fontSize: "30px" }}>
                And… So much more
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="about-pattern">
        <img src="/shape-pattern.png" alt="" />
      </div>
    </section>
  );
};

export default Section4;
