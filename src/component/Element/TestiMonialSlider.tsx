import React, { Component } from 'react';
import Slider from "react-slick";
import grid1 from '/images/testimonials/pic2.jpg';
const bob="/images/testimonials/bob.png"
const lora="/images/testimonials/lora.png"

const latestBlog = [
	{
		image: bob,
		name: 'Aditya Mukesh',
		containt: "I'm really happy that I chose B4-School for my daughter. The teachers and staff have been really helpful. Even during the pandemic, my daughter's learning didn't stop.",
		city: 'Pune,Maharashtra'
	},
	{
		image: lora,
		name: 'Anjali Bhosle',
		containt: "My child's development has greatly benefited from early education at B4-School, fostering increased interaction and confidence. Their imagination has been nurtured into active learning experiences.",
		city: 'Pune,Maharashtra'
	},
	{
		image: lora,
		name: 'Avani Shah',
		containt: "B4-School boasts a wonderful playground, an abundance of toys, and an educational approach that fosters well-rounded development, setting it apart as a unique school.",
		city: 'Pune,Maharashtra'
	},
	{ image: lora, name: 'Sandhya Salunkhe', containt: "The school members and the faculties are doing a great job. The facilities are very good for children. I personally like B4-School because the quality of education is too good. Thank you for giving good quality education and support for children.", city: 'Pune,Maharashtra' },
	{ image: bob, name: 'Sourabh Khot', containt: "B4-School The International School, BTM, is one of the best schools in Pune. The staff and teachers are very polite. My overall experience has been very good with B4-School BTM. My children love the activities and they are doing very well in their academics.", city: 'Pune,Maharashtra' },
]

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
										<div className="testimonial-pic radius">
											<img src={item.image} width="100" height="100" alt="" />
										</div>
										<h5 className="testimonial-name m-t0 m-b5">{item.name}</h5>
										<span>Parents</span>
									</div>
									<div className="testimonial-text">
										<p>{item.containt}</p>
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
