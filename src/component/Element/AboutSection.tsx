import React, { useEffect } from 'react';

export default function AboutSection() {
    useEffect(() => {
        const splitBox = document.querySelectorAll('.split-box');

        splitBox.forEach(el => el.classList.add('split-active'));
    }, []);

    const bnr1 = '/images/line2.png';
    const about = '/images/logo.png';

    return (
        <div className="section-full bg-white content-inner-2 about-area" style={{ backgroundImage: `url(${bnr1})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 m-b15">
                        <div className="section-head">
                            <h2 className="head-title text-secondry">About B4-School</h2>
                            <p>B4-School is a premier learning center that fosters a nurturing and engaging learning environment for young children. Our experienced educators understand the unique ways in which children learn and are dedicated to creating programs that stimulate curiosity and encourage intellectual growth.</p>
                            <p>At B4-School, we believe in maximizing each child's potential through tailored educational experiences that inspire a lifelong love for learning.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 teacher-content">
                        <div className="split-box">
                            <div className="about-media">
                                <img src={about} style={{ maxHeight: '20rem', objectFit: 'contain' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
