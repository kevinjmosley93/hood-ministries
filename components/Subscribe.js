import React from 'react'
import { Button, Card, Col, Form, Row, Alert, Container } from 'react-bootstrap'

export const Subscribe = () => {
  return (
    <>
      <Container className='mx-auto mb-5 row px-4'>
        <h2 className='p-2 mb-4 mt-5 fw-bold lh-1 border-bottom'>Subscribe</h2>
        <div className='col-xl-10 w-100'>
          <div className='card shadow-lg border-0'>
            <div className='card-body p-0'>
              <div className='row no-gutters'>
                <div className='col-lg-6'>
                  <div className='p-5'>
                    <h6 className='h-5 mb-3'>Join the I am H.O.O.D Familiy</h6>
                    <Form>
                      <Form.Group className='form-group'>
                        <Form.Label htmlFor='yourName'>Your name</Form.Label>
                        <Form.Control
                          type='text'
                          className='form-control'
                          id='yourName'
                        />
                      </Form.Group>
                      <Form.Group className='form-group'>
                        <Form.Label htmlFor='exampleInputEmail1'>
                          Email address
                        </Form.Label>
                        <Form.Control type='email' className='form-control' />
                      </Form.Group>
                      <button type='submit' className='btn w-100 mt-5'>
                        Join
                      </button>
                    </Form>
                  </div>
                </div>
                <div className='col-lg-6 d-none d-lg-inline-block'>
                  <div className='account-block rounded-right'>
                    <div className='overlay rounded-right'></div>
                    <div className='account-testimonial'>
                      <h4 className='text-white mb-4'>Scripture of the Day!</h4>
                      <p className='lead text-white'>
                        <div id='dailyVersesWrapper'></div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
