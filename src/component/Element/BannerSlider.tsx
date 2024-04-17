import React, { Component } from 'react';
import Link from 'next/link';
import axiosInstance from '@/services/axios';
import Carousel from 'react-bootstrap/Carousel';

const carouselBlog = [
    { image: '/images/main-slider/slide1.jpg' },
    { image: '/images/main-slider/slide2.jpg' },
    { image: '/images/main-slider/slide3.jpg' },
];

class BannerSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerImg: []
        };
    }

    componentDidMount() {
        // Fetch list of countries
        axiosInstance.get('api/customer/v1/program/getAllProgram')
            .then((response) => {
                this.setState({ bannerImg: response.data.data ? response.data.data : [] });
                console.log(this.state.bannerImg, "BANNER IMAGE");
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
            });
    }

    render() {
        return (
            <Carousel
                indicators={false}
                controls={true}
                className="owl-slider owl-carousel owl-theme owl-btn-center-lr dots-none"
            >
                {carouselBlog.map((item, index) => (
                    <Carousel.Item key={index}>
                        <div className="slide-item">
                            <div className="slide-item-img"><img src={item.image} alt="" width="100%" /></div>
                            <div className="slide-content">
                                <div className="slide-content-box container">
                                    <div className="slide-content-area">
                                        <h2 className="slider-title">Ignite Young Minds<span>with us</span></h2>
                                        <p>Unlock potential, inspire curiosity. Enriching early education experiences.</p>
                                        <Link href={"/contact-us"} className="btn btn-md kids-btn radius-xl">Join us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}

export default BannerSlider;
