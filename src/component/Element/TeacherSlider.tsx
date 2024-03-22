import React,{Component} from 'react';
import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';
import { teamMembers } from '@/constants/db';
const teamData = [
	{ image: '/images/team/ranjith.jpg',name:'Ranjith Kumar Rikkala',role:'Founder', pagePath:''},
	{ image: '/images/team/sakshimam.jpg', name:'Sakshi Raka',role:'CEO, India', pagePath:''},
	{ image: '/images/team/Savita.jpg', name:'Savita Ruhal',role:'Director, Haryana, India', pagePath:''},
	{ image: '/images/team/Marthe.jpg', name:'Marthe Lumbwe',role:'Director, South Africa', pagePath:''},
	{ image: '/images/team/Kapata.jpg', name:'Katapa Nondaba',role:'Director, Zimbabwe', pagePath:''},
	{ image: '/images/team/teacher2B4 .jpg', name:'Shay Green',role:'Lead Teacher', pagePath:''},
	{ image: '/images/team/teacher7B4 .jpg', name:'Vinesh Gudla',role:'Technical Lead', pagePath:''},
	{ image: '/images/team/teacher3.jpg', name:'Jennifer Rose',role:'Curriculum Head', pagePath:''},
	{ image: '/images/team/teacher4B4.jpg', name:'Praparna Basu',role:'Curriculum Designer', pagePath:''},
	{ image: '/images/team/teacher5B4 .jpg', name:'Janelle Seeley',role:'Staff', pagePath:''},
	{ image: '/images/team/teacher6B4.jpg', name:'Patricia Schuch',role:'Staff', pagePath:''},
]

class TeacherSlider extends Component{	
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,			
            infinite: true,
			autoPlay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 3,
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
		return(
			<>	
				<div className="sprite-nav">
					<Slider className="team-carousel owl-carousel owl-theme dots-none  " ref={c => (this.slider = c)} {...settings}>
						{teamMembers.map((item, index) => (
							<div className="item" key="index">
								 <div className="dlab-box box-frame1 team-box">
									<div className="dlab-thum"> 
										<Link href={`/team/${item.id}`}>
											<Image src={item.image}
											  width={285}
											  height={228} 
											 
											alt="" />
										</Link>
										<div className="overlay-bx">
											<h5 className="team-title"><Link href={`/team/${item.id}`}>{item.name}</Link></h5>
											<span className="team-info">{item.role}</span>
											<ul className="list-inline">
												<li><Link href={'#'}><i className="fa fa-facebook"></i></Link></li>
												<li><Link href={'#'}><i className="fa fa-google-plus"></i></Link></li>
												<li><Link href={'#'}><i className="fa fa-linkedin"></i></Link></li>
												<li><Link href={'#'}><i className="fa fa-instagram"></i></Link></li>
												<li><Link href={'#'}><i className="fa fa-twitter"></i></Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						))}	
					</Slider>		
					<div className="owl-nav" style={{ textAlign: "center" }}>
						<div className=" owl-prev " onClick={this.previous}/>
						<div className="owl-next " onClick={this.next}/>
					</div>
				</div>	
			</>	
		)
	}
}
export default TeacherSlider;