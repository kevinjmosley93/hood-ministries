import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export const VertModal = props => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Body>
        <Iframe
          src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwilliam.woods.9083477%2Fvideos%2F988703954880935%2F&width=100&show_text=false&height=392&appId'
          width='100'
          height='392'
          display='initial'
          scrolling='no'
          frameborder='0'
          allowfullscreen='true'
          allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
          allowFullScreen='true'></Iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
