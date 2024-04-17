import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import axiosInstance from '@/services/axios';
import { baseUrl } from '@/config';

class News extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsData: [],
			error: null,
			currentPage: 1,
			itemsPerPage: 6
		};
	}

	componentDidMount() {
		axiosInstance.get('/api/customer/v1/news/getAllNews')
			.then((response) => {
				console.log('API response:', response.data); // Log the response data
				const newsItems = response.data.data.rows || []; // Extract news items array from API response
				this.setState({ newsData: newsItems });
			})
			.catch((error) => {
				console.error('Error fetching news data:', error);
				this.setState({ error: 'Failed to fetch news data' });
			});
	}

	render() {
		const { newsData, error, currentPage, itemsPerPage } = this.state;
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);
		const totalPages = Math.ceil(newsData.length / itemsPerPage);

		return (
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle motherMenu="News" activeMenu="News" />
					<div className="content-block">
						<div className="section-full bg-white content-inner">
							<div className="container">
								{error && <div>Error: {error}</div>}
								{!error && (
									<Fragment>
										<div className="row">
											{currentItems.map((item, index) => (
												<div className="col-lg-4 col-md-6 col-sm-6 mb-5" key={index}>
													<div className="event-box">
														<div className="event-media">
															<img className='news-img' src={`${baseUrl}${item.image}`} alt="" />
														</div>
														<div className="event-info">
															<div className="dlab-post-title">
																<h3 className="post-title">
																	<Link target='_blank' href={`${baseUrl}${item.secondary_file || item.image}`}>
																		{item.title}
																	</Link>
																</h3>
															</div>
															<div className="event-meta">
																<ul>
																	{/* Format date as "DD MON" */}
																	<li className="post-date"><strong>{new Date(item.date).getDate()}</strong><span>{new Date(item.date).toLocaleString('default', { month: 'short' })}</span></li>
																	<li className="post-author"><i className="fa fa-map-marker"></i> {item.location}</li>
																</ul>
															</div>
															<div className="dlab-post-text">
																<p>{item.description}</p>
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
										{/* Pagination links */}
										{totalPages > 1 && (
											<div className="row">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<div className="pagination-bx rounded pagination-lg clearfix primary">
														<ul className="pagination justify-content-center">
															{currentPage > 1 && (
																<li className="previous"><Link href={'#'} onClick={() => this.setState({ currentPage: currentPage - 1 })}><i className="ti-arrow-left"></i> Prev</Link></li>
															)}
															{currentPage < totalPages && (
																<li className="next"><Link href={'#'} onClick={() => this.setState({ currentPage: currentPage + 1 })}>Next <i className="ti-arrow-right"></i></Link></li>
															)}
														</ul>
													</div>
												</div>
											</div>
										)}
									</Fragment>
								)}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</Fragment>
		);
	}
}

export default News;
