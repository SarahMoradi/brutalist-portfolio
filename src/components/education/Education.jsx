import classes from './education.module.css'
import logo from '../../assets/images/shariaty.png'
import institute from '../../assets/images/avaye-elm.jpg'

const Education = () => {
  return (
    <div className={classes.education_container}>
      <div>
        <h1>Education</h1>
      </div>
      <div className={classes.course_container}>
        <div>
          <img src={logo} width={50} />
        </div>
        <div>
          <h4>Shariaty Technical and vocational University</h4>
          <p>Associated degree</p>
        </div>
      </div>
      <div className={classes.course_container}>
        <div>
          <img src={logo} width={50} />
        </div>
        <div>
          <h4>Shariaty Technical and vocational University</h4>
          <p>Bachelor's degree</p>
        </div>
      </div>
      <div className={classes.course_container}>
        <div>
          <img src={institute} width={50} />
        </div>
        <div>
          <h4>Avaye Elm Language Institute</h4>
          <p>completed IELTS course by 2020</p>
        </div>
      </div>
    </div>
  )
}
export default Education
