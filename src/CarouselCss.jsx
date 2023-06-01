import React from 'react'

export default function CarouselCss({ carouselItems }) {
     return (
          <div>
               <h3>With CSS</h3>
               <div className='carousel-container'>
                    {carouselItems.map((element, index) =>
                         <div key={index} className='carousel-item'>
                              {element}
                         </div>
                    )
                    }
               </div>
          </div>
     )
}
