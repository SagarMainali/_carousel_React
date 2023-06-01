import React, { useRef } from 'react'
import './style.css'

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
      <h3>With CSS</h3>
      <div className='carousel-container'>
        {carouselItems.map((element, index) =>
          <div key={index} className='carousel-item'>
            {element}
          </div>
        )
        }
      </div>

      <h3>With JS</h3>
      <div className="carousel-container-main">
        <span className='left' onClick={() => slider('left')}>&lt;</span>
        <div className='carousel-container' ref={carousel_container}>
          {carouselItems.map((item, index) =>
            <div key={index} className='carousel-item' ref={carousel_item}>
              {item}
            </div>
          )
          }
        </div>
        <span className='right' onClick={() => slider('right')}>&gt;</span>
      </div>
    </>
  )
}

export default App