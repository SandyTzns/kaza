import { AboutBanner } from '../components/About-banner'
import { Collapsible } from '../components/Collapsible'

import aboutData from '../data/about.json'

export const About = () => {
  return (
    <div>
      <AboutBanner />
      <Collapsible data={aboutData} />
    </div>
  )
}
