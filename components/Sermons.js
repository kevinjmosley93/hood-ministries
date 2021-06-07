import React from 'react'
import { Container } from 'react-bootstrap'
import { VertModal } from './Modal'

export const Sermons = () => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Container>
      <h3 className='border-bottom pb-2 mt-3'>Sermons & Outreach</h3>

      {/* <VertModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      <div className='album py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card mb-4 box-shadow'>
                <img
                  className='card-img-top'
                  src='http://placehold.jp/150x100.png'
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button
                        type='button'
                        onClick={() => setModalShow(true)}
                        className='btn btn-sm btn-info'>
                        View
                      </button>
                    </div>
                    <small className='text-muted'>9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card mb-4 box-shadow'>
                <img
                  className='card-img-top'
                  src='http://placehold.jp/150x100.png'
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button type='button' className='btn btn-sm btn-info'>
                        View
                      </button>
                    </div>
                    <small className='text-muted'>9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card mb-4 box-shadow'>
                <img
                  className='card-img-top'
                  src='http://placehold.jp/150x100.png'
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button type='button' className='btn btn-sm btn-info'>
                        View
                      </button>
                    </div>
                    <small className='text-muted'>9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card mb-4 box-shadow'>
                <img
                  className='card-img-top'
                  src='http://placehold.jp/150x100.png'
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button type='button' className='btn btn-sm btn-info'>
                        View
                      </button>
                    </div>
                    <small className='text-muted'>9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card mb-4 box-shadow'>
                <img
                  className='card-img-top'
                  src='http://placehold.jp/150x100.png'
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button type='button' className='btn btn-sm btn-info'>
                        View
                      </button>
                    </div>
                    <small className='text-muted'>9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card mb-4 box-shadow'>
                <img
                  className='card-img-top'
                  src='http://placehold.jp/150x100.png'
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button type='button' className='btn btn-sm btn-info'>
                        View
                      </button>
                    </div>
                    <small className='text-muted'>9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card mb-4 box-shadow'>
                <img
                  className='card-img-top'
                  src='http://placehold.jp/150x100.png'
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button type='button' className='btn btn-sm btn-info'>
                        View
                      </button>
                    </div>
                    <small className='text-muted'>9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card mb-4 box-shadow'>
                <img
                  className='card-img-top'
                  src='http://placehold.jp/150x100.png'
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button type='button' className='btn btn-sm btn-info'>
                        View
                      </button>
                    </div>
                    <small className='text-muted'>9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card mb-4 box-shadow'>
                <img
                  className='card-img-top'
                  src='http://placehold.jp/150x100.png'
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button type='button' className='btn btn-sm btn-info'>
                        View
                      </button>
                    </div>
                    <small className='text-muted'>9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='d-flex flex-row justify-content-around mx-auto my-3'>
        <a className='btn btn-info shadow-lg'>Last Page</a>
        <a className='btn btn-info shadow-lg'>Next Page</a>
      </div> */}
    </Container>
  )
}
