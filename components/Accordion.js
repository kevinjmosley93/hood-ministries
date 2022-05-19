import React, { useState } from 'react'

const Accordion = ({  title, body, id }) => {
    const [expanded, setExpanded] = useState(false)
  return (
    <article className='question border-bottom'>
    <header
      onClick={() => {
        setExpanded(!expanded)
        console.log({ expanded })
      }}>
      <h4 className='question-title'>{title}</h4>
      <span className='button'>
        {expanded ? (
          <i className='fa fa-minus-circle'></i>
        ) : (
          <i className='fa fa-plus-circle'></i>
        )}
      </span>
    </header>
    {expanded && <p>{body}</p>}
  </article>
  )
}

export default Accordion