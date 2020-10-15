import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">MarbokBlog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="topics">Topics</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav className="mr-sm-2">
                <Nav.Link variant="primary" href="SignIn">SignIn</Nav.Link>
                <Nav.Link variant="primary" href="SignUp">SignUp</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;