import React from 'react';
import "./Walkthrough.css";
const Walkthrough = () => {
  return (
    <div>
      <div className="walk-wrapper">
        <div className="contaienr">
            <div className="walk-container">
                {/*Header section*/}
                <div className="cont-head">
                    <h2>Work Flow</h2>
                    <h1>Walk Through</h1>
                </div>
                <div className="walk-cards">
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Walkthrough
