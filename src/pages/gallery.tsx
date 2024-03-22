import React,{Fragment,Component} from 'react';
import Link from 'next/link';
import SimpleReactLightbox,{SRLWrapper,useLightbox} from 'simple-react-lightbox'; 
import Masonry from 'react-masonry-component';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
//images
const gallery1 = '/images/gallery/pic1.jpg';
const gallery2 = '/images/gallery/pic2.jpg';
const gallery3 = '/images/gallery/pic3.jpg';
const gallery4 = '/images/gallery/pic4.jpg';
const gallery5 = '/images/gallery/pic5.jpg';
const gallery6 = '/images/gallery/pic6.jpg';

const galleryBlog =[
	{images: gallery1 }, {images: gallery2 }, {images: gallery3 },
	{images: gallery4 }, {images: gallery5 }, {images: gallery6 },
	{images: gallery1 }, {images: gallery2 }, {images: gallery3 },
	{images: gallery4 }, {images: gallery5 }, {images: gallery6 }
];
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
    <Link href={"#"} onClick={() => openLightbox(props.imageToOpen)} className="check-km" >
      <i className="fa fa-search icon-bx-xs"></i>
    </Link>
  )
}

class Gallery extends Component{
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle  motherMenu="Gallery Grid"  activeMenu="Gallery Grid" />
					<div className="content-block">
						<div className="section-full content-inner">
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
													{galleryBlog.map((item,index)=>(
														<li className="web design custom-position  card-container col-lg-4 col-md-6 col-sm-6 wow zoomIn"  key={index}>
															<div className="dlab-box frame-box m-b30">
																<div className="dlab-thum dlab-img-overlay1 ">
																	<img src={item.images} alt="" /> 
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
						</div>
					</div>
				</div>	
				<Footer />
			</Fragment>
		)
	}
}
export default Gallery;