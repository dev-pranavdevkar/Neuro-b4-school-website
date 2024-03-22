import React,{Fragment, Component} from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import SideBar from '@/component/Element/SideBar';


//Images
const large1 = '/images/blog/large/pic1.jpg';
const large2 = '/images/blog/large/pic2.jpg';
const large3 = '/images/blog/large/pic3.jpg';

const blogGrid = [
	{image: large1 , title: 'Why is Early Education Essential?' },
	{image: large2 , title: 'Ten Reasons Why People Love Education' },
	{image: large3 , title: 'Five Easy Ways To Facilitate Education.' },
	{image: large1 , title: 'Education Is So Famous, But Why?' },
	{image: large2 , title: 'The Modern Rules Of Education.' },
	{image: large3 , title: 'The Shocking Revelation of Education.' },
];


class BlogStandard extends Component{
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle  motherMenu="Blog Standard"  activeMenu="Blog Standard" />
					<div className="content-block">
						<div className="section-full content-inner">
							<div className="container">
								<div className="dlab-blog-grid-3 row">
									<div className="col-lg-8 col-md-12 col-sm-12 col-xl-8">
										{blogGrid.map((data,index)=>(
											<div className="blog-post blog-grid style-2 " key={index}>
												<div className="dlab-post-media">
													<Link href={"./blog-details"}><img src={data.image} alt="" /></Link>
												</div>
												<div className="dlab-info">
													<div className="dlab-post-title ">
														<h5 className="post-title"><Link href={"./blog-details"}>{data.title}</Link></h5>
													</div>
													<div className="dlab-post-meta">
														<ul className="align-items-center">
															<li className="post-date"><i className="fa fa-calendar"></i><strong>10 Aug</strong> <span>2016</span></li>
															<li className="post-author"><i className="fa fa-user"></i>By <Link href={"./blog-details"}>Jone</Link></li>
														</ul>
													</div>
													<div className="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div className="dlab-post-readmore blog-share"> 
														<Link href={"./blog-details"} title="READ MORE" rel="bookmark" className="btn black">READ MORE</Link>
													</div>
												</div>
											</div>
										))}
										{/* Pagination */}
										<div className="row">
											<div className="col-lg-12 col-md-12 col-sm-12 " >
												<div className="pagination-bx rounded pagination-lg clearfix primary">
													<ul className="pagination">
														<li className="previous"><Link href={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
														<li className="active"><Link href={"#"}>1</Link></li>
														<li><Link href={"#"}>2</Link></li>
														<li><Link href={"#"}>3</Link></li>
														<li className="next"><Link href={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
													</ul>
												</div>
											</div>
										</div>
										{/* Pagination End */}
									</div>
									<div className="col-lg-4 col-md-12 col-sm-12">
										<SideBar />
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
export default BlogStandard;