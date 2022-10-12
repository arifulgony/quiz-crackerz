import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import'./Header.css'

const Header = () => {
    
    const navLinkStyle = ({ isActive }) =>{
 
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration : isActive  ? 'none' :'underline'
        }
    
    }

    return (
            <>
              <Navbar collapseOnSelect expand="lg" className='p-3 bg-white'>
                  <Container>
                      <Navbar.Brand href="#home"><h1>EDUM-EDUCATION</h1></Navbar.Brand>
                       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                       <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className="me-auto">
                       </Nav>
                        <Nav className='fs-4'>
                            <NavLink style={navLinkStyle} to='/'>Home</NavLink>
                            <NavLink style={navLinkStyle} to ='/statistcs'>Statistcs</NavLink>
                            <NavLink style={navLinkStyle} to ='/blog'>Blog</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                 </Container>
              </Navbar>
            </>
       
    );
};

export default Header;