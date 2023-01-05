import '../Styles/postIndividual.css';
import { motion } from 'framer-motion';
import {ImHeart} from 'react-icons/im'
import {FiMapPin} from 'react-icons/fi'
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';



function PostCard({_id, username, userphoto, img, location, tags, comments, likes, body}) {

  // **Add in state for comments here**

  return (
    <div className='post-individual-full'>

      <div className='post-individual-header'>
        <p>{username}</p>

{/* ------This link will eventually lead to a specific users profile / history */}
        <Link to='profile/:id'>
          <motion.img whileHover={{scale:1.3}} transition={{duration:.8}} className='profile-photo' src={userphoto} alt={username}/>
        </Link>
      </div>

      <div className='post-body'>
        <img className='post-photo' src={img} alt='Photo of location'/>
       </div> 
        <div className='post-individual-middle'>
            <div>
              <a href='#locationtag' className='location-button'><FiMapPin/>{' '}{location}</a>
            </div>
            <div>
              <motion.button whileHover={{scale:1.1}} transition={{duration:.8}} className='post-button'><ImHeart/></motion.button>
            </div>
        </div>
        <div className='post-individual-likes'>
            <p>Liked by <span>{likes}</span> fellow travelers</p>
        </div>
        <div className='post-individual-comment'>
        <p><span>{username}</span>{' '}{body}</p>
        </div>
        <div className='post-individual-comment'>
        <p>{tags}</p>
        </div>

        {/* This is where we would set the state for comments if we get to that point */}
        <form className='post-comment-add' >
          <div className='post-icon'><BsFillChatSquareTextFill/></div>
          <input type='text' placeholder='Add a comment...' className = 'post-individual-comment' />
          <motion.button whileHover={{scale:1.1}} transition={{duration:.8}} className='post-button'>Post</motion.button>   
        </form>
    </div>
  )
}

export default PostCard
 