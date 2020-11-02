import React from 'react';
import { registration } from '../../redux/actions/authAction';
import AuthForm from './AuthForm';

function Registration() {

    return (
        <AuthForm
            error_message='Nickname exists'
            button_name='SignUp'
            action={registration}
        />
    )
}

export default Registration;