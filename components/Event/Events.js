import React from 'react'
import { Button, Container } from 'react-bootstrap'

export const Events = () => {
  return (
    <Container>
      <h2 className='pb-2 mb-4 fw-bold lh-1 border-bottom '>Recent Events</h2>
      <div className='row mb-2'>
        <div className='col-md-6'>
          <div
            className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative'
            style={{ height: '150px' }}>
            <div className='col p-4 d-flex flex-column position-static'>
              <h3 className='mb-0'>Sunday Service</h3>
              <div className='mb-1 text-muted'>Every 1st, 2nd & 4th Sunday</div>
              <p className='card-text mb-auto'>
                Join us every Sunday for worship & reading of god's word.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div
            className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative'
            style={{ height: '150px' }}>
            <div className='col p-4 d-flex flex-column position-static'>
              <h3 className='mb-0'>Columbus OH Youth Explosion</h3>
              <div className='mb-1 text-muted'>July 10th 2021</div>
              <p className='mb-auto'>
                {' '}
                Join us as we share a word for the youth and bring young lives
                to Christ!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button
        as='a'
        href='/events'
        variant='info'
        size='sm'
        style={{
          margin: '0 auto',
          display: 'inline-block'
        }}>
        View All Events
      </Button>
    </Container>
  )
}
