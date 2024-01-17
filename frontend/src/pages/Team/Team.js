import React from 'react'
import '../../utils/global.css'
import '../../utils/team.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
const Team = () => {
  return (
    <>
      {/* <div id="preloader" className="tlp-preloader">
        <div className="animation-preloader">
          <div className="tlp-spinner"></div>
          <img src='/media/preloader.png' alt="Preloader"/>
        </div>
      </div> */}

      <div id="wrapper" className="wrapper">
        <a href="/main_content" data-type="section-switch" className="return-to-top">
          <i className="fas fa-angle-double-up"></i>
        </a>

        <div id="main_content">

            
          <section id="page-banner" className="page-banner bg-gradient-layout6 has-animation">
            <ul className="shape-holder">
              <li>
                <div className="translate-top-50 opacity-animation transition-200 transition-delay-10">
                  <svg width="827px" height="827px">
                    <defs>
                      <linearGradient id="shape1" x1="0%" x2="50%" y1="86.603%" y2="0%">
                        <stop offset="0%" stopColor="rgb(82,63,255)" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="rgb(117,14,213)" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#shape1)"
                      d="M413.500,0.000 C641.870,0.000 827.000,185.130 827.000,413.500 C827.000,641.870 641.870,827.000 413.500,827.000 C185.130,827.000 -0.000,641.870 -0.000,413.500 C-0.000,185.130 185.130,0.000 413.500,0.000 Z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="translate-top-50 opacity-animation transition-100 transition-delay-300">
                  <svg width="615px" height="615px">
                    <defs>
                      <linearGradient id="shape2" x1="0%" x2="50%" y1="86.603%" y2="0%">
                        <stop offset="0%" stopColor="rgb(82,63,255)" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="rgb(109,26,223)" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#shape2)"
                      d="M307.500,0.000 C477.327,0.000 615.000,137.673 615.000,307.500 C615.000,477.327 477.327,615.000 307.500,615.000 C137.672,615.000 -0.000,477.327 -0.000,307.500 C-0.000,137.673 137.672,0.000 307.500,0.000 Z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="translate-top-50 opacity-animation transition-50 transition-delay-600">
                  <svg width="441px" height="441px">
                    <defs>
                      <linearGradient id="shape3" x1="0%" x2="50%" y1="86.603%" y2="0%">
                        <stop offset="13%" stopColor="rgb(82,63,255)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="rgb(130,33,221)" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#shape3)"
                      d="M220.500,0.000 C342.279,0.000 441.000,98.721 441.000,220.500 C441.000,342.279 342.279,441.000 220.500,441.000 C98.721,441.000 -0.000,342.279 -0.000,220.500 C-0.000,98.721 98.721,0.000 220.500,0.000 Z" />
                  </svg>
                </div>
              </li>
            </ul>
            <div className="container">
              <div className="breadcrumbs-area">
                <h1>Meet The Team</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Team</li>
                </ul>
              </div>
            </div>
          </section>



     
          <section id="team-wrap-layout1" className="team-wrap-layout1 section-padding-md">
            <div className="container">
              <div className="section-heading heading-dark heading-layout1">
                <h2 className="heading-main-title">Dedicated Team</h2>

              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-12 has-animation">
                  <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                    <div className="team-box-layout1">
                      <div className="maks-item animted-bg-wrap">
                        <span className="animted-bg"></span>
                        <div className="item-figure">
                          <img src="/media/team/team1.jpg" alt="Team"/>
                        </div>
                        <ul className="social-items">
                          <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                      <div className="item-content">
                        <h3 className="item-title"><a href="/">Michael Jackson</a></h3>
                        <div className="sub-title">Ul / Ux Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation">
                  <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-600">
                    <div className="team-box-layout1">
                      <div className="maks-item animted-bg-wrap">
                        <span className="animted-bg"></span>
                        <div className="item-figure">
                          <img src="/media/team/team2.jpg" alt="Team"/>
                        </div>
                        <ul className="social-items">
                          <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                      <div className="item-content">
                        <h3 className="item-title"><a href="/">Hattie Bradley</a></h3>
                        <div className="sub-title">Web Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation">
                  <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1100">
                    <div className="team-box-layout1">
                      <div className="maks-item animted-bg-wrap">
                        <span className="animted-bg"></span>
                        <div className="item-figure">
                          <img src="/media/team/team3.jpg" alt="Team"/>
                        </div>
                        <ul className="social-items">
                          <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                      <div className="item-content">
                        <h3 className="item-title"><a href="/">Norman Gordon</a></h3>
                        <div className="sub-title">Social Marketer</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation">
                  <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                    <div className="team-box-layout1">
                      <div className="maks-item animted-bg-wrap">
                        <span className="animted-bg"></span>
                        <div className="item-figure">
                          <img src="/media/team/team4.jpg" alt="Team"/>
                        </div>
                        <ul className="social-items">
                          <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                      <div className="item-content">
                        <h3 className="item-title"><a href="/">Teresa James</a></h3>
                        <div className="sub-title">Consultant</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation">
                  <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-600">
                    <div className="team-box-layout1">
                      <div className="maks-item animted-bg-wrap">
                        <span className="animted-bg"></span>
                        <div className="item-figure">
                          <img src="/media/team/team5.jpg" alt="Team"/>
                        </div>
                        <ul className="social-items">
                          <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                      <div className="item-content">
                        <h3 className="item-title"><a href="/">Fiona Endley</a></h3>
                        <div className="sub-title">Consultant</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation">
                  <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1100">
                    <div className="team-box-layout1">
                      <div className="maks-item animted-bg-wrap">
                        <span className="animted-bg"></span>
                        <div className="item-figure">
                          <img src="/media/team/team6.jpg" alt="Team"/>
                        </div>
                        <ul className="social-items">
                          <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                      <div className="item-content">
                        <h3 className="item-title"><a href="/">Tom Knolltonns</a></h3>
                        <div className="sub-title">Photographer</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation">
                  <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-100">
                    <div className="team-box-layout1">
                      <div className="maks-item animted-bg-wrap">
                        <span className="animted-bg"></span>
                        <div className="item-figure">
                          <img src="/media/team/team7.jpg" alt="Team"/>
                        </div>
                        <ul className="social-items">
                          <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                      <div className="item-content">
                        <h3 className="item-title"><a href="/">Billy Vogel</a></h3>
                        <div className="sub-title">Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation">
                  <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-600">
                    <div className="team-box-layout1">
                      <div className="maks-item animted-bg-wrap">
                        <span className="animted-bg"></span>
                        <div className="item-figure">
                          <img src="/media/team/team8.jpg" alt="Team"/>
                        </div>
                        <ul className="social-items">
                          <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                      <div className="item-content">
                        <h3 className="item-title"><a href="/">Jane Anderson</a></h3>
                        <div className="sub-title">Junior Architect</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 has-animation">
                  <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1100">
                    <div className="team-box-layout1">
                      <div className="maks-item animted-bg-wrap">
                        <span className="animted-bg"></span>
                        <div className="item-figure">
                          <img src="/media/team/team9.jpg" alt="Team"/>
                        </div>
                        <ul className="social-items">
                          <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                      <div className="item-content">
                        <h3 className="item-title"><a href="/">Robert Anderson</a></h3>
                        <div className="sub-title">Photographer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
           
          <section id="brand-wrap-layout1" className="brand-wrap-layout1 bg-color-accent2">
            <div className="container">
              <div className="rc-carousel" data-loop="true" data-items="8" data-margin="30" data-autoplay="false" data-autoplay-timeout="5000" data-smart-speed="700" data-dots="false" data-nav="false" data-nav-speed="false" data-r-x-small="2" data-r-x-small-nav="false"
                data-r-x-small-dots="false" data-r-x-medium="3" data-r-x-medium-nav="false" data-r-x-medium-dots="false" data-r-small="4" data-r-small-nav="false" data-r-small-dots="false" data-r-medium="4" data-r-medium-nav="false" data-r-medium-dots="false"
                data-r-large="5" data-r-large-nav="false" data-r-large-dots="false" data-r-extra-large="6" data-r-extra-large-nav="false" data-r-extra-large-dots="false">
                <div className="brand-box-layout1"><img src="/media/brand/brand1.png" alt="Brand-thumb" /></div>
                <div className="brand-box-layout1"><img src="/media/brand/brand2.png" alt="Brand-thumb" /></div>
                <div className="brand-box-layout1"><img src="/media/brand/brand3.png" alt="Brand-thumb" /></div>
                <div className="brand-box-layout1"><img src="/media/brand/brand4.png" alt="Brand-thumb" /></div>
                <div className="brand-box-layout1"><img src="/media/brand/brand5.png" alt="Brand-thumb" /></div>
                <div className="brand-box-layout1"><img src="/media/brand/brand6.png" alt="Brand-thumb" /></div>
                <div className="brand-box-layout1"><img src="/media/brand/brand3.png" alt="Brand-thumb" /></div>
              </div>
            </div>
          </section>

          {/* <div id="template-search" className="template-search">
            <button type="button" className="close"></button>
            <form className="search-form">
              <input type="search" value="" placeholder="Type here........" />
              <button type="submit" className="search-btn">
                <i className="flaticon-search"></i>
              </button>
            </form>
          </div> */}
       
          <div className="offcanvas-menu-wrap" id="offcanvas-wrap" data-position="left">
            <div className="close-btn offcanvas-close"><i className="fas fa-times"></i></div>
            <div className="offcanvas-content">
              <div className="offcanvas-logo">
                <a href="index.html"><img src="/media/logo.png" alt="logo"/></a>
              </div>
              <nav>
                <ul className="offcanvas-nav">
                  <li className="nav-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="about.html">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="service-layout1.html">Service</a>
                  </li>
                  <li className="nav-item">
                    <a href="gallery-grid-2-column.html">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a href="team.html">Team</a>
                  </li>
                  <li className="nav-item">
                    <a href="blog-grid.html">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="offcanvas-footer">
                <div className="item-title">Follow Me</div>
                <ul className="offcanvas-social">
                  <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a href="/"><i className="fab fa-pinterest"></i></a></li>
                  <li><a href="/"><i className="fas fa-rss"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

      


        </div>
      </div>


      <script src="/dependencies/popper.js/popper.min.js"></script>
      <script src="/dependencies/jquery/jquery.min.js"></script>
      <script src="/dependencies/bootstrap/js/bootstrap.min.js"></script>
      <script src="/dependencies/jquery.appear/jquery.appear.js"></script>
      <script src="/dependencies/jquery.parallax-scroll/jquery.parallax-scroll.js"></script>
      <script src="/dependencies/gmap3/js/gmap3.min.js"></script>
      <script src="/dependencies/owl.carousel/js/owl.carousel.min.js"></script>
      <script src="/dependencies/slick/js/slick.min.js"></script>
      <script src="/dependencies/counter-up/jquery.counterup.min.js"></script>
      <script src="/dependencies/waypoints/jquery.waypoints.min.js"></script>
      <script src="/dependencies/select2/js/select2.min.js"></script>
      <script src="/dependencies/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="/dependencies/imagesloaded/imagesloaded.pkgd.min.js"></script>
      <script src="/dependencies/meanmenu/js/jquery.meanmenu.min.js"></script>
      <script src="/dependencies/Parallaxie-master/parallaxie.js"></script>
      <script src="/dependencies/nivo-slider/js/jquery.nivo.slider.js"></script>
      <script src="/dependencies/nivo-slider/js/home.js"></script>
      <script src="/dependencies/wow/js/wow.min.js"></script>
      <script src="/dependencies/knob/jquery.knob.js"></script>
      <script src="/dependencies/countdown/jquery.countdown.min.js"></script>
      <script src="/dependencies/page-piling/js/jquery.pagepiling.min.js"></script>
      <script src="/dependencies/tilt/tilt.jquery.min.js"></script>
      <script src="/dependencies/theia-sticky-sidebar/theia-sticky-sidebar.min.js"></script>
      <script src="/dependencies/theia-sticky-sidebar/resize-sensor.min.js"></script>
      <script src="/dependencies/magnific-popup/js/jquery.magnific-popup.min.js"></script>
      <script src="/dependencies/validator/validator.min.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB13ZAvCezMx5TETYIiGlzVIq65Mc2FG5g"></script>


      <script src="/assets/js/app.js"></script>
    </>
  )
}
export default Team;
