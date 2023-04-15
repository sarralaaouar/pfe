import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import s1 from "../../assests/s1.png"



function Slider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
 
    return (
    <div>
        <h1>Quand La Magie Prend Vie</h1>
      <Carousel responsive={responsive}>
        <div>
          <img src={s1} alt=''/>
        </div>  
      </Carousel>

    </div>

    
  )
}

export default Slider
