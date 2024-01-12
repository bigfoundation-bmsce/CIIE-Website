import React from "react";

const Section2 = () => {
  return (
    <section
      className="brand-area bg_cover"
      style={{
        backgroundImage: "url(/shark-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="brand-content text-center">
              <h3
                data-animation="fadeInLeft"
                data-delay="0.5s"
                className="title"
              >
                We Welcome You To StartUp Launchpad
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
