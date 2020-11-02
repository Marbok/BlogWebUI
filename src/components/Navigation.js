import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/authAction';

function Navigation(props) {

    let SignOut = () => {
        props.dispatch(logout())
    }

    let authButtons = props.token === ""
        ? <>
            <Link className="nav-link" to="/SignIn">SignIn</Link>
            <Link className="nav-link" to="/SignUp">SignUp</Link>
        </>
        : <Button variant="light" onClick={SignOut}>SignOut</Button>

    return (
        <Navbar bg="light" expand="lg">
            <Link className="navbar-brand" to="/">MarbokBlog</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/topics">Topics</Link>
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