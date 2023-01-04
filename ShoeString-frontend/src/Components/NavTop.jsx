import { motion } from 'framer-motion';
import '../Styles/navTop.css';
import {VscSettingsGear} from 'react-icons/vsc';
import {GiRopeCoil} from 'react-icons/gi';
import {HiSearch} from 'react-icons/hi';



const NavTop = () => {
  return (
    <nav className='full-top'>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      whileHover={{scale:1.2}}
      transition={{duration:1.2}}
      className='nav-comp'>
        <a href='#'><span><GiRopeCoil/></span></a>
      </motion.div>
      <div className='search-bar'>
        <div id='search-icon'>
          <HiSearch/>
        </div>
        <input type='text' placeholder="Search"/>
      </div>
      <div className='nav-comp'>
        <a href='#settings'><VscSettingsGear/></a>
      </div>
    </nav>
  )
}

export default NavTop
