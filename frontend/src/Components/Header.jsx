import React from 'react'

const Header = () => {
  return (
      <header className="header-area header-2-area header-3-area">
        <div id="sticky-placeholder"></div>
        <div id="main-header" className="main-header" style={{ top: "0px" }}>
          <div className="navbar-layout1">
            <div className="container" style={{ maxWidth: "1480px" }}>
              <div className="row no-gutters d-flex align-items-center position-relative">
                <div className="col-lg-2 d-flex justify-content-start">
                  <div className="temp-logo text-center">
                    <a href="../" className="sticky-logo">
                      <img
                        src="/logo-dark.png"
                        alt="logo"
                        className="img-fluid" 
                        style={{ height: "80px", paddingTop: "0px" }}
                      />
                      <p>
                        <b>An Initiative by BMSCE</b>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
