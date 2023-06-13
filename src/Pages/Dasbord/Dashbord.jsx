import React from 'react';
import { Helmet } from 'react-helmet-async';
import SelectedClassData from '../../Hooks/SelectedClassData';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaList, FaWallet, FaUser, FaBook, FaCheck, FaUserEdit, FaBookOpen, FaListUl } from 'react-icons/fa';

const Dashbord = () => {

    const isAdmin = true;
    const isInstractor = false;


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

                        {
                            isAdmin ? <>
                                <li className='font-semibold text-[14px] text-white'><NavLink to='/dasbord/myclass'><FaBookOpen></FaBookOpen>Manage Classes</NavLink></li>

                                <li className='font-semibold text-[14px] text-white'><NavLink to='/dasbord/allusers'><FaUserEdit></FaUserEdit>Manage Users</NavLink></li>

                            </> : isInstractor ? <>
                                <li className='font-semibold text-[14px] text-white'><NavLink to='/dasbord/myclass'><FaListUl></FaListUl>Add Class</NavLink></li>

                                <li className='font-semibold text-[14px] text-white'><NavLink to='/dasbord/allusers'><FaBook></FaBook>My Classes</NavLink></li>

                            </> : <>

                                <li className='font-semibold text-[14px] text-white'><NavLink to='/dasbord/myclass'><FaCheck></FaCheck> My Selected Classes</NavLink></li>

                                <li className='font-semibold text-[14px] text-white'><NavLink to='/dasbord/enrolledclass'><FaBook></FaBook> My Enrolled Classes</NavLink></li>

                                <li className='font-semibold text-[14px] text-white'><NavLink to='/dasbord/pyment'><FaWallet></FaWallet> Pyment</NavLink></li>
                            </>
                        }

                        <div className="divider"></div>

                        <li className='font-semibold text-[14px] text-white'><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>

                        <li className='font-semibold text-[14px] text-white'><NavLink to='/class'><FaList></FaList> Classes</NavLink></li>

                        <li className='font-semibold text-[14px] text-white'><NavLink to='/instractor'><FaUser></FaUser> Instractors</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;