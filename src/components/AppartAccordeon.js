import { useState } from 'react'
import '../styles/Collapsible.css'
import '../styles/AppartAccordeon.css'
import arrow_down from '../images/arrow_down.png'
import arrow_up from '../images/arrow_up.png'

export const AppartAccordeon = ({ data }) => {
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
        <div className="aa-container">
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>Description</h2>
              <span className="arrows">
                {selected === i ? (
                  <img src={arrow_up} alt="arrow up" />
                ) : (
                  <img src={arrow_down} alt="arrow down" />
                )}
              </span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              <p className="content-text">{item.description}</p>
            </div>
          </div>

          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>Équipement</h2>
              <span className="arrows">
                {selected === i ? (
                  <img src={arrow_up} alt="arrow up" />
                ) : (
                  <img src={arrow_down} alt="arrow down" />
                )}
              </span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {item.equipments.map((list) => {
                return (
                  <div key={list}>
                    <ul>
                      <li>{list}</li>
                    </ul>
                  </div>
                )
              })}
              <p className="content-text">{item.equipments}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ;<div dangerouslySetInnerHTML={theObj} />
