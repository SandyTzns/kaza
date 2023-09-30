import { useState } from 'react'
import '../styles/Carousel.css'
import arrow_back from '../images/arrow_back.png'
import arrow_forward from '../images/arrow_forward.png'

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data[0].pictures.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data[0].pictures.length - 1 : slide - 1)
  }

  return (
    <div className="carousel">
      <img
        src={arrow_back}
        alt="arrow back"
        onClick={prevSlide}
        className="arrow arrow-back"
      />

      {data[0].pictures.map((pic, idx) => {
        console.log(idx)
        return (
          <img
            src={pic}
            alt={pic}
            key={idx}
            className={slide === idx ? 'slide' : 'slide slide-hidden'}
          />
        )
      })}

      <img
        src={arrow_forward}
        alt="arrow forward"
        onClick={nextSlide}
        className="arrow arrow-forward"
      />

      {data[0].pictures.map((_, idx) => {
        return (
          <span key={idx} className="indicator">
            {idx}/{idx.length}
          </span>
        )
      })}
    </div>
  )
}

/* <img src={appart} alt="interior design" "></img> */

//  ;<img
//    src={data[0].cover}
//    alt={data[0].title}
//    key={data[0].id}
//    className="slide"
//    // className={slide === data[0].id ? 'slide' : 'slide slide-hidden'}
//  />
