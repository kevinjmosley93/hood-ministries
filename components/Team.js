import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

const teamMembers = [
  {
    img: '/willhood.png',
    name: 'Will',
    title: 'Founding Pastor',
    bio: 'Used his experiences growing up on the Westside of Chicago to become a powerful youth leader and community advocate.'
  },
  {
    img: '/tawana.png',
    name: 'Tawana',
    title: 'Overseer',
    bio: 'Over 10yrs of experience as a minister and pastor of Tree of Life Intl Minitries. Travels state to state organizing events to build communities.'
  },
  {
    img: '/kev.jpg',
    name: 'Kevin',
    title: 'Technology Consultant',
    bio: 'U.S. Navy veteran & Software Engineer for a prison education start-up. He helps I am H.O.O.D build their digtal presence and save souls in the process.'
  }
]

export const Team = () => {
  return (
    <>
      <Container>
        <h2 className='pb-2  fw-bold lh-1 border-bottom mb-5'>Meet Our Team</h2>
        <section className='testimonials text-center'>
          <div className='row align-items-center'>
            {teamMembers.map(({ name, title, bio, img }, idx) => (
              <div key={idx} className='col-lg-4'>
                <div className='testimonial-item mx-auto mb-5 mb-lg-0'>
                  <img
                    style={{ objectFit: 'cover' }}
                    width={150}
                    height={150}
                    className='rounded-circle mb-3'
                    src={img}
                    alt='H.O.O.D Team Member'
                  />
                  <h3>{name}</h3>
                  <small className='fw-bold'>{title}</small>
                  <p
                    style={{ lineHeight: '2rem' }}
                    className='font-weight-light'>
                    {bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  )
}
