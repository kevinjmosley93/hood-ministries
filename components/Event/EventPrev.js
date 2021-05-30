import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const EventPrev = () => {
  return (
    <div>
      <Card style={{ height: '160px' }}>
        <Card.Body>
          <Card.Subtitle>Upcoming Event</Card.Subtitle>
          <div className='d-flex flex-row pt-4'>
            <Card.Title>
              Youth Explosion - July 10th, 2021 | Columbus, OH{' '}
            </Card.Title>
            <Button
              as='a'
              href='/events'
              variant='info'
              size='md'
              className='ms-auto'>
              Event Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
