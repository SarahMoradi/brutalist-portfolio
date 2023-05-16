import {Carousel} from 'react-responsive-carousel'
import classes from './certificates.module.css'
import HTML from '../../assets/images/certificates/html.png'
import CSS from '../../assets/images/certificates/css.png'
import JS from '../../assets/images/certificates/js.png'
import Fundamental from '../../assets/images/certificates/fundamental.png'
import Responsive from '../../assets/images/certificates/responsive.png'
import ReactJS from '../../assets/images/certificates/react.png'
import MetaIntroduction from '../../assets/images/certificates/introduction.jpg'

const Certificates = () => {
  const certificatesList = [
    {
      icon: HTML,
      name: 'HTML5',
    },
    {
      icon: CSS,
      name: 'CSS3',
    },
    {
      icon: JS,
      name: 'Javascript',
    },
    {
      icon: Fundamental,
      name: 'Web Fundamental',
    },
    {
      icon: Responsive,
      name: 'Responsive Web Design',
    },

    {
      icon: ReactJS,
      name: 'React + Redux',
    },
    {
      icon: MetaIntroduction,
      name: 'Meta Introduction',
    },
  ]
  return (
    <div className={classes.certificates_container} id='certificates'>
      <div>
        <h1>Certificates</h1>
      </div>
      <div className={classes.image_container}>
        <div className={classes.shape_container}></div>
        <Carousel>
          {certificatesList.map((certificate) => {
            return (
              <div style={{border: '3px solid black'}}>
                <img src={certificate.icon} />
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}
export default Certificates
