import logo from '../assets/logo.png'
import './nav-bar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <a>
            <img src={logo} alt="logo" className='logo'/>
        </a>
        <ul className='navLinks'>
            <li>ABOUT</li>
            <li>FEATURES</li>
            <li>DIRECTIONS</li>
            <li>TEACHERS</li>
            <li>FAQ</li>
        </ul>
        <button className='navbarBtn'>JOIN US</button>
    </nav>
  )
}

export default Navbar