import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import TeacherSlider from '@/component/Element/TeacherSlider';
import PageTitle from '@/component/Layout/PageTitle';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';
import AccordionBlog from '@/component/Element/AccordionBlog';
import TestiMonialSlider from '@/component/Element/TestiMonialSlider';
import VideoPopup from '@/component/Element/VideoPopup';
//Images
const bnr1 = '/images/line2.png';
const bnr2 = '/images/background/bg5.jpg';
const bnr3 = '/images/background/bg6.jpg';
const bnr4 = '/images/line2.png';
const about = '/images/logo.png';
const gallery1 = '/images/gallery/pic1.jpg';
const gallery2 = '/images/gallery/pic2.jpg';
const gallery3 = '/images/gallery/pic3.jpg';
const gallery4 = '/images/gallery/pic4.jpg';
const gallery5 = '/images/gallery/pic5.jpg';
const gallery6 = '/images/gallery/pic6.jpg';

// Masonry section
const masonryOptions = {
	transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end

//Light Gallery Icon
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
		<Link href={"#"} onClick={() => openLightbox(props.imageToOpen)} className="" >
			<i className="fa fa-search icon-bx-xs"></i>
		</Link>
	)
}
const galleryBlog = [
	{ image: gallery1 },
	{ image: gallery2 },
	{ image: gallery3 },
	{ image: gallery4 },
	{ image: gallery5 },
	{ image: gallery6 },
];

function BackgroundBlog() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12  about-text" style={{ visibility: "visible", animationDuration: "2s", animationDelay: "0.2s", animationName: "fadeIn" }}>
						<div className="section-head text-center">
							{/* <div className="video-play">
								<VideoPopup />
							</div> */}
							<h4 className='text-white'>Join Our New Session</h4>
							<h2>Call To Enrol Your Child <br/><span className='text-yellow'> +1 (315) 402-1234</span></h2>
							{/* <Link href={"./contect-us"} className="btn btn-md radius-xl">Contact Us</Link> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
function BackgroundBlog2() {
	return (
		<>
			<div className="px-5">
				<div className="row pl-5">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12  about-text" style={{ visibility: "visible", animationDuration: "2s", animationDelay: "0.2s", animationName: "fadeIn" }}>
						<div className="section-head">

							<h2 className='mb-0' style={{ color: '#ffb822' }}>Vision<br />
								{/* <span className="text-yellow">222 4444 000</span> */}
							</h2>
							<p className="text-white">Education is the passport to the world.<br />
								No child should fall behind academically.</p>

							<h2 className='mb-0' style={{ color: '#ffb822' }}>Mission<br />
								{/* <span className="text-yellow">222 4444 000</span> */}
							</h2>
							<p className="text-white">We strive to provide a safe and learning <br />environment for preschool age children <br />to reach their maximum potential.</p>
							{/* <h4 className="text-white">Join Our New Session</h4> */}
							{/* <Link href={"./contect-us"} className="btn btn-md radius-xl">Read More</Link> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

class About extends Component {
	componentDidMount() {
		var splitBox = document.querySelectorAll('.split-box');

		var fSB = [].slice.call(splitBox);

		fSB.forEach(el => el.classList.add('split-active'));
	}
	render() {
		return (
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle motherMenu="About Us " activeMenu="About Us " />
					<div className="content-block">
						<div className="section-full bg-white content-inner-2 about-area" style={{ backgroundImage: "url(" + bnr1 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
							<div className="container">
								<div className="row">
									<div className="col-lg-6 col-md-12 col-sm-12 m-b15">
										<div className="section-head">
											<h2 className="head-title text-secondry">About B4-School</h2>
											<p>B4-School, is a premier learning center that fosters a nurturing and engaging learning environment for young children. Our experienced educators understand the unique ways in which children learn and are dedicated to creating programs that stimulate curiosity and encourage intellectual growth</p>
											<p>At B4-School, we believe in maximizing each child&apos;s potential through tailored educational experiences that inspire a lifelong love for learning.</p>
										</div>
										{/* <div className=''>
											<div className="card vm-card">
												<div className="card-body">
													<div className='row'>
														<div className='col-4'></div>
														<div className='col-8'>
															<div>
																<h4 className='card-title'>VISION</h4>
																<p className='mb-0'>Education is the passport to the world.
																	No child should fall behind academically.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="card vm-card">
												<div className="card-body">
													<div className='row'>
														<div className='col-4'></div>
														<div className='col-8'>
															<div>
																<h4 className='card-title'>MISSION</h4>
																<p className='mb-0'>We strive to provide a safe and learning environment for preschool age children to reach their maximum potential.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div> */}
										{/* <AccordionBlog /> */}
									</div>
									<div className="col-lg-6 col-md-12 col-sm-12 teacher-content">
										<div className="split-box">
											<div className="about-media">
												<img src={about} style={{ maxHeight: '20rem', objectFit: 'contain' }} alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
							<BackgroundBlog />
						</div> */}
						{/*  Portfolio  */}
						{/* <div className="section-full content-inner">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">Gallery of our classes</h2>
									<p>We provide three classes with nine to twenty children each aged twelve months to six years of age.</p>
								</div>
								<SimpleReactLightbox>
									<SRLWrapper>
										<div className="clearfix" id="lightgallery">
											<ul id="masonry" className="dlab-gallery-listing gallery-grid-4 gallery">
												<Masonry
													className={'my-gallery-class'}
													options={masonryOptions}
													disableImagesLoaded={false}
													updateOnEachImageLoad={false}
													imagesLoadedOptions={imagesLoadedOptions} // default {}
												>
													{galleryBlog.map((data, index) => (
														<li className="web design custom-position card-container col-lg-4 col-md-6 col-sm-6 " key={index}>
															<div className="dlab-box frame-box m-b30">
																<div className="dlab-thum dlab-img-overlay1">
																	<img src={data.image} alt="" />
																	<div className="overlay-bx">
																		<div className="overlay-icon">
																			<Iconimage />
																		</div>
																	</div>
																</div>
															</div>
														</li>
													))}
												</Masonry>
											</ul>
										</div>
									</SRLWrapper>
								</SimpleReactLightbox>
							</div>
						</div> */}
						<div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{ backgroundImage: "url(" + bnr3 + ")" }}>
							<BackgroundBlog2 />
						</div>

						{/* Section-3 Start*/}
						<div className="section-full bg-white content-inner-1" style={{ backgroundImage: "url(" + bnr4 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">About Our Team</h2>
									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
								</div>
								<TeacherSlider />
							</div>
						</div>
						{/* Section-3 End*/}

						<div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
							<BackgroundBlog />
						</div>
						<div className="section-full bg-white content-inner-2" style={{ backgroundImage: "url(" + bnr4 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">Testimonials about center</h2>
									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
								</div>
								<TestiMonialSlider />
							</div>
						</div>
					</div>

				</div>
				<Footer />
			</Fragment>
		)
	}
}
export { BackgroundBlog, BackgroundBlog2 };
export default About;