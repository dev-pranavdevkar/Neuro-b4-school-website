// import React,{Fragment,Component} from 'react';
// import Link from 'next/link';
// import SimpleReactLightbox,{SRLWrapper,useLightbox} from 'simple-react-lightbox'; 
// import Masonry from 'react-masonry-component';
// import Header from '@/component/Layout/Header';
// import Footer from '@/component/Layout/Footer';
// import PageTitle from '@/component/Layout/PageTitle';

// //images
// const masonary1 = '/images/gallery/masonary/pic1.jpg';
// const masonary2 = '/images/gallery/masonary/pic2.jpg';
// const masonary3 = '/images/gallery/masonary/pic3.jpg';
// const masonary4 = '/images/gallery/masonary/pic4.jpg';
// const masonary5 = '/images/gallery/masonary/pic5.jpg';
// const masonary6 = '/images/gallery/masonary/pic6.jpg';
// const masonary7 = '/images/gallery/masonary/pic7.jpg';
// const masonary8 = '/images/gallery/masonary/pic8.jpg';
// const masonary9 = '/images/gallery/masonary/pic9.jpg';

// const galleryBlog =[
// 	{images: masonary1 }, {images: masonary2 }, {images: masonary3 },
// 	{images: masonary4 }, {images: masonary5 }, {images: masonary6 },
// 	{images: masonary1 }, {images: masonary2 }, {images: masonary3 },
// 	{images: masonary7 }, {images: masonary8 }, {images: masonary9 }
// ];
// // Masonry section
// const masonryOptions = {                                          
//     transitionDuration: 0
// };
// const imagesLoadedOptions = { background: '.my-bg-image-el' }
// // Masonry section end

// //Light Gallery Icon
// const Iconimage = props => {
// 	const { openLightbox } = useLightbox()
//   return (
//     <Link href={''}  onClick={() => openLightbox(props.imageToOpen)} className="check-km" >
//       <i className="fa fa-search icon-bx-xs"></i>
//     </Link>
//   )
// }

// class GalleryMasonary extends Component{
// 	render(){
// 		return(
// 			<Fragment>
// 				<Header />
// 				<div className="page-content">
// 					<PageTitle  motherMenu="Gallery Masonary"  activeMenu="Gallery Masonary" />
// 					<div className="content-block">
// 						<div className="section-full content-inner">
// 							<div className="container">
// 								<div className="section-head text-center">
// 									<h2 className="head-title text-secondry">Gallery of our classes</h2>
// 									<p>We provide three classes with nine to twenty children each aged twelve months to six years of age.</p>
// 								</div>
// 								<SimpleReactLightbox>
// 									<SRLWrapper>
// 										<div className="clearfix" id="lightgallery">
// 											<ul id="masonry" className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery masonry-gallery">
// 												<Masonry
// 													className={'my-gallery-class'} 
// 													options={masonryOptions} 
// 													disableImagesLoaded={false} 
// 													updateOnEachImageLoad={false} 
// 													imagesLoadedOptions={imagesLoadedOptions} // default {}
// 												>
// 													{galleryBlog.map((item,index)=>(
// 														<li className="web design card-container col-lg-4 col-md-6 col-sm-6 custom-position  "  key={index}>
// 															<div className="dlab-box frame-box m-b30">
// 																<div className="dlab-thum dlab-img-overlay1 ">
// 																	<img src={item.images} alt="" /> 
// 																	<div className="overlay-bx">
// 																		<div className="overlay-icon"> 
// 																			<Iconimage />
// 																		</div>
// 																	</div>
// 																</div>
// 															</div>
// 														</li>
// 													))}
// 												</Masonry>		
// 											</ul>
// 										</div>
// 									</SRLWrapper>	
// 								</SimpleReactLightbox>
// 							</div>
// 						</div>
// 					</div>
// 				</div>	
// 				<Footer />
// 			</Fragment>
// 		)
// 	}
// }
// export default GalleryMasonary;
import React from 'react'

export default function GalleryMasonary() {
  return (
	<div>gallery-masonary</div>
  )
}
