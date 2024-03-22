import React, {Component} from 'react';
import Link from 'next/link'

// import  bnr1 from '../public/images/main-slider/slide1.jpg'
import Carousel from 'react-bootstrap/Carousel'

const carouselBlog = [
	{image: '/images/main-slider/slide1.jpg' },	
	{image: '/images/main-slider/slide2.jpg' },	
	{image: '/images/main-slider/slide3.jpg' },	
];

class BannerSlider extends Component{
			
	render(){
		return(
			<Carousel
				indicators= {false}
				controls={true}
				className="owl-slider owl-carousel owl-theme owl-btn-center-lr dots-none" 
				autoPlay={true}
			>
				{carouselBlog.map((item,index)=>(	
					<Carousel.Item key={index}>
						<div className="slide-item">
							<div className="slide-item-img"><img src={item.image}  alt="" width="100%"/></div>
							<div className="slide-content">
								<div className="slide-content-box container">
									<div className="slide-content-area">
										<h2 className="slider-title">Children Academy <span>First ReseaArchers</span></h2>
										<p>Children's Academy will provide a stimulating and safe environment for children ages three month</p>
										<Link href={"./contect-us"} className="btn btn-md kids-btn radius-xl">Join us</Link>
									</div>
								</div>
							</div>	
						</div>	
					</Carousel.Item>	
				))}	
			</Carousel>
		)
	}
}

export default BannerSlider;