import { useState } from 'react'
import '../styles/Carousel.css'
import arrow_back from '../images/arrow_back.png'
import arrow_forward from '../images/arrow_forward.png'

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data.pictures.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.pictures.length - 1 : slide - 1)
  }

  //  classname={data.pictures.length < 2? "arrow arrow-back slide-hidden" : "arrow arrow-back"}

  return (
    <div className="carousel">
      <img
        src={arrow_back}
        alt="arrow back"
        onClick={prevSlide}
        className={
          data.pictures.length < 2
            ? 'arrow arrow-back slide-hidden'
            : 'arrow arrow-back'
        }
      />

      {data.pictures.map((pic, idx) => {
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
        className={
          data.pictures.length < 2
            ? 'arrow arrow-forward slide-hidden'
            : 'arrow arrow-forward'
        }
      />

      <span
        key={data.id}
        className={
          data.pictures.length < 2 ? 'indicator slide-hidden' : 'indicator'
        }
      >
        {slide + 1} / {data.pictures.length}
      </span>
    </div>
  )
}

//  classname={data.pictures.length < 2? "arrow arrow-forward slide-hidden" : "arrow arrow-forward"}

//  classname={data.pictures.length < 2? "indicator slide-hidden" : "indicator arrow-forward"}
// }
