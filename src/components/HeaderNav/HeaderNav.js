import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.css'

const HeaderNav = () => {
    return (
        <Navbar style={{backgroundColor:'#0A192F', borderRadius:'10px', marginTop:'20px'}} expand="lg" className="ml-5 mr-5">
            <Navbar.Brand href="#home" style={{color:'#4DC5AF'}}>SABBIR AHMMED</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home"><Link className="mr-4 navColor">Home</Link></Nav.Link>
                    <Nav.Link href="#link"><Link className="mr-4 navColor">Projects</Link></Nav.Link>
                    <Nav.Link href="#home"><Link className="mr-4 navColor">Blogs</Link></Nav.Link>
                    <Nav.Link href="#link"><Link className="mr-4 navColor">About Me</Link></Nav.Link>
                </Nav>
                <Button variant="outline-success">Resume</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderNav;