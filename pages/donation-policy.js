import React from 'react'

const donationPolicy = () => {
  return (
    <>
      <div className='bg-overlay'>
        <div className='px-4 py-5 my-5 text-center'>
          <h1 className='display-5 fw-bold'>Donation Policy</h1>
        </div>
      </div>
      <div className='text-center my-3 container'>
        <p>
          <span>Donation &amp; Gift Acceptance Policy</span>
          <br />
          <br />
          <br />
          <span>
            1. I Am (H.O.O.D) Helping Others Obtain Destiny solicits and accepts
            gifts that are consistent with its mission.
          </span>
          <br />
          <br />
          <span>
            2. Donations will generally be accepted from individuals,
            partnerships, corporations,
          </span>
          <br />
          <span>
            foundations, government agencies, or other entities, without
            limitations.
          </span>
          <br />
          <br />
          <span>
            3. In the course of its regular fundraising activities, Helping
            Other Obtain Destiny will accept donations of money, real property,
            personal property, stock, and in-kind services.
          </span>
          <br />
          <br />
          <span>
            4. Certain types of gifts must be reviewed prior to acceptance due
            to the special liabilities they
          </span>
          <br />
          <span>
            may pose for Helping Other Obtain Destiny. Examples of gifts which
            will be subject to review
          </span>
          <br />
          <span>
            include gifts of real property, gifts of personal property, and
            gifts of securities. 
            <br />
            <br />
          </span>
        </p>
        <p>
          YOUR CHARITABLE DONATION IS TAX DEDUCTIBLE, PLEASE KEEP YOUR DONATION
          RECEIPT FOR YOUR ACCOUNTANT TO REVIEW! 
        </p>
        <a
          className='btn d-block'
          target='_blank'
          href='https://www.paypal.com/donate?hosted_button_id=GE7NQ7TWYQETU'
          rel='noopener noreferrer'>
          Donate
        </a>
      </div>
    </>
  )
}

export default donationPolicy
