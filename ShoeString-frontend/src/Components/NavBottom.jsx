import { motion } from 'framer-motion';
import '../Styles/navBottom.css'
import {HiSearch} from 'react-icons/hi';
import {FaPencilAlt} from 'react-icons/fa';
import {HiUserCircle} from 'react-icons/hi';

function NavBottom() {
  return (
    <motion.nav
    initial={{
        x: -200, 
        opacity: 1,
        }}
      transition={{ duration: .09}}
      whileInView={{
        x: 0,
        opacity: 1
        }}
     className='full-bottom'>
      <motion.div whileHover={{scale:1.1}} transition={{duration:.8}} className='nav-comp'>
        <a href='#'><HiSearch /></a>
      </motion.div>
      <motion.div whileHover={{scale:1.1}} transition={{duration:.8}}  className='nav-comp'>
        <a href='#post'><FaPencilAlt /></a>
      </motion.div>
      <motion.div whileHover={{scale:1.1}} transition={{duration:.8}} className='nav-comp'>
        <a href='#profile'><HiUserCircle /></a>
      </motion.div>
    </motion.nav>
  )
}

export default NavBottom
