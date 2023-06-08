import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProviders';


const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext)


    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    };
    return (
        <div>
            <h1 className='pt-24 text-4xl text-center font-bold'>Please Register</h1>

            <div className="hero min-h-screen">
                <div className="md:flex gap-5 items-center">
                    <div className="text-center lg:text-left">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-8145509-6556891.png?f=webp" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full md:max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })}name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>* name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email",{ required: true})} placeholder="email" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>* Email required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",{ 
                                    required: true, 
                                    minLength: 6, 
                                    maxLength: 20,
                                    
                                    })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Password required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be at last 6 caracters</p>}


                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword",{ required: true})} name='confirmPassword' placeholder="Confirm PAssword" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>* Confirm Password required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="password" {...register("photoURL")} name='photoURL' placeholder="Confirm Password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-400 text-white">Register</button>
                            </div>
                            <p className='text-center'>You Have Already An Account? <Link to="/login" className='text-orange-400'>PLease Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;