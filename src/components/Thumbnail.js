import { Link } from 'react-router-dom'
import '../styles/Thumbnail.css'

// {{data}} is the json file
export const Thumbnail = ({ data }) => {
  return (
    <div className="thumbnail-grid">
      {data.map((logement) => {
        return (
          <Link
            to={'/logement/' + logement.id}
            key={logement.id}
            className="thumbnail-container"
          >
            <img
              src={logement.cover}
              alt={logement.title}
              className="thumbnail-img"
            ></img>
            <p className="thumbnail-text">{logement.title}</p>
          </Link>
        )
      })}
    </div>
  )
}

// Each thumbnail now has an url to it's own page (Profile), its image and title
