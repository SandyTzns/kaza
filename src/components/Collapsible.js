import { useState } from 'react'
import '../styles/Collapsible.css'
import arrow_down from '../images/arrow_down.png'
import arrow_up from '../images/arrow_up.png'

export const Collapsible = ({ title, content }) => {
  const [active, setActive] = useState(null)

  const showContent = () => {
    setActive(!active)
  }

  return (
    <div className="dropdown">
      <button className="title" onClick={showContent}>
        <h2>{title}</h2>
        <span className="arrows">
          {active ? (
            <img src={arrow_up} alt="arrow up" />
          ) : (
            <img src={arrow_down} alt="arrow down" />
          )}
        </span>
      </button>
      <div className={active ? 'content show' : 'content'}>
        {Array.isArray(content) ? (
          content.map((item, i) => {
            return (
              <ul key={i}>
                <li>{item}</li>
              </ul>
            )
          })
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  )
}

// return (
//   <div className="wrapper">
//     {data.map((item, i) => (
//       <div className="dropdown" key={i}>
//         <div className="title" onClick={() => toggle(i)}>
//           <h2>{item.title}</h2>
//           <span className="arrows">
//             {active ? (
//               <img src={arrow_up} alt="arrow up" />
//             ) : (
//               <img src={arrow_down} alt="arrow down" />
//             )}
//           </span>
//         </div>
//         <div className={active ? 'content show' : 'content'}>
//           {item.content}
//         </div>
//       </div>
//     ))}
//   </div>
// )

// const [selected, setSelected] = useState(null)

//   const toggle = (element) => {
//     if (selected === element) {
//       return setSelected(null)
//     }
//     setSelected(element)
