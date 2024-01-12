import React from 'react'

const Devwing = () => {
    return (
        <>
            <div id="preloader">
		        <div data-loader="circle-side"></div>
	        </div>

            <nav>
		<ul className="cd-primary-nav">
			<li><a href="../" className="animated_link">Home</a></li>
			<li><a href="../about" className="animated_link">About Us</a></li>
			<li><a href="../" className="animated_link">Walkthrough</a></li>
			<li><a href="../" className="animated_link">Facilities</a></li>
			<li><a href="../register" className="animated_link">Register</a></li>
			<li><a href="../contact" className="animated_link">Contact</a></li>
            <li><a href="../developers" className="animated_link">Dev wing</a></li>
            <li><a href="../team" className="animated_link">Team</a></li>
			<li><a href="../launchpad/" className="animated_link">Startup Launchpad</a></li>
		</ul>
	</nav>
	{/* menu  */}
	
	<div className="container-fluid">
	    <div className="row row-height">
	        <div className="col-xl-4 col-lg-4 content-left" style={{background: '#3b2759'}}>
				<div className="content-left-wrapper">
	                <img src="\developers_left.png" alt="" className="img-fluid" /> 		
	            </div>
	{/* content-left-wrapper  */}
	        </div>
	{/* content-left */}
	        <div className="col-xl-8 col-lg-8 content-right" id="start">
	            <div id="wizard_container">
	                <div id="top-wizard">
	                    <span id="location"></span>
	                    <div id="progressbar"></div>
	                </div>
	{/* top-wizard  */}
	                <form id="wrapped" method="post" action="https://send.pageclip.co/XBKl1XrdmIl6njy9wNVrC78taONyei7z/CIIE_Developers_Wing" className="pageclip-form" enctype="multipart/form-data">
	                    <input id="website" name="website" type="text" value="" />
	                    
	                    <div id="middle-wizard">
	                        <div className="step" >
	                            <h2 className="main_question">Personal info</h2>
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
								<div className="form-group ">
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
								</div>
							</div>

	                        <div className="submit step" id="end">
	                            <div className="summary">
	                                <div className="wrapper">
	                                    <h3>Thank your for your time<br /><span id="name_field"></span>!</h3>
	                                    <p>We will contat you shortly at the following email address <strong id="email_field"></strong></p>
	                                </div>
	                        </div>
	                        </div>
	{/* step last */}

	                    </div>
	 {/* middle-wizard  */}
	                    <div id="bottom-wizard">
	                        <button type="button" name="backward" className="backward">Prev</button>
	                        <button type="button" name="forward" className="forward">Next</button>
	                        <button type="submit" name="process" className="submit pageclip-form__submit">Submit</button>
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

	<div className="cd-overlay-nav">
		<span></span>
	</div>
	{/* cd-overlay-nav  */}

	<div className="cd-overlay-content">
		<span></span>
	</div>
	{/* cd-overlay-content  */}
			
	<a href="#0" className="cd-nav-trigger">Menu<span className="cd-icon"></span></a>
	{/* menu button */}
	
	{/* Modal terms  */}
	<div className="modal fade" id="terms-txt" tabindex="-1" role="dialog" aria-labelledby="termsLabel" aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
				<div className="modal-header">
					<h4 className="modal-title" id="termsLabel">Terms and conditions</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">
					<p>Lorem ipsum dolor sit amet, in porro albucius qui, in <strong>nec quod novum accumsan</strong>, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.</p>
					<p>Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus. Lorem ipsum dolor sit amet, <strong>in porro albucius qui</strong>, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.</p>
					<p>Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.</p>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn_1" data-dismiss="modal">Close</button>
				</div>
			</div>
	{/* .modal-content */}
		</div>
		{/* //.modal-dialog  */}
	</div>
	{/* .modal */}
	
     {/* COMMON SCRIPTS  */}
	<script src="./assets/js/jquery-3.6.0.min.js"></script>
    <script src="./assets/js/common_scripts.min.js"></script>
	<script src="./assets/js/velocity.min.js"></script>
	<script src="./assets/js/common_functions.js"></script>
	<script src="./assets/js/file-validator.js"></script>
	<script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>

	{/* Wizard script */}
	<script src="./assets/js/func_1.js"></script>


        </>
    )
}
export default Devwing;