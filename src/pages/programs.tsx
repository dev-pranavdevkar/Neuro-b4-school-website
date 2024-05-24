import React, { Fragment, Component, useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import axiosInstance from '@/services/axios';
import { baseUrl } from '@/config';

//images
const bnr1 = '/images/line2.png';

interface ProgramData {
    id: string;
    name: string;
    description: string;
    region_id: number;
    isShowOnHomePage: boolean;
}

const Programs = () => {
    const [programsData, setProgramsData] = useState<ProgramData[]>([]);

    useEffect(() => {
        axiosInstance.get(`api/customer/v1/program/getAllProgram`)
            .then((response) => {
                const sortedData = response.data.data.rows.sort((a: ProgramData, b: ProgramData) => {
                    return parseInt(a.id) - parseInt(b.id); // Sort by id
                });
                setProgramsData(sortedData);
            })
            .catch((error) => {
                console.error('Error fetching Programs:', error);
            });
    }, []);

    return (
        <Fragment>
            <Header />
            <div className="page-content">
                <PageTitle motherMenu="Programs" activeMenu="Programs" />
                <div className="content-block">
                    <div className="section-full bg-white content-inner" style={{backgroundImage: `url(${bnr1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                        <div className="container">
                            <div className="row sp40">
                                {programsData.map((data, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 mb-5" key={index}>
                                        <div className="class-item h-100 ">
                                            <div className="class-media"> 
                                                <img  src={`${baseUrl}${data?.image}`} alt="" style={{maxHeight:'250px'}}/>
                                                <p>
                                                    <span>Program At: </span> 
													{data?.region?.name || "In All Branches"}
                                                </p>
                                            </div>
                                            <div className="class-info">
                                                <h4><Link href={"#"}>{data?.name}</Link></h4>
                                                <p>{data?.description}</p>
                                                {/* <ul className="schedule">
                                                    <li className="bg-blue class-size"><span>Class Size</span> <span>30 - 40</span> </li>
                                                    <li className="bg-green years-old"><span>Years Old</span> <span>5 - 6</span> </li>
                                                    <li className="bg-orange tution"><span>Tuition Fee</span> <span>$1500</span> </li>
                                                </ul> */}
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
    );
}

export default Programs;
