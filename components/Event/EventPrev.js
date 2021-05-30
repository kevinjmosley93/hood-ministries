import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const EventPrev = () => {
  return (
    <div>
      <Card
        style={{
          height: '140px'
        }}>
        <Card.Body>
          <Card.Subtitle style={{ fontWeight: '700' }}>
            Upcoming Event
          </Card.Subtitle>
          <div className='d-flex flex-row pt-4'>
            <Card.Title style={{ fontSize: '1rem', paddingLeft: '18px' }}>
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