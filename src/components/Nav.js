import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import '../styles/Nav.css'

export const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" className="logo"></img>
      </Link>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  )
}
