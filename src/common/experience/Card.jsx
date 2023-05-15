import classes from './card.module.css'

const Card = ({props}) => {

  return (
    <div className={classes.cart_container}>
      {props.map((experience) => {
        return (
          <div className={classes.cart}>
            <div className={classes.cart_header_container}>
              <div className={classes.logo_container}>
                <img src={experience.image} width={100} />
              </div>
              <div>
                <div>{experience.company}</div>
                <div>{experience.date}</div>
                <div>{experience.duration}</div>
                <div>{experience.location}</div>
              </div>
            </div>
            <div className={classes.tech_container}>
              {experience.technologies.map((technology) => {
                return <div>{technology}</div>
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Card
