
import React from 'react'
import Link from 'next/link'
const bgimg1 = '/images/line.png'
export default function WhyIsEarlyChildhoodEducationImportant() {


    const reasonsData = [
        { icon: <i className="flaticon-pacifier text-blue" />, info: "Set the foundation for a child's future academic success." },
        { icon: <i className="flaticon-boy text-green" />, info: "Promotes social and emotional development." },
        { icon: <i className="flaticon-book text-orange" />, info: "Encourages curiosity and a lifelong love for learning." },
        { icon: <i className="flaticon-feeding-bottle text-red" />, info: "Supports the development of fine and gross motor skills" },
        { icon: <i className="flaticon-playground text-pink" />, info: "Enhances cognitive development by stimulating critical thinking, problem-solving, and creativity." },
        { icon: <i className="flaticon-kite text-orange" />, info: "Promotes language development and communication skills" },
        { icon: <i className="flaticon-diaper text-blue" />, info: "Helps children develop self-discipline, independence, and a sense of responsibility." },
        { icon: <i className="flaticon-ball text-green" />, info: "Helps identify and address any developmental delays or learning difficulties early on" },
        { icon: <i className="flaticon-girl text-blue" />, info: "Builds a strong parent-child relationship by involving parents in their child's education" },

        // { icon: <i className="flaticon-puzzle text-orange" />, title: 'Goodie', },
    ];
    return (
        <>
            <div className="section-full bg-white content-inner-2 about-box" style={{ backgroundImage: "url(" + bgimg1 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="section-head text-center">
                                <h2 className="head-title text-secondry">Why is early childhood education important</h2>

                            </div>
                            <div className="row">

                                {reasonsData.map((item, index) => (
                                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-4">
                                        <div className="card reason-card h-100">
                                            <div className="card-body">
                                            <div className="icon-bx-wraper left" key={index}>
                                            <div className="icon-sm m-b20"> <span className="icon-cell">{item.icon}</span> </div>
                                            <div className="icon-content">

                                                <p>{item.info}</p>
                                            </div>
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
        </>
    )
}
