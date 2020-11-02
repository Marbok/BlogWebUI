import React from 'react';
import { auth } from '../../redux/actions/authAction';
import AuthForm from './AuthForm';

function SignIn() {

    return (
        <AuthForm
            error_message='Authorization Error'
            button_name='SignIn'
            action={auth}
        />
    )
}

export default SignIn;