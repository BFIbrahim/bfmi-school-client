import React, { useEffect, useState } from 'react';
import SingleClass from '../../../Shared/SingleClass/SingleClass';

const HomeClasses = () => {

    const [classesData, setClasses] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('http://localhost:5000/class')
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data);
    //             setLoading(false)
    //         })
    // }, [])

    useEffect(() => {
        const loadedClass = async () => {
          try {
            const response = await fetch('http://localhost:5000/classes');
            const jsonData = await response.json();
            const sortedClass = jsonData.sort((x, y) => x.Available_seats - y.Available_seats);
            const topSixClass = sortedClass.slice(0, 6);
            console.log(topSixClass);
            setClasses(topSixClass);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        loadedClass();
      }, []);


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