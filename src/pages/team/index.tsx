
// import Link from 'next/link';
// import React from 'react';

// export default function TeamMembers() {
//     const branches = [
//         { id: '01', name: 'pranav' },
//         { id: '02', name: 'dipali' },
//         { id: '03', name: 'sushama' },
//         { id: '04', name: 'snehal' }
//     ];

//     return (
//         <div>
//             <h1>React Slug Example</h1>
//             {branches.map((item) => (
//                 <div key={item.id}>
//                     <Link href={`/team/${item.name}`}>
//                        {item.name}
//                     </Link>
//                     <br />
//                 </div>
//             ))}
//         </div>
//     );
// }

import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
// import { teamMembers } from '@/constants/db';
import TeamList from '@/component/Element/TeamList';

const bnr1 = '/images/line2.png';



class TeamMembers extends Component {
	
	render() {
		return (
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle motherMenu="Team" activeMenu="Team" />
					<div className="content-block">
						<TeamList />
						{/* <div className="section-full bg-white content-inner" style={{backgroundImage:"url("+ bnr1 +")", backgroundSize:"contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
								<div className="container">
									<div className="section-head text-center">
                                        
										<h2 className="head-title text-secondry">About the Team</h2>
										<p>
											We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs
										</p>
									</div>
									<div className="row">
										{teamMembers.map((data,index)=>(
											<div className="col-lg-3 col-md-6 col-sm-6" key={index}>
												 <div className="dlab-box box-frame1 team-box m-b40">
													<div className="dlab-thum"> 
														<Link href={"`/team/${data.id}`"}>
															<img src={data.image} alt="" />
														</Link>
														<div className="overlay-bx">
															<h5 className="team-title"><Link href={`/team/${data.id}`}>{data.name}</Link></h5>
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
							</div> */}

					</div>
				</div>
				<Footer />
			</Fragment>
		)
	}
}

export default TeamMembers;