import React from 'react';
import { Helmet } from 'react-helmet-async';
import SelectedClassData from '../../Hooks/SelectedClassData';

const Dashbord = () => {

    const [classes] = SelectedClassData()
    
    return (
        <div>
            <Helmet>
                <title>Dashbord || BFMI School</title>
            </Helmet>

            {
                classes.map(sSlacc => {
                    console.log(sSlacc.Name);
                })
            }
        </div>
    );
};

export default Dashbord;