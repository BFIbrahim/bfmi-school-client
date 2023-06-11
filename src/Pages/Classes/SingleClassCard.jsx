import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SingleClassCard = ({classes}) => {
    console.log(classes);
    const { user } = useContext(AuthContext)
    console.log(user);
    const navigate = useNavigate()

    const {_id, Name, Image, Instructor_name, Available_seats, Price} = classes;
    const hundleSelect = (classes) => {
        if (user && user.email) {
            const selectedclass = {selecytrdClass: _id, Name, Image, Instructor_name, Available_seats, Price, email: user.email}
            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(selectedclass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class selected Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Opps!',
                text: "Please Login or SignUp first",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-96 mb-5">
                <figure><img src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p>Instractor: {Instructor_name}</p>
                    <p>Available Seats: {Available_seats}</p>
                    <p className='text-orange-400'><strong>Price: {Price}</strong></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => hundleSelect(classes)} className="btn bg-orange-400 text-white">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;