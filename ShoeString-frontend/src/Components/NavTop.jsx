import { motion } from 'framer-motion';
import '../Styles/navTop.css';
import {VscSettingsGear} from 'react-icons/vsc';
import {GiSteeltoeBoots} from 'react-icons/gi';



const NavTop = () => {
  return (
    <nav className='full-top'>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      whileHover={{scale:1.2}}
      transition={{duration:1.2}}
      className='nav-comp'>
        <a href='#'><span><GiSteeltoeBoots/></span></a>
      </motion.div>
      <motion.div whileHover={{scale:1.1}} transition={{duration:.8}}  className='nav-comp'>
        <a href='#settings'><VscSettingsGear/></a>
      </motion.div>
    </nav>
  )
}

export default NavTop
