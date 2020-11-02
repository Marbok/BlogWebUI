import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import './SignIn.css';

function AuthForm(props) { // use one component with signIn

    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    let signUp = () => {
        props.dispatch(props.action(nickname, password));
    }

    let events = {
        'ERROR': <div>{props.error_message}</div>,
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
            <Button variant="primary" onClick={signUp}>
                {props.button_name}
            </Button>
            {events[props.next]}
        </Form>
    )
}

function mapStateToProps(state) {
    const { next } = state.auth;
    return { next }
}

export default connect(mapStateToProps)(AuthForm);