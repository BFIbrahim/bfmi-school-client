import React, { useEffect, useState } from 'react';
import SingleClassCard from './SingleClassCard';
import { Helmet} from 'react-helmet-async';

import './classes.css'

const Classes = () => {
    const [classesData, setClasses] = useState([])
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                // setLoading(false)
            })
    }, [])


    return (
        <div>
            <Helmet>
                <title>Classes || BFMI School</title>
            </Helmet>
            <div className="hero h-96 class-top">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our All Classes</h1>
                        <p className="mb-5">We Have Top Expert Instractors. Here Is All Classess of our top Expert Instractors</p>
                    </div>
                </div>
            </div>

            <div className="md:grid grid-cols-3 gap-5 mt-20">
                {
                    classesData.map(classes => (<SingleClassCard
                        key={classes._id}
                        classes={classes}
                    ></SingleClassCard>))
                }
            </div>

        </div>
    );
};

export default Classes;