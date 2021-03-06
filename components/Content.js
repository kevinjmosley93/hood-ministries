import React from 'react'
import { Hero } from './Hero'
import { EventPrev } from './Event/EventPrev'
import { ImgText } from './ImgText'
import { Services } from './Services'
import { Subscribe } from './Subscribe'
import { Team } from './Team'

import Blog from './Blog'

export default function Content() {
  return (
    <>
      <Hero />
      <EventPrev />
      <ImgText />
      <Services />
      <Team />
      <Subscribe />
    </>
  )
}
