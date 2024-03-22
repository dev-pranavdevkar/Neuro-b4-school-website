
import React, { Component, useState, useEffect } from 'react';
import Link from 'next/link';
import Masonry from 'react-masonry-component';
// import Masonry from 'react-masonry-css';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';

//images
const gallery2 = '/images/gallery/pic2.jpg';
const gallery1 = '/images/gallery/pic1.jpg';
const gallery3 = '/images/gallery/pic3.jpg';
const gallery4 = '/images/gallery/pic4.jpg';
const gallery5 = '/images/gallery/pic5.jpg';
const gallery6 = '/images/gallery/pic6.jpg';

const imageBlog = [
	{ Large_img: gallery1, tag: ['Art', 'Math',], },
	{ Large_img: gallery2, tag: ['Physical Education',], },
	{ Large_img: gallery3, tag: ['Art', 'Physical Education',], },
	{ Large_img: gallery4, tag: ['English', 'Physical Education',], },
	{ Large_img: gallery5, tag: ['Art',], },
	{ Large_img: gallery6, tag: ['Physical Education',], },
	{ Large_img: gallery1, tag: ['English',], },
	{ Large_img: gallery2, tag: ['English',], },
	{ Large_img: gallery3, tag: ['Math',], },
	{ Large_img: gallery4, tag: ['Math',], },
	{ Large_img: gallery3, tag: ['Math',], },
	{ Large_img: gallery6, tag: ['Math',], },
]
//Light Gallery Icon
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (

		<Link href={''} onClick={() => openLightbox(props.imageToOpen)} className="" >
			<i className="fa fa-search icon-bx-xs"></i>
		</Link>
	)
}
// Masonry section
const masonryOptions = {
	transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end

const TagLi = ({ name, handlesettag, tagActive }) => {
	return (
		<li className={` tag ${tagActive ? 'btn active' : 'btn'}`} onClick={() => handlesettag(name)} >
			<input type="radio" />
			<a ><span>{name} {''}</span> </a>
		</li>
	);
};

class FilterTab extends Component {
	render() {
		return (
			<PortfolioItem />
		)
	}
}

function PortfolioItem() {
	const [tag, setTag] = useState('Show All');
	const [filteredImages, setFilterdImages] = useState([]);

	useEffect(() => {
		tag === 'Show All' ? setFilterdImages(imageBlog) : setFilterdImages(imageBlog.filter(image => image.tag.find(element => element === tag)))
	}, [tag])

	return (
		<>
			<div className="section-full content-inner">
				<div className="container-fluid">
					<div className="section-head text-center">
						<h2 className="head-title text-secondry">Activities of B4-School</h2>
						{/* <p>We provide three classes with nine to twenty children each aged twelve months to six years of age.</p> */}
					</div>
					<div className="clearfix" id="lightgallery">
						<div className="row">
							<div className="col-lg-12 text-center">
								<div className="site-filters filter-style1 clearfix m-b20">
									<ul className="filters" data-toggle="buttons">
										<TagLi name="Show All" handlesettag={setTag} tagActive={tag === 'Show All' ? true : false} />
										<TagLi name="English" handlesettag={setTag} tagActive={tag === 'English' ? true : false} />
										<TagLi name="Art" handlesettag={setTag} tagActive={tag === 'Art' ? true : false} />
										<TagLi name="Math" handlesettag={setTag} tagActive={tag === 'Math' ? true : false} />
										<TagLi name="Physical Education" handlesettag={setTag} tagActive={tag === 'Physical Education' ? true : false} />
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SimpleReactLightbox>
					<SRLWrapper >
						<ul className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery" data-wow-duration="2s" data-wow-delay="0.2s">
							<Masonry
								className={'my-gallery-class'} // default ''
								options={masonryOptions} // default {}
								disableImagesLoaded={false} // default false
								updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
								imagesLoadedOptions={imagesLoadedOptions} // default {}
							>
								{filteredImages.map((item, index) => (
									<li className="Art card-container col-lg-3 col-md-6 col-sm-6 wow zoomIn" key={index}>
										<div className="dlab-box frame-box m-b30">
											<div className="dlab-thum dlab-img-overlay1 ">
												<img src={item.Large_img} alt="" />
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
					</SRLWrapper>
				</SimpleReactLightbox>
			</div>
		</>
	);
}
export default FilterTab;