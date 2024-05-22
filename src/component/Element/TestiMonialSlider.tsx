import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axiosInstance from '@/services/axios';
import { ProgramData } from '@/types'; // Assuming ProgramData is defined in a separate types file

const profile = "/images/logo.png";

interface TestimonialProps {
	branchData: BranchData | null; // Assuming BranchData is the type of branchData
}

const TestimonialSlider: React.FC<TestimonialProps> = ({ branchData }) => {
	const [testimonialData, setTestimonialData] = useState<ProgramData[]>([]);
	const slider = React.useRef<Slider>(null); // Ref for Slider component

	useEffect(() => {
		axiosInstance.get(`api/customer/v1/testimonials/getAllTestimonial`)
			.then((response) => {
				const sortedData = response.data.data.rows.sort((a: ProgramData, b: ProgramData) => {
					return parseInt(a.id) - parseInt(b.id); // Sort by id
				});
				setTestimonialData(sortedData);
			})
			.catch((error) => {
				console.error('Error fetching Testimonial:', error);
			});
	}, []);

	const next = () => {
		if (slider.current) {
			slider.current.slickNext();
		}
	};

	const previous = () => {
		if (slider.current) {
			slider.current.slickPrev();
		}
	};

	const settings = {
		arrows: false,
		slidesToShow: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 1 }
			},
			{
				breakpoint: 991,
				settings: { slidesToShow: 1 }
			},
			{
				breakpoint: 576,
				settings: { slidesToShow: 1 }
			}
		]
	};

	const filteredTestimonialData = branchData?.id
		? testimonialData.filter(data => data.region_id === branchData.id)
		: testimonialData.filter(data => data.isShowOnHomePage);

	return (
		<div className="sprite-nav">
			<Slider className="client-carousel owl-carousel owl-theme" ref={slider} {...settings}>
				{filteredTestimonialData.map((item, index) => (
					<div className="item" key={index}>
						<div className="client-box">
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius ">
									<div className='d-flex align-items-center h-100'>
										<img src={profile} alt="B4 School Logo" />
									</div>
								</div>
								<h5 className="testimonial-name m-t0 m-b5">{item.name}</h5>
								<span>Parent of {item.role}</span>
							</div>
							<div className="testimonial-text">
								<p>{item.comment}</p>
							</div>
						</div>
					</div>
				))}
			</Slider>
			<div className="owl-nav" style={{ textAlign: "center" }}>
				<div className=" owl-prev " onClick={previous} />
				<div className="owl-next " onClick={next} />
			</div>
		</div>
	);
};

export default TestimonialSlider;
