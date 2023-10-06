import { useParams } from 'react-router-dom'
import { Carousel } from '../components/Carousel'
import { Profile } from '../components/Profile'
import { Collapsible } from '../components/Collapsible'
import '../styles/Apartment.css'
import AppartList from '../data/appart.json'

export const Apartment = () => {
  const { logementId } = useParams()
  const logementData = AppartList.find((appart) => appart.id === logementId)
  return (
    <div>
      <Carousel data={logementData} />
      <Profile data={logementData} />
      <div className="aptCollapse">
        <Collapsible title="Description" content={logementData.description} />
        <Collapsible title="Equipement" content={logementData.equipments} />
      </div>
    </div>
  )
}
