import * as React from "react"
import Col from "react-bootstrap/Col";
import {Collapse, Row} from "react-bootstrap";

import Layout from "../components/Layout";
import Extinguisher from '../images/extinguisher-img.png';
import RedSign from '../images/red-sign-img.png';
import GreenSign from '../images/green-sign-img.png';
import ScrollTo from '../images/scroll-to-icon.svg';
import {services} from "../constants/constants";

import "./Home.scss";

const IndexPage = () => {
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
                <div className='header--background'>
                    <div className='header__text'>
                        <span>Usługi</span>
                        <span>PPOŻ</span>
                        <span>i BHP</span>
                    </div>
                </div>
            </Row>


          <section className='subheading'>
              <p className='subheading__text'>Zapewniamy najwyższe standardy z zakresu <br /> bezpieczeństwa pożarowego i BHP</p>
              <button className='subheading__btn'><img src={ScrollTo} alt='scroll down icon' /></button>
          </section>


          <Row as='section' className='services'>
              <Col xs={6} as='h2' className='services__text-wrap'>
                  <div className='services__text'>
                      <span>Zakres</span>
                      <span>naszych</span>
                      <span>usług</span>
                  </div>
              </Col>
              <div className='services--background'>
                  <div className='header__text'>
                      <span>Zakres</span>
                      <span>naszych</span>
                      <span>usług</span>
                  </div>
              </div>

              <Col xs={6}>
                  {services.map((service, idx) => (
                      <div key={service.title + idx}>
                          <span>{service.title}</span>
                          <Collapse>
                              <div>{service.content}</div>
                          </Collapse>
                      </div>
                  ))}
              </Col>
          </Row>
      </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
