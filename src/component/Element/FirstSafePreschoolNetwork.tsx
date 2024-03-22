import React from 'react'
import Link from 'next/link';
export default function FirstSafePreschoolNetwork() {
    const iconBlog = [
        { image: '/images/icon/icon1.jpg', title1: 'Constant Monitoring'  },
        { image: '/images/icon/icon2.jpg', title1: 'Adherance to Safety', },
        { image: '/images/icon/icon3.jpg', title1: '360 Degree Safety Certification & Regular Inspection' },
        { image: '/images/icon/icon4.jpg', title1: 'Background Verification Trained Staff & Teachers' },
        { image: '/images/icon/icon1.jpg', title1: 'Medical & Other Emergency Preparedness' },
        { image: '/images/icon/icon2.jpg', title1: 'Child-friendly Infrastructure, Classrooms & Play area' },
    ];
    return (
        <div className="section-full bg-white content-inner-1 text-center">
            <div className="container">
                <div className="section-head">
                    <h2 className="head-title text-secondry">World&apos;s First Safe Preschool Network</h2>
                    <p>Fill your child's childhood with the joy of learning!</p>
                </div>
                <div className="row">
                    {iconBlog.map((data, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                            <div className="icon-bx-wraper sr-iconbox m-b20">
                                <div className="icon-lg m-b20">
                                    <Link href={"#"} className="icon-cell">
                                        <img src={data.image} alt="" /></Link>
                                </div>
                                <div className="icon-content">
                                    <h6 className="dlab-tilte">{data.title1}<br />{data.title2}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
