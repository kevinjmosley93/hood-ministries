import React from 'react'

export const ImgText = () => {
  return (
    <div className='container  px-4'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-3'>
        <div className='col-10 col-sm-8 col-md-6'>
          <img
            src='willmoms.png'
            className='d-block mx-lg-auto img-fluid'
            alt='Bootstrap Themes'
            width='500'
            height='300'
            loading='lazy'
          />
        </div>
        <div className='col-md-6'>
          <h2 className=' fw-bold lh-1 p-3 mb-3 shadow-sm'>Our Purpose</h2>
          <p className='lead'>
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
      </div>
    </div>
  )
}
