import { Container } from 'react-bootstrap'
import { FaPrayingHands } from 'react-icons/fa'
import Image from 'next/image'

export const Services = () => {
  return (
    <>
      <Container className='px-4' id='hanging-icons'>
        <h2 className='pb-2  fw-bold lh-1 border-bottom'>Our Services</h2>
        <section className='row'>
          <div className='col-md-5'>
            <Image
              className='rounded pt-3'
              style={{ objectFit: 'cover' }}
              height={310}
              width={500}
              src='/services.jpg'
              alt='services-img'
            />
          </div>
          <div className='col-md-7 g-5'>
            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingOne'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'>
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'>
                  <div className='accordion-body'></div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingTwo'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'>
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo'
                  data-bs-parent='#accordionExample'>
                  <div className='accordion-body'>
                    <strong>This is the second item's accordion body.</strong>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingThree'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'>
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree'
                  data-bs-parent='#accordionExample'>
                  <div className='accordion-body'>
                    <strong>This is the third item's accordion body.</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
