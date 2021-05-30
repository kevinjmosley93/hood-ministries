import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-dark  text-light py-4 mt-auto'>
      <Container>
        <Row className='mb-5'>
          <Col sm={6} md={3}>
            <h1 classname='fw-bold mb-5'>ABOUT THE CHURCH</h1>
            <p>
              We strive to help those who feel like they have no one else. I Am
              (H.O.O.D) Helping Others Obtain Destiny!
            </p>
          </Col>
          <Col sm={6} md={3}>
            <h1 classname='fw-bold mb-5'>IMPORTANT LINKS</h1>
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
            <h1 classname='fw-bold mb-5'>LOCATION</h1>
            <div>
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
            </div>
          </Col>
          <Col sm={6} md={3}>
            <h1 classname='fw-bold mb-5'>CONNECT</h1>
            <div className='social-icons d-flex flex-row justify-content-between'>
              <a href='#'>
                <FaFacebookF />
              </a>{' '}
              <a
                target='_blank'
                href='https://www.instagram.com/helpingthehood'>
                <FaInstagram />
              </a>{' '}
              <a target='_blank' href='https://twitter.com/helpingthehood'>
                <FaTwitter />
              </a>
              <a href='#'>
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
        <p className='text-center text-light pt-6 mb-0'>
          {new Date().getFullYear()} All Rights Reserved | I am (H.O.O.D)
          Helping Others Obtain Destiny™
        </p>
      </Container>
    </footer>
  )
}
