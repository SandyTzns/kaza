import { AboutBanner } from '../components/About-banner'
import { Collapsible } from '../components/Collapsible'

import aboutData from '../data/about.json'

export const About = () => {
  return (
    <div>
      <AboutBanner />
      {aboutData.map((el) => (
        <Collapsible
          title={el.title}
          content={el.content}
          key={el.title}
        ></Collapsible>
      ))}
    </div>
  )
}
