import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

export const EventPrev = () => {
  return (
    <Container>
      <Card
        className='shadow-lg mt-4'
        style={{
          height: '140px'
        }}>
        <Card.Body>
          <Card.Subtitle style={{ fontWeight: '700' }}>
            Upcoming Event
          </Card.Subtitle>
          <div className='d-flex flex-row pt-4'>
            <Card.Title
              style={{
                fontSize: '1rem',
                paddingRight: '15px'
              }}>
              1st Annual Men's Conference <br /> December 18th, 2021 - 6:00pm at
              Hyatt Hyde Park 5225 S. Harper St. Chicago, IL 60615{' '}
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
    </Container>
  )
}
