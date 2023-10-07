import { NavLink } from 'react-router-dom'
import logo from '../images/logo.jpg'
import '../styles/Nav.css'

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo"></img>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/" className="link">
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
