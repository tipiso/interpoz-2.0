import * as React from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/Layout";
import Extinguisher from '../images/extinguisher-img.png';
import RedSign from '../images/red-sign-img.png';
import GreenSign from '../images/green-sign-img.png';

import "./Home.scss";

const IndexPage = () => {
  return (
      <Layout>
        <header className='header'>
            <Row>
                <Col xs={6} as='h1' className='header__text'>
                    <div title='Usługi'>
                        <span>Usługi</span>
                    </div>
                    <div title='PPOŻ'>
                        <span>PPOŻ</span>
                    </div>
                    <div title='i BHP'>
                        <span>i BHP</span>
                    </div>
                </Col>
                <Col className='images' xs={6}>
                    <img src={Extinguisher} alt='extinguisher' />
                    <img src={GreenSign} alt='green sign' />
                    <img src={RedSign} alt="red sign" />
                </Col>
            </Row>
        </header>
          <div className='header header--background'>
              <div className='header__text'>
                  <div title='Usługi'>
                      <span>Usługi</span>
                  </div>
                  <div title='PPOŻ'>
                      <span>PPOŻ</span>
                  </div>
                  <div title='i BHP'>
                      <span>i BHP</span>
                  </div>
              </div>
          </div>
      </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
