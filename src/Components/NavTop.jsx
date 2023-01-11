import '../Styles/navTop.css';
import {GiSteeltoeBoots} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import {HiUserCircle} from 'react-icons/hi';
import { motion } from 'framer-motion';


const NavTop = () => {
  return (
    <nav className='full-top'>
      <div className='top-header'>
        <div className='top-header-wrapper'>
          <motion.div whileHover={{scale:1.1}} transition={{duration:.8}} className='logo'>
            <div className='boots'>
              <Link to='/'><GiSteeltoeBoots/></Link>
            </div>
            <h3 id='app-name'>ShoeString</h3>
          </motion.div>
          <motion.div whileHover={{scale:1.1}} transition={{duration:.8}} className='profile-icon'>
            <div><HiUserCircle /></div>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default NavTop
