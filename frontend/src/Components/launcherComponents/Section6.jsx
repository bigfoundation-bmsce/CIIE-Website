import React from "react";

const Section6 = () => {
  return (
    <section className="company-logos-area" style={{ paddingBottom: "0" }}>
      <div className="container">
        <div className="row" id="form">
          <div className="col-lg-12">
            <div className="company-logos-text">
              <h5
                className="title"
                style={{
                  fontSize: "25px",
                  fontWeight: "normal",
                  textAlign: "center",
                  lineHeight: "50px",
                  marginBottom: "2rem",
                }}
              >
                <b>Register Now and Save Your Spot.</b>
                <br />
                The Journey of a thousand miles starts with a single step.
                <br />
                See you inside!
                <br />
                We are closing the form on June 15th, 2022.
              </h5>
            </div>
          </div>
          <iframe
            style={{ zIndex: "20" }}
            src="https://docs.google.com/forms/d/e/1FAIpQLSf2Msky7O5SxoPa21r5of7GSNEc8euA6bG7X-mO91bEan7Kzg/viewform?embedded=true"
            width="1500"
            height="2250"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Section6;
