import React from 'react';
import { Helmet } from 'react-helmet-async';
import SelectedClassData from '../../Hooks/SelectedClassData';
import { NavLink, Outlet } from 'react-router-dom';

const Dashbord = () => {

    const [classes] = SelectedClassData()

    return (
        <div>
            <Helmet>
                <title>Dashbord || BFMI School</title>
            </Helmet>
            {/* 
            {
                classes.map(sSlacc => {
                    console.log(sSlacc.Name);
                })
            } */}

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-orange-400 text-base-content">
                        {/* Sidebar content here */}
                        <li className='font-semibold text-[14px] text-white'><NavLink to='/dasbord/myclass'><img className='w-5' src="https://i.postimg.cc/J7f3dMkV/accept.png" alt="" /> My Selected Classes</NavLink></li>

                        <li className='font-semibold text-[14px] text-white'><NavLink to='/dasbord/enrolledclass'><img className='w-5' src="https://i.postimg.cc/GpHsmD18/books-stack-of-three.png" alt="" /> My Enrolled Classes</NavLink></li>

                        <li className='font-semibold text-[14px] text-white'><NavLink to='/dasbord/pyment'><img className='w-5' src="https://i.postimg.cc/vHsqxYTH/wallet-filled-money-tool.png" alt="" /> Pyment</NavLink></li>

                        <div className="divider"></div>

                        <li className='font-semibold text-[14px] text-white'><NavLink to='/'><img className='w-5' src="https://i.postimg.cc/1XkKGZpS/home.png" alt="" />Home</NavLink></li>

                        <li className='font-semibold text-[14px] text-white'><NavLink to='/class'><img className='w-5' src="https://i.postimg.cc/kg0B7g7q/to-do-list.png" alt="" /> Classes</NavLink></li>

                        <li className='font-semibold text-[14px] text-white'><NavLink to='/instractor'><img className='w-5' src="https://i.postimg.cc/DZKJPyNB/male.png" alt="" /> Instractor</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;