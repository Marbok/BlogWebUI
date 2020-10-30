import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/authAction';

function Navigation(props) {

    let SignOut = () => {
        props.dispatch(logout())
    }

    let authButtons = props.token === ""
        ? <>
            <Nav.Link variant="primary" href="/SignIn">SignIn</Nav.Link>
            <Nav.Link variant="primary" href="/SignUp">SignUp</Nav.Link>
        </>
        : <Button variant="light" onClick={SignOut}>SignOut</Button>

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">MarbokBlog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/topics">Topics</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav className="mr-sm-2">
                {authButtons}
            </Nav>
        </Navbar>
    )
}

function mapStateToProps(state) {
    const { token } = state.auth;
    return { token }
}

export default connect(mapStateToProps)(Navigation);