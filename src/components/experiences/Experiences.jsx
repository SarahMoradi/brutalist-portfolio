import Card from '../../common/experience/Card'
import {experiences} from './data'
import classes from './experience.module.css'

const Experiences = () => {
  return (
    <div className={classes.experience_container}>
      <div>
        <h1>Experiences</h1>
      </div>
      <Card props={experiences} />
    </div>
  )
}
export default Experiences
