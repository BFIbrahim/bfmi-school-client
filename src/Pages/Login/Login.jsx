import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1 className='pt-24 text-4xl text-center font-bold'>Please LogIn</h1>

            <div className="hero min-h-screen mx-auto">
                <div className="md:flex gap-6 items-center">
                    <div className="text-center lg:text-left">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-8145509-6556891.png?f=webp" alt="" />
                    </div>
                    <div className=" mb-5 card flex-shrink-0 w-full md:max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-400 text-white">Login</button>
                            </div>
                            <p className='text-center'>or</p>
                            <button className=''>
                                <img className='w-20 mx-auto' src="https://cdn.mos.cms.futurecdn.net/mkXgKuGBww7TQUASvxRxmR-1200-80.jpg" alt="" />
                            </button>
                            <p className='text-center'>New In BFMI School? <Link to="/registration" className='text-orange-400'>PLease Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;