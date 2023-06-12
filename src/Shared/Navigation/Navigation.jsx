import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';



const Navigation = () => {

    const { logout, user } = useContext(AuthContext)

    const signOut = () => {
        logout()
    }

    return (
        <div className='max-w-5xl mx-auto navbar fixed z-10 bg-opacity-40 bg-gray-800 text-white'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to="/instractor">Instractors</Link></li>
                            <li><Link to="/class">Classess</Link></li>
                            <li><Link to="/dasbord/myclass">Dashbord</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl"><span className='text-orange-400'>BFMI</span> School</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/instractor">Instractors</Link></li>
                        <li><Link to="/class">Classess</Link></li>
                        <li><Link to="/dasbord/myclass">Dashbord</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {user ? <>
                        <img className='w-10 rounded-full me-6' src="https://i.postimg.cc/mrXK9cZ4/pngtree-businessman-user-avatar-free-vector-png-image-1538405-2.jpg" alt="" />

                        <Link onClick={signOut} className="btn bg-orange-400 border-none text-white">Logout</Link>
                    </> :

                        <>
                            <Link to='/login' className="btn bg-orange-400 border-none text-white me-4">Login</Link>
                        </>}

                </div>
            </div>
        </div>
    );
};

export default Navigation;