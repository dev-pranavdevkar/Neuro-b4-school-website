import React, {  useRef } from 'react';

import axios from 'axios';

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const schema = yup.object().shape({
    name: yup.string().required('Name Is Required'),
    email: yup.string().email().required('Email Is Required'),
    contact_number: yup.string().required('Contact No.  Is Required'),
    country_name: yup.string().required('Country Name Is Required'),
    state_name: yup.string().required('State Name Is Required'),
    city_name: yup.string().required('City Name Is Required'),
});


const Franchise = () => {
    const form = useRef();


    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema), })

    const onSubmit = async (data: any) => {
        try {
            const res = await axios.post(
                'https://2f05-103-120-251-245.in.ngrok.io/api/contactUs',
                { ...data }
            ).then((response) => {
                let data = response.data
                console.log(data)
                if (data?.success) {
                    console.log('sent')
                } else {
                    console.log('cancelled')
                }

            }).catch((error) => {
                console.log(error)
                if (error.response.status == 403) {
                    for (let key in error.response.data.data) {
                        setError(key, { type: "manual", message: error.response.data.data[key].join(',') })
                    }
                }
            });


        }
        catch (error) {
            console.log(error)
        }
    }
    return (



        <div className="">

            <div className="row contact-box content-inner-5">
                <div className="section-head text-center col-md-12">
                    <h2 className="text-secondry">Join World&apos;s Leading Pre-school Today!</h2>
                    <p className="m-b0">Take the first step towards building a successful business with our Preschool Franchise Opportunity.</p>
                </div>
                <div className="dzFormMsg"></div>
                <form method="post" className="dzForm col-md-12" onSubmit={handleSubmit(onSubmit)} >
                    <input type="hidden" value="Contact" name="dzToDo" />
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="form-group">
                                <input type="text"
                                    {...register('name')} className="form-control" placeholder="Enter your name" />
                                {/* {errors?.name && <small style={{ color: 'red' }}>{errors?.name?.message}</small>} */}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="form-group">
                                <input {...register('email')} type="email" className="form-control" placeholder="Your Email Address" />
                                {/* {errors?.email && <small style={{ color: 'red' }}>{errors?.email?.message}</small>} */}

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="form-group">
                                <input {...register('contact_number')} type="text" className="form-control" placeholder="Phone" />
                                {/* {errors?.contact_number && <small style={{ color: 'red' }}>{errors?.contact_number?.message}</small>} */}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="form-group">
                                <input {...register('country_name')} type="text" className="form-control" placeholder="Enter Country name" />
                                {/* {errors?.country_name && <small style={{ color: 'red' }}>{errors?.country_name?.message}</small>} */}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="form-group">
                                <input {...register('state_name')} type="text" className="form-control" placeholder="Enter State Name" />
                                {/* {errors?.state_name && <small style={{ color: 'red' }}>{errors?.state_name?.message}</small>} */}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="form-group">
                                <input {...register('city_name')} type="text" className="form-control" placeholder="Enter City Name" />
                                {/* {errors?.city_name && <small style={{ color: 'red' }}>{errors?.city_name?.message}</small>} */}
                            </div>
                        </div>
                  
                        <div className="col-md-12 col-sm-12 text-center">
                            <button name="submit" type="submit" value="Submit" className="btn radius-xl btn-lg">Request Franchise<span></span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>




    )
}
export default Franchise;