import React from 'react';
import { Button, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.css'
import logo from '../../images/logo2.png'

const HeaderNav = () => {
    return (
        <Navbar style={{backgroundColor:'#0A192F', paddingTop:'20px'}} expand="lg" className="nav-padding">
            <Navbar.Brand href="#home" > <Link style={{color:'#4DC5AF', fontWeight:'600', textDecoration:'none'}} to='/'> <img src={logo} alt="" className="img-fluid img-size"/> SABBIR AHMMED</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href=""><Link className="mr-4 navColor" to='/home'>Home</Link></Nav.Link>
                    <Nav.Link href=""><Link className="mr-4 navColor" to='/projects'>Projects</Link></Nav.Link>
                    <Nav.Link href=""><Link className="mr-4 navColor" to='/blogs'>Blogs</Link></Nav.Link>
                    <Nav.Link href=""><Link className="mr-4 navColor" to='/about'>About Me</Link></Nav.Link>
                </Nav>
                <Button variant="outline-success">Resume</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderNav;