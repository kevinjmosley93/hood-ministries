import React from 'react'
import { Container } from 'react-bootstrap'

export const Contact = () => {
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
                <i className='fa fa-home'></i> Contact Info
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
                <form>
                  <div className='form-group'>
                    <label for='name'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      aria-describedby='emailHelp'
                      placeholder='Enter name'
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label for='email'>Email address</label>
                    <input
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
                    <label for='message'>Message</label>
                    <textarea
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
