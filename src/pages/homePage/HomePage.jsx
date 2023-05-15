import React, {Fragment} from 'react'
import Teaser from '../../components/teaser/Teaser'
import Experiences from '../../components/experiences/Experiences'
import Skills from '../../components/skills/Skills'
import SocialMedias from '../../components/social-media/SocialMedias'

const Home = () => {
  return (
    <Fragment>
      <Teaser />
      <Skills />
      <Experiences />
      <SocialMedias />
    </Fragment>
  )
}
export default Home
