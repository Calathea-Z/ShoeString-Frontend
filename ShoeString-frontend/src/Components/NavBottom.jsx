import { motion } from 'framer-motion';
import '../Styles/navBottom.css'
import {GiSteeltoeBoots} from 'react-icons/gi';
import {FaPencilAlt} from 'react-icons/fa';
import {HiUserCircle} from 'react-icons/hi';

function NavBottom() {
  return (
    <motion.nav
    initial={{
        x: -400, 
        opacity: 1,
        }}
      transition={{ duration: 1.0}}
      whileInView={{
        x: 0,
        opacity: 1
        }}
     className='full-bottom'>
      <div className='nav-comp'>
        <a href='#'><GiSteeltoeBoots /></a>
      </div>
      <div className='nav-comp'>
        <a href='#post'><FaPencilAlt /></a>
      </div>
      <div className='nav-comp'>
        <a href='#profile'><HiUserCircle /></a>
      </div>
    </motion.nav>
  )
}

export default NavBottom
