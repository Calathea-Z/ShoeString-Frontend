import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {FaPencilAlt} from 'react-icons/fa';
import CreatePost from './CreatePost'
import { useState } from 'react'

import '../Styles/navBottom.css'

const NavBottom = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='full-bottom'>
      <div className='bottom-footer'>
      <button className='primary-button' onClick={() => setIsOpen(true)}>
      <FaPencilAlt/>{" "}Create A New Post
      </button>
      </div>
      {isOpen && <CreatePost setIsOpen={setIsOpen} />}
    </nav>
  )
}

export default NavBottom
