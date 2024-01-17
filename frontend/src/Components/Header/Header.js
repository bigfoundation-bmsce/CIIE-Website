import React from 'react'
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div>
      <header className="sticky-on">
            <div id="sticky-placeholder"></div>
            <div id="navbar-wrap" className="navbar-wrap">
              <div className="navbar-layout1">
                <div className="container">
                  <div className="row no-gutters d-flex align-items-center position-relative">
                    <div className="col-lg-2 d-flex justify-content-start">
                      <div className="temp-logo text-center">
                        <a href="index.html" className="default-logo">
                          <img src="/media/CIIE white font png-02.png" alt="logo" className="img-fluid" style={{height:'80px'}}/>
                            <p style={{color:"white"}}><b>An Initiative by BMSCE</b></p>
                        </a>
                        <Link to="/" className="sticky-logo">
                          <img src="/media/logo-dark.png" alt="logo" className="img-fluid" style={{height: "80px"}}/>
                            <p><b>An Initiative by BMSCE</b></p>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-end possition-static">
                      <nav id="dropdown" className="template-main-menu">
                        <ul>
                          <li className="position-static d-none d-lg-block">
                            <a href="/">Home</a>
                            <div className="mega-menu-container">
                              <div className="row">
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index.html"><img src="/media/menu/home1.jpg" alt="Menu"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index.html">Technology</a></h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index2.html"><img src="/media/menu/home2.jpg" alt="Menu"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index2.html">Digital Marketing</a></h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index3.html"><img src="/media/menu/home3.jpg" alt="Menu"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index3.html">Startup Agency</a></h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index4.html"><img src="/media/menu/home4.jpg" alt="Menu"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index4.html">App Landing</a></h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index5.html"><img src="/media/menu/home5.jpg" alt="Menu"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index5.html">Digital Agency</a></h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index6.html"><img src="/media/menu/home6.jpg" alt="Menu"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index6.html">Digital Agency 2</a></h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index7.html"><img src="/media/menu/home7.jpg" alt="Menu"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index7.html">Saas Landing</a></h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index8.html"><img src="/media/menu/home8.jpg" alt="Menu"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index8.html">Social Media Marketing</a></h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index9.html"><img src="/media/menu/home9.jpg" alt="Menu"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index9.html">Software Landing</a></h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index10.html"><img src="/media/menu/home10.jpg" alt="Menu"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index10.html">CRM Software</a></h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-figure">
                                      <a href="index11.html"><img src="/media/menu/home11.jpg" alt="Menu/"/></a>
                                    </div>
                                    <div className="mega-menu-title">
                                      <h3 className="item-title"><a href="index11.html">CRM Software</a></h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="d-block d-lg-none">
                            <a href="/">Home</a>
                            <ul className="dropdown-menu-col-1">
                              <li><a href="index.html"><span>Home -1</span></a></li>
                            { /* <li><a href="index2.html"><span>Home -2</span></a></li>
                              <li><a href="index3.html"><span>Home -3</span></a></li>
                              <li><a href="index4.html"><span>Home -4</span></a></li>
                              <li><a href="index5.html"><span>Home -5</span></a></li>
                              <li><a href="index6.html"><span>Home -6</span></a></li>
                              <li><a href="index7.html"><span>Home -7</span></a></li>
                              <li><a href="index8.html"><span>Home -8</span></a></li>
                              <li><a href="index9.html"><span>Home -9</span></a></li>
                              <li><a href="index10.html"><span>Home -10</span></a></li>
  <li><a href="index11.html"><span>Home -11</span></a></li>*/}
                            </ul>
                          </li>
                        <li>
                            <Link to="/">About Us</Link>
                             { /*<ul className="dropdown-menu-col-1">
                              <li><a href="service-layout1.html"><span>Services -01</span></a></li>
                              <li><a href="service-layout2.html"><span>Services -02</span></a></li>
                              <li><a href="service-details.html"><span>Services Details</span></a></li>
                            </ul>*/}
                         </li>
                          {/*<li>
                            <a href="/">Portfolio</a>
                            <ul className="dropdown-menu-col-1">
                              <li><a href="gallery-grid-2-column.html"><span>Grid 2 Column</span></a></li>
                              <li><a href="gallery-grid-3-column.html"><span>Grid 3 Column</span></a></li>
                              <li><a href="gallery-grid-full-width-3-column.html"><span>Grid Full Width 3 Column</span></a></li>
                              <li><a href="gallery-grid-full-width-4-column.html"><span>Grid Full Width 4 Column</span></a></li>
                              <li><a href="gallery-masonry-2-column.html"><span>Masonry 2 Column</span></a></li>
                              <li><a href="gallery-masonry-3-column.html"><span>Masonry 3 Column</span></a></li>
                              <li><a href="gallery-masonry-full-width-3-column.html"><span>Masonry Full Width 3 Column</span></a></li>
                              <li><a href="gallery-details.html"><span>Portfolio Details 1</span></a></li>
                              <li><a href="gallery-details2.html"><span>Portfolio Details 2</span></a></li>
                              <li><a href="gallery-details3.html"><span>Portfolio Details 3</span></a></li>
                            </ul>
                          </li>*/}
                          <li>
                            <Link to="/Register">Register</Link>
                            {/*<ul className="dropdown-menu-col-1">
                              <li><a href="about.html"><span>About Us 1</span></a></li>
                              <li><a href="about2.html"><span>About Us 2</span></a></li>
                              <li><a href="pricing-layout1.html"><span>Our Pricing 1</span></a></li>
                              <li><a href="pricing-layout2.html"><span>Our Pricing 2</span></a></li>
                              <li><a href="team.html"><span>Team Page</span></a></li>
                              <li><a href="404.html"><span>404 Page</span></a></li>
                              <li><a href="faq.html"><span>FAQ Page</span></a></li>
                              <li><a href="coming-soon.html"><span>Coming Soon</span></a></li>
                              <li className="has-child-second-level"><a href="/"><span>First Level</span></a>
                                <ul className="second-level">
                                  <li><a href="index.html"><span>Second Level 1</span></a></li>
                                  <li><a href="index.html"><span>Second Level 2</span></a></li>
                                  <li className="has-child-third-level"><a href="/"><span>Second Level 3</span></a>
                                    <ul className="third-level">
                                      <li><a href="index.html"><span>Third Level 1</span></a></li>
                                      <li><a href="index.html"><span>Third Level 2</span></a></li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                        </ul>*/}
                          </li>
                          <li>
                            <Link to="/Team">Team</Link>
                            {/*<ul className="dropdown-menu-col-1">
                              <li><a href="blog-grid.html"><span>Blog Grid</span></a></li>
                              <li><a href="blog-list.html"><span>Blog List </span></a></li>
                              <li><a href="blog-masonry.html"><span>Blog Masonry</span></a></li>
                              <li><a href="blog-details.html"><span>Blog Single</span></a></li>
                            </ul>
                          </li>

                          <li>
                            <a href="contact.html"><span>Contact</span></a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-end">
                      <ul className="header-action-items">
                        <li className="single-item">
                          <a href="/template-search" title="Search" className="header-search">
                            <i className="flaticon-search"></i>
                          </a>
                        </li>
                        <li className="single-item mr-2">
                          <a href="/" className="item-btn btn-ghost btn-light">Get a Quote</a>
                        </li>
                        <li className="single-item">
                          <button type="button" className="offcanvas-menu-btn menu-status-open">
                            <span className="menu-btn-icon">
                              <span></span>
                              <span></span>
                              <span></span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </header>
    </div>
  )
}
export default Header;