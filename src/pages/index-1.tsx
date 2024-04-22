import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import BannerSlider from '@/component/Element/BannerSlider';
import FromSlider from '@/component/Element/FromSilder';
import TestiMonialSlider from '@/component/Element/TestiMonialSlider';
import TeacherSlider from '@/component/Element/TeacherSlider';
import GallerySlider from '@/component/Element/GallerySlider';
import CoreCurriculum from '@/component/Element/CoreCurriculum';
import OurPrograms from '@/component/Element/OurPrograms';
import WhyIsEarlyChildhoodEducationImportant from '@/component/Element/WhyIsEarlyChildhoodEducationImportant';
import FirstSafePreschoolNetwork from '@/component/Element/FirstSafePreschoolNetwork';
import FilterTab from '@/component/Element/FilterTab';

const iconBlog = [
	{ image: '/images/icon/icon1.jpg', title1: 'To Think Creatively', title2: 'and Create' },
	{ image: '/images/icon/icon2.jpg', title1: 'To Feel Fne and to', title2: 'Understand Emotions' },
	{ image: '/images/icon/icon3.jpg', title1: 'To be Independent', title2: 'and Active' },
	{ image: '/images/icon/icon4.jpg', title1: 'To Apply', title2: 'Knowledge in Life' },

];


const bgimg1 = '/images/line.png'
const bgimg2 = '/images/background/bg1.jpg'
const bgimg3 = '/images/line2.png'
const Children1 = '/images/background/children1.png'
const Children2 = '/images/background/children2.png'
const bnr1 = '/images/line2.png'
class Index1 extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div className="page-content bg-white">
					{ /* Slider Banner */}
					<BannerSlider branchData={null} />
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


						<OurPrograms branchData={null} />
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
						{/* <div className="section-full bg-white content-inner-1" style={{ backgroundImage: "url(" + bgimg3 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">About Our Team</h2>
									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
								</div>
								<TeacherSlider />
							</div>
						</div> */}
						{/* <div className="section-full bg-white content-inner-1">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">Gallery of our classes</h2>
									<p>We provide three classes with nine to twenty children each aged twelve months to six years of age.</p>
								</div> */}
								{/* <FilterTab /> */}
							{/* </div>
						</div> */}

						<div className="section-full bg-white content-inner-1">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">Testimonials</h2>
									<p>We have an excellent teacher to child ratio to ensure that each child receives the attention he or she needs</p>
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
					</div>
				</div>
				<Footer />
			</Fragment>

		)
	}
}
function EducationBanner() {
	return (
		<>
			<div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{ backgroundImage: "url(" + bgimg2 + ")" }}>
				<div className="about-overlay-box"></div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div className="section-head">

								<h2 className="head-title text-yellow">Vision</h2>
								<p className="text-white">Education is the passport to the world. No child should fall behind academically.</p>
							</div>
							<div className="section-head">

								<h2 className="head-title text-yellow">Mission</h2>
								<p className="text-white">We strive to provide a safe and learning
									environment for preschool age children
									to reach their maximum potential..</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>
					</div>
				</div>
			</div>
		</>
	)
}
export { EducationBanner };
export default Index1;