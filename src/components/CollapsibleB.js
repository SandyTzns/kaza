import { useState } from 'react'
import arrow_down from '../images/arrow_down.png'
import arrow_up from '../images/arrow_up.png'

export const CollapsibleB = ({ data }) => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="collapsibles-wrapper">
      {data.map((item, i) => (
        <div className="collapsibles-dropdown" key={i}>
          <div className="collapsibles-title" onClick={() => toggle(i)}>
            <h2>Équipements</h2>
            <span className="collapsibles-arrows">
              {selected === i ? (
                <img src={arrow_up} alt="collapsibles-arrow up" />
              ) : (
                <img src={arrow_down} alt="collapsibles-arrow down" />
              )}
            </span>
          </div>
          <div
            className={
              selected === i
                ? 'collapsibles-content show'
                : 'collapsibles-content'
            }
          >
            {item.equipments.map((list) => {
              return (
                <span className="list " key={list}>
                  {list}
                </span>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
