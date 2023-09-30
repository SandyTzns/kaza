import about_banner from '../images/about_banner.jpg'
import '../styles/AboutBanner.css'

export const AboutBanner = () => {
  return (
    <div className="container">
      <img src={about_banner} alt="banner beach and rocks" className='about-img'></img>
    </div>
  )
}
