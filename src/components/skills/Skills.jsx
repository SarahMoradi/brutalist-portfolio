import classes from './skills.module.css'
import {logos} from './data'

const Skills = () => {
  return (
    <div className={classes.skills_container} id='skills'>
      <div>
        <h1>Skills</h1>
      </div>
      <div className={classes.skill_carts_container}>
        {logos.map((logo) => {
          return (
            <div className={classes.skill_cart}>
              <img src={logo.image} width={50} height={60}/>
              <h5>{logo.name}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Skills
