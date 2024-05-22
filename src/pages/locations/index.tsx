// Import useState and useEffect hooks
import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import Franchise from '@/component/Element/Franchise';
import FindBranchDivider from '@/component/Element/FindBranchDivider';
import axiosInstance from '@/services/axios';
import { baseUrl } from '@/config';
interface Country {
    id: number;
    name: string;
    image: string;
    
    // Add other properties if needed
  }
const Locations = () => {
    // const [country, setCountry] = useState([]);
    const [countryData, setCountryData] = useState(null);
    const [loading, setLoading] = useState(false); // Add loading state
    const [activeTab, setActiveTab] = useState('');
    const [country, setCountry] = useState<Country[]>([]);

    useEffect(() => {
        // Fetch list of countries
        axiosInstance.get('api/customer/v1/location/country/getAll')
            .then((response) => {
                setCountry(response.data.data ? response.data.data : []);
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    const handleCountryClick = (id: number) => {
        // Set loading state
        setLoading(true);
        // Fetch data for the selected country
        axiosInstance.get(`api/customer/v1/location/getData/${id}`)
            .then((response) => {
                setCountryData(response.data.data || null);
                // Reset loading state
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
                // Reset loading state
                setLoading(false);
            });
    };

    return (
        <Fragment>
            <Header />
            <div className="page-content">
                <PageTitle motherMenu="Our Branches Around The World" activeMenu="Locations" />
                <div className="content-block">
                    <div className="section-full bg-white content-inner-1">
                        <div className="container">
                            {/* <div className="section-head text-center col-md-12">
                                <h2 className="text-secondry">Our Branches Around The World</h2>
                            </div> */}
                            <div className='row'>
                                {country.map((country, index) => (
                                    <div className='col-lg-3 mb-4' key={index}>
                                        <div className="card country-card h-100" onClick={() => handleCountryClick(country.id)} >
                                            <div className='border-area'>
                                                <div className="card-body flag-area  h-80">
                                                    <div className='text-center'>
                                                        <img className="" src={`${baseUrl}${country?.image}`} alt={country?.name} />
                                                    </div>
                                                </div>


                                                <div className='card-footer text-center'>
                                                    <h4 className="card-title">{country.name}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {loading && <p>Loading...</p>}

                            {!loading && countryData && (
                                <div className='row' id='#branches'>
                                    {countryData.States.map((data, index) => (
                                        <div className='col-lg-4 mb-4' key={index}>
                                            <div className="card country-card h-100">
                                                <div className="card-body">
                                                    <h4 className="card-title text-center">{data.name}</h4>
                                                    <div className='row d-flex justify-content-between'>
                                                        {data.Cities.map((city, index) => (
                                                            <div className='col-12' key={index}>
                                                                <h6 className='card-subtitle text-muted'>
                                                                    <i className="fa fa-map-marker" aria-hidden="true"></i> {city.name}</h6>
                                                                <ul>
                                                                    {city.Regions.map((region, index) => (
                                                                        <li key={index}>
                                                                            <i className="fa fa-globe" aria-hidden="true"></i> <Link href={`/locations/${region.id}`} target='_blank'>{region.name}</Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
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
