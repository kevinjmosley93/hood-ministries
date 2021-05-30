import React from 'react'
import { Hero } from './Hero'
import { EventPrev } from './Event/EventPrev'
import { Events } from './Event/Events'
import { ImgText } from './ImgText'
import { Services } from './Services'
import { Sermons } from './Sermons'
import { Subscribe } from './Subscribe'

import Blog from './Blog'

export default function Content() {
  return (
    <>
      <Hero />
      <EventPrev />
      <Events />
      <ImgText />
      <Services />
      <Blog />
      <Subscribe />
    </>
  )
}
