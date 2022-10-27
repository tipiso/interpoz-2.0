import * as React from "react";
import { useState, useRef } from "react";
import Col from "react-bootstrap/Col";
import { Collapse, Row } from "react-bootstrap";

import Layout from "../components/Layout";
import Extinguisher from '../images/extinguisher-img.webp';
import RedSign from '../images/red-sign-img.webp';
import GreenSign from '../images/green-sign-img.webp';
import ExtinguisherOnWall from '../images/extinguisher-on-wall.webp';
import MailIcon from '../images/mail-icon.svg'
import PhoneIcon from "../images/phone-icon.svg";
import ScrollDownText from "../images/scroll-down-text.svg";
import ScrollDownDot from "../images/scroll-down-dot.svg";
import Offer from "../images/offer.pdf";
import { SEO } from "../components/SEO";
import { services } from "../constants/constants";

import "./Home.scss";
import useWindowDimensions from "../components/Layout/useWindowDimensions";


const IndexPage = () => {
    const [openedCollapse, setOpenedCollapse] = useState({});
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const windowDimensions = useWindowDimensions();
    const isMobileLayout = windowDimensions.width <= 992;

    const toggleCollapse = (uniqueKey) => {
        if(!openedCollapse[uniqueKey]) {
            setOpenedCollapse({[uniqueKey]: true})
        }else {
            setOpenedCollapse({[uniqueKey]: false})
        }
    }

    const scrollToContact = () => {
        contactRef.current.scrollIntoView();
    }

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView();
    }

    return (
      <Layout scrollToContact={scrollToContact} scrollToAbout={scrollToAbout} isMobileLayout={isMobileLayout}>
            <Row as='header' className='header'>
                <Col xs={6} as='h1' className='header__text-wrap'>
                    <div className='header__text'>
                        <span>Usługi</span>
                        <span>PPOŻ</span>
                        <span>i BHP</span>
                    </div>
                </Col>
                <Col className='images' xs={6}>
                    {!isMobileLayout && (
                        <>
                            <img className='d-none d-lg-block image image--extinguisher-sign' src={Extinguisher} alt='extinguisher' />
                            <img className='d-none d-lg-block image image--green-sign' src={GreenSign} alt='green sign' />
                        </>
                      )
                    }
                    <img className='image image--red-sign' src={RedSign} alt="red sign" />
                </Col>
                <Col xs={6} className='header--background'>
                    <div className='header__text'>
                        <span>Usługi</span>
                        <span>PPOŻ</span>
                        <span>i BHP</span>
                    </div>
                </Col>
            </Row>


          <Row as='section'>
              <Col className='subheading' xs={12}>
                  <p className='subheading__text'>Zapewniamy najwyższe standardy z zakresu <br className='d-none d-md-block' /> bezpieczeństwa pożarowego i BHP</p>
                  <button className='scroll-down'>
                      <img className='scroll-down__text' src={ScrollDownText} alt='scroll down text' />
                      <img className='scroll-down__dot' src={ScrollDownDot} alt='scroll down dot' />
                  </button>
              </Col>
          </Row>


          <Row as='section' className='services'>
              <Col xs={12} lg={6} as='h2' className='services__text-wrap'>
                  <div className='services__text'>
                      <span>Zakres</span>
                      <span>naszych</span>
                      <span>usług</span>
                  </div>
              </Col>
              <Col xs={12} lg={6} className='services--background'>
                  <div className='header__text'>
                      <span>Zakres</span>
                      <span>naszych</span>
                      <span>usług</span>
                  </div>
              </Col>

              <Col className='services__list' xs={12} lg={6}>
                  {services.map((service, idx) => {
                      const uniqueKey = service.title + idx;

                   return (
                       <div className='service' key={uniqueKey}>
                          <span className='service__title' onClick={() => toggleCollapse(uniqueKey)}>{service.title}</span>
                          <Collapse key={uniqueKey + '-collapse'} in={openedCollapse[uniqueKey]}>
                              <div className='service__content'>{service.content}</div>
                          </Collapse>
                      </div>)
                  })}
              </Col>
          </Row>

          <Row ref={aboutRef} className='about' as='section'>
              <Col className='ps-0 pe-0 pe-lg-3' xs={12} lg={6}>
                  <img loading='lazy'
                       width={760}
                       height={657}
                       src={ExtinguisherOnWall}
                       alt='extinguisher on wall'
                  />
              </Col>
              <Col className='about__text' xs={12} lg={6}>
                  <h4 className='about__heading'>O firmie</h4>
                  <p className='about__paragraph'>Interpoż działa prężnie od 2019 roku,  firmata została stworzona z pasji przez ekspertów powiązanych z daną dziedziną wieloletnim doświadczeniem. </p>
                  <p className='about__paragraph'>Jako firma jak i specjaliści zapewniamy największy standard usług w zależności od potrzeb, wyżej wymienione zakresy naszego działania mogą być elastycznie modyfikowane w zależności co Państwo potrzebują.</p>
                  <p className='about__paragraph'>Poniżej przedstawiamy plik zawierający dane dotyczące oferowanych przykładowych usług jakie możemy Państwu zapewnić, w razie niepewności zapraszamy do kontaktu.</p>
                  <a className='red-btn' href={Offer} target="_blank" rel='noreferrer'>Oferta</a>
              </Col>
          </Row>

          <Row ref={contactRef} as='section' className='contact'>
              <Col className='contact__heading' xs={12} lg={6} as='h5'>Kontakt</Col>
              <Col className='contact__content' xs={12} lg={6}>
                  <div className='d-flex flex-column'>
                      <p className='contact__info'>Jeśli masz więcej pytań na temat usług zostaw nam swoje dane <br className='d-none d-xxl-block' /> kontaktowe, oddzwonimy i chętnie odpowiemy na Twoje pytania.</p>
                      <a className='contact__anchor' href='tel:+48691511756'>
                          <img loading='lazy' src={PhoneIcon} alt='phone icon' /> 691-511-756
                      </a>
                      <a className='contact__anchor' href='mailto:kontakt@interpoz.com'>
                          <img loading='lazy' src={MailIcon} alt='Mail icon' /> kontakt@interpoz.com
                      </a>
                  </div>
              </Col>
          </Row>
      </Layout>
  )
}

export default IndexPage

export const Head = () => (<SEO />)
