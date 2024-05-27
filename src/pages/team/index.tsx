import React, { Fragment, useState } from 'react';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import { teamMembers } from '@/constants/db';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const bnr1 = '/images/line2.png';

const TeamMembers = () => {
    const [show, setShow] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (member) => {
        setSelectedMember(member);
        setShow(true);
    };

    return (
        <Fragment>
            <Header />
            <div className="page-content">
                <PageTitle motherMenu="Team" activeMenu="Team" />
                <div className="content-block">
                    <div className="section-full bg-white content-inner" style={{ backgroundImage: `url(${bnr1})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="head-title text-secondry">About the Team</h2>
                                <p>
                                    We have an excellent teacher to child ratio to ensure that each child receives the attention he or she needs.
                                </p>
                            </div>
                            <div className="row">
                                {teamMembers.map((data, index) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                        <div className="dlab-box box-frame1 team-box m-b40">
                                            <div className="dlab-thum">
                                                <img src={data.image} alt={data.name} />
                                                <div className="overlay-bx">
                                                    <h5 className="team-title">
                                                        <span onClick={() => handleShow(data)} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
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
                </div>
            </div>
            <Footer />
       
        </Fragment>
    );
};

export default TeamMembers;
