import React from 'react'
import { Link } from 'react-router-dom';
import '../../utils/global.css'
import '../../utils/team.css'
export const Header = () => {
  return (
  <>
    <div >
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/bigf.png" alt="Bigfoundation" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/launchpad">Launch Pad</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/devWing">Devwing</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Home Team</Link></li>
                  <li><Link className="dropdown-item" to="/">Student Core</Link></li>
                  <li><Link className="dropdown-item" to="/">Alumini Network</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-md sticky-top bg-light navbar-light">
              <div className="container-fluid">
                <Link className="navbar-brand d-md-none" to="/"
                ><img
                    src="/bigf.png"
                    style={{height:'69px'}}
                    alt="Logo" /></Link
                ><button
                  data-bs-toggle="collapse"
                  className="navbar-toggler"
                  data-bs-target="#navcol-1"
                >
                  <span className="visually-hidden">Toggle navigation</span
                  ><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-md-flex" id="navcol-1">
                  <ul className="navbar-nav d-flex justify-content-evenly mx-auto w-100">
                    <li className="nav-item">
                      <Link className="nav-link text-center" to="/"
                      ><i className="fas fa-home"></i>&nbsp;Home</Link
                      >
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-center" to="/team"
                      ><i className="fas fa-fire"></i>&nbsp;Team</Link
                      >
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-center" to="/launchpad"
                      ><i className="fas fa-chart-bar"></i>&nbsp;Launch Pad</Link
                      >
                    </li>
                  </ul>
                  <Link className="navbar-brand d-none d-md-block me-0"
                  ><img
                      src="/bigf.png"
                      style={{height:'69px',width:'199px'}}
                      alt="Logo"
                    /></Link>
                  <ul className="navbar-nav d-flex justify-content-evenly mx-auto w-100">
                    <li className="nav-item">
                      <Link className="nav-link text-center" to="/register"
                      ><i className="fas fa-cloud-download-alt"></i>&nbsp; Register</Link
                      >
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-center" to="/devWing"
                      ><i className="fas fa-info-circle"></i>&nbsp;Devwing</Link>
                    </li>
                    <li className="nav-item pb-2 pb-md-0">
                      <Link className="nav-link text-nowrap text-center" to="/contact"
                      ><i className="fas fa-at"></i>&nbsp;Contact</Link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    </div>
    </>
  )
}
export default Header;