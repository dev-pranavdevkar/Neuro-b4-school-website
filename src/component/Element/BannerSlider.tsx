import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import axiosInstance from '@/services/axios';
import { baseUrl } from '@/config';

interface BannersData {
    id: string;
    title: string;
    description: string;
    region_id: number;
    isShowOnHomePage: boolean;
    image: string;
}

interface BannersProps {
    branchData: BranchData | null;
}

const BannerSlider: React.FC<BannersProps> = ({ branchData }) => {
    const [bannersData, setBannersData] = useState<BannersData[]>([]);

    useEffect(() => {
        axiosInstance.get(`api/customer/v1/banner/getAllBanner`)
            .then((response) => {
                const sortedData = response.data.data.rows.sort((a: BannersData, b: BannersData) => {
                    return parseInt(a.id) - parseInt(b.id); // Sort by id
                });
                setBannersData(sortedData);
            })
            .catch((error) => {
                console.error('Error fetching Banners:', error);
            });
    }, []);

    useEffect(() => {
        console.log("Banners are", bannersData);
    }, [bannersData]); // Listen for changes in bannersData

    // Apply filter based on the presence of branchData.id
    const filteredBannersData = branchData?.id
        ? bannersData.filter(data => data.region_id === branchData.id)
        : bannersData.filter(data => data.isShowOnHomePage);

    return (
        <Carousel
            indicators={false}
            controls={true}
            className="owl-slider owl-carousel owl-theme owl-btn-center-lr dots-none"
        >
            {filteredBannersData.map((item, index) => (
                <Carousel.Item key={index}>
                    <div className="slide-item">
                        <div className="slide-item-img"><img src={`${baseUrl}${item.image}`} alt="" width="100%" /></div>
                        <div className="slide-content">
                            <div className="slide-content-box container">
                                <div className="slide-content-area">
                                    <h2 className="slider-title">{item.title}</h2>
                                    <p>{item.description}</p>
                                    <Link href={"/contact-us"} className="btn btn-md kids-btn radius-xl">Join us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default BannerSlider;
