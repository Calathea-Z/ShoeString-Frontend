import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {HiSearch} from 'react-icons/hi';
import {FaPencilAlt} from 'react-icons/fa';
import {HiUserCircle} from 'react-icons/hi';

import '../Styles/navBottom.css'

const NavBottom = ({onClickProp}) => {
  return (
    <nav className='full-bottom'>
      <div className='bottom-footer'>
        <div className='bottom-footer-wrapper'>
          <motion.div whileHover={{scale:1.1}} transition={{duration:.8}} className='bottom-footer-buttons'>
            <Link to='/search'><HiSearch /></Link>
          </motion.div>
          <motion.div whileHover={{scale:1.1}} transition={{duration:.8}} className='bottom-footer-buttons'>
            <button className='pencil' onClick={() => onClickProp }><FaPencilAlt className='pencil'/><h6>Create A New Post</h6></button> 
          </motion.div>
          <motion.div whileHover={{scale:1.1}} transition={{duration:.8}} className='bottom-footer-buttons'>
            <Link to='/profile'><HiUserCircle /></Link>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default NavBottom
