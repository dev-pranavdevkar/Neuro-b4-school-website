import React, { Component } from 'react';
import Slider from "react-slick";
import grid1 from '/images/testimonials/pic2.jpg';
const profile = "/images/logo.png"


const latestBlog = [
    {
        name: 'Aditya Mukesh',
        content: "B4-School is amazing! My child loves it there, and the teachers are really helpful. It's a great place for learning. The school's environment is very positive, which makes me confident in my child's education.",
        city: 'Pune, Maharashtra'
    },
    {
        name: 'Anjali Bhosle',
        content: "I'm so happy with B4-School! The staff are friendly, and my child has learned a lot. It's a wonderful school. The facilities are well-maintained, and the curriculum is engaging for children.",
        city: 'Pune, Maharashtra'
    },
    {
        name: 'Avani Shah',
        content: "B4-School is fantastic! My child enjoys the activities, and the teachers are very caring. I highly recommend it. The school encourages creativity and critical thinking, which I appreciate as a parent.",
        city: 'Pune, Maharashtra'
    },
    {
        name: 'Sandhya Salunkhe',
        content: "I'm really impressed with B4-School! The teachers are supportive, and my child is thriving. It's a top-notch school. The extracurricular activities offered by the school enhance my child's overall development.",
        city: 'Pune, Maharashtra'
    },
    {
        name: 'Sourabh Khot',
        content: "B4-School is excellent! The sense of community is wonderful, and my child is making great progress. It's a fantastic choice for parents. The school's focus on character-building sets it apart from others.",
        city: 'Pune, Maharashtra'
    },
];



class TestiMonialSlider extends Component<{}> {
	slider: Slider | null = null; // Declare slider property and initialize it to null

	constructor(props: {}) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		if (this.slider) {
			this.slider.slickNext();
		}
	}
	previous() {
		if (this.slider) {
			this.slider.slickPrev();
		}
	}
	render() {
		var settings = {
			arrows: false,
			slidesToShow: 1,
			infinite: true,
			// autoPlay: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		return (
			<>
				<div className="sprite-nav">
					<Slider className="client-carousel owl-carousel owl-theme  " ref={c => (this.slider = c)} {...settings}>
						{latestBlog.map((item, index) => (
							<div className="item" key={index}>
								<div className="client-box">
									<div className="testimonial-detail clearfix">
										<div className="testimonial-pic radius ">
											<div className='d-flex align-items-center h-100'>
												<img src={profile} alt="" />
											</div>
										</div>
										<h5 className="testimonial-name m-t0 m-b5">{item.name}</h5>
										<span>Parents</span>
									</div>
									<div className="testimonial-text">
										<p>{item.content}</p>
									</div>
								</div>
							</div>
						))}
					</Slider>
					<div className="owl-nav" style={{ textAlign: "center" }}>
						<div className=" owl-prev " onClick={this.previous} />
						<div className="owl-next " onClick={this.next} />
					</div>
				</div>
			</>
		)
	}
}
export default TestiMonialSlider;
