import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import Masonry from 'react-masonry-component';

//images


const postgridBlog = [
	{ image: '/images/blog/grid/pic9.jpg', title: 'Why is Early Education Essential?' },
	{ image: '/images/blog/grid/pic8.jpg', title: 'The Shocking Revelation of Education.' },
	{ image: '/images/blog/grid/pic7.jpg', title: 'Five Things Nobody Told You About' },
	{ image: '/images/blog/grid/pic4.jpg', title: 'Here is What People Are Saying About' },
	{ image: '/images/blog/grid/pic5.jpg', title: 'Seven Things You Probably Did not Know About' },
	{ image: '/images/blog/grid/pic6.jpg', title: 'Why is Early Education Essential?' },
];

// Masonry section
const masonryOptions = {
	transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end	

class BlogClassicGrid extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle motherMenu="Blog Classic Grid" activeMenu="Blog Classic Grid" />
					<div className="content-block">
						{/* blog grid  */}
						<div className="section-full content-inner">
							<div className="container">
								<div className="dlab-blog-grid-3 row" id="masonry">
								
										{postgridBlog.map((data, index) => (
											<div className="card-container col-lg-12 col-md-6 col-sm-12" key={index}>
												<div className="blog-post blog-grid style-2">
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
											</div>
										))}
								
								</div>

							</div>
						</div>
						{/* blog grid  End*/}
					</div>
				</div>
				<Footer />
			</Fragment>
		)
	}
}
export default BlogClassicGrid;