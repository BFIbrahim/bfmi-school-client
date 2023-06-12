import React from 'react';
import SelectedClassData from '../../Hooks/SelectedClassData';
import Swal from 'sweetalert2';

const MyClasses = () => {

    const [classes, refetch] = SelectedClassData()
    console.log(classes);
    const total = classes.reduce((sum, item) => item.Price + sum, 0)

    const hundleDelete = sClass => {
        
        console.log(sClass);
        Swal.fire({
            title: 'Are you sure?',
            text: "This Will delete from your dasbord",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClass/${sClass._id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full md:ps-4'>
            <div className='flex justify-evenly items-center mt-8 bg-orange-400 p-2 rounded-sm font-semibold text-white'>
                <h3 className=''>Total Class: {classes.length}</h3>
                <h3 className=''>Total Price: {total}</h3>

                <button className="btn btn-sm bg-white">chekout</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <strong>#</strong>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((sClass, index) => <tr
                                key={sClass._id}
                            >
                                <th>
                                    <label>
                                        <p>{index + 1}</p>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={sClass.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{sClass.Name}</div>
                                            <div className="text-sm opacity-50">{sClass.Instructor_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <strong>{sClass.Price}</strong>
                                </td>
                                {/* <td>
                                    <button className="btn btn-ghost btn-xs">pay</button>
                                </td> */}
                                <td>
                                    <button onClick={() => hundleDelete(sClass)} className="btn bg-white border-none">
                                        <img className='w-8' src="https://i.postimg.cc/BQLqTJMd/trash-bin.png" alt="" />
                                    </button>
                                </td>
                            </tr>

                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;