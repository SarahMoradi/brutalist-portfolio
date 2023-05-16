import classes from './navigation.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const Navigation = () => {
  return (
    <header className={classes.main_navigation}>
      <nav>
        <h1
          className={classes.header_navigation}
        >{`Sarah Moradi, A Creative Frontend Developer/>`}</h1>
        <ul>
          <div>
            <AnchorLink href='#skills'>
              <li className={classes.skills_menu_option}>Skills</li>
            </AnchorLink>
            <AnchorLink href='#experience'>
              <li className={classes.exprinece_menu_option}>Exprience</li>
            </AnchorLink>
            <AnchorLink href='#contact'>
              <li className={classes.contact_menu_option}>Contact</li>
            </AnchorLink>
            <AnchorLink href='#education'>
              <li className={classes.education_menu_option}>Education</li>
            </AnchorLink>
            <AnchorLink href='#certificates'>
              <li className={classes.certificates_menu_option}>Certificates</li>
            </AnchorLink>
          </div>
          <div>
            <li className={classes.joinus_menu_option}>Join us</li>
            <li className={classes.donate_menu_option}>Donate</li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
export default Navigation
