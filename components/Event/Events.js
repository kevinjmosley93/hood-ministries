import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'

export const Events = () => {
  const [formInput, setFormInput] = useState({
    form: {
      name: '',
      email: '',
      details: ''
    }
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setFormInput(currState => {
      const updatedForm = { ...currState.form, ...updatedField }
      return { form: updatedForm }
    })
  }
  const handleForm = async e => {
    e.preventDefault()
    const { name, email, details } = formInput.form
    const resObj = {
      name,
      email,
      message: details
    }
    const res = await fetch(`${window.location.origin}/api/mail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resObj)
    })

    const { status } = await res.json()
    if (status === 'ok') {
      setSubmitted(true)
    }

    if (submitted) {
      setFormInput({
        form: {
          name: '',
          email: '',
          details: ''
        }
      })
      console.log({ formInput })
    }
    console.log({ submitted })
  }

  const {
    form: { name, email, details }
  } = formInput

  return (
    <>
      <Container className='mb-3'>
        <div className='row g-5 mt-3'>
          <div className='col-md-4'>
            <div className='position-sticky pt-5' style={{ top: '2rem' }}>
              <div className='p-4 mb-3 bg-light rounded shadow-lg'>
                <h4 className='fst-italic'>Events</h4>
                <p className='mb-0'>
                  We are constantly looking for new events. Send us a message so
                  we can host your next event.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <h3 className='border-bottom pb-2'>Upcoming Events</h3>
            <div className='col mt-3'>
              <div className='row g-0 flex-md-row mb-4 rounded shadow-lg h-md-250'>
                <Card className='col h-auto p-4 d-flex flex-column'>
                  <Card.Title className='mb-3'>Sunday Service</Card.Title>
                  <Card.Subtitle className='mb-1 text-muted'>
                    Every 1st, 2nd & 4th Sunday
                  </Card.Subtitle>
                  <Card.Text className='card-text mb-auto'>
                    Join us every Sunday for worship & reading of god's word.
                  </Card.Text>
                </Card>
              </div>
            </div>
            <div className='col mt-3'>
              <div className='row g-0 flex-md-row mb-4 shadow-lg h-md-250'>
                <Card className='col p-4 d-flex flex-column'>
                  <Card.Title className='mb-3'>
                    Columbus OH Youth Explosion
                  </Card.Title>
                  <Card.Subtitle className='mb-1 text-muted'>
                    July 10th 2021
                  </Card.Subtitle>
                  <Card.Text className='mb-auto'>
                    {' '}
                    Join us as we share a word for the youth and bring young
                    lives to Christ!
                  </Card.Text>
                </Card>
              </div>
            </div>
            <div className='card shadow-lg'>
              <div
                style={{ backgroundColor: '#1b4965' }}
                className='card-header text-white'>
                <i className='fa fa-envelope'></i> Contact us.
              </div>
              <div className='card-body'>
                <form onSubmit={handleForm}>
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                      name='name'
                      value={name}
                      onChange={handleChange}
                      type='text'
                      className='form-control'
                      id='name'
                      aria-describedby='emailHelp'
                      placeholder='Enter name'
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email address</label>
                    <input
                      value={email}
                      name='email'
                      onChange={handleChange}
                      type='email'
                      className='form-control'
                      id='email'
                      aria-describedby='emailHelp'
                      placeholder='Enter email'
                      required
                    />
                    <small id='emailHelp' className='form-text text-muted'>
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='details'>Event Details</label>
                    <textarea
                      name='details'
                      value={details}
                      onChange={handleChange}
                      className='form-control'
                      id='details'
                      rows='6'
                      required></textarea>
                  </div>
                  <div className='mx-auto'>
                    <button
                      type='submit'
                      className='btn btn-primary text-dark text-right mt-3'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
