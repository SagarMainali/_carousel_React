import React, { useRef } from 'react'
import './style.css'
import CarouselCss from './CarouselCSS'
import CarouselJs from './CarouselJs'
import CarouselAuto from './CarouselAuto'

const App = () => {

  const carousel_container = useRef()
  const carousel_item = useRef()

  let index, carouselItems = []

  for (index = 0; index < 15; index++) {
    carouselItems.push(`Item_${index + 1}`)
  }

  function slider(direction) {

    const container = carousel_container.current
    const scroll_position = container.scrollLeft
    const pxToScroll_fixed = carousel_item.current.offsetWidth + 16

    let pxToScroll_dynamic

    if (scroll_position % pxToScroll_fixed !== 0) {
      const times = parseInt(scroll_position / pxToScroll_fixed) + 1
      if (direction === 'right') {
        if ((scroll_position + container.offsetWidth + 5) >= container.scrollWidth) {
          pxToScroll_dynamic = 0
        } else {
          pxToScroll_dynamic = scroll_position + ((pxToScroll_fixed * times) - scroll_position)
        }
      }
      else {
        const unscrolled_px = (pxToScroll_fixed * times) - scroll_position
        const scrolled_px = pxToScroll_fixed - unscrolled_px
        pxToScroll_dynamic = scroll_position - scrolled_px
      }
    }

    else {
      pxToScroll_dynamic = direction === 'right'
        ? scroll_position + pxToScroll_fixed
        : scroll_position - pxToScroll_fixed
    }

    container.scrollTo({
      left: pxToScroll_dynamic,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <CarouselCss carouselItems={carouselItems} />
      <CarouselJs carouselItems={carouselItems} slider={slider} carousel_container={carousel_container} carousel_item={carousel_item} />
      <CarouselAuto carouselItems={carouselItems} carousel_container={carousel_container} carousel_item={carousel_item} />
    </>
  )
}

export default App