import React, {Fragment} from 'react'
import Teaser from '../../components/teaser/Teaser'
import Experiences from '../../components/experiences/Experiences'
import Skills from '../../components/skills/Skills'

const Home = () => {
  return (
    <Fragment>
      <Teaser />
      <Skills />
      <Experiences />
    </Fragment>
  )
}
export default Home
