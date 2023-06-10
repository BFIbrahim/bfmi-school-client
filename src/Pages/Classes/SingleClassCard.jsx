import React from 'react';

const SingleClassCard = ({ classes }) => {
    console.log(classes);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-96 mb-5">
                <figure><img src={classes.Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{classes.Name}</h2>
                    <p>Instractor: {classes.Instructor_name}</p>
                    <p>Available Seats: {classes.Available_seats}</p>
                    <p className='text-orange-400'><strong>Price: {classes.Price}</strong></p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-orange-400 text-white">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;