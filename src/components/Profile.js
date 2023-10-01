import '../styles/Carousel.css'
import '../styles/Profile.css'
import '../styles/CollapsibleAB.css'
import { Ratings } from './Ratings'
import { CollapsibleA } from './CollapsibleA'
import { CollapsibleB } from './CollapsibleB'

// import appart from '../data/appart.json'

// import logement_thumbnail from '../images/logement_thumbnail.png'

export const Profile = ({ data }) => {
  return (
    <div>
      <div className="profile-container">
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
            <Ratings data={data} />
          </div>
        </div>
      </div>
      <div className="collapsibles">
        <CollapsibleA data={data} />
        <CollapsibleB data={data} />
      </div>
    </div>
  )
}
