import React from 'react'
import { Sermons } from '../components/Sermons'

const worship = () => {
  return (
    <>
      <div className='bg-overlay'>
        <div className='px-4 py-5 my-5 text-center'>
          <h1 className='display-5 fw-bold'>Worship</h1>
        </div>
      </div>
      <Sermons />
    </>
  )
}

export default worship
