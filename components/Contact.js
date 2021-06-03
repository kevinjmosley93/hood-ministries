import React from 'react'
import { Container } from 'react-bootstrap'

export const Contact = () => {
  return (
    <>
      <Container className='my-5'>
        <div class='row'>
          <div class='col-12 col-sm-4'>
            <div class='card bg-light mb-3'>
              <div
                style={{ backgroundColor: '#1B4965' }}
                class='card-header text-white text-uppercase'>
                <i class='fa fa-home'></i> Address
              </div>
              <div class='card-body'>
                <p>1951 W 21st St</p>
                <p>Broadview, IL 60155</p>
                <p>Email : contact@helpingthehood.com</p>
              </div>
            </div>
          </div>
          <div class='col'>
            <div class='card'>
              <div
                style={{ backgroundColor: '#1B4965' }}
                class='card-header text-white'>
                <i class='fa fa-envelope'></i> Contact us.
              </div>
              <div class='card-body'>
                <form>
                  <div class='form-group'>
                    <label for='name'>Name</label>
                    <input
                      type='text'
                      class='form-control'
                      id='name'
                      aria-describedby='emailHelp'
                      placeholder='Enter name'
                      required
                    />
                  </div>
                  <div class='form-group'>
                    <label for='email'>Email address</label>
                    <input
                      type='email'
                      class='form-control'
                      id='email'
                      aria-describedby='emailHelp'
                      placeholder='Enter email'
                      required
                    />
                    <small id='emailHelp' class='form-text text-muted'>
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class='form-group'>
                    <label for='message'>Message</label>
                    <textarea
                      class='form-control'
                      id='message'
                      rows='6'
                      required></textarea>
                  </div>
                  <div class='mx-auto'>
                    <button
                      type='submit'
                      class='btn btn-primary text-dark text-right mt-3'>
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
