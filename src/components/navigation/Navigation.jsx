import classes from './navigation.module.css'
const Navigation = () => {
  return (
    <header className={classes.main_navigation}>
      <nav>
        <h1
          className={classes.header_navigation}
        >{`Sarah Moradi, A Creative Frontend Developer/>`}</h1>
        <ul>
          <div>
            <li className={classes.aboutus_menu_option}>About</li>
            <li className={classes.exprinece_menu_option}>Exprience</li>
            <li className={classes.resume_menu_option}>Resume</li>
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
