import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const SocialLogin = () => {

    const { googleSignin } = useContext(AuthContext)

    const hundleSocialLogin = () => {
        googleSignin()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
            })
    }

    return (
        <div className='w-20 mx-auto'>
            <div className="divider">OR</div>

            <button  onClick={hundleSocialLogin}><img src="https://cdn.mos.cms.futurecdn.net/mkXgKuGBww7TQUASvxRxmR-1200-80.jpg" alt="" /></button>
        </div>
    );
};

export default SocialLogin;