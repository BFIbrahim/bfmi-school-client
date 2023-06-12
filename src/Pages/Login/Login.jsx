import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Shared/SocialLogin';

const Login = () => {

    const {loginUser} = useContext(AuthContext)

    const hundleLogin = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(form, email, password);

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Login Successfull',
                        showConfirmButton: false,
                        timer: 1500
                })
                form.reset()
            })


    }

    return (
        <div>

            <Helmet>
                <title>Login || BFMI School</title>
            </Helmet>

            <h1 className='pt-24 text-4xl text-center font-bold'>Please LogIn</h1>

            <div className="hero min-h-screen mx-auto">
                <div className="md:flex gap-6 items-center">
                    <div className="text-center lg:text-left">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-8145509-6556891.png?f=webp" alt="" />
                    </div>
                    <div className=" mb-5 card flex-shrink-0 w-full md:max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hundleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-400 text-white">Login</button>
                            </div>

                            <SocialLogin></SocialLogin>

                           <p className='text-center'>New In BFMI School? <Link to="/registration" className='text-orange-400'>PLease Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;