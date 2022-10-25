import * as React from "react";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavItem from "react-bootstrap/NavItem";
import Nav from 'react-bootstrap/Nav';

import Logo from '../../images/logo.svg';
import FooterLogo from "../../images/footer-logo.svg";

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
                    <NavItem as='button' className='red-btn'>Oferta</NavItem>
                </Nav>
            </Navbar>

            <Container className='overflow-hidden' fluid>
                {children}
            </Container>

            <footer className='footer'>
                <Col xs={5}>
                    <img src={FooterLogo} alt='footer logo' />
                    <ul className='footer__list'>
                        <li>Robert Bujny Interpoż</li>
                        <li>ul. Zdrojowa 32</li>
                        <li>28-100 Busko-Zdrój</li>
                    </ul>
                </Col>
                <Col xs={6}>
                    <Navbar className='footer__navbar'>
                        <Nav navbar>
                            <NavItem>O firmie</NavItem>
                            <NavItem>Kontakt</NavItem>
                            <NavItem>Oferta</NavItem>
                        </Nav>
                    </Navbar>
                </Col>
            </footer>
        </div>
    )
}