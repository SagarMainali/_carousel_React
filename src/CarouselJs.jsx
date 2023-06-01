import React from 'react'

export default function CarouselJs({ carouselItems, slider, carousel_container, carousel_item }) {
     return (
          <div>
               <h3>With JS(controls)</h3>
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
          </div>
     )
}