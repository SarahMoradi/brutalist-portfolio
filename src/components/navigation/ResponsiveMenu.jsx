import {slide as Menu} from 'react-burger-menu'

const ResponsiveMenu = (props) => {
  return (
    <div>
      <Menu {...props}>
        <a className='menu-item' href='/Burgers'>
          Skills
        </a>
        <a className='menu-item' href='/Sides'>
          Experience
        </a>
        <a className='menu-item' href='/Drinks'>
          Contact
        </a>
        <a className='menu-item' href='/Drinks'>
          Education
        </a>
        <a className='menu-item' href='/Drinks'>
          Certificate
        </a>
        <div className='custom-menu-item'>
          <a className='custom-item' href='/Drinks'>
            Join us
          </a>
          <a className='custom-item' href='/Drinks'>
            Donate
          </a>
        </div>
      </Menu>
    </div>
  )
}
export default ResponsiveMenu
