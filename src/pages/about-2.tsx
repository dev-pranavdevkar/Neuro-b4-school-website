// import React,{Fragment, Component} from 'react';
// import Link from 'next/link';
// import Header from '@/component/Layout/Header';
// import Footer from '@/component/Layout/Footer';
// import PageTitle from '@/component/Layout/PageTitle';
// import {EducationBanner} from './index-1'
// import TeacherSlider from '@/component/Element/TeacherSlider';
// import FromSlider from '@/component/Element/FromSilder';
// //Images
// // import bnr1 from './../../images/line2.png';
// // import bnr2 from './../../images/line2.png';
// // import bnr3 from './../../images/background/bg6.jpg';
// // import CenterImg from './../../images/about/about-2.jpg';
// // import Children1 from './../../images/background/children1.png';
// // import Children2 from './../../images/background/children2.png';

// const bnr1 = '/images/line2.png'
// const bnr2 = '/images/line2.png'
// const bnr3 = '/images/background/bg6.jpg'
// const CenterImg = '/images/about/about-2.jpg'
// const Children1 = '/images/background/children1.png'
// const Children2 = '/images/background/children2.png'

// const TextBlog =({title})=>{
// 	return(
// 		<div className="icon-content">
// 			<h5 className="dlab-tilte">{title}</h5>
// 			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
// 		</div>	
// 	)
// }
// function AcademyBlog(){
// 	return(
// 		<>
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-lg-12 col-md-12 col-sm-12">
// 						<div className="section-head text-center">
// 							<h2 className="head-title text-secondry">Welcome To Umang Academy</h2>
// 							<p>The concept of school and pre-school education consists of 3 programs of development and training in our academy.</p>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="col-lg-4 col-md-6 col-sm-12">
// 						<div className="icon-bx-wraper right m-b30 about-iconbx">
// 							<div className="icon-bx-sm radius bg-pink"> <Link href={"#"} className="icon-cell"><i className="flaticon-bricks"></i></Link> </div>
// 							<TextBlog  title="Active Learning" />
// 						</div>
// 						<div className="icon-bx-wraper right m-b30 about-iconbx">
// 							<div className="icon-bx-sm radius bg-blue"> <Link href={"#"} className="icon-cell"><i className="flaticon-boy"></i></Link> </div>
// 							<TextBlog  title="Expert Teachers" />
// 						</div>
// 					</div>
// 					<div className="col-lg-4 col-md-6 col-sm-12 m-b30 d-md-none d-lg-block d-sm-none">
// 						<img src={CenterImg} alt=""/>
// 					</div>
// 					<div className="col-lg-4 col-md-6 col-sm-12">
// 						<div className="icon-bx-wraper left m-b30 about-iconbx">
// 							<div className="icon-bx-sm bg-green radius"> <Link href={"#"} className="icon-cell"><i className="flaticon-bus"></i></Link> </div>
// 							<TextBlog  title="Strategi Location" />
// 						</div>
// 						<div className="icon-bx-wraper left m-b30 about-iconbx">
// 							<div className="icon-bx-sm bg-orange radius"><Link href={"#"} className="icon-cell"><i className="flaticon-ice-cream"></i></Link> </div>
// 							<TextBlog  title="Full Day Programs" />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// class AboutUs2 extends Component{
// 	render(){
// 		return(
// 			<Fragment>
// 				<Header />
// 				<div className="page-content">
// 					{/* inner page banner */ }
// 						<PageTitle  motherMenu="About Us 2"  activeMenu="About Us 2" />
// 					{/* inner page banner End*/ }
// 					<div className="content-block">
// 						{/* Section-1 */}
// 						<div className="section-full bg-white content-inner-1 about-kids" style={{backgroundImage:"url("+ bnr1 +")", backgroundSize:"contain" ,backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
// 							<AcademyBlog />
// 							<div className="childern-box">
// 								<div className="childern-1"><img src={Children1} alt=""/></div>
// 								<div className="childern-2"><img src={Children2} alt=""/></div>
// 							</div>
// 						</div>	
// 						{/* Section-1 End*/}
// 						{/* Section-2 Start*/}
// 						<EducationBanner />	
// 						{/* Section-2 End*/}
// 						{/* Section-3 Start*/}
// 						<div className="section-full bg-white content-inner-1" style={{backgroundImage:"url("+ bnr2 +")", backgroundSize:"contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
// 							<div className="container">
// 								<div className="section-head text-center">
// 									<h2 className="head-title text-secondry">About the Teachers</h2>
// 									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
// 								</div>
// 								<TeacherSlider />
// 							</div>
// 						</div>
// 						{/* Section-3 End*/}
// 						{/* Section-4 Start*/}
// 						<div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{backgroundImage:"url("+ bnr3 +")"}}>
// 							<div className="container">
// 								<div className="row">
// 									<div className="col-lg-12 col-md-12 col-sm-12 col-12 wow fadeIn about-text" data-wow-delay="0.2s" data-wow-duration="2s" style={{visibility: "visible", animationDuration: "2s", animationDelay: "0.2s", animationName: "fadeIn"}}>
// 										<div className="section-head text-center">
// 											<h4 className="text-white">Join Our New Session</h4>
// 											<h2>Call To Enrol Your Child <br/><span className="text-yellow">222 4444 000</span></h2>
// 											<Link href={"./about-1"} className="btn btn-md radius-xl">Read More</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						{/* Section-4 End*/}
// 						{/* Section-5 End*/}
// 						<div className="section-full bg-white content-inner">
// 							<div className="container">
// 								<div className="section-head text-center">
// 									<h2 className="head-title text-secondry">From the Blog</h2>
// 									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
// 								</div>
// 								<FromSlider />
// 							</div>
// 						</div>
// 						{/* Section-5 End*/}
// 					</div>
// 				</div>
// 				<Footer />
// 			</Fragment>
// 		)
// 	}
// }
// export {AcademyBlog};
// export default AboutUs2;
import React from 'react'
import { Dropdown } from 'react-bootstrap';
export default function About2() {
  const Branches = [
    {
      country: 'Country 1',
      states: [
        {
          name: 'State 1',
          cities: [
            {
              name: 'City 1',
              regions: ['Region 1', 'Region 2']
            },
            {
              name: 'City 2',
              regions: ['Region 3', 'Region 4']
            }
          ]
        },
        {
          name: 'State 2',
          cities: [
            {
              name: 'City 3',
              regions: ['Region 5', 'Region 6']
            },
            {
              name: 'City 4',
              regions: ['Region 7', 'Region 8']
            }
          ]
        }
      ]
    },
    {
      country: 'Country 2',
      states: [
        {
          name: 'State 1',
          cities: [
            {
              name: 'City 1',
              regions: ['Region 1', 'Region 2']
            },
            {
              name: 'City 2',
              regions: ['Region 3', 'Region 4']
            }
          ]
        },
        {
          name: 'State 2',
          cities: [
            {
              name: 'City 3',
              regions: ['Region 5', 'Region 6']
            },
            {
              name: 'City 4',
              regions: ['Region 7', 'Region 8']
            }
          ]
        }
      ]
    }
  ];
  return (
    <>
      <h1>Hello</h1>
      <Dropdown className='top-bar-dropdown'>
        <Dropdown.Toggle className='btn btn-info'>
          Location
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {Branches.map((country, countryIndex) => (
            <Dropdown key={countryIndex}>
              <Dropdown.Toggle variant="success" id={`dropdown-country-${countryIndex}`}>
                {country.country}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {country.states.map((state, stateIndex) => (
                  <Dropdown key={stateIndex}>
                    <Dropdown.Toggle variant="success" id={`dropdown-state-${countryIndex}-${stateIndex}`}>
                      {state.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {state.cities.map((city, cityIndex) => (
                        <Dropdown key={cityIndex}>
                          <Dropdown.Toggle variant="success" id={`dropdown-city-${countryIndex}-${stateIndex}-${cityIndex}`}>
                            {city.name}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {city.regions.map((region, regionIndex) => (
                              <Dropdown.Item key={`${countryIndex}-${stateIndex}-${cityIndex}-${regionIndex}`} href="#/action-1">
                                {region}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>

  )
}
