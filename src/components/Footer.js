import logob from '../images/logob.png'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <footer>
      <img src={logob} alt="logo" className="footer-logo"></img>
      <p className="copyright-content">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
