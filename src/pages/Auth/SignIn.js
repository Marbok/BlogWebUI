import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { auth } from '../../redux/actions/authAction'
import { connect } from 'react-redux'

import './SignIn.css';

function SignIn(props) {

    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    let signIn = () => {
        props.dispatch(auth(nickname, password));
    }

    let events = {
        'ERROR': <div>Authorization Error</div>,
        'REDIRECT': <Redirect to="/" />,
        'START': <div></div>
    }

    return (
        <Form className="signin">
            <Form.Group controlId="nickname">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="text" onChange={e => setNickname(e.target.value)} placeholder="Enter nickname" />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" onClick={signIn}>
                SignIn
            </Button>
            {events[props.next]}
        </Form>
    )
}

function mapStateToProps(state) {
    const { next } = state.auth;
    return { next }
}

export default connect(mapStateToProps)(SignIn);