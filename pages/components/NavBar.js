import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../../styles/Home.module.css'



export default function NavBar() {
    
    return (
        <div className={`d-flex justify-content-center ${styles.backgroundBlue}`}>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="/">Volleyhead</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">   
                    <Nav.Link href="/stories">Stories</Nav.Link>
                    <Nav.Link href="/agents">Agents</Nav.Link>
                    <Nav.Link href="/archive">Guides</Nav.Link>
                    <NavDropdown title="Resources for" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/athletes">Athletes</NavDropdown.Item>
                    <NavDropdown.Item href="/coaches">Coaches</NavDropdown.Item>
                    <NavDropdown.Item href="/parents">Parents</NavDropdown.Item>
                    <NavDropdown.Item href="/about">About</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="https://volleyconnect.ghost.io/#/portal/signup">Join for Free!</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>                
    )
}