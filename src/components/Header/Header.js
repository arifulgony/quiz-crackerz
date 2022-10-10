import React from 'react';
import'./Header.css'



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
            <>
              <Navbar collapseOnSelect expand="lg" className='p-3 header-bg'>
                  <Container>
                      <Navbar.Brand href="#home"><h1>EDUM-EDUCATION</h1></Navbar.Brand>
                       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                       <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className="me-auto">
                       </Nav>
                        <Nav className='fs-4 '>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/tropics'>Tropics</Nav.Link>
                            <Nav.Link href='/statistcs'>Statistcs</Nav.Link>
                            <Nav.Link href='/blog'>Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                 </Container>
              </Navbar>
            </>




       
    );
};

export default Header;