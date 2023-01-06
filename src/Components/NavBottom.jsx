import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {HiSearch} from 'react-icons/hi';
import {FaPencilAlt} from 'react-icons/fa';
import {HiUserCircle} from 'react-icons/hi';
import '../Styles/navBottom.css'

function NavBottom() {
  return (
    <nav
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
    </nav>
  )
}

export default NavBottom
