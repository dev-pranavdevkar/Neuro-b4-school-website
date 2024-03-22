import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';


const newsData = [
	{
		images: "/images/News/1.jpg",
		date: '05',
		month:'May', 
		location:"New York",
		title: 'STATE OF NEW YORK DEPARTMENT OF STATE',
		desc: "I hereby certify that the annexed copy for B4SLC LLC, File Number 230321000056 has been compared with the original document in the custody of the Secretary of State and that the same is true copy of said original.",
		pdf: '/images/News/1.pdf'
	},
	
	{ images: "/images/News/2.jpg",
	 date: '27',
	  month:'June',
	   location:"Hariyana", 
	   title: 'Inaugurated B-4 International Pre School by cutting the friend of former MLA Ravindra Machhrauli.', desc:"Samalkha. In Manana village of Halke, former MLA Ravindra Machhrauli inaugurated the newly constructed B-4 International Preschool located near the Government School by cutting the ribbon.", 
	   pdf: '/images/News/2.jpg' },

	{ images: "/images/News/4.jpg", 
	date: '25', month:'April', 
	location:"Iowa", 
	title: 'Certificate Of Organization-LLC', 
	desc:"We have registered Certificate Of Organization-LLC, Iowa USA", 
	pdf: '/images/News/4.pdf' },
	{ images: "/images/News/5.jpg", date: '13', month:'Nov', location:"Durban", title: 'COR14.3: Registration Certificate', desc:"Certificate issued by the Commissioner of Companies & Intellectual Property Commission on Monday, March 13, 2023 at 11:50	", pdf: '/images/News/5.pdf' },
	{ images: "/images/News/6.jpg", date: '19', month:'Dec', location:"Georgia", title: 'CERTIFICATE OF ORGANIZATION	', desc:'The Secretary of State and the Corporation Commissioner of the State of Georgia, hereby certify under the seal of their office', pdf: '/images/News/6.pdf' },

];

class News extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle motherMenu="News" activeMenu="News" />
					<div className="content-block">
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									{newsData.map((item, index) => (
										<div className="col-lg-4 col-md-6 col-sm-6 mb-5" key={index}>
											<div className="event-box">
												<div className="event-media">
													<img className='news-img' src={item.images} alt="" />
												</div>
												<div className="event-info">
													<div className="dlab-post-title">
														<h3 className="post-title"><Link target='_blank' href={item.pdf}>{item.title}</Link></h3>
													</div>
													<div className="event-meta">
														<ul>
															<li className="post-date"><strong>{item.date}</strong><span>{item.month}</span></li>
															<li className="post-author"><i className="fa fa-map-marker"></i> {item.location}</li>
														</ul>
													</div>
													<div className="dlab-post-text">
														<p>{item.desc}</p>
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
export default News;