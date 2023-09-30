import { HomeBanner } from '../components/Home-banner'
import { Thumbnail } from '../components/Thumbnail'

import Logements from '../data/appart.json'

export const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Thumbnail data={Logements} />
    </div>
  )
}
