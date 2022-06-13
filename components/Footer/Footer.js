import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1b4965' }}>
      <Container className=' text-light py-4 pt-5'>
        <Row className='mb-5'>
          <Col sm={6} md={3}>
            <h1 id='footer__heading' className='fw-bold mb-2'>
              ABOUT THE CHURCH
            </h1>
            <p>
              We strive to help those who feel like they have no one else. I Am
              (H.O.O.D) Helping Others Obtain Destiny!
            </p>
          </Col>
          <Col sm={6} md={3}>
            <h1 id='footer__heading' className='fw-bold mb-2'>
              IMPORTANT LINKS
            </h1>
            <ul className='footer-links'>
              <li>
                <a href='/about'>About Us</a>
              </li>
              <li>
                <a href='/events'>Events</a>
              </li>
              <li>
                <a href='/worship'>Worship</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='/donation-policy'>Donation Policy</a>
              </li>
              <li>
                <a href='/contact'>Contact us</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h1 id='footer__heading' className='fw-bold mb-2'>
              LOCATION
            </h1>
            <div className='mb-3'>
              {' '}
              <div>Helping Others Obtain Destiny LLC</div>
              <div>
                1951 W 21st St <br />
                Broadview, IL 60155
                <br />
                <a href='mailto:pastorwill@thehoodchurch.org'>pastorwill@thehoodchurch.org</a>
              </div>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <h1 id='footer__heading' className='fw-bold mb-2'>
              CONNECT
            </h1>
            <div className='social-icons d-flex flex-row justify-content-between'>
              <a
                target='_blank'
                href='https://www.facebook.com/Helping-Others-Obtain-Destiny-108515418089054'>
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
        <Container
          style={{
            height: 'auto',
            margin: '0 auto',
            fontWeight: '700',
            fontSize: '.6rem'
          }}>
          <p className='text-center py-3 text-light mb-0'>
            {new Date().getFullYear()} All Rights Reserved | I am (H.O.O.D)
            Helping Others Obtain Destiny™
          </p>
        </Container>
      </Container>
    </footer>
  )
}
