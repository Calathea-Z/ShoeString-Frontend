import '../Styles/postCard.css';
import { motion } from 'framer-motion';
import {ImHeart} from 'react-icons/im'
import {FiMapPin} from 'react-icons/fi'
import {BsFillChatSquareTextFill} from 'react-icons/bs'

function PostCard({username, userphoto, img, location, body, tags, likes}) {

  // **Add in state for comments here**

  return (
    <div className='post-individual-full'>
      <div className='post-individual-header'>
        <p>{username}</p>
      </div>
      <img className='post-photo' src={img} alt=''/>
      <div className='post-individual-middle'>
        <div>
          <a href='' className='location-button'><FiMapPin/>{' '}{location}</a>
        </div>
        <div>
          <p>Liked by <strong>{likes}</strong> fellow travelers</p>
        </div>
        <div>
          <motion.button whileHover={{scale:1.1}} transition={{duration:.8}} className='post-button'><ImHeart/></motion.button>
        </div>
      </div>
      <div className='post-individual-comment'>
        <p><span>{username}</span>{' '}{body}</p>
      </div>
      <form className='post-individual-comment'>
        <input className='text-box' type='text'>

        </input>
      </form>
    </div>
  )
}

export default PostCard
 