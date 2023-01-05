import { motion } from 'framer-motion';
import '../Styles/navTop.css';
import {VscSettingsGear} from 'react-icons/vsc';
import {GiSteeltoeBoots} from 'react-icons/gi';
import { Link } from 'react-router-dom';



const NavTop = () => {
  return (
    <nav className='full-top'>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      whileHover={{scale:1.4}}
      transition={{duration:1.8}}
      className='nav-comp'>
        <Link to='/'><span><GiSteeltoeBoots/></span></Link>
      </motion.div>
      <motion.div whileHover={{scale:1.1}} transition={{duration:.8}}  className='nav-comp'>
        <Link to='/settings'><VscSettingsGear/></Link>
      </motion.div>
    </nav>
  )
}

export default NavTop
