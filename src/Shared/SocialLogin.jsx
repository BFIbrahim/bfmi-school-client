import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const SocialLogin = () => {

    const { googleSignin } = useContext(AuthContext)

    const hundleSocialLogin = () => {
        googleSignin()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email}


                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)


                })
                    .then(res => res.json())
                    .then(() => {})
            })
    }

    return (
        <div className='w-20 mx-auto'>
            <div className="divider">OR</div>

            <button onClick={hundleSocialLogin}><img src="https://cdn.mos.cms.futurecdn.net/mkXgKuGBww7TQUASvxRxmR-1200-80.jpg" alt="" /></button>
        </div>
    );
};

export default SocialLogin;