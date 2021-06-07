import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

const Blog = () => {
  return (
    <Container className='px-4'>
      <h2 className='p-2 mb-4 mt-5 fw-bold lh-1 border-bottom'>Blog</h2>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='blog-grid'>
            <div className='blog-img'>
              <a href='/blog'>
                <Image
                  height={280}
                  width={350}
                  src='/prison.jpg'
                  title=''
                  alt=''
                />
              </a>
            </div>
            <div className='blog-info'>
              <h5>
                <a href='/blog'>Prison minitries are the way</a>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
              <div className='btn-bar'>
                <a href='/blog' className='px-btn-arrow'>
                  <span>Read More</span>
                  <i className='arrow'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='blog-grid'>
            <div className='blog-img'>
              <a href='/blog'>
                <Image
                  height={280}
                  width={350}
                  src='/cross.jpg'
                  title=''
                  alt=''
                />
              </a>
            </div>
            <div className='blog-info'>
              <h5>
                <a href='/blog'>God wants you to help your neighbors</a>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
              <div className='btn-bar'>
                <a href='/blog' className='px-btn-arrow'>
                  <span>Read More</span>
                  <i className='arrow'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='blog-grid'>
            <div className='blog-img'>
              <a href='/blog'>
                <Image
                  height={280}
                  width={350}
                  src='/fragile.jpg'
                  title=''
                  alt=''
                />
              </a>
            </div>
            <div className='blog-info'>
              <h5>
                <a href='/blog'>Teach the youth while they are young</a>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
              <div className='btn-bar'>
                <a href='/blog' className='px-btn-arrow'>
                  <span>Read More</span>
                  <i className='arrow'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Blog
