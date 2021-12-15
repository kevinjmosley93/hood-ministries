import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

export const Contact = () => {
  const [formInput, setFormInput] = useState({
    form: {
      name: '',
      email: '',
      phone: '',
      message: ''
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
    const { name, email, message } = formInput.form
    const resObj = {
      name,
      email,
      phone,
      message
    }
    const res = await fetch(`${window.location.origin}/api/mail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resObj)
    })
    const { status } = await res.json()
    if (status === 'ok' || status === 202 || status === 200) {
      setSubmitted(true)
    }

    if (submitted) {
      setFormInput({
        form: {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      })
      console.log({ formInput, submitted })
    }
  }

  const {
    form: { name, email, phone, message }
  } = formInput
  return (
    <>
      <Container className='my-5'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card mb-3'>
              <div
                style={{ backgroundColor: '#1B4965' }}
                className='card-header text-white text-uppercase'>
                <i className='fa fa-home'></i> Address
              </div>
              <div className='card-body'>
                <p>1951 W 21st St</p>
                <p>Broadview, IL 60155</p>
              </div>
            </div>
            <div className='card mb-3'>
              <div
                style={{ backgroundColor: '#1B4965' }}
                className='card-header text-white text-uppercase'>
                <i className='fa fa-phone'></i> Contact Info
              </div>
              <div className='card-body'>
                <p>Email: contact@helpingthehood.com</p>

                <p>Phone #: (708) 998 - 6176</p>
              </div>
            </div>
          </div>

          <div className='col-md-8'>
            <div className='card'>
              <div
                style={{ backgroundColor: '#1B4965' }}
                className='card-header text-white'>
                <i className='fa fa-envelope'></i> Contact us.
              </div>
              <div className='card-body'>
                <form onSubmit={handleForm}>
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                      value={name}
                      onChange={handleChange}
                      name='name'
                      type='text'
                      className='form-control'
                      id='name'
                      aria-describedby='emailHelp'
                      placeholder='Enter name'
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input
                      name='phone'
                      value={phone}
                      onChange={handleChange}
                      type='tel'
                      pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                      className='form-control'
                      id='phone'
                      aria-describedby='emailHelp'
                      placeholder='Enter phone number'
                      required
                    />
                    <small id='emailHelp' className='form-text text-muted'>
                      *Use this format: 123-456-7890
                    </small>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email address</label>
                    <input
                      value={email}
                      onChange={handleChange}
                      name='email'
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
                    <label htmlFor='message'>Message</label>
                    <textarea
                      value={message}
                      onChange={handleChange}
                      name='message'
                      className='form-control'
                      id='message'
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
