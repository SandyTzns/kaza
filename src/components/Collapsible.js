// import { useState } from 'react'
import '../styles/Collapsible.css'
// import arrow_down from '../images/arrow_down.png'
import arrow_up from '../images/arrow_up.png'

export const Collapsible = ({ title, content }) => {
  // const [active, setActive] = useState(false)

  const handleToggle = (e) => {
    console.log(e)
  }

  return (
    <div className="dropdown">
      <button className="title" onClick={handleToggle}>
        <h2>{title}</h2>
        <span className="arrows">
          <img src={arrow_up} alt="arrow up" />
        </span>
      </button>
      <div className="content">
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
//             {selected ? (
//               <img src={arrow_up} alt="arrow up" />
//             ) : (
//               <img src={arrow_down} alt="arrow down" />
//             )}
//           </span>
//         </div>
//         <div className={selected ? 'content show' : 'content'}>
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
