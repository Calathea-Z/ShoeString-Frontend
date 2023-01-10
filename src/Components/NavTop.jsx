import { motion } from 'framer-motion';
import '../Styles/navTop.css';
import {GiSteeltoeBoots} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import {HiUserCircle} from 'react-icons/hi';



const NavTop = () => {
  return (
    <nav className='full-top'>
      <div className='top-header'>
        <div className='top-header-wrapper'>
          <div className='logo'>
              <Link to='/'><span className='boots'><GiSteeltoeBoots/></span></Link>
              <h3 id='app-name'>ShoeString</h3>
          </div>
          <motion.div whileHover={{scale:1.1}} transition={{duration:.8}} className='bottom-footer-buttons'>
            <Link to='/profile'><HiUserCircle /></Link>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default NavTop
