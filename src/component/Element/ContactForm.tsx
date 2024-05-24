import React, { Fragment, useRef } from 'react';
import Link from 'next/link';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
import PageTitle from '@/component/Layout/PageTitle';
import axios from 'axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axiosInstance from '@/services/axios';
import { useRouter } from 'next/router';

interface ContactFormProps {
    branchData: BranchData | null;
}

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    mobile_number: yup.string().required('Contact No. is required'),
    // country_code: yup.string().required('Country name is required'),
    message: yup.string().required('Message is required'),
});

const ContactForm: React.FC<ContactFormProps> = ({ branchData }) => {
    const form = useRef<HTMLFormElement>(null);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema), });

    const onSubmit = async (data: any) => {
        try {
            const res = await axiosInstance.post(
                '/api/customer/v1/enquiry/general',
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
    const router = useRouter();
    const path = router.pathname;
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
                                <p><a href={`tel:+${branchData?.mobile_number || '13154021234'}`}>{branchData?.mobile_number || '+1 (315) 402-1234'}</a> <br /><br /></p>
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
                                <p><a href={`${branchData?.map_url || 'https://www.google.com/maps/'}`} target='_blank'>
                                    {/* {branchData?.City?.name}, {branchData?.State?.name},<br/>
                                {branchData?.Country?.name}-{branchData?.google_plus_url}  || 28 Princeton Drive <br/>Syosset, New York<br/> USA 11791 */}
                                    {path === '/contact-us'
                                        ? (
                                            <>
                                                28 Princeton Drive <br />
                                                Syosset, New York<br />
                                                USA 11791
                                            </>
                                        )
                                        : (
                                            <>
                                                {branchData?.City?.name}, {branchData?.State?.name},<br />
                                                {branchData?.Country?.name}-{branchData?.google_plus_url}
                                            </>
                                        )
                                    }
                                </a>
                                </p>
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
                                <p><a href={`mailto:${branchData?.email || 'contact@b4-school.com'}`} target='_blank'>{branchData?.email || 'contact@b4-school.com'}</a> <br /><br /></p>
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
                                    <input {...register('mobile_number')} type="text" className="form-control" placeholder="Phone" />
                                    {/* {errors?.mobile_number && <small style={{color: 'red'}}>{errors?.mobile_number?.message}</small>} */}
                                </div>
                            </div>
                            {/* <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <input {...register('country_code')} type="text" className="form-control" placeholder="Enter Country name" />
                                    {errors?.country_code && <small style={{color: 'red'}}>{errors?.country_code?.message}</small>}
                                </div>
                            </div> */}
                            <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <textarea aria-multiline aria-rowspan={5} {...register('message')} type="text" className="form-control" placeholder="Enter messages" />
                                    {/* {errors?.message && <small style={{color: 'red'}}>{errors?.message?.message}</small>} */}
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
