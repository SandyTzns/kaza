import { useState } from 'react'
import '../styles/Collapsible.css'
import arrow_down from '../images/arrow_down.png'
import arrow_up from '../images/arrow_up.png'

export const Collapsible = ({ data }) => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="wrapper">
      {data.map((item, i) => (
        <div className="dropdown" key={i}>
          <div className="title" onClick={() => toggle(i)}>
            <h2>{item.title}</h2>
            <span className="arrows">
              {selected === i ? (
                <img src={arrow_up} alt="arrow up" />
              ) : (
                <img src={arrow_down} alt="arrow down" />
              )}
            </span>
          </div>
          <div className={selected === i ? 'content show' : 'content'}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
}
