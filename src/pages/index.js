import * as React from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import {Collapse, Row} from "react-bootstrap";

import Layout from "../components/Layout";
import Extinguisher from '../images/extinguisher-img.png';
import RedSign from '../images/red-sign-img.png';
import GreenSign from '../images/green-sign-img.png';
import ScrollTo from '../images/scroll-to-icon.svg';
import ExtinguisherOnWall from '../images/extinguisher-on-wall.png';
import MailIcon from '../images/mail-icon.svg'
import PhoneIcon from "../images/phone-icon.svg";
import {services} from "../constants/constants";

import "./Home.scss";

const IndexPage = () => {
    const [openedCollapse, setOpenedCollapse] = useState({});

    const toggleCollapse = (uniqueKey) => {
        if(!openedCollapse[uniqueKey]) {
            setOpenedCollapse({[uniqueKey]: true})
        }else {
            setOpenedCollapse({[uniqueKey]: false})
        }
    }

  return (
      <Layout>
            <Row as='header' className='header'>
                <Col xs={6} as='h1' className='header__text-wrap'>
                    <div className='header__text'>
                        <span>Usługi</span>
                        <span>PPOŻ</span>
                        <span>i BHP</span>
                    </div>
                </Col>
                <Col className='images' xs={6}>
                    <img className='image image--extinguisher-sign' src={Extinguisher} alt='extinguisher' />
                    <img className='image image--green-sign' src={GreenSign} alt='green sign' />
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
                  <p className='subheading__text'>Zapewniamy najwyższe standardy z zakresu <br /> bezpieczeństwa pożarowego i BHP</p>
                  <button><img src={ScrollTo} alt='scroll down icon' /></button>
              </Col>
          </Row>


          <Row as='section' className='services'>
              <Col xs={6} as='h2' className='services__text-wrap'>
                  <div className='services__text'>
                      <span>Zakres</span>
                      <span>naszych</span>
                      <span>usług</span>
                  </div>
              </Col>
              <Col xs={6} className='services--background'>
                  <div className='header__text'>
                      <span>Zakres</span>
                      <span>naszych</span>
                      <span>usług</span>
                  </div>
              </Col>

              <Col className='services__list' xs={6}>
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

          <Row className='about' as='section'>
              <Col className='ps-0' xs={6}>
                  <img src={ExtinguisherOnWall} alt='extinguisher on wall' />
              </Col>
              <Col className='about__text' xs={6}>
                  <h4 className='about__heading'>O firmie</h4>
                  <p className='about__paragraph'>Interpoż działa prężnie od 2019 roku,  firmata została stworzona z pasji przez ekspertów powiązanych z daną dziedziną wieloletnim doświadczeniem. </p>
                  <p className='about__paragraph'>Jako firma jak i specjaliści zapewniamy największy standard usług w zależności od potrzeb, wyżej wymienione zakresy naszego działania mogą być elastycznie modyfikowane w zależności co Państwo potrzebują.</p>
                  <p className='about__paragraph'>Poniżej przedstawiamy plik zawierający dane dotyczące oferowanych przykładowych usług jakie możemy Państwu zapewnić, w razie niepewności zapraszamy do kontaktu.</p>
                  <button className='red-btn'>Oferta</button>
              </Col>
          </Row>

          <Row as='section' className='contact'>
              <Col className='contact__heading' xs={6} as='h5'>Kontakt</Col>
              <Col className='contact__content' xs={6}>
                  <div className='d-flex flex-column'>
                      <p className='contact__info'>Jeśli masz więcej pytań na temat usług zostaw nam swoje dane <br /> kontaktowe, oddzwonimy i chętnie odpowiemy na Twoje pytania.</p>
                      <a className='contact__anchor' href='tel:+48691511756'>
                          <img src={PhoneIcon} alt='phone icon' /> 691-511-756
                      </a>
                      <a className='contact__anchor' href='mailto:kontakt@interpoz.com'>
                          <img src={MailIcon} alt='Mail icon' /> kontakt@interpoz.com
                      </a>
                  </div>
              </Col>
          </Row>
      </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
