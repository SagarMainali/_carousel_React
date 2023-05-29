import React, { useRef } from 'react'
import './style.css'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const App = () => {

  const carousel_container = useRef()
  const carousel_item = useRef()

  let index, carouselItems = []

  for (index = 0; index < 15; index++) {
    carouselItems.push(`Item_${index + 1}`)
  }
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  // responsive={responsive}
  // swipeable={true}
  // containerClass='carousel-container'

  function slider(direction) {

    const temp_container = carousel_container.current
    const temp_item = carousel_item.current

    let pxToScroll = direction === 'right'
      ? temp_container.scrollLeft + (temp_item.offsetWidth + 16)
      : temp_container.scrollLeft - (temp_item.offsetWidth + 16)

    temp_container.scrollTo({
      left: pxToScroll,
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
