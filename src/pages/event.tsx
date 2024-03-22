import React,{Fragment, Component} from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
//Images
const large1 = '/images/blog/large/pic1.jpg';
const large2 = '/images/blog/large/pic2.jpg';
const large3 = '/images/blog/large/pic3.jpg';

const eventBlog = [
	{images: large1, date: '05', title: 'Business Conferences 2017',},	
	{images: large2, date: '27', title: '5 Outrageous Ideas For You',},	
	{images: large3, date: '25', title: 'Seven Latest Developments',},	
	{images: large1, date: '03', title: 'Five Mind Numbing Facts About',},	
	{images: large2, date: '19', title: 'Five Ways To Introduce',},	
	{images: large3, date: '17', title: 'Ten Things To Know About',},	
];

class Event extends Component{
	render(){
		return(
			<Fragment>
			<Header />	
			<div className="page-content">
				<PageTitle  motherMenu="Event"  activeMenu="Event" />
				<div className="content-block">
					<div className="section-full bg-white content-inner">
						<div className="container">
							<div className="row">
								{eventBlog.map((item, index)=>(
									<div className="col-lg-6 col-md-6 col-sm-6" key={index}>
										<div className="event-box">
											<div className="event-media">
												<img src={item.images} alt=""/>
											</div>
											<div className="event-info">
												<div className="dlab-post-title">
													<h3 className="post-title"><Link href={"/event-details"}>{item.title}</Link></h3>
												</div>
												<div className="event-meta">
													<ul>
														<li className="post-date"><strong>{item.date}</strong><span>July</span></li>
														<li className="post-author"><i className="fa fa-map-marker"></i> 89 Newyork City.</li>
													</ul>
												</div>
												<div className="dlab-post-text">
												   <p>Lorem ipsum dolor sit amet elit. Cum veritatis sequi nulla nihil, dolor voluptatum nemo adipisci eligendi! Sed nisi perferendis, totam harum dicta.</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="pagination-bx rounded pagination-lg clearfix primary">
										<ul className="pagination justify-content-center">
											<li className="previous"><Link href={'#'}><i className="ti-arrow-left"></i> Prev</Link></li>
											<li className="active"><Link href={'#'}>1</Link></li>
											<li><Link href={'#'}>2</Link></li>
											<li><Link href={'#'}>3</Link></li>
											<li className="next"><Link href={'#'}>Next <i className="ti-arrow-right"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			</Fragment>
		)
	}
}
export default Event;