import React, { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Branches } from '@/constants/db';
import axiosInstance from '@/services/axios';
import BannerSlider from '@/component/Element/BannerSlider';
import CoreCurriculum from '@/component/Element/CoreCurriculum';
import { EducationBanner } from '@/pages/index-1';
import OurPrograms from '@/component/Element/OurPrograms';
import FirstSafePreschoolNetwork from '@/component/Element/FirstSafePreschoolNetwork';
import TeacherSlider from '@/component/Element/TeacherSlider';
import FilterTab from '@/component/Element/FilterTab';
import WhyIsEarlyChildhoodEducationImportant from '@/component/Element/WhyIsEarlyChildhoodEducationImportant';
import TestiMonialSlider from '@/component/Element/TestiMonialSlider';
import ContactForm from '@/component/Element/ContactForm';
const bnr = '/images/background/bg10.jpg';
const bnr1 = '/images/line2.png'
const Children1 = '/images/background/children1.png'
const Children2 = '/images/background/children2.png'
const bgimg3 = '/images/line2.png'

// Define an interface for the branch data
interface BranchData {
	name: string;
	city_name: string;
	// Add other properties as needed
}
const Branch = () => {
	const router = useRouter();
	const { location } = router.query;
	const id = location; // Assigning location directly to id

	const [timerDays, setTimerDays] = useState('00');
	const [timerHours, setTimerHours] = useState('00');
	const [timerMinutes, setTimerMinutes] = useState('00');
	const [timerSeconds, setTimerSeconds] = useState('00');
	const intervalRef = useRef<NodeJS.Timeout | undefined>();

	const startTimer = () => {
		const WebsiteLaunchDate = new Date();
		WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
		const countdownDate = new Date(WebsiteLaunchDate.getFullYear(), WebsiteLaunchDate.getMonth(), WebsiteLaunchDate.getDate(), 23, 5).getTime();

		intervalRef.current = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				clearInterval(intervalRef.current!);
			} else {
				setTimerDays(days.toString().padStart(2, '0'));
				setTimerHours(hours.toString().padStart(2, '0'));
				setTimerMinutes(minutes.toString().padStart(2, '0'));
				setTimerSeconds(seconds.toString().padStart(2, '0'));
			}
		}, 1000);
	};

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(intervalRef.current!);
		};
	}, []);

	const [branchData, setBranchData] = useState<BranchData | null>(null); // Specify BranchData as the type

	useEffect(() => {
		// Fetch branch data only if location is defined
		if (id) {
			axiosInstance.get(`api/customer/v1/location/region/get/${id}`)
				.then((response) => {
					setBranchData(response.data.data ? response.data.data : null); // Set branchData to null if response data is empty
					console.log("Branch Data", branchData)
				})
				.catch((error) => {
					console.error('Error fetching branch data:', error);
				});
		}
	}, [id]); // Ensure useEffect runs when `id` changes

	return (
		<Fragment>
			{branchData && (<>
				<header className="site-header header mo-left">
					<div className="top-bar">
						<div className="container">
							<div className="row d-flex justify-content-between">
								<div className="dlab-topbar-left">
									<ul>

										<li><i className="fa fa-phone m-r5"></i> +1 (315) 402-1234</li>
										<li>
											<i className="fa fa-map-marker m-r5"></i>
											{branchData?.name}, {branchData?.city_name}
										</li>


									</ul>
								</div>
								<div className="dlab-topbar-right">
									<ul>

										<li><i className="fa fa-clock-o m-r5"></i> We Prepare Preschoolers For School</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* main header */}
					<div className="sticky-header main-bar-wraper navbar-expand-lg">
						<div className="main-bar clearfix ">
							<div className="container clearfix">
								{/*  website logo */}
								<div className="logo-header mostion">
									{/* <Link href='/' className="dez-page"><img src='/images/logo.png' alt="" /></Link> */}
									<Link href='/' className="dez-page"><img src='/images/logo.png' className='logo-size-header' alt="" /></Link>
								</div>
								{/* nav toggle button */}
								<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/*  main nav  */}
								<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
									<div className="logo-header mostion">
										<Link href='/' className="dez-page"><img src={''} alt="" /></Link>
									</div>
									<ul className="nav navbar-nav">
										<li className="active"><Link href={'#home'}>Home
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"./"}>Home 1</Link></li>
												<li><Link href={"/index-2"}>Home 2</Link></li>
											</ul> */}
										</li>
										<li><Link href={'#about'}>About
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/about-1"}>About Us 1</Link></li>
												<li><Link href={"/about-2"}>About Us 2</Link></li>
											</ul> */}
										</li>
										{/* <li><Link href={'#'}>Classes <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link href={"/classes"}>Classes</Link></li>
												<li><Link href={"/classes-details"}>Classes Details</Link></li>
											</ul>
										</li> */}
										<li><Link href={'#programs'}>Programs
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/teachers"}>Teachers</Link></li>
												<li><Link href={"/teachers-details"}>Teachers Details</Link></li>
											</ul> */}
										</li>
										<li><Link href={'#teachers'}>Teachers
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/coming-soon"}>Comign Soon</Link></li>
												<li><Link href={"/faqs"}>Faqs</Link></li>
												<li><Link href={"/event"}>Event</Link></li>
												<li><Link href={"/event-details"}>Event Details</Link></li>
												<li><Link href={"/error-404"}>Error 404</Link></li>
											</ul> */}
										</li>
										<li><Link href={'#activities'}>Activities
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/blog-standard"}>Standard</Link></li>
												<li><Link href={"/blog-classic-grid"}>Classic</Link></li>
												<li><Link href={"/blog-details"}>Blog Details</Link></li>
											</ul> */}
										</li>
										<li><Link href={'#testimonial'}>Testimonial
											{/* <i className="fa fa-chevron-down"></i> */}
										</Link>
											{/* <ul className="sub-menu">
												<li><Link href={"/gallery"}>Gallery Grid</Link></li>
												<li><Link href={"/gallery-masonary"}>Gallery Masonary</Link></li>
												<li><Link href={"/gallery-filter"}>Gallery Tiles Filter</Link></li>
											</ul> */}
										</li>

										<li><Link href={"#contact"}>Contact</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* Main header END */}
				</header>
				<div className="page-content bg-white">
					{ /* Slider Banner */}
					<BannerSlider />
					{ /* Slider Banner */}



					<div className="content-block">
						{/*  About Us */}



						<div className="section-full bg-white content-inner-1 about-kids" style={{ backgroundImage: "url(" + bnr1 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
							<CoreCurriculum />
							<div className="childern-box">
								<div className="childern-1"><img src={Children1} alt="" /></div>
								<div className="childern-2"><img src={Children2} alt="" /></div>
							</div>
						</div>
						{/*  About Us End*/}

						<EducationBanner />


						<OurPrograms />
						{/* <EducationBanner /> */}

						{/* <div className="section-full bg-white content-inner-1 text-center">
								<div className="container">
									<div className="section-head">
										<h2 className="head-title text-secondry">Why is early childhood education important?</h2>
										<p>Fill your child's childhood with the joy of learning!</p>
									</div>
									<div className="row">
										{iconBlog.map((data, index)=>(
											<div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
												<div className="icon-bx-wraper sr-iconbox m-b20">
													<div className="icon-lg m-b20">
														<Link href={"#"} className="icon-cell">
															<img src={data.image} alt=""/></Link>
													</div>
													<div className="icon-content">
														<h6 className="dlab-tilte">{data.title1}<br/>{data.title2}</h6>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div> */}


						<FirstSafePreschoolNetwork />
						<WhyIsEarlyChildhoodEducationImportant />
						<div className="section-full bg-white content-inner-1" style={{ backgroundImage: "url(" + bgimg3 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">About Our Team</h2>
									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
								</div>
								<TeacherSlider />
							</div>
						</div>
						<div className="section-full bg-white content-inner-1">
							<div className="container">
								{/* <div className="section-head text-center">
									<h2 className="head-title text-secondry">Gallery of our classes</h2>
									<p>We provide three classes with nine to twenty children each aged twelve months to six years of age.</p>
								</div> */}
								<FilterTab />
							</div>
						</div>

						<div className="section-full bg-white content-inner-1">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">Testimonials about center</h2>
									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
								</div>
								<TestiMonialSlider />
							</div>
						</div>
						{/* <div className="section-full bg-white content-inner">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">From the News</h2>
									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
								</div>
								<FromSlider />
							</div>
						</div> */}
						<ContactForm />
					</div>
				</div>
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
											<li><Link href={"#home"}>Home</Link></li>
											<li><Link href={"#about"}>About </Link></li>
											<li><Link href={"#programs"}>Programs</Link></li>
											<li><Link href={"#teachers"}>Teachers</Link></li>
											<li><Link href={"#activities"}>Activities</Link></li>
											<li><Link href={"#testimonial"}>Testimonial</Link></li>
											<li><Link href={"#contact"}>Contact</Link></li>

											{/* <li><Link href={"/classes"}>Classes</Link></li> */}
											{/* <li><Link href={"/contact-us"}>Contact</Link></li> */}
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
			</>)}

		</Fragment>
	);
}

export default Branch;
