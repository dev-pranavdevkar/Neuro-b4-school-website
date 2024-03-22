import React,{Fragment, Component} from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import { features } from 'process';
//images
const bnr1 = '/images/line2.png';


const productData =[
	{images: "/images/products/bottle.png", name: 'Water Bottle', available:'USA', price:'$19', shortDesc:"Our kid's 12 oz stainless steel water bottle is the perfect insulated bottle for school and everyday hydration.",features:['feature1', 'feature2']},	
	{images: "/images/products/book1.jpg", name: 'Modello', available:'India', price:'$515', shortDesc:"Building blocks toys are the best early education toys for the children's intelligence.",features:['feature1', 'feature2']},	
	{images: "/images/products/book2.jpg", name: 'Unicorn Lamp making kit' , available:'India', price:'$450', shortDesc:"Expand your imagination & create a beautiful table lamp for your own",features:['feature1', 'feature2']},	
	{images: "/images/products/book3.jpg", name: 'Mould &Paint Unicorn', available:'India', price:'$420', shortDesc:"Activity Centres A wonderful hands-on arts and crafts activity for unicorn lovers ",features:['feature1', 'feature2']},	
	{images: "/images/products/book4.jpg", name: 'Unicorn Surprise', available:'India', price:'$720', shortDesc:"Expand your imagination & create a beautiful craft by your own       ",features:['feature1', 'feature2']},	
	
];

class Shop extends Component{
	render(){
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
													<img className='product-img' src={data.images} alt=""/>
													<p>
														<span>Avilable in </span> 
														{data.available}
													</p>
												</div>
												<div className="class-info">
													<h4><Link href={"/classes-details"}>{data.name}</Link></h4>
													<p>{data.shortDesc}</p>
													<ul className="schedule text-center">
														<li className="bg-blue class-size"><span>Sold Upto</span> <span>30K</span> </li>
														<li className="bg-green years-old"><span>Reviews</span> <span>4.5</span> </li>
														<li className="bg-orange tution"><span>Price</span> <span>{data.price}</span> </li>
													</ul>
                                                  <div>
                                                  <button type="button" className="btn btn-primary w-100 mt-2 buy-now-btn">Buy Now</button>
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