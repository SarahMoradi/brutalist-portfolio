import classes from './social-medias.module.css'
import Gmail from '../../assets/images/social-medias/gmail.svg'
import Github from '../../assets/images/social-medias/github.svg'
import Instagram from '../../assets/images/social-medias/instagram.svg'
import Linkedin from '../../assets/images/social-medias/linkedin.svg'
import Education from '../education/Education'

const SocialMedias = () => {
  const socialDetails = [
    {
      icon: Gmail,
      link: 'mailto:moradisarah2001@gmail.com',
    },
    {
      icon: Github,
      link: 'https://github.com/SarahMoradi',
    },
    {
      icon: Instagram,
      link: 'https://instagram.com/sarah_moradii?igshid=Yjk4NWM2ZWVkMw==',
    },
    {
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/sarah-moradii/',
    },
  ]
  return (
    <>
      <div className={classes.social_medias_container}>
        <div>
          <h1>Social Medias</h1>
        </div>
        <div className={classes.social_icons_container}>
          {socialDetails.map((data) => {
            return (
              <div className={classes.logo_container}>
                <a href={data.link}>
                  <img src={data.icon} width={50} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
      
    </>
  )
}
export default SocialMedias
