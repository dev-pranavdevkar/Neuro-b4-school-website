import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from '@/services/axios';

const FindBranchDivider = () => {
    const router = useRouter();
    const bgimg2 = '/images/background/bg1.jpg';
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [country, setCountry] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        axiosInstance.get('customer/v1/location/country/getAll')
            .then((response) => {
                setCountry(response.data.data ? response.data.data : []);
            })
            .catch((error) => {
                console.error('Error fetching branches:', error);
            });
    }, []);

    const handleCountrySelect = (id) => {
        setSelectedCountry(id);
        axiosInstance.get(`customer/v1/location/country/get/${id}`)
            .then((response) => {
                setStates(response.data.data.States ? response.data.data.States : []);
            })
            .catch((error) => {
                console.error('Error fetching states:', error);
            });
    };

    const handleStateSelect = (id) => {
        setSelectedState(id);
        axiosInstance.get(`customer/v1/location/state/get/${id}`)
            .then((response) => {
                setCities(response.data.data.Cities ? response.data.data.Cities : []);
            })
            .catch((error) => {
                console.error('Error fetching cities:', error);
            });
    };

    const handleCitySelect = (id) => {
        setSelectedCity(id);
        axiosInstance.get(`customer/v1/location/city/get/${id}`)
            .then((response) => {
                setRegions(response.data.data.Regions ? response.data.data.Regions : []);
            })
            .catch((error) => {
                console.error('Error fetching regions:', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedBranch) {
            router.push(`/locations/${selectedBranch}`);
        } else {
            console.error('Please select a branch');
        }
    };

    return (
        <>
            <div className="section-full bg-white content-inner-2 about-content bg-img-fix find-branch-divider-area" style={{ backgroundImage: `url(${bgimg2})` }}>
                <div className="about-overlay-box"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="section-head">
                                <h2 className="head-title text-yellow">Find branch near you</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-11'>
                            <form onSubmit={handleSubmit} className="dzForm col-md-12">
                                <div className='row'>
                                    <div className='col-lg-11'>
                                        <div className='row'>
                                            <div className='col'>
                                                <div className="form-group">
                                                    <select
                                                        id="country"
                                                        className="form-control"
                                                        value={selectedCountry}
                                                        onChange={(e) => handleCountrySelect(e.target.value)}
                                                    >
                                                        <option value="">Select Country</option>
                                                        {country.map((branch, index) => (
                                                            <option key={`country-${index}`} value={branch.id}>{branch.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className="form-group">
                                                    <select
                                                        id="state"
                                                        className="form-control"
                                                        value={selectedState}
                                                        onChange={(e) => handleStateSelect(e.target.value)}
                                                    >
                                                        <option value="">Select State</option>
                                                        {states.map((state, index) => (
                                                            <option key={`state-${index}`} value={state.id}>{state.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className="form-group">
                                                    <select
                                                        id="city"
                                                        className="form-control"
                                                        value={selectedCity}
                                                        onChange={(e) => handleCitySelect(e.target.value)}
                                                    >
                                                        <option value="">Select City</option>
                                                        {cities.map((city, index) => (
                                                            <option key={`city-${index}`} value={city.id}>{city.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className="form-group">
                                                    <select
                                                        id="branch"
                                                        className="form-control"
                                                        value={selectedBranch}
                                                        onChange={(e) => setSelectedBranch(e.target.value)}
                                                    >
                                                        <option value="">Select Branch</option>
                                                        {regions.map((region, index) => (
                                                            <option key={`region-${index}`} value={region.id}>{region.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-1'>
                                        <div className=''>
                                            <button type="submit" className="btn btn-info search-btn"><i className="fa fa-globe"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FindBranchDivider;
