import React from 'react'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar
        sticky='top'
        collapseOnSelect
        expand='md'
        variant='dark'
        style={{ backgroundColor: '#1b4965', fontWeight: '700', padding: '0' }}>
        <Container className='d-flex flex-md-row'>
          <Navbar.Brand href='/'>
            <img
              style={{ objectFit: 'cover' }}
              width='150px'
              height='70px'
              alt='I AM H.O.O.D'
              src='https://i.imgur.com/QQMaJEK.png'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto text-center d-flex flex-md-row justify-content-around'>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/blog'>Blog</Nav.Link>
              <Nav.Link href='/events'>Events</Nav.Link>
              <Nav.Link href='/worship'>Worship</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <Button
                as='a'
                target='_blank'
                href='https://www.paypal.com/donate/?hosted_button_id=GE7NQ7TWYQETU'
                className='text-dark rounded'
                variant='info'
                size='lg'>
                Donate
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
