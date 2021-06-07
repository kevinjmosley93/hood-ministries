import React from 'react'
import { Card, Container } from 'react-bootstrap'

const index = () => {
  return (
    <>
      <div className='bg-overlay'>
        <div className='px-4 py-5 my-5 text-center'>
          <h1 className='display-5 fw-bold'>Blog</h1>
        </div>
      </div>
      <Container className='mb-3'>
        <div className='row g-5 mt-3'>
          <div className='col-md-4'>
            <div className='position-sticky pt-2' style={{ top: '2rem' }}>
              <div className='p-4 mb-3 bg-light rounded shadow-lg'>
                <h4 className='fst-italic'>Blog</h4>
                <p className='mb-0'>
                  All of our blog posts are a reflection of my thoughts on that
                  particular day. I hope they can be a blessing to you and
                  answer questions you may have.
                </p>
              </div>

              <div className='p-4 shadow-lg mt-3'>
                <h4 className='fst-italic'>Archives</h4>
                <ol className='list-unstyled mb-0'>
                  <li>
                    <a href='#'>March 2021</a>
                  </li>
                  <li>
                    <a href='#'>February 2021</a>
                  </li>
                  <li>
                    <a href='#'>January 2021</a>
                  </li>
                  <li>
                    <a href='#'>December 2020</a>
                  </li>
                  <li>
                    <a href='#'>November 2020</a>
                  </li>
                  <li>
                    <a href='#'>October 2020</a>
                  </li>
                  <li>
                    <a href='#'>September 2020</a>
                  </li>
                  <li>
                    <a href='#'>August 2020</a>
                  </li>
                  <li>
                    <a href='#'>July 2020</a>
                  </li>
                  <li>
                    <a href='#'>June 2020</a>
                  </li>
                  <li>
                    <a href='#'>May 2020</a>
                  </li>
                  <li>
                    <a href='#'>April 2020</a>
                  </li>
                </ol>
              </div>
              {/* 
              <div className='p-4 shadow-lg mt-3'>
                <h4 className='fst-italic'>Elsewhere</h4>
                <ol className='list-unstyled'>
                  <li>
                    <a href='#'>GitHub</a>
                  </li>
                  <li>
                    <a href='#'>Twitter</a>
                  </li>
                  <li>
                    <a href='#'>Facebook</a>
                  </li>
                </ol>
              </div> */}
            </div>
          </div>
          <div className='col-md-8'>
            <h3 className='border-bottom pb-2'>Latest Posts</h3>

            <div className='row mt-5'>
              <div className='col-md-6'>
                <div className='row g-0 border rounded flex-md-row mb-4 shadow-lg h-md-250'>
                  <div className='col p-4 d-flex flex-column'>
                    <h3 className='mb-0'>Featured post</h3>
                    <div className='mb-1 text-muted'>Nov 12</div>
                    <p className='card-text mb-auto'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod.
                    </p>
                    <a href='#' className='stretched-link'>
                      Continue reading
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row g-0 border rounded flex-md-row mb-4 shadow-lg h-md-250 '>
                  <div className='col p-4'>
                    <h3 className='mb-0'>Featured post</h3>
                    <div className='mb-1 text-muted'>Nov 11</div>
                    <p className='mb-auto'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod.
                    </p>
                    <a href='#' className='stretched-link'>
                      Continue reading
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-3'>
              <div className='col mt-3'>
                <div className='row g-0 border rounded flex-md-row mb-4 shadow-lg h-md-250'>
                  <div className='col p-4 d-flex flex-column'>
                    <h3 className='mb-0'>Post title</h3>
                    <div className='mb-1 text-muted'>Nov 12</div>
                    <p className='card-text mb-auto'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod.
                    </p>
                    <a href='#' className='stretched-link'>
                      Continue reading
                    </a>
                  </div>
                </div>
              </div>
              <div className='col mt-3'>
                <div className='row g-0 border rounded flex-md-row mb-4 shadow-lg h-md-250 '>
                  <div className='col p-4'>
                    <h3 className='mb-0'>Post title</h3>
                    <div className='mb-1 text-muted'>Nov 11</div>
                    <p className='mb-auto'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod.
                    </p>
                    <a href='#' className='stretched-link'>
                      Continue reading
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className='d-flex flex-row justify-content-around mx-auto'>
                <a className='btn btn-info shadow-lg'>Last Page</a>
                <a className='btn btn-info shadow-lg'>Next Page</a>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default index
