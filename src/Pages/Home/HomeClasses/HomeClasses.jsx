import React, { useEffect, useState } from 'react';
import SingleClass from '../../../Shared/SingleClass/SingleClass';

const HomeClasses = () => {

    const [classesData, setClasses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                setLoading(false)
            })
    }, [])


    return (
        <div className='mt-20 mb-10'>

            <div className='text-center mb-10'>
                <h1 className='text-3xl font-semibold text-orange-400 italic '>Popullar Classes</h1>
                <p>Our Popullar Instrument Classes Here</p>
                <p>--------------------------------------------------------</p>
            </div>

            <div className='md:grid grid-cols-3 gap-5'>
                {
                    classesData.map(classes => (<SingleClass
                        key={classes._id}
                        classes={classes}
                    ></SingleClass>))
                }
            </div>
        </div>
    );
};

export default HomeClasses;