
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

import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import Franchise from '@/component/Element/Franchise';
import { EducationBanner } from '../index-1';
import { Branches } from '@/constants/db';
import FindBranchDivider from '@/component/Element/FindBranchDivider';
import axiosInstance from '@/services/axios';
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
    const [country, setCountry] = useState([]);
    const [countryData, setCountryData] = useState([])
    const [states, setStates] = useState([]);
    const [activeTab, setActiveTab] = useState(branchData[0].country);

    const openTab = (tabName: string) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        axiosInstance.get('customer/v1/location/country/getAll')
            .then((response) => {
                setCountry(response.data.data ? response.data.data : []);
            })
            .catch((error) => {
                console.error('Error fetching branches:', error);
            });
    }, []);

    const handleCountryClick = (id) => {
        axiosInstance.get(`customer/v1/location/getData/${id}`)
            .then((response) => {
                setCountryData(response.data.data ? response.data.data : []);
                console.log(countryData)
            })
            .catch((error) => {
                console.error('Error fetching country by ID:', error);
            });
    };

    return (
        <Fragment>
            <Header />
            <div className="page-content">
                <PageTitle motherMenu="Locations" activeMenu="Locations" />
                <div className="content-block">
                    <div className="section-full bg-white content-inner-1 " style={{ backgroundImage: "url(" + bnr1 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div className="container">
                            <div className="section-head text-center col-md-12">
                                <h2 className="text-secondry">Our Branches Around the World</h2>
                            </div>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    <div className="d-flex flex-column">
                                        {country.map((item, index) => (
                                            <button key={index} className={`tablinks btn tab-btn-location mb-2 ${activeTab === item.name ? 'active' : ''}`} onClick={() => handleCountryClick(item.id)}>{item.name}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className='col-lg-7 offset-lg-1'>

                                    <div className="card location-card">
                                        <div className="card-body">
                                            <div className='tabContent'>
                                                {countryData && (
                                                    <Fragment>
                                                        <div className='d-flex justify-content-between'>
                                                            <img src={countryData.image} alt={countryData.name} />
                                                            <h4 className='card-title text-center mb-2' style={{ color: "#000" }}>{countryData.name}</h4>
                                                        </div>
                                                        <div className='row mt-4'>
                                                            {countryData?.States?.map((state, stateIndex) => (
                                                                <div className='col-6 ' key={stateIndex}>
                                                                    <h5 className='card-subtitle' style={{ color: "#FF0013" }}> {state.name}</h5>
                                                                    <ul>
                                                                        {state?.Cities?.map((city, cityIndex) => (
                                                                            <li className='' key={cityIndex}>
                                                                                <h6>{city.name}</h6>
                                                                                <ol>
                                                                                    {city?.Regions?.map((region, regionIndex) => (
                                                                                        <li className='' key={regionIndex}>
                                                                                            <Link className='branch-link' href={`/locations/${region.id}`}>{region.name}</Link>
                                                                                        </li>
                                                                                    ))}
                                                                                </ol>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Fragment>
                                                )}
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-full bg-white content-inner-1  mt-50" style={{ backgroundImage: "url(" + bnr2 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div className="container">
                         
                            <Franchise />
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <FindBranchDivider />
            </section>



            <Footer />

        </Fragment>
    );
};

export default Locations;
