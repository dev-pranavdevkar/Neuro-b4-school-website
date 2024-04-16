import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import axiosInstance from '@/services/axios';
import { baseUrl } from '@/config';

// images
const bnr1 = '/images/line2.png';

class Programs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programsData: []
        };
    }

    componentDidMount() {
        // Fetch list of programs
        axiosInstance.get('api/customer/v1/program/getAllProgram')
            .then((response) => {
                const allPrograms = response.data.data.rows ? response.data.data.rows : [];
                // Filter programs where isSuperAdmin is true
                const superAdminPrograms = allPrograms.filter(program => program.isSuperAdmin === true);
                this.setState({ programsData: superAdminPrograms });
                console.log(superAdminPrograms, "programsData IMAGE");
            })
            .catch((error) => {
                console.error('Error fetching programs:', error);
            });
    }

    render() {
        const { programsData } = this.state;
        return (
            <Fragment>
                <Header />
                <div className="page-content">
                    <PageTitle motherMenu="Programs" activeMenu="Programs" />
                    <div className="content-block">
                        <div className="section-full bg-white content-inner" style={{ backgroundImage: "url(" + bnr1 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                            <div className="container">
                                <div className="row sp40">

                                    {programsData .filter(data => data.isSuperAdmin === true)
									.map((data:any, index) => (
										
                                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5" key={index}>
                                            <div className="class-item our-progrms-card">
                                                <div className="class-media">
												<img src={data?.image ? `${baseUrl}${data.image}` : '/images/logo.png'} alt="" />
                                                    {/* <p>
                                                        <span>Class Time:</span>
                                                        08:00 am - 10:00 am
                                                    </p> */}
                                                </div>
                                                <div className="class-info text-center">
                                                    <h4><Link href={"#"}>{data?.name}</Link></h4>
                                                    <p>{data.description}</p>
                                                   
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
        )
    }
}

export default Programs;
