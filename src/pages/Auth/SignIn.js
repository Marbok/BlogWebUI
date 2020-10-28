import React, { useState } from 'react';
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

    let errorText = props.error ? <div>Authorization Error</div> : <div></div> //todo use another component????

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
            {errorText}
        </Form>
    )
}

function mapStateToProps(state) {
    const { token, error } = state.auth;
    return { token, error }
}

export default connect(mapStateToProps)(SignIn);