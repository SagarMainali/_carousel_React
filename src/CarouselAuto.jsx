import React, { useEffect } from 'react'

export default function CarouselAuto({ carouselItems, carousel_container, carousel_item }) {

     const container = carousel_container.current
     const scroll_position = container.scrollLeft
     const pxToScroll_fixed = carousel_item.current.offsetWidth + 16

     useEffect(() => {
          setTimeout(() => {

               let pxToScroll_dynamic

               if (scroll_position % pxToScroll_fixed !== 0) {
                    const times = parseInt(scroll_position / pxToScroll_fixed) + 1
                    if ((scroll_position + container.offsetWidth + 5) >= container.scrollWidth) {
                         pxToScroll_dynamic = 0
                    } else {
                         pxToScroll_dynamic = scroll_position + ((pxToScroll_fixed * times) - scroll_position)
                    }

               }

               else {
                    scroll_position + pxToScroll_fixed
               }

               container.scrollTo({
                    left: pxToScroll_dynamic,
                    behavior: 'smooth'
               })
          }, 2000)

     }, [])

     return (
          <div>
               <h3>With JS(auto)</h3>
               <div className='carousel-container' ref={carousel_container}>
                    {carouselItems.map((item, index) =>
                         <div key={index} className='carousel-item-auto' ref={carousel_item}>
                              {item}
                         </div>
                    )
                    }
               </div>
          </div>
     )
}
