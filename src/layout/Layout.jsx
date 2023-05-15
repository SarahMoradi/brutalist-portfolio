import Navigation from '../components/navigation/Navigation'

const Layout = ({children}) => {
  return (
    <div style={{backgroundColor: '#fff'}}>
      <Navigation />
      {children}
    </div>
  )
}
export default Layout
