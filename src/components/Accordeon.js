import { useState } from 'react'
import '../styles/Collapsible.css'
import arrow_down from '../images/arrow_down.png'
import arrow_up from '../images/arrow_up.png'

export const Accordeon = ({ data }) => {
  console.log(data)
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <div className="item" key={i}>
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
            <p className="content-text">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ;<div dangerouslySetInnerHTML={theObj} />
