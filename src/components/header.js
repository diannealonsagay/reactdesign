import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
//import logo from '../images/logo-designcode.svg' <-images need to be imported
//<Link to="/"><img src={logo} width="30" /></Link> <-declaration if importing using above

/* the one below is a stateless component. It only passes the props it doesnt listen to any events happening inside the page
const Header = ({ siteTitle }) => (
  <div className="Header" >
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)*/ 

// below is a component with states that listen to different events. the above stuff is placed under
class Header extends React.Component {
  constructor (props) {
      super(props)
      //start initial state below
      this.state = {
        hasScrolled: false //has the user scrolled or not?
      }

  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset //gives date where user has scrolled - the position

    if (scrollTop > 50){ //if the user has scrolled more than 50 then set a new state
      this.setState({ hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false})
    }
  }
  render() {
    return (
      //code directly below asks if the user has scrolled, if yes then give the classname of header and headerscrolled, if not, just use header
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'} >
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
    </div>
    )
  }
}

export default Header
