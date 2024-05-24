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
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="section-head text-center">
                                <h2 className="head-title text-secondry">Our Programs</h2>
                                <p>
                                    Developing vocabulary, attention span, reading and writing skills with innovative methods and preparing for primary school.
                                </p>
                                {/* <Link href={"/programs"} className="btn btn-md kids-btn radius-xl">Read More</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className='row'>

                        {filteredProgramsData.map((data, index) => (
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
        </>
    )
}

export default Programs;
