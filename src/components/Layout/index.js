import * as React from "react";
import { useState } from 'react';
import { motion } from "framer-motion";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavItem from "react-bootstrap/NavItem";
import Nav from 'react-bootstrap/Nav';

import { returnElVariants } from "../../constants/constants";
import Logo from '../../images/logo.svg';
import MobileLogo from "../../images/mobile-top-logo.svg"
import FooterLogo from "../../images/footer-logo.svg";
import Offer from "../../images/offer.pdf"

import "./Layout.scss";

export default function Layout({ children, scrollToAbout, scrollToContact }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial="exit"
            animate="enter"
            exit="exit"
            variants={returnElVariants}
        >
            <Navbar>
                <NavbarBrand href='/'>
                    <picture>
                        <source srcSet={Logo} media='(min-width: 992px)' />
                        <img srcSet={MobileLogo} alt='Logo icon' />
                    </picture>
                </NavbarBrand>

                <button onClick={() => setOpen(!open)} className={`burger d-lg-none ${open ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <Nav className='d-none d-lg-flex' navbar>
                    <NavItem as='button' onClick={scrollToAbout}>O firmie</NavItem>
                    <NavItem as='button' onClick={scrollToContact}>Kontakt</NavItem>
                    <NavItem as='a' href={Offer} target="_blank" rel='noreferrer' className='red-btn'>Oferta</NavItem>
                </Nav>
            </Navbar>

            <Container className='overflow-hidden' fluid>
                {children}
            </Container>

            <footer className='footer'>
                <Col xs={12} lg={5}>
                    <img src={FooterLogo} alt='footer logo' />
                    <ul className='footer__list'>
                        <li>Robert Bujny Interpoż</li>
                        <li>ul. Zdrojowa 32</li>
                        <li>28-100 Busko-Zdrój</li>
                    </ul>
                </Col>
                <Col xs={0} lg={6}>
                    <Navbar className='footer__navbar d-none d-lg-flex'>
                        <Nav navbar>
                            <NavItem as='button' onClick={scrollToAbout}>O firmie</NavItem>
                            <NavItem as='button' onClick={scrollToContact}>Kontakt</NavItem>
                            <NavItem as='a' href={Offer} target="_blank" rel='noreferrer'>Oferta</NavItem>
                        </Nav>
                    </Navbar>
                </Col>
            </footer>
        </motion.div>
    )
}