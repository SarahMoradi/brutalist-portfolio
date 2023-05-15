import Navigation from '../components/navigation/Navigation'
import classes from './layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={classes.layout_container}>
      <Navigation />
      {children}
    </div>
  )
}
export default Layout
