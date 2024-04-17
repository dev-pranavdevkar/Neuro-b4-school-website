import React,{Fragment, Component} from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import { features } from 'process';
import axiosInstance from '@/services/axios';
import { baseUrl } from '@/config';
//images
const bnr1 = '/images/line2.png';




class Shop extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productData: [],
			error: null,
			currentPage: 1,
			itemsPerPage: 6
		};
	}
	componentDidMount() {
		axiosInstance.get('/api/customer/v1/product/getAllProducts')
			.then((response) => {
				console.log('API response:', response.data); // Log the response data
				const products = response.data.data.rows || []; // Extract products array from API response
				this.setState({ productData: products });
			})
			.catch((error) => {
				console.error('Error fetching product data:', error);
				this.setState({ error: 'Failed to fetch product data' });
			});
	}
	

	render(){
		const { productData, error, currentPage, itemsPerPage } = this.state;
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentItems = productData.slice(indexOfFirstItem, indexOfLastItem);
		const totalPages = Math.ceil(productData.length / itemsPerPage);
		return(
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle  motherMenu="Shop"  activeMenu="Shop" />
					<div className="content-block">
						<div className="section-full bg-white content-inner" style={{backgroundImage:"url("+ bnr1+")", backgroundSize:"contain",backgroundRepeat: "no-repeat",backgroundPosition: "center"}}>
							<div className="container">
								<div className="row sp40">
									{productData.map((data, index)=>(
										<div className="col-lg-4 col-md-6 col-sm-6" key={index}>
											<div className="class-item">
												<div className="class-media"> 
													<img className='product-img' src={`${baseUrl}${data.image}`} alt=""/>
													<p>
														<span>Avilable in </span> 
														{data.availability}
													</p>
												</div>
												<div className="class-info">
													<h4><Link href={"/classes-details"}>{data.name}</Link></h4>
													<p>{data.description}</p>
													<ul className="schedule text-center">
														<li className="bg-blue class-size"><span>Sold Upto</span> <span>{data.sold}</span> </li>
														<li className="bg-green years-old"><span>Reviews</span> <span>{data.rating}.0</span> </li>
														<li className="bg-orange tution"><span>Price</span> <span>${data.price}</span> </li>
													</ul>
                                                  <div>
                                               <a href="http://">  <button type="button" className="btn btn-primary w-100 mt-2 buy-now-btn">Buy Now</button></a>
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
export default Shop;