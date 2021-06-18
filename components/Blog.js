import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
const blogPosts = [
  {
    title: 'Prison ministries are the easiest way to help',
    img: '/prison.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
    author: 'I Am H.O.O.D',
    createdAt: 'July 18th'
  },
  {
    title: 'God wants you to help your neighbors',
    img: '/cross.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
    author: 'I Am H.O.O.D',
    createdAt: 'July 18th'
  },
  {
    title: 'Teach the youth while they are young',
    img: '/fragile.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
    author: 'I Am H.O.O.D',
    createdAt: 'July 18th'
  }
]

const Blog = () => {
  return (
    <Container className='px-4'>
      <h2 className='p-2 mb-4 mt-5 fw-bold lh-1 border-bottom'>Blog</h2>
      <div style={{ margin: '0 auto' }} className='row'>
        {blogPosts.map(({ title, img, body, author, createdAt }, idx) => (
          <div key={idx} className='col-lg-4'>
            <div className='blog-grid'>
              <div className='blog-img'>
                <a href='/blog'>
                  <Image height={280} width={350} src={img} alt='blog-img' />
                </a>
              </div>
              <div className='blog-info'>
                <h5>
                  <a href='/blog'>{title}</a>
                </h5>
                <p>{body}</p>
                <div className='btn-bar'>
                  <a href='/blog' className='px-btn-arrow'>
                    <span>Read More</span>
                    <i className='arrow'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Blog
