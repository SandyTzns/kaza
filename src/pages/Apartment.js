import { useParams } from 'react-router-dom'
import { Carousel } from '../components/Carousel'
import { Profile } from '../components/Profile'
import { AppartAccordeon } from '../components/AppartAccordeon'

// J'importe le fichier json
import AppartList from '../data/appart.json'

export const Apartment = () => {
  // Quand on clique sur Thumbnail ça ouvre la page Apartment avec dans l'URL l'id de l'appartement
  // useParams sert à récupérer cet id donc ici logementId contient l'id de l'url
  const { logementId } = useParams()

  // logementdata c'est les appartement filtré par leur ID et ici on recherche un match entre l'id de l'URL et l'id de la liste d'appartement
  const logementData = AppartList.filter((appart) => appart.id === logementId)
  return (
    <div>
      <Carousel data={logementData} />
      <Profile data={logementData} />
      <AppartAccordeon data={logementData} />
    </div>
  )
}

// J'envoie le fichier json dans son intégralité au composant Carousel
// <Carousel data={Appartlist}
