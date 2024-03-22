
// import Link from 'next/link';
// import React from 'react';

// export default function Locations() {
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
//                     <Link href={`/locations/${item.name}`}>
//                        {item.name}
//                     </Link>
//                     <br />
//                 </div>
//             ))}
//         </div>
//     );
// }

import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import Franchise from '@/component/Element/Franchise';
import { EducationBanner } from '../index-1';
import { Branches } from '@/constants/db';
const bnr = '/images/background/bg10.jpg';
const bnr1 = '/images/line2.png'
const bnr2 = '/images/line2.png'
const Children1 = '/images/background/children1.png'
const Children2 = '/images/background/children2.png'

const branchData = [
    {
        country: "USA",
        image: "/images/flags/usa.png",
        states: [
            {
                state: "Iowa",
                cities: ["Bettendorf"]
            }
        ]
    },
    {
        country: "India",
        image: "/images/flags/india.png",
        states: [
            {
                state: "Haryana",
                cities: ["Chulkana", "Jaurasi", "Machhrouli", "Manana"]
            },
            {
                state: "Maharashtra",
                cities: ["Pune"]
            },
            {
                state: "Telangana",
                cities: ["Dammaiguda"]
            }
        ]
    },
    {
        country: "Zimbabwe",
        image: "/images/flags/Zimbabwe.png",
        states: [
            {
                state: "Mashonaland West",
                cities: ["Kutam"]
            }
        ]
    },
    {
        country: "South Africa",
        image: "/images/flags/south-africa.png",
        states: [
            {
                state: "KwaZulu-Natal",
                cities: ["Durban"]
            }
        ]
    },

];

const Locations = () => {
    const [activeTab, setActiveTab] = useState(branchData[0].country); // Set default active tab to the first country

    const openTab = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <Fragment>
            <Header />
            <div className="page-content" >
                <PageTitle motherMenu="Locations" activeMenu="Locations" />
                <div className="content-block" >
                    {/* Tab view */}
                    <div className="section-full bg-white content-inner-1 about-kids" style={{ backgroundImage: "url(" + bnr1 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div className="container">
                            <div className="section-head text-center col-md-12">
                                <h2 className="text-secondry">Our Branches Around the World</h2>
                                {/* <p className="m-b0"></p> */}
                            </div>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    <div className="d-flex flex-column">
                                        {branchData.map((item, index) => (
                                            <button key={index} className={`tablinks btn tab-btn-location mb-2 ${activeTab === item.country ? 'active' : ''}`} onClick={() => openTab(item.country)}>{item.country}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className='col-lg-7 offset-lg-1'>
                                    <div className="card location-card" >
                                        <div className="card-body">
                                            <div className='tabContent'>
                                                {branchData.map((item, index) => (
                                                    <div key={index} id={item.country} className={`tabcontent ${activeTab === item.country ? 'active' : ''}`}>
                                                        {activeTab === item.country && (
                                                            <Fragment>
                                                                <div className='d-flex justify-content-between'>

                                                                    <img src={item.image} alt={item.country} />
                                                                    <h4 className='card-title text-center mb-2' style={{ color: "#000" }}>{item.country}</h4>

                                                                </div>

                                                                <div className='row mt-4'>
                                                                    {item.states.map((state, stateIndex) => (
                                                                        <div className='col-4' key={stateIndex}>
                                                                            <h5 className='card-subtitle' style={{ color: "#FF0013" }}> {state.state}</h5>

                                                                            <ul>
                                                                                {state.cities.map((city, cityIndex) => (
                                                                                    <li className='' key={cityIndex}>
                                                                                        <Link className='branch-link' href={`/locations/${city}`}>{city}</Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>

                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </Fragment>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* <Franchise /> */}
                        </div>
                    </div>
                    {/* Tab view End*/}
                    <div className="section-full bg-white content-inner-1 about-kids mt-5" style={{ backgroundImage: "url(" + bnr2 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div className="container">
                          
                     

                            <Franchise />
                        </div>
                    </div>


                </div>
            </div>

            <Footer />
        </Fragment>
    );
};


export default Locations;


