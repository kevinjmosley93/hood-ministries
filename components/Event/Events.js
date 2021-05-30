import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

export const Events = () => {
  return (
    <Container>
      <h2 className='p-2 mb-4 mt-5 fw-bold lh-1 shadow-sm '>Recent Events</h2>
      <div className='row mb-2'>
        <div className='col-md-6'>
          <div
            className='row g-0 flex-md-row mb-4 shadow-lg '
            style={{ height: '150px' }}>
            <Card className='col p-4 d-flex flex-column position-static'>
              <Card.Title className='mb-0'>Sunday Service</Card.Title>
              <Card.Subtitle className='mb-1 text-muted'>
                Every 1st, 2nd & 4th Sunday
              </Card.Subtitle>
              <Card.Text className='card-text mb-auto'>
                Join us every Sunday for worship & reading of god's word.
              </Card.Text>
            </Card>
          </div>
        </div>
        <div className='col-md-6'>
          <div
            className='row g-0 flex-md-row mb-4 shadow-lg'
            style={{ height: '150px' }}>
            <Card className='col p-4 d-flex flex-column position-static'>
              <Card.Title className='mb-0'>
                Columbus OH Youth Explosion
              </Card.Title>
              <Card.Subtitle className='mb-1 text-muted'>
                July 10th 2021
              </Card.Subtitle>
              <Card.Text className='mb-auto'>
                {' '}
                Join us as we share a word for the youth and bring young lives
                to Christ!
              </Card.Text>
            </Card>
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
