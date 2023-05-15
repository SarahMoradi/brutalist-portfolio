import React, {Fragment} from 'react'
import Teaser from '../../components/teaser/Teaser'
import Experiences from '../../components/experiences/Experiences'
import Skills from '../../components/skills/Skills'
import SocialMedias from '../../components/social-media/SocialMedias'
import Education from '../../components/education/Education'
import Certificates from '../../components/certificates/Certificates'

const Home = () => {
  return (
    <Fragment>
      <Teaser />
      <Skills />
      <Experiences />
      <div style={{display: 'flex'}}>
        <SocialMedias />
        <Education />
      </div>
      <Certificates />
    </Fragment>
  )
}
export default Home
