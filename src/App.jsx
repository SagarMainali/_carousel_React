import React from 'react'
import './style.css'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";


const App = () => {
  let index, carouselItems = []
  for (index = 0; index < 20; index++) {
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
  return (
    <div
      className='carousel-container'
    // responsive={responsive}
    // swipeable={true}
    // containerClass='carousel-container'
    >
      {carouselItems.map((element, index) =>
        <div key={index} className='carousel-item'>
          {element}
        </div>
      )
      }
    </div>
  )
}

export default App
