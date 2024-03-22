import React,{Fragment, Component} from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
//images
const bnr1 = '/images/line2.png';
const clsimg1 = '/images/classes/pic1.jpg';
const clsimg2 = '/images/classes/pic2.jpg';
const clsimg3 = '/images/classes/pic3.jpg';
const clsimg4 = '/images/classes/pic4.jpg';
const clsimg5 = '/images/classes/pic5.jpg';
const clsimg6 = '/images/classes/pic6.jpg';

const programsData =[
	{images: clsimg1, title: 'Child Watch',desc:'B4-School is a parent’s friend at all times and is a great avenue for kids to spend a fun morning or afternoon under the care of our trained teachers.'},	
	{images: clsimg4, title: 'Preschool',desc:'Developing vocabulary, attention span, reading and writing skills with innovative methods and preparing for primary school.'},	
	
];

class Programs extends Component{
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle  motherMenu="Programs"  activeMenu="Programs" />
					<div className="content-block">
						<div className="section-full bg-white content-inner" style={{backgroundImage:"url("+ bnr1+")", backgroundSize:"contain",backgroundRepeat: "no-repeat",backgroundPosition: "center"}}>
							<div className="container">
								<div className="row sp40">
									{programsData.map((data, index)=>(
										<div className="col-lg-4 col-md-6 col-sm-6" key={index}>
											<div className="class-item ">
												<div className="class-media"> 
													<img src={data.images} alt=""/>
													<p>
														<span>Class Time:</span> 
														08:00 am - 10:00 am
													</p>
												</div>
												<div className="class-info">
													<h4><Link href={"#"}>{data.title}</Link></h4>
													<p>{data.desc}</p>
													<ul className="schedule">
														<li className="bg-blue class-size"><span>Class Size</span> <span>30 - 40</span> </li>
														<li className="bg-green years-old"><span>Years Old</span> <span>5 - 6</span> </li>
														<li className="bg-orange tution"><span>Tution Fee</span> <span>$1500</span> </li>
													</ul>
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
export default Programs;