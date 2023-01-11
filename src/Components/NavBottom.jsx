import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {FaPencilAlt} from 'react-icons/fa';
import Modal from './Modal'
import { useState } from 'react'

import '../Styles/navBottom.css'

const NavBottom = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='full-bottom'>
      <div className='bottom-footer'>
        <div className='bottom-footer-wrapper'>
          <motion.div whileHover={{scale:1.1}} transition={{duration:.8}} className='bottom-footer-buttons'>
            <Link to='/createpost' className='pencil'><FaPencilAlt className='pencil'/>Create A New Post</Link>
            {/* <div className='bottom-footer-wrapper'>
              <h6>Create A New Post</h6>
            </div> */}
          </motion.div>
        </div>
      </div>
      <button className='primaryBtn' onClick={() => setIsOpen(true) }>
        OpenModal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </nav>
  )
}

export default NavBottom
