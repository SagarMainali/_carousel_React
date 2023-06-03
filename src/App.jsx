import React, { useRef } from 'react'
import './style.css'
import CarouselCss from './CarouselCSS'
import CarouselJs from './CarouselJs'
import CarouselAuto from './CarouselAuto'

const App = () => {
  let index, carouselItems = []

  for (index = 0; index < 15; index++) {
    carouselItems.push(`Item_${index + 1}`)
  }

  return (
    <>
      <CarouselCss carouselItems={carouselItems} />
      <CarouselJs carouselItems={carouselItems} />
      <CarouselAuto carouselItems={carouselItems} />
    </>
  )
}

export default App