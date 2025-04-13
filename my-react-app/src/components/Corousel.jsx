import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "./Corousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const  Corousel = () => {
  return (
    <div style={{marginTop:"72px"}}>
       <div className="carousel-container">
        <Carousel 
          autoPlay 
          interval={1000} 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false} 
          showArrows={true} 
          className="carousel"
        >
          <div>
            <img src="./i1.jpg" alt="Food Donation 1" />
          </div>
          <div>
            <img src="./i2.jpg" alt="Food Donation 2" />
          </div>
          <div>
            <img src="./i3.jpg" alt="Food Donation 3" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
export default Corousel;