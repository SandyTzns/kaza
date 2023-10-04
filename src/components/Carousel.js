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

      <span key={data[0].id} className="indicator">
        {slide + 1} / {data[0].pictures.length}
      </span>
    </div>
  )
}

//  classname={data[0]'pictures.length < 2? "arrow arrow-forward hidden" : "arrow arrow-forward"}

//  classname={data[0]'pictures.length < 2? "indicator hidden" : "indicator arrow-forward"}
// }
