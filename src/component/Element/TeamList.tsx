import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axiosInstance from '@/services/axios';
import { baseUrl } from '@/config';
const bnr1 = '/images/line2.png';

interface TeamListProps {
    branchData: BranchData | null; // Assuming BranchData is the type of branchData
}

const TeamList: React.FC<TeamListProps> = ({ branchData }) => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        axiosInstance.get(`api/customer/v1/ourTeam/getAllTeam`)
        
        .then((response) => {
            const sortedData = response.data.data.rows.sort((a, b) => {
                // Convert id values to numbers for comparison
                const idA = parseInt(a.id);
                const idB = parseInt(b.id);
                
                // Compare the numeric values of the ids
                if (idA < idB) {
                    return -1; // idA comes before idB
                } else if (idA > idB) {
                    return 1; // idA comes after idB
                } else {
                    return 0; // ids are equal
                }
            });
            setTeamMembers(sortedData);
        })
            .catch((error) => {
                console.error('Error fetching team data:', error);
            });
    }, []);

    useEffect(() => {
        console.log("Team members are", teamMembers);
    }, [teamMembers]); // Listen for changes in teamMembers

    // Apply filter based on the presence of branchData.id
    const filteredTeamMembers = branchData?.id
    ? teamMembers.filter(data => data.region_id === branchData.id)
    : teamMembers.filter(data => data.isShowOnHomePage);

const filterOptions=[
    {label:'All Shows',value:'all_shows'},
    {label:'All Shows',value:'all_shows'},
    {label:'All Shows',value:'all_shows'},
    {label:'All Shows',value:'all_shows'},
    {label:'All Shows',value:'all_shows'},
]
    return (
        <div>
            <div className="section-full bg-white content-inner" style={{ backgroundImage: "url(" + bnr1 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="section-head text-center">
                        <h2 className="head-title text-secondry">About the Team</h2>
                        <p>
                            We have an excellent teacher to child ratio to ensure that each child receives the attention he or she needs
                        </p>
                    </div>
                    <div className="row">
                        {filteredTeamMembers.map((data:any, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                <div className="dlab-box box-frame1 team-box m-b40">
                                    <div className="dlab-thum">
                                        <Link href={`/team/${data.id}`}>
                                            <img src={`${baseUrl}${data.image}`} alt={data.name} />
                                        </Link>
                                        <div className="overlay-bx">
                                            <h5 className="team-title"><Link href={`/team/${data.id}`}>{data.name}</Link></h5>
                                            <span className="team-info">{data.role}</span>
                                            <ul className="list-inline">
                                                <li><Link href={"#"}><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link href={"#"}><i className="fa fa-google-plus"></i></Link></li>
                                                <li><Link href={"#"}><i className="fa fa-linkedin"></i></Link></li>
                                                <li><Link href={"#"}><i className="fa fa-instagram"></i></Link></li>
                                                <li><Link href={"#"}><i className="fa fa-twitter"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamList;
