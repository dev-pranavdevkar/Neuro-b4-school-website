import React,{Fragment, useRef } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';

const Footer = () =>{
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('service_zubfdvh', 'template_iy1pb0b', e.target, 'user_FvNIKVJ7om2PphifhzMm2')
		 .then((result) => {
			  console.log(result.text);
		 }, (error) => {
			  console.log(error.text);
		});
		e.target.reset()
	};	
	
	return(
		<Fragment>
			<footer className="site-footer">
				<div className="footer-top">
					<div className="container wow fadeIn" data-wow-delay="0.5s">
						<div className="row d-flex justify-content-between">
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 footer-col-4">
								<div className="widget widget_ftabout">
									<div className="footer-logo">
										<Link href={"./"}><img src='/images/logo.png' className='logo-size-footer' alt="" /></Link>
									</div>
									<p>We prepare preschoolers for school</p>
								</div>
							</div>
							<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 footer-col-4">
								<div className="widget widget_services border-0">
									<h5 className="footer-title">Information</h5>
									<ul className="list-2">
										<li><Link href={"./"}>Home</Link></li>
										<li><Link href={"/about"}>About </Link></li>
										<li><Link href={"/activities"}>Activities</Link></li>
										<li><Link href={"/locations"}>Locations</Link></li>
										<li><Link href={"/shop"}>Shop</Link></li>
										<li><Link href={"/programs"}>Programs</Link></li>
										
										{/* <li><Link href={"/classes"}>Classes</Link></li> */}
										<li><Link href={"/contact-us"}>Contact</Link></li>
									</ul>
								</div>
							</div>
							{/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 footer-col-4">
								<div className="widget recent-posts-entry">
									<h5 className="footer-title">Recent Posts</h5>
										<div className="widget-post-bx">
											<div className="widget-post clearfix">
												<div className="dlab-post-media"> <img src='/images/blog/recent-blog/pic1.jpg' width="200" height="143" alt="" /> </div>
												<div className="dlab-post-info">
													<div className="dlab-post-header">
														<h6 className="post-title"><Link href={"/blog-details"}>What It's Like Dating.</Link></h6>
													</div>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-author">By Jone</li>
															<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="dlab-post-media"> <img src='images/blog/recent-blog/pic2.jpg' width="200" height="143" alt="" /> </div>
												<div className="dlab-post-info">
													<div className="dlab-post-header">
														<h6 className="post-title"><Link href={"/blog-details"}>The Reasons Why We Love</Link></h6>
													</div>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-author">By Marry</li>
															<li className="post-comment"><i className="fa fa-comments"></i> 5</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
								</div>
							</div> */}
							{/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 footer-col-4 ">
								<div className="widget">
									<h5 className="footer-title">Newsletter</h5>
									<div className="subscribe-form m-b20">
										<form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
											<div className="dzSubscribeMsg"></div>
											<div>
												<input name="dzEmail" required="required"  className="form-control" placeholder="Your Email Address" type="email" />
												<button name="submit" value="Submit" type="submit" className="btn btn-md radius-xl">Subscribe</button>
											</div>
										</form>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
				{/*  footer bottom part  */}
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-8 col-sm-6 text-left "> <span>Copyright © 2022 B4-School. All right reserved</span> </div>
							<div className="col-lg-6 col-md-4 col-sm-6 text-right "> 
								<ul className="list-inline">
									<li><Link href={"#"} className="btn-link facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
									<li><Link href={"#"} className="btn-link google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
									<li><Link href={"#"} className="btn-link linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
									<li><Link href={"#"} className="btn-link instagram circle"><i className="fa fa-instagram"></i></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</Fragment>
	)
}

export default Footer;