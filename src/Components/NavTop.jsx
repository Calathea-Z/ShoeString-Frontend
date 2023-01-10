import { motion } from 'framer-motion';
import '../Styles/navTop.css';
import {VscSettingsGear} from 'react-icons/vsc';
import {GiSteeltoeBoots} from 'react-icons/gi';
import { Link } from 'react-router-dom';



const NavTop = () => {
  return (
    <nav className='full-top'>
      <div className='top-header'>
        <div className='top-header-wrapper'>
          <div className='logo'>
              <Link to='/'><span className='boots'><GiSteeltoeBoots/></span></Link>
              <h3 id='app-name'>ShoeString</h3>
          </div>
          <div>
            <button className='text-button-logout'>Log Out</button>
          </div>
          <div className='top-header-buttons'>
            <button className='primary-button'>Log in</button>
            <button className='text-button'>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavTop
