import classes from './teaser.module.css'
import profile from '../../assets/images/profile-pic.png'

const Teaser = () => {
  return (
    <div className={classes.teaser_container} id='aboutme'>
      <div className={classes.description_container}>
        <h1>About me</h1>
        <p>
          Motivated frontend developer with +2 year experience. Skilled in social relationships and
          team working. Also interested in learning daily about new technology for up surging
          performance. I try to be flexible in difficulties. In addition, I am enthusiastic to gain
          abilities and experience to perform better in my field. It is considerable to mention that
          I utilize my creativity at work. hobbies and interests that I could point to would be
          designing, graphical artworks, painting and reading books.
        </p>
      </div>
      <div className={classes.profile_container}>
        <div className={classes.profile_background_container}>
          <img src={profile} />
        </div>
        <div className={classes.greet_container}></div>
      </div>
    </div>
  )
}
export default Teaser
