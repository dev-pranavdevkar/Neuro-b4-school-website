import React, { Fragment, useRef } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import axios from 'axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ContactForm from '@/component/Element/ContactForm';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    contact_number: yup.string().required('Contact No. is required'),
    country_name: yup.string().required('Country name is required'),
    message: yup.string().required('message is required'),
});

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);




    return (
        <Fragment>
            <Header />
            <div className="page-content">
                <PageTitle motherMenu="Contact Us" activeMenu="Contact Us" />
                <div className="content-block">
                    <div className="section-full bg-white">
                        <div className="container">
                        <ContactForm branchData={null} />

                            <div className="row content-inner-4">
                                <div className="banner-map col-md-12">                                        
                                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8897415173305!2d-73.51530492487514!3d40.78643807138247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28175512546c5%3A0x29b18ebba82fa317!2s28%20Princeton%20Dr%2C%20Syosset%2C%20NY%2011791%2C%20USA!5e0!3m2!1sen!2sin!4v1710511322147!5m2!1sen!2sin" 
                                        className="align-self-stretch rounded-sm border-0" style={{width:"100%", height:"600px", }}  
                                    />
                                </div>
                            </div>
							
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Contact;
