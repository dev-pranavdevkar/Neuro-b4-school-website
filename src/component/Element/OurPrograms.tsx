import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axiosInstance from '@/services/axios';
import { baseUrl } from '@/config';
const bgimg1 = '/images/line.png';

interface ProgramData {
    id: string;
    name: string;
    description: string;
    region_id: number;
    isShowOnHomePage: boolean;
}

interface ProgramsProps {
    branchData: BranchData | null; // Assuming BranchData is the type of branchData
}

const Programs: React.FC<ProgramsProps> = ({ branchData }) => {
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

    useEffect(() => {
        console.log("Programs are", programsData);
    }, [programsData]); // Listen for changes in programsData

    // Apply filter based on the presence of branchData.id
    const filteredProgramsData = branchData?.id
        ? programsData.filter(data => data.region_id === branchData.id)
        : programsData.filter(data => data.isShowOnHomePage);

    return (
        <>
            <div className="section-full bg-white content-inner-2 about-box" style={{ backgroundImage: "url(" + bgimg1 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="section-head">
                                <h2 className="head-title text-secondry">Our Programs</h2>
                                <p>
                                    Developing vocabulary, attention span, reading and writing skills with innovative methods and preparing for primary school.
                                </p>
                                <Link href={"/programs"} className="btn btn-md kids-btn radius-xl">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            {filteredProgramsData.map((item, index) => (
                                <div className="icon-bx-wraper left" key={index}>
                                    <div className="icon-lg m-b20"> <span className="icon-cell"><i className="flaticon-rattle text-blue" /></span> </div>
                                    <div className="icon-content">
                                        <h2 className="dlab-tilte">{item.name}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programs;
