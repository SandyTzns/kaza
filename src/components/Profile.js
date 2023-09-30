import '../styles/Carousel.css'
import '../styles/Profile.css'
import redStar from '../images/redStar.png'
import greyStar from '../images/greyStar.png'
// import appart from '../data/appart.json'

// import logement_thumbnail from '../images/logement_thumbnail.png'

export const Profile = ({ data }) => {
  return (
    <div>
      <div className="apart-name">
        <h2 className="appart-title">{data[0].title}</h2>
        <p className="apart-city">{data[0].location}</p>
        <div className="tag-container">
          {data[0].tags.map((tag) => {
            return (
              <div className="tag" key={tag}>
                {tag}
              </div>
            )
          })}
        </div>
      </div>
      <div className="tenant">
        <div className="tenant-profile">
          <h2 className="tenant-name">{data[0].host.name}</h2>
          <img
            src={data[0].host.picture}
            alt={data[0].host.name}
            className="tenant-photo"
            key={data[0].id}
          ></img>
        </div>
        <div className="rating">
          <img src={redStar} alt="red star" />
          <img src={redStar} alt="red star" />
          <img src={redStar} alt="red star" />
          <img src={greyStar} alt="grey star" />
        </div>
      </div>
    </div>
  )
}

// {
//   data.map((element, index) => {
//     return (
//       <ul className="tag-container">
//         <li>{element.tags}</li>
//       </ul>
//     )
//   })
// }
