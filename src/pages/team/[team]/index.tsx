// import React, { Fragment, useRef } from 'react';
// import emailjs from 'emailjs-com';
// import Link from 'next/link';
// import Header from '@/component/Layout/Header';
// import Footer from '@/component/Layout/Footer';
// import PageTitle from '@/component/Layout/PageTitle';
// import VideoPopup from '@/component/Element/VideoPopup';
// import { useRouter } from 'next/router';
// import { teamMembers } from '@/constants/db';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// //Images
// const bnr1 = '/images/line2.png';
// const bnr2 = '/images/background/bg4.jpg';
// const team1 = '/images/team/pic1.jpg';

// const TeamMember = () => {
//     const router = useRouter();
//     const { team } = router.query;

//     const form = useRef();
//     const memberId = team; // Assuming the router query provides the member ID
//     const member = teamMembers.find(member => member.id === memberId);
//     console.log("Pranav", member)
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return (
//         <Fragment>
//             <>
//                 <Button variant="primary" onClick={handleShow}>
//                     Launch static backdrop modal
//                 </Button>

//                 <Modal
//                     show={show}
//                     onHide={handleClose}
//                     backdrop="static"
//                     keyboard={false}
//                 >
//                     <Modal.Header closeButton>
//                         <Modal.Title>Modal title</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         I will not close if you click outside me. Do not even try to press
//                         escape key.
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={handleClose}>
//                             Close
//                         </Button>
//                         <Button variant="primary">Understood</Button>
//                     </Modal.Footer>
//                 </Modal>
//             </>
//             {/* <Header />
//             <div className="page-content">
//                 <PageTitle motherMenu="Teachers Details" activeMenu="Teachers Details" />
//                 <div className="content-block">
//                     <div className="section-full bg-white content-inner-2 teacher-info" style={{ backgroundImage: "url(" + bnr1 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-6 col-md-12 col-sm-12 m-b15">
//                                     <div className="teacher-meida">
//                                         {member && <img src={member.image} alt="" />}
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6 col-md-12 col-sm-12 teacher-content align-self-center">
//                                     {member && (
//                                         <>
//                                             <h2 className="teacher-title">{member.name}</h2>
//                                             <span className="teacher-coures">{member.role}</span>
//                                             <p className="m-b15">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn.</p>
//                                             <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.</p>
//                                             <ul className="list-inline">
//                                                 <li><Link href={"#"} ><i className="fa fa-facebook"></i></Link></li>
//                                                 <li><Link href={"#"} ><i className="fa fa-google-plus"></i></Link></li>
//                                                 <li><Link href={"#"} ><i className="fa fa-linkedin"></i></Link></li>
//                                                 <li><Link href={"#"} ><i className="fa fa-instagram"></i></Link></li>
//                                                 <li><Link href={"#"} ><i className="fa fa-twitter"></i></Link></li>
//                                             </ul>
//                                         </>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-12 col-md-12 col-sm-12 col-12 " style={{ visibility: "visible", animationDuration: "2s", animationDelay: "0.2s", animationName: "fadeIn" }}>
//                                     <div className="section-head text-center gallery-mpg">
//                                         <div className="video-play">
//                                             <VideoPopup />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="section-full content-inner-2">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-6 section-head">
//                                     <h2 className="text-secondry">My Skills</h2>
//                                     <p className="m-b0">Suspendisse facilisis commodo lobortis. Nullam mollis lobortis ex vel faucibus. Proin nec viverra turpis. Nulla eget justo scelerisque, pretium purus vel, congue libero. Suspendisse potenti. Sed risus nisi  Suspendisse potenti. Sed risus nisi  Suspendisse potenti. Sed risus nisi </p>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="progress-section">
//                                         <div className="progress-bx">
//                                             <h6 className="title">2D Drawings</h6>
//                                             <div className="count-box">93%</div>
//                                             <div className="progress">
//                                                 <div className="progress-bar bg-blue" style={{ width: "93%" }} ></div>
//                                             </div>
//                                         </div>
//                                         <div className="progress-bx">
//                                             <h6 className="title">3D Modeling</h6>
//                                             <div className="count-box">70%</div>
//                                             <div className="progress">
//                                                 <div className="progress-bar bg-green" style={{ width: "70%" }} ></div>
//                                             </div>
//                                         </div>
//                                         <div className="progress-bx">
//                                             <h6 className="title">Moodboard</h6>
//                                             <div className="count-box">48%</div>
//                                             <div className="progress">
//                                                 <div className="progress-bar bg-orange" style={{ width: "48%" }} ></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer /> */}
//         </Fragment>
//     )
// }

// export default TeamMember;

import React from 'react'

export default function index() {
  return (
    <div>index</div>
  )
}

