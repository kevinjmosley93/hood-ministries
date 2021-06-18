import React from 'react'
import { Container } from 'react-bootstrap'
import { VertModal } from './Modal'
import sermon from '../public/sermon.mp4'
import sermon2 from '../public/sermon2.mp4'
import sermon3 from '../public/sermon3.mp4'
import sermon4 from '../public/sermon4.mp4'

export const Sermons = () => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Container>
      <h3 className='border-bottom pb-2 mt-3'>Sermons & Outreach</h3>

      {/* <VertModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      <div className='album py-5'>
        <div className='container p-0'>
          <div className='row justify-content-between container'>
            <div className='col-md-3'>
              <video style={{ width: '100%', height: '100%' }} controls>
                <source
                  style={{ width: '100%', height: '100%' }}
                  src={sermon}
                  type='video/mp4'
                />
              </video>
            </div>
            <div className='col-md-3'>
              <video style={{ width: '100%', height: '100%' }} controls>
                <source
                  style={{ width: '100%', height: '100%' }}
                  src={sermon4}
                  type='video/mp4'
                />
              </video>
            </div>

            <div className='col-md-3'>
              <video style={{ width: '100%', height: '100%' }} controls>
                <source
                  style={{ width: '100%', height: '100%' }}
                  src={sermon3}
                  type='video/mp4'
                />
              </video>
            </div>
            <div className='col-md-3'>
              <video style={{ width: '100%', height: '100%' }} controls>
                <source
                  style={{ width: '100%', height: '100%' }}
                  src={sermon2}
                  type='video/mp4'
                />
              </video>
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
