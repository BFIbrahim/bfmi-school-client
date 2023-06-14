import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://bf-music-instrument-school-server-bfibrahim.vercel.app/users')
        return res.json()
    })

    const hundleMakeAdmin = user => {
        fetch(`https://bf-music-instrument-school-server-bfibrahim.vercel.app/users/admin/${user._id}`, {
            method: "PATCH"
        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now an admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    const hundleMakeInstractor = user => {
        fetch(`https://bf-music-instrument-school-server-bfibrahim.vercel.app/users/instractor/${user._id}`, {
            method: "PATCH"
        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now an Instractor`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    return (
        <div className='w-full md:ps-5'>
            <Helmet>
                <title>All Users || BFMI School</title>
            </Helmet>

            <div className='flex justify-evenly items-center mt-8 bg-orange-400 p-2 rounded-sm font-semibold text-white'>
                <h3 className=''>Total Users: {users.length}</h3>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Role</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin' : user.role === 'instractor'?'Instractor' :
                                            <button className='bg-gray-700 btn-sm rounded-sm text-white hover:bg-gray-700'><FaUser></FaUser></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => hundleMakeAdmin(user)} className="btn btn-sm bg-orange-400 text-white hover:text-black">Make Admin</button>
                                </td>
                                <td>
                                    <button onClick={() => hundleMakeInstractor(user)} className="btn btn-sm bg-orange-400 text-white hover:text-black">Make Instractor</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;