import React from 'react';
import '../../utils/global.css'
const About = () => {
    return (
        <>
            <section className="about-wrap-layout7">
                <ul className="animated-shape has-animation">
                    <li>
                        <div className="translate-right-75 opacity-animation transition-200 transition-delay-10">
                            <img src="\element17.png" alt="Animated Figure" />
                        </div>
                    </li>
                </ul>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-6 col-12 pl-0 pr-0">
                            <div className="about-box-layout7">
                                <ul className="figure-holder has-animation">
                                    <li className="animated-bg">
                                        <div className="translate-left-75 opacity-animation transition-200 transition-delay-10">
                                            <svg width="638px" height="514px">
                                                <path fillRule="evenodd" opacity="0.031" fill="rgb(2, 86, 225)"
                                                    d="M256.191,-0.005 C397.682,-0.005 406.513,181.938 525.597,258.322 C824.664,450.157 454.262,521.729 256.191,512.196 C114.864,505.394 -0.000,397.536 -0.000,256.097 C-0.000,114.655 114.701,-0.005 256.191,-0.005 Z" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="animated-figure">
                                        <div className="translate-left-75 opacity-animation transition-150 transition-delay-1000">
                                            <img src="\about2.png" alt="About" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12 compress-right-side">
                            <div className="about-box-layout7">
                                <div className="content-holder has-animation">
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1000">
                                        <h2 className="item-title">Our Vision</h2>
                                    </div>
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1300">
                                        <p>
                                            To create Best-In-Class affordable products and solutions that address societal needs and also nurture innovative minds to emerge as job providers
                                        </p>
                                    </div>
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1000">
                                        <h2 className="item-title">Our Mission</h2>
                                    </div>
                                    <div className="translate-bottom-75 opacity-animation transition-150 transition-delay-1300">
                                        <p>
                                            To create an ecosystem to nurture innovation and entrepreneurship through incubation support, facilitation of technology transfer for commercialization by multidisciplinary approach
                                        </p>
                                    </div>
                                    {/* Optional commented section: Uncomment if needed */}
                                    {/*
                                    <div className="row mt--50">
                                        <div className="col-md-4 col-12">
                                            ...
                                        </div>
                                        <div className="col-md-4 col-12">
                                            ...
                                        </div>
                                        <div className="col-md-4 col-12">
                                            ...
                                        </div>
                                    </div>
                                    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
