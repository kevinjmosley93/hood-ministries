import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

const Blog = () => {
  return (
    <Container>
      <h2 className='p-2 mb-4 mt-5 fw-bold lh-1 shadow-sm '>Blog</h2>
      <div class='row'>
        <div class='col-lg-4'>
          <div class='blog-grid'>
            <div class='blog-img'>
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
            <div class='blog-info'>
              <h5>
                <a href='/blog'>Prison minitries are the way</a>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
              <div class='btn-bar'>
                <a href='/blog' class='px-btn-arrow'>
                  <span>Read More</span>
                  <i class='arrow'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class='col-lg-4'>
          <div class='blog-grid'>
            <div class='blog-img'>
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
            <div class='blog-info'>
              <h5>
                <a href='/blog'>God wants you to help your neighbors</a>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
              <div class='btn-bar'>
                <a href='/blog' class='px-btn-arrow'>
                  <span>Read More</span>
                  <i class='arrow'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class='col-lg-4'>
          <div class='blog-grid'>
            <div class='blog-img'>
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
            <div class='blog-info'>
              <h5>
                <a href='/blog'>Teach the youth while they are young</a>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
              <div class='btn-bar'>
                <a href='/blog' class='px-btn-arrow'>
                  <span>Read More</span>
                  <i class='arrow'></i>
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
