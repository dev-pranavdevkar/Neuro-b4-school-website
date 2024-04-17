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
import ThemeButton from '@/component/Element/ThemeButton/ThemeButton';
import TeamList from '@/component/Element/TeamList';

const bnr = '/images/background/bg10.jpg';
const bnr1 = '/images/line2.png'
const Children1 = '/images/background/children1.png'
const Children2 = '/images/background/children2.png'
const bgimg3 = '/images/line2.png'

// Define an interface for the branch data
interface BranchData {
	name: string;
	city_name: string;
	mobile_number: string;
	map_url: string;
	facebook_url: string;
	google_plus_url: string;
	linkedin_url: string;
	instagram_url: string;
	branchData: {};
}
const Branch = () => {
	const router = useRouter();
	const { location } = router.query;
	const id = location; // Assigning location directly to id






	const [branchData, setBranchData] = useState<BranchData | null>(null); // Specify BranchData as the type

	useEffect(() => {
		
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
	}, [id]); 

	return (
		<Fragment>
			{branchData && (<>
				<header className="site-header header mo-left">
					<div className="top-bar">
						<div className="container">
							<div className="row d-flex justify-content-between">
								<div className="dlab-topbar-left">
									<ul>

										<li><i className="fa fa-phone m-r5"></i><a className='text-light' href={`tel:+${branchData?.mobile_number || '13154021234'}`}>{branchData?.mobile_number || '917773969004'}</a></li>


										<li>
											<i className="fa fa-map-marker m-r5"></i>
											<a className='text-light' href={`${branchData?.map_url || 'https://www.google.com/maps/'}`} target='_blank'>	{branchData?.name}, {branchData?.city_name}</a>
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
											
										</Link>
										
										</li>
										<li><Link href={'#about'}>About
											
										</Link>
										
										</li>
									
										<li><Link href={'#programs'}>Programs
											
										</Link>
											
										</li>
										<li><Link href={'#teachers'}>Teachers
											
										</Link>
										
										</li>
										<li><Link href={'#activities'}>Activities
											
										</Link>
											
										</li>
										<li><Link href={'#testimonial'}>Testimonial
											
										</Link>
											
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


						<FirstSafePreschoolNetwork />
						<WhyIsEarlyChildhoodEducationImportant />
						{/* <div className="section-full bg-white content-inner-1" style={{ backgroundImage: "url(" + bgimg3 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">About Our Team</h2>
									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
								</div>
								<TeacherSlider branchData={branchData as BranchData | null} />
							</div>
						</div> */}
						<div>
							<TeamList branchData={branchData as BranchData | null}/>
						</div>
						<div className="section-full bg-white content-inner-1">
							<div className="container">

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

						<ContactForm branchData={branchData as BranchData | null} />

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


										</ul>
									</div>
								</div>



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
										<li><Link href={`${branchData?.facebook_url || 'https://www.facebook.com/people/B4-School/100065696191087/'}`} target='_blank' className="btn-link facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
										<li><Link href={`mailto:${branchData?.google_plus_url || 'contact@b4-school.com'}`} target='_blank' className="btn-link google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
										<li><Link href={`${branchData?.linkedin_url || 'https://www.linkedin.com/'}`} target='_blank' className="btn-link linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
										<li><Link href={`${branchData?.instagram_url || 'https://www.instagram.com'}`} target='_blank' className="btn-link instagram circle"><i className="fa fa-instagram"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</footer>
			</>)}
			{branchData && (
				<ThemeButton branchData={branchData as BranchData} />
			)}




		</Fragment>
	);
}

export default Branch;
