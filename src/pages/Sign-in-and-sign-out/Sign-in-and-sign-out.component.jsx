import React from 'react';
import SignIn from '../../Components/sign-in/sign-in-component';
import SignUp from '../../Components/Sign-up/Sign-up-component';

import './Sign-in-and-sign-out.style.scss';

const SignInAndSignOutPage = () => (
    <div className="sign-in-and-sign-out">
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignOutPage;