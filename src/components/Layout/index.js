import * as React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavItem from "react-bootstrap/NavItem";
import Nav from 'react-bootstrap/Nav';

import Logo from '../../images/logo.svg';

import "./Layout.scss";

export default function Layout({ children }) {
    return (
        <div>
            <Navbar>
                <NavbarBrand href='/'>
                    <img src={Logo} alt='Logo icon' />
                </NavbarBrand>
                <Nav navbar>
                    <NavItem>O firmie</NavItem>
                    <NavItem>Kontakt</NavItem>
                    <NavItem>Oferta</NavItem>
                </Nav>
            </Navbar>
            <Container fluid className='px-0'>
                {children}
            </Container>
        </div>
    )
}