import React from 'react'
import './Home.css'
import one from '../Images/one.jpg'
import two from '../Images/two.jpg'
import three from '../Images/three.jpg'
import Carousel from 'react-bootstrap/Carousel';
export const Home = () => {
 

  return (
    <div className='h' >
      


    <Carousel>
      <Carousel.Item>
        <img
          className="image d-block "
          src={one}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='t'>
          <h3>Online Registration</h3>
          <p>Register and Explore</p>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image d-block "
          src={two}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className='t'>
          <h3>Financial Support</h3>
          <p>Reach us here ww will Reach you out there</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" image d-block"
          src={three}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className='t'>
          <h3>Girevance Redressal</h3>
          <p>
            here! to help you
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    </div>
  )
}
