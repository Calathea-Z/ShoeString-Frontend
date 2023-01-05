import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
        <Link to='/search'><HiSearch /></Link>
      </motion.div>
      <motion.div whileHover={{scale:1.1}} transition={{duration:.8}}  className='nav-comp'>
        <Link to='/createPost'><FaPencilAlt /></Link>
      </motion.div>
      <motion.div whileHover={{scale:1.1}} transition={{duration:.8}} className='nav-comp'>
        <Link to='/profile'><HiUserCircle /></Link>
      </motion.div>
    </motion.nav>
  )
}

export default NavBottom
