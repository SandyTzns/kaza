import '../styles/Carousel.css'
import '../styles/Profile.css'

import { Ratings } from './Ratings'

export const Profile = ({ data }) => {
  const fullname = data.host.name.split(' ')
  const firstName = fullname[0]
  const lastName = fullname[1]

  return (
    <div>
      <div className="profile-container">
        <div className="apart-name">
          <h2 className="appart-title">{data.title}</h2>
          <p className="apart-city">{data.location}</p>
          <div className="tag-container">
            {data.tags.map((tag) => {
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
            <h2 className="tenant-name">
              <span className="first">{firstName}</span>
              <span className="second">{lastName}</span>
            </h2>
            <img
              src={data.host.picture}
              alt={data.host.name}
              className="tenant-photo"
              key={data.id}
            ></img>
          </div>
          <div className="rating">
            <Ratings data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
