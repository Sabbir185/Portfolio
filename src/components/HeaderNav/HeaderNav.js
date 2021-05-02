import React from 'react';
import { Button, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.css'

const HeaderNav = () => {
    return (
        <Navbar style={{backgroundColor:'#0A192F', paddingTop:'20px'}} expand="lg" className="nav-padding">
            <Navbar.Brand href="#home" style={{color:'#4DC5AF', fontWeight:'600'}}>SABBIR AHMMED</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler'/>
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