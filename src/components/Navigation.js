import React, { useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authAction';

export default function Navigation() {

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    const signOut = useCallback(() => dispatch(logout()), [dispatch]);

    const authButtons = token === ""
    ? <>
        <Link className="nav-link" to="/SignIn">SignIn</Link>
        <Link className="nav-link" to="/SignUp">SignUp</Link>
    </>
    : <Button variant="light" onClick={signOut}>SignOut</Button>

    const createArticle = token === ""
        ? <></>
        : <Nav className="mr-auto">
            <Link className="nav-link" to="/createArticle">Create Article</Link>
        </Nav>

    return (
        <Navbar bg="light" expand="lg">
            <Link className="navbar-brand" to="/">MarbokBlog</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/topics">Topics</Link>
                    {createArticle}
                </Nav>
                <Nav >
                    {authButtons}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}