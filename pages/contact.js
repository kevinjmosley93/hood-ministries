import React from 'react'
import { Contact } from '../components/Contact'

const contact = () => {
  return (
    <>
      <div className='bg-overlay'>
        <div className='px-4 py-5 my-5 text-center'>
          <h1 className='display-5 fw-bold'>Contact Us</h1>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default contact
