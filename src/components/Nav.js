import { NavLink } from 'react-router-dom'
import logo from '../images/logo.jpg'
import '../styles/Nav.css'

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/kaza">
        <img src={logo} alt="logo" className="logo"></img>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/kaza" className="link">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link">
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
