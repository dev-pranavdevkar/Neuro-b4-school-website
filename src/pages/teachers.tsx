import React,{Fragment, Component} from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import { Branches } from '@/constants/db';


const bnr1 = '/images/line2.png';


// const teamData = [
// 	{ image: '/images/team/sakshimam.jpg',name:'Ranjith Kumar Rikkala',role:'Founder', pagePath:''},
	
// 	{ image: '/images/team/sakshimam.jpg', name:'Sakshi Raka',role:'CEO, India', pagePath:''},
// 	{ image: '/images/team/Savita.jpg', name:'Savita Ruhal',role:'Director, Haryana, India', pagePath:''},
// 	{ image: '/images/team/Marthe.jpg', name:'Marthe Lumbwe',role:'Director, South Africa', pagePath:''},
// 	{ image: '/images/team/Kapata.jpg', name:'Katapa Nondaba',role:'Director, Zimbabwe', pagePath:''},
// 	{ image: '/images/team/teacher2B4 .jpg', name:'Shay Green',role:'Lead Teacher', pagePath:''},
// 	{ image: '/images/team/teacher7B4 .jpg', name:'Vinesh Gudla',role:'Technical Lead', pagePath:''},
// 	{ image: '/images/team/teacher3.jpg', name:'Jennifer Rose',role:'Curriculum Head', pagePath:''},
// 	{ image: '/images/team/teacher4B4.jpg', name:'Praparna Basu',role:'Curriculum Designer', pagePath:''},
// 	{ image: '/images/team/teacher5B4 .jpg', name:'Janelle Seeley',role:'Staff', pagePath:''},
// 	{ image: '/images/team/teacher6B4.jpg', name:'Patricia Schuch',role:'Staff', pagePath:''},
// ]

class Teachers extends Component{
	render(){
		return(
			<Fragment>
				<Header />
					<div className="page-content">
						<PageTitle motherMenu="Teachers" activeMenu="Teachers" />
						<div className="content-block">
							<div className="section-full bg-white content-inner" style={{backgroundImage:"url("+ bnr1 +")", backgroundSize:"contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
								<div className="container">
									<div className="section-head text-center">
										<h2 className="head-title text-secondry">About the Teachers</h2>
										<p>
											We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs
										</p>
									</div>
									<div className="row">
										{Branches.map((data,index)=>(
											<div className="col-lg-3 col-md-6 col-sm-6" key={index}>
												 <div className="dlab-box box-frame1 team-box m-b40">
													<div className="dlab-thum"> 
														<Link href={"/teachers-details"}>
															<img src={data.image} alt="" />
														</Link>
														<div className="overlay-bx">
															<h5 className="team-title"><Link href={data.pagePath}>{data.name}</Link></h5>
															<span className="team-info">{data.role}</span>
															<ul className="list-inline">
																<li><Link href={"#"}><i className="fa fa-facebook"></i></Link></li>
																<li><Link href={"#"}><i className="fa fa-google-plus"></i></Link></li>
																<li><Link href={"#"}><i className="fa fa-linkedin"></i></Link></li>
																<li><Link href={"#"}><i className="fa fa-instagram"></i></Link></li>
																<li><Link href={"#"}><i className="fa fa-twitter"></i></Link></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										))}
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

export default Teachers;