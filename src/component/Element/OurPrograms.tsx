import React from 'react'
import Link from 'next/link'
const bgimg1 = '/images/line.png'
export default function OurPrograms() {
    const iconBlog2 = [
        { icon: <i className="flaticon-rattle text-blue" />, title: 'Child Watch', info: 'B4-School is a parent’s friend at all times and is a great avenue for kids to spend a fun morning or afternoon under the care of our trained teachers.' },
        { icon: <i className="flaticon-bricks text-green" />, title: 'Preschool', info: 'Developing vocabulary, attention span, reading and writing skills with innovative methods and preparing for primary school.' },

        // { icon: <i className="flaticon-puzzle text-orange" />, title: 'Goodie', },
    ];
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
                            {iconBlog2.map((item, index) => (
                                <div className="icon-bx-wraper left" key={index}>
                                    <div className="icon-lg m-b20"> <span className="icon-cell">{item.icon}</span> </div>
                                    <div className="icon-content">
                                        <h2 className="dlab-tilte">{item.title}</h2>
                                        <p>{item.info}</p>
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
