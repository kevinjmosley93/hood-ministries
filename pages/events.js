import React from 'react'
import { Events } from '../components/Event/Events'

const events = () => {
  return (
    <>
      <div className='bg-overlay'>
        <div className='px-4 py-5 my-5 text-center'>
          <h1 className='display-5 fw-bold'>Events</h1>
        </div>
      </div>
      <Events />
    </>
  )
}

export default events
