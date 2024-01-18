import React from 'react'
const Devwing = () => {
    return (
        <>
	{/* menu  */} <section style={{marginBottom:'10px'}} id="page-banner" className="page-banner bg-gradient-layout6 has-animation">
            <ul className="shape-holder">
              <li>
                <div className="translate-top-50	 opacity-animation transition-200 transition-delay-10">
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
                <h1>DevWing</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>DevWing</li>
                </ul>
              </div>
            </div>
          </section>
	<div className="d-block">
	<div className="container-fluid">
	    <div className="row row-height">
	        <div className="col-xl-4 col-lg-4 content-left" style={{background: '#3b2759'}}>
				<div  className="align-self-center">

	                <img style={{marginTop:'150px'}} src="\devWing.jpg" alt="" className="rounded mx-auto d-block" /> 		
	            </div>
	{/* content-left-wrapper  */}
	        </div>
	{/* content-left */}
	        <div className="col-xl-8 col-lg-8 content-right" id="start">
	            <div id="wizard_container">
	                <div id="top-wizard">
	                    {/* <span id="location"></span> */}
	                    {/* <div id="progressbar"></div> */}
	                </div>
	{/* top-wizard  */}
	                <form id="wrapped" method="post" action="https://send.pageclip.co/XBKl1XrdmIl6njy9wNVrC78taONyei7z/CIIE_Developers_Wing" className="pageclip-form" enctype="multipart/form-data">
	                    {/* <input id="website" name="website" type="text" value="" /> */}
	                    
	                    <div id="middle-wizard">
	                        <div className="step" >
	                            <h2 className="d-flex justify-content-center">Personal info</h2>
	                            <div className="form-group add_top_30">
	                                <label for="name">Full Name</label>
	                                <input type="text" name="name" id="name" className="form-control required" onchange="getVals(this, 'name_field');"/>
	                            </div>

	                            <div className="form-group">
	                                <label for="email">BMSCE Email Address</label>
	                                <input type="email" name="email" id="email" className="form-control required" onchange="getVals(this, 'email_field');" /> 
	                            </div>

	                            <div className="form-group">
	                                <label for="phone">Phone Number</label>
	                                <input type="text" name="phone" id="phone" className="form-control required"/> 
	                            </div>

								<div className="form-group add_bottom_30">
									<label>Year of study</label>
									<label for="year">Choose your year</label>
									<div className="styled-select">
										<select className="form-control required" id="year" name="year">
											<option value="">Choose your year</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
										</select>
									</div>
								</div>

								<div className="form-group add_bottom_30">
									<label>Branch</label>
									<label for="branch">Choose a branch</label>
									<div className="styled-select">
										<select className="form-control required" id="branch" name="branch">
											<option value="">Choose your branch</option>
											<option value="Computer Science and Engineering">Computer Science and Engineering</option>
											<option value="Information Science and Engineering">Information Science and Engineering</option>
											<option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
											<option value="Civil Engineering">Civil Engineering</option>
											<option value="Mechanical Engineering">Mechanical Engineering</option>
											<option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
											<option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
											<option value="Industrial Engineering and Management">Industrial Engineering and Management</option>
											<option value="Electronics and Telecommunication Engineering">Electronics and Telecommunication Engineering</option>
											<option value="Electronics and Instrumentation Engineering">Electronics and Instrumentation Engineering</option>
											<option value="Medical Electronics">Medical Electronics</option>
											<option value="Chemical Engineering">Chemical Engineering</option>
											<option value="Bio-Technology">Bio-Technology</option>
											<option value="Other">Other</option>
										</select>
									</div>
								</div>

								<div className="form-group add_bottom_30">
									<label>What domain are you interested to work on?</label>
									<label for="branch">Choose a domain</label>
									<div className="styled-select">
										<select className="form-control required" id="domain" name="domain">
											<option value="">Choose your domain</option>
											<option value="UI/UX Design">UI/UX Design</option>
											<option value="Frontend web developmet">Frontend web developmet</option>
											<option value="Backend web developmet">Backend web developmet</option>
											<option value="testing">Testing</option>
											<option value="DevOps">DevOps</option>
											<option value="Ethical Hacking">Ethical Hacking</option>
										</select>
									</div>
								</div>

								
                            </div>

	                        <div className="step" >
								{/* <div className="form-group ">
	                                <label for="profile">LinkedIn Profile link</label>
	                                <input type="url" name="profile" id="profile" />
	                            </div>
								
								<div className="form-group ">
									<label for="resume">Upload Resume drive link</label>
	                                <input type="url" name="resume" id="resume" />
								</div> 

								<div className="form-group add_top_30">
									<label for="passion">Give us a brief about any projects you have done before.<br /></label>
									<textarea id="project" name="project" rows="8" cols="75" maxlength="250" className="form-control required"></textarea>									
	                            </div>

								<div className="form-group terms">
									<input type="checkbox" id="terms" name="terms" value="Yes" className="required"/> 
									<label className="container_check">I agree that, if I get selected in CIIE Developers Wing, then I will be working in provision period for 15 days, and a final call letter will be given on the basis of CIIE CORE COMMITTE review.</label>
									<span className="checkmark"></span>
								</div> */}
							</div>
	  {/* step last */}

	                    </div>
	 {/* middle-wizard  */}
	                    <div id="bottom-wizard">
	                        <button type="button" name="backward" className="btn m-1 btn-primary">Prev</button>
	                        <button type="button" name="forward" className="btn m-1 btn-primary">Next</button>
	                        <button type="submit" name="process" className="submit m-1 btn btn-primary pageclip-form__submit">Submit</button>
	                    </div>
	{/* bottom-wizard  */}
	                </form>
	            </div>
	{/* Wizard container  */}
	        </div>
	{/* content-right */}
	    </div>
	{/* row */}
	</div>
	{/* container-fluid */}

	<script src="./assets/js/jquery-3.6.0.min.js"></script>
    <script src="./assets/js/common_scripts.min.js"></script>
	<script src="./assets/js/velocity.min.js"></script>
	<script src="./assets/js/common_functions.js"></script>
	<script src="./assets/js/file-validator.js"></script>
	<script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>

	{/* Wizard script */}
	<script src="./assets/js/func_1.js"></script>

	</div>
        </>
    )
}
export default Devwing;