import { Link } from 'react-router-dom'

import '../styles/NotFound.css'

export const NotFound = () => {
  return (
    <div className="nf-div">
      <h1 className="nf-number">404</h1>
      <p className="nf-text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="nf-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
