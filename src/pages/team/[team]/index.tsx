import React, { Fragment, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import VideoPopup from '@/component/Element/VideoPopup';
import { useRouter } from 'next/router';
import axiosInstance from '@/services/axios';
import { baseUrl } from '@/config';
//Images
const bnr1 = '/images/line2.png';
const bnr2 = '/images/background/bg4.jpg';
const team1 = '/images/team/pic1.jpg';

interface Member {
    name: string;
    position: string;
    subject: string;
    image: string;
    description:string;
    facebook_url:string;
    google_plus_url:string;
    instagram_url:string;
    linkedin_url:string;
    twitter_url:string;
    skills:string;
}

const TeamMember = () => {
    const router = useRouter();
    const { team } = router.query;

    const memberId = team as string; // Assuming the router query provides the member ID

    const [member, setMember] = useState<Member | null>(null);

    useEffect(() => {
        if (memberId) {
            axiosInstance.get(`api/customer/v1/ourTeam/getTeam/${memberId}`)
                .then((response) => {
                    setMember(response.data.data || null);
                })
                .catch((error) => {
                    console.error('Error fetching team member data:', error);
                });
        }
    }, [memberId]);

    return (
        <Fragment>
            <Header />
            <div className="page-content">
                <PageTitle motherMenu="Teachers Details" activeMenu="Teachers Details" />
                <div className="content-block">
                    <div className="section-full bg-white content-inner-2 teacher-info" style={{ backgroundImage: `url(${bnr1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 m-b15">
                                    <div className="teacher-meida">
                                        {member && <img src={`${baseUrl}${member.image}`} alt={member.name} />}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 teacher-content align-self-center">
                                    {member && (
                                        <>
                                            <h2 className="teacher-title">{member.name}</h2>
                                            <span className="teacher-coures">{member.position}</span>
                                            <p className="m-b15">{member.description}</p>
                                            <p className="m-b15">{member.skills}</p>
                                            <ul className="list-inline">
                                            <li><Link href={member.facebook_url || "https://www.facebook.com/"}><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link href={`mailto:${member.google_plus_url || "contact@b4-school.com"}`}><i className="fa fa-google-plus"></i></Link></li>
                                                <li><Link href={member.linkedin_url || "https://www.linkedin.com/"}><i className="fa fa-linkedin"></i></Link></li>
                                                <li><Link href={member.instagram_url || "https://www.instagram.com/"}><i className="fa fa-instagram"></i></Link></li>
                                                <li><Link href={member.twitter_url || "https://www.twitter.com/"}><i className="fa fa-twitter"></i></Link></li>
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{ backgroundImage: `url(${bnr2})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 " style={{ visibility: "visible", animationDuration: "2s", animationDelay: "0.2s", animationName: "fadeIn" }}>
                                    <div className="section-head text-center gallery-mpg">
                                        <div className="video-play">
                                            <VideoPopup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="section-full content-inner-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 section-head">
                                    <h2 className="text-secondry">My Skills</h2>
                                    <p className="m-b0">{member?.skills}</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="progress-section">
                                        <div className="progress-bx">
                                            <h6 className="title">2D Drawings</h6>
                                            <div className="count-box">93%</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-blue" style={{ width: "93%" }} ></div>
                                            </div>
                                        </div>
                                        <div className="progress-bx">
                                            <h6 className="title">3D Modeling</h6>
                                            <div className="count-box">70%</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-green" style={{ width: "70%" }} ></div>
                                            </div>
                                        </div>
                                        <div className="progress-bx">
                                            <h6 className="title">Moodboard</h6>
                                            <div className="count-box">48%</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-orange" style={{ width: "48%" }} ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default TeamMember;
