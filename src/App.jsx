import React from 'react'
import './style.css'

const App = () => {
  let index, carouselItems = []
  for (index = 0; index < 20; index++) {
    carouselItems.push(`Item_${index + 1}`)
  }
  return (
    <div className='carousel-container'>
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
