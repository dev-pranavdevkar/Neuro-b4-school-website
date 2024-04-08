import React, { Fragment, useRef } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import axios from 'axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    contact_number: yup.string().required('Contact No. is required'),
    country_name: yup.string().required('Country name is required'),
    service: yup.string().required('Service is required'),
});

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema), });

    const onSubmit = async (data: any) => {
        try {
            const res = await axios.post(
                'https://2f05-103-120-251-245.in.ngrok.io/api/contactUs',
                { ...data }
            ).then((response) => {
                let responseData = response.data;
                console.log(responseData);
                if (responseData?.success) {
                    console.log('sent');
                } else {
                    console.log('cancelled');
                }

            }).catch((error) => {
                console.log(error);
                if (error.response.status === 403) {
                    for (let key in error.response.data.data) {
                        setError(key, { type: "manual", message: error.response.data.data[key].join(',') });
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (


        <div className="section-full bg-white">
            <div className="container">
                <div className="row align-items-center content-inner">
                    <div className="section-head text-center col-md-12">
                        <h2 className="text-secondry">Reach Us</h2>
                        <p className="m-b0">Please feel free to reach out to us</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="icon-bx-wraper m-b30 left">
                            <div className="icon-md m-b20 m-t5">
                                <Link href={"#"} className="icon-cell text-blue">
                                    <i className="ti-headphone-alt"></i>
                                </Link>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-tilte m-b5">Phone</h4>
                                <p>+1 (315) 402-1234 <br /><br /></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="icon-bx-wraper m-b30 left">
                            <div className="icon-md m-b20 m-t5">
                                <Link href={"#"} className="icon-cell text-green">
                                    <i className="ti-location-pin"></i>
                                </Link>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-tilte m-b5">Address</h4>
                                <p>28 Princeton Drive, Syosset, New York 11791</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="icon-bx-wraper m-b30 left">
                            <div className="icon-md m-b20 m-t5">
                                <Link href={"#"} className="icon-cell text-orange">
                                    <i className="ti-email"></i>
                                </Link>
                            </div>
                            <div className="icon-content">
                                <h4 className="dlab-tilte m-b5">Email</h4>
                                <p>contact@b4-school.com <br /><br /></p>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="row contact-box content-inner-5">
                    
                    <div className="dzFormMsg"></div>
                    <form method="post" className="dzForm col-md-12" ref={form} onSubmit={handleSubmit(onSubmit)} >
                        <input type="hidden" value="Contact" name="dzToDo" />
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <input type="text" {...register('name')} className="form-control" placeholder="Enter your name" />
                                    {/* {errors?.name && <small style={{color: 'red'}}>{errors?.name?.message}</small>} */}
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <input {...register('email')} type="email" className="form-control" placeholder="Your Email Address" />
                                    {/* {errors?.email && <small style={{color: 'red'}}>{errors?.email?.message}</small>} */}
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <input {...register('contact_number')} type="text" className="form-control" placeholder="Phone" />
                                    {/* {errors?.contact_number && <small style={{color: 'red'}}>{errors?.contact_number?.message}</small>} */}
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <input {...register('country_name')} type="text" className="form-control" placeholder="Enter Country name" />
                                    {/* {errors?.country_name && <small style={{color: 'red'}}>{errors?.country_name?.message}</small>} */}
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <input {...register('service')} type="text" className="form-control" placeholder="Enter Services" />
                                    {/* {errors?.service && <small style={{color: 'red'}}>{errors?.service?.message}</small>} */}
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 text-center">
                                <button name="submit" type="submit" value="Submit" className="btn radius-xl btn-lg">Send Message<span></span></button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div className="row content-inner-4">
                    <div className="banner-map col-md-12">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8897415173305!2d-73.51530492487514!3d40.78643807138247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28175512546c5%3A0x29b18ebba82fa317!2s28%20Princeton%20Dr%2C%20Syosset%2C%20NY%2011791%2C%20USA!5e0!3m2!1sen!2sin!4v1710511322147!5m2!1sen!2sin"
                            className="align-self-stretch rounded-sm border-0" style={{ width: "100%", height: "600px", }}
                        />
                    </div>
                </div> */}
            </div>
        </div>


    );
};

export default ContactForm;
