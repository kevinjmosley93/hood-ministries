import React from 'react'
import { Button, Container } from 'react-bootstrap'

export const Hero = () => {
  return (
    <div className='bg-overlay'>
      <Container>
        <div className='px-4 py-5 my-5 text-center'>
          <h1 className='display-5 fw-bold mb-2'>
            I Am (H.O.O.D) Helping Others Obtain Destiny
          </h1>
          <div className='col-lg-6 mx-auto'>
            <p>
              We want to help any and everyone in the community find their
              destiny.
            </p>
            <div className='d-grid gap-2 d-sm-flex mt-3 justify-content-sm-center'>
              <Button
                as='a'
                variant='info'
                href='/about'
                className=' btn-lg px-4 text-dark gap-3'>
                Our Why
              </Button>
              <Button
                as='a'
                variant='info'
                target='_blank'
                href='https://www.paypal.com/donate/?hosted_button_id=GE7NQ7TWYQETU'
                className=' btn-lg text-dark px-4'>
                Donate
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
