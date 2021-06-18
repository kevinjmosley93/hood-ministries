import React from 'react'
import Image from 'next/image'

export const ImgText = () => {
  return (
    <div className='container my-5  px-4'>
      <h2 className=' fw-bold lh-1 p-3 mb-3 border-bottom'>Our Purpose</h2>
      <div className='row justify-content-between align-items-center'>
        <div className='col-md-7 g-2'>
          <p className='lead text-center'>
            A non for profit, charitable, religious organization for the
            purposes of the people to provide services to help the poor, needy,
            middle-class, and broken families in neighborhoods around the world.
            With different fundraisers and strategies inspired by God, we intend
            to help create more public buildings or works, to help eliminate
            discrimination, defending human and civil rights, and promote the
            development of the arts amongst the individual people, public and
            private companies. We also plan on providing alternative
            educational, scientific, literary, business, and religious programs
            and materials using volunteers, members and staff to support Helping
            Others Obtain Destiny.
          </p>
        </div>
        <div className='col-md-5 '>
          <Image
            style={{ objectFit: 'cover' }}
            src='/will.jpg'
            className='rounded'
            alt='pastor-will-img'
            width={500}
            height={470}
          />
        </div>
      </div>
    </div>
  )
}
