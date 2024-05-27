import React, { useState, useEffect } from 'react';
import axiosInstance from '@/services/axios';
import { baseUrl } from '@/config';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

const bnr1 = '/images/line2.png';

interface BranchData {
    id: number;
}

interface TeamListProps {
    branchData: BranchData | null;
}

const TeamList: React.FC<TeamListProps> = ({ branchData }) => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        axiosInstance.get('api/customer/v1/ourTeam/getAllTeam')
            .then((response) => {
                const sortedData = response.data.data.rows.sort((a, b) => {
                    const idA = parseInt(a.id);
                    const idB = parseInt(b.id);
                    return idA - idB;
                });
                setTeamMembers(sortedData);
            })
            .catch((error) => {
                console.error('Error fetching team data:', error);
            });
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (member) => {
        setSelectedMember(member);
        setShow(true);
    };

    const filteredTeamMembers = branchData?.id
        ? teamMembers.filter(data => data.region_id === branchData.id)
        : teamMembers.filter(data => data.isShowOnHomePage);

    return (
        <div>
            <div className="section-full bg-white content-inner" style={{ backgroundImage: `url(${bnr1})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className="container">
                    <div className="section-head text-center">
                        <h2 className="head-title text-secondry">About the Team</h2>
                        <p>
                            We have an excellent teacher to child ratio to ensure that each child receives the attention he or she needs.
                        </p>
                    </div>
                    <div className="row">
                        {filteredTeamMembers.map((data, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                <div className="dlab-box box-frame1 team-box m-b40">
                                    <div className="dlab-thum">
                                        <span onClick={() => handleShow(data)} style={{ cursor: 'pointer' }}>
                                            <img src={`${baseUrl}${data.image}`} alt={data.name} />
                                        </span>
                                        <div className="overlay-bx">
                                            <h5 className="team-title">
                                                <span onClick={() => handleShow(data)} style={{ cursor: 'pointer' }}>
                                                    {data.name}
                                                </span>
                                            </h5>
                                            <span className="team-info">{data.role}</span>
                                            <ul className="list-inline">
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedMember && (
                <Modal className='team_modal' show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedMember.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table>

                            <tbody>
                                <tr>
                                    <th>Name :</th>
                                    <td>{selectedMember.name}</td>
                                    <td rowSpan={3}>
                                        <img src={`${baseUrl}${selectedMember.image}`} alt={selectedMember.name} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Role</th>
                                    <td>{selectedMember.position}</td>

                                </tr>
                                <tr>
                                    <th>Subject</th>
                                    <td>{selectedMember.subject}</td>
                                </tr>
                            </tbody>
                        </Table>

                    </Modal.Body>
               
                </Modal>
            )}
        </div>
    );
}

export default TeamList;
