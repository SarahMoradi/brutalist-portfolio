import React, {Fragment} from 'react'
import classes from './homepage.module.css'
import Teaser from '../../components/teaser/Teaser'
import Experiences from '../../components/experiences/Experiences'
import Skills from '../../components/skills/Skills'
import SocialMedias from '../../components/social-media/SocialMedias'
import Education from '../../components/education/Education'
import Certificates from '../../components/certificates/Certificates'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <Fragment>
      <Teaser />
      <Skills />
      {/* <Experiences /> */}
      <div className={classes.divided_section}>
        {/* <SocialMedias /> */}
        {/* <Education /> */}
      </div>
      {/* <Certificates /> */}
      <Footer />
    </Fragment>
  )
}
export default Home
