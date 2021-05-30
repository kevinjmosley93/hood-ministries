import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className='bg-dark text-light py-4 mt-auto'>
      <Container>
        <Row>
          <Col sm={6} md={3}>
            <h5>ABOUT THE CHURCH</h5>
            <p>
              We strive to help those who feel like they have no one else. I Am
              (H.O.O.D) Helping Others Obtain Destiny!
            </p>
          </Col>
          <Col sm={6} md={3}>
            <h5>IMPORTANT LINKS</h5>
            <ul className='footer-links'>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Events</a>
              </li>
              <li>
                <a href='#'>Worship</a>
              </li>
              <li>
                <a href='#'>Terms of Service</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='#'>Donation Policy</a>
              </li>
              <li>
                <a href='#'>Contact us</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h5>LOCATION</h5>
            <p>
              {' '}
              <div>Helping Others Obtain Destiny LLC</div>
              <div>
                1951 W 21st St <br />
                Broadview, IL 60155
              </div>
              <br />
              <span>
                <a href='#'>info@helpingthehood.com</a>
              </span>
            </p>
          </Col>
          <Col sm={6} md={3}>
            <h5>CONNECT</h5>
            <div className='social-icons'>
              <a href='#'>
                <img src='images/fb-icon.png' alt='social' />
              </a>{' '}
              <a href='#'>
                <img src='images/tw-icon.png' alt='social' />
              </a>{' '}
              <a href='#'>
                <img src='images/in-icon.png' alt='social' />
              </a>
            </div>
          </Col>
        </Row>
        <p className='text-center text-light pt-4'>
          {new Date().getFullYear()} All Rights Reserved | I am (H.O.O.D)
          Helping Others Obtain Destiny™
        </p>
      </Container>
    </footer>
  )
}
