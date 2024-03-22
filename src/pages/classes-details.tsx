import React,{Fragment,Component} from 'react';
import Link from 'next/link';
import SimpleReactLightbox,{SRLWrapper} from 'simple-react-lightbox'; 
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import ClassDetailContent from '@/component/Element/ClassDetailContent';

//images
const bnr1 = '/images/line2.png';
const recent1 = '/images/blog/recent-blog/pic1.jpg';
const recent2 = '/images/blog/recent-blog/pic2.jpg';
const gallery1 = '/images/gallery/pic1.jpg';
const gallery2 = '/images/gallery/pic2.jpg';
const gallery3 = '/images/gallery/pic3.jpg';
const gallery4 = '/images/gallery/pic4.jpg';
const gallery5 = '/images/gallery/pic5.jpg';
const gallery7 = '/images/gallery/pic7.jpg';
const gallery8 = '/images/gallery/pic8.jpg';
const gallery9 = '/images/gallery/pic9.jpg';

function PostMedia(){
	return(
		<>
			<div className="dlab-post-meta">
				<ul>
					<li className="post-author">By Jone</li>
					<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
				</ul>
			</div>	
				
		</>
	)
}
function LightGallery(){
	return(
		<>
			<SimpleReactLightbox>
				<SRLWrapper>
					{galleryBlog.map((data,index)=>(
						<li key={index}>
							<span className="check-km"><img src={data.image} alt="" /></span>
						</li>
					))}
				</SRLWrapper>	
			</SimpleReactLightbox>	
		</>
	)
}
const galleryBlog=[
	{image: gallery1 ,},	
	{image: gallery5 ,},	
	{image: gallery7 ,},	
	{image: gallery8 ,},	
	{image: gallery2 ,},	
	{image: gallery3 ,},	
	{image: gallery4 ,},	
	{image: gallery9 ,},
];

class ClassesDetail extends Component{
	render(){
		return(
			<Fragment>	
				<Header />
				<div className="page-content">
					<PageTitle motherMenu="Classes Detail" activeMenu="Classes Detail" />
					<div className="content-block">
						<div className="section-full bg-white content-inner" style={{backgroundImage:"url("+ bnr1 +")", backgroundSize:"contain",backgroundRepeat: "no-repeat",backgroundPosition: "center"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-8 col-md-12 col-sm-12 m-b15">
										<ClassDetailContent />
									</div>
									<div className="col-lg-4 col-md-12 col-sm-12">
										<div className="widget">
											<h5 className="widget-title">Search</h5>
											<div className="search-bx style-1">
												<form role="search" method="post">
													<div className="input-group">
														<input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
														<span className="input-group-btn">
															<button type="submit" className="fa fa-search text-primary"></button>
														</span> 
													</div>
												</form>
											</div>
										</div>
										<div className="details-tbl widget">
											<ul className="class-details">
												<li>
													<div className="name"><i className="la la-clock-o"></i>Start Date</div>
													<div className="info">24 March 2017</div>
												</li>
												<li>
													<div className="name"><i className="la la-calendar-check-o"></i>Years Old</div>
													<div className="info">6-8 Years</div>
												</li>
												<li>
													<div className="name"><i className="la la-arrows"></i>Class Size</div>
													<div className="info">20-30 Kids</div>
												</li>
												<li>
													<div className="name"><i className="la la-hourglass"></i>Carry Time</div>
													<div className="info">5 Hours/6 Days</div>
												</li>
												<li>
													<div className="name"><i className="la la-history"></i>Coures Duration</div>
													<div className="info">10-12 Month</div>
												</li>
												<li>
													<div className="name"><i className="la la-clock-o"></i>Class Time</div>
													<div className="info">9:30am-5:30pm</div>
												</li>
												<li>
													<div className="name"><i className="la la-star-o"></i>Rating</div>
													<div className="info rating">
													<i className="fa fa-star" aria-hidden="true"></i>
													<i className="fa fa-star" aria-hidden="true"></i>
													<i className="fa fa-star" aria-hidden="true"></i>
													<i className="fa fa-star" aria-hidden="true"></i>
													<i className="fa fa-star" aria-hidden="true"></i>
													</div>
												</li>
												<li>
													<div className="name"><i className="la la-user"></i>Tution Free</div>
													<div className="info">$ 250.00</div>
												</li>
											</ul>
										</div>
										<div className="widget recent-posts-entry">
											<h5 className="widget-title">Recent Posts</h5>
											<div className="widget-post-bx">
												<div className="widget-post clearfix">
													<div className="dlab-post-media"> <img src={recent1} width="200" height="143" alt="" /> </div>
													<div className="dlab-post-info">
														<div className="dlab-post-header">
															<h6 className="post-title"><Link href={"/blog-details"}>Reasons Why You Cannot Learn Kids Education Well.</Link></h6>
														</div>
														<PostMedia />
													</div>
												</div>
												<div className="widget-post clearfix">
													<div className="dlab-post-media"> <img src={recent2} width="200" height="143" alt="" /> </div>
													<div className="dlab-post-info">
														<div className="dlab-post-header">
															<h6 className="post-title"><Link href={"/blog-details"}>Small But Important Things To Observe In Kids.</Link></h6>
														</div>
														<PostMedia />
													</div>
												</div>
											</div>
										</div>
										<div className="widget widget_gallery gallery-grid-4">
											<h5 className="widget-title">Our services</h5>
											<ul id="lightgallery">
												<LightGallery />	
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

export {LightGallery}
export default ClassesDetail;